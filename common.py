"""
common.py
=========
Shared constants and helper functions used by all 4 feature scripts.
Keeping these in one place means Feature 1's encoding logic can't drift out
of sync with Feature 2's (which reuses Feature 1's trained model).
"""

import pandas as pd

# Columns known BEFORE a post goes live -- safe to use as model inputs
CATEGORICAL_COLS = ["Platform", "Content_Type", "Category", "Day_of_Week",
                     "Sentiment", "Influencer_Tier"]
NUMERIC_COLS = ["Follower_Count", "Hour_of_Day", "Hashtag_Count", "Content_Length"]
BOOL_COLS = ["Has_Media", "Is_Verified"]

# Columns that are OUTCOMES of a post (used only to build the target / for
# Features 3 & 4's historical stats -- NEVER as model input features, since
# that would be data leakage: the target is literally derived from these)
OUTCOME_COLS = ["Likes", "Comments", "Shares", "Saves", "Views"]

MIN_SAMPLES = 5  # minimum historical posts required before trusting a group average


def build_target(df: pd.DataFrame) -> pd.DataFrame:
    """
    Engagement_Rate is derived from (Likes + Comments + Shares) / Follower_Count.
    We bin it into three GLOBAL tertiles (not per-platform) so labels reflect
    real differences between platforms (e.g. TikTok genuinely performing
    better), rather than forcing every platform to have ~33% "High" posts.
    """
    q33, q66 = df["Engagement_Rate"].quantile([0.33, 0.66])

    def label(x):
        if x <= q33:
            return "Low"
        elif x <= q66:
            return "Medium"
        else:
            return "High"

    df = df.copy()
    df["Engagement_Level"] = df["Engagement_Rate"].apply(label)
    return df


def build_features(df: pd.DataFrame) -> pd.DataFrame:
    """One-hot encode categoricals for TRAINING (safe with many rows)."""
    feature_cols = CATEGORICAL_COLS + NUMERIC_COLS + BOOL_COLS
    features = df[feature_cols].copy()
    # drop_first avoids the redundant "dummy variable trap" column
    return pd.get_dummies(features, columns=CATEGORICAL_COLS, drop_first=True)


def encode_single_post(post: dict, all_columns: list) -> pd.DataFrame:
    """
    Manually one-hot encode a SINGLE post dict against the full training
    column set.

    IMPORTANT: pd.get_dummies() on a one-row DataFrame is unsafe here. With
    only one row, get_dummies only sees one category value per column, and
    drop_first=True will drop it entirely (nothing else to compare it to) --
    silently producing a row with ALL platform/category/etc columns set to 0,
    no matter what was actually passed in. That would make every platform or
    category "look the same" to the model. Building the row manually avoids
    that trap.
    """
    row = {col: 0 for col in all_columns}
    for key, val in post.items():
        if key in CATEGORICAL_COLS:
            dummy_col = f"{key}_{val}"
            if dummy_col in row:
                row[dummy_col] = 1
            # if this value is the "dropped" reference category (e.g.
            # Platform_Facebook, dropped by drop_first during training),
            # all its dummy columns correctly stay 0 -- expected, not a bug.
        else:
            row[key] = val
    return pd.DataFrame([row])[all_columns]