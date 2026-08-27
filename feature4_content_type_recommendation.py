"""
FEATURE 4 — CONTENT TYPE RECOMMENDATION
==========================================
No ML model. Uses historical Engagement_Rate grouped by Platform + Category
+ Content_Type to recommend which content type has historically performed
best (e.g. Video vs Photo vs Carousel).

Same safeguards as Feature 3: MEDIAN engagement (resists outlier posts) and
a minimum sample size (MIN_SAMPLES) before trusting a content type's number.

Requirements:
    pip install pandas

Usage:
    python feature4_content_type_recommendation.py
"""

import pandas as pd
from common import MIN_SAMPLES

DATA_PATH = "E:\\Y2-ITE\\nextgen\\Data _Engagement.csv"


def best_content_type(df: pd.DataFrame, platform: str, category: str):
    """
    Returns (best_type, ranked_dataframe).
    best_type is None if no content type in this Platform+Category combo has
    at least MIN_SAMPLES historical posts to be confident about.
    """
    sub = df[(df.Platform == platform) & (df.Category == category)]
    stats = sub.groupby("Content_Type")["Engagement_Rate"].agg(["median", "count"]).reset_index()
    reliable = stats[stats["count"] >= MIN_SAMPLES].sort_values("median", ascending=False)
    if len(reliable) == 0:
        return None, stats.sort_values("count", ascending=False)
    return reliable.iloc[0]["Content_Type"], reliable


def main():
    print("Loading data...")
    df = pd.read_csv(DATA_PATH)

    platform, category = "Instagram", "Fashion"
    print(f"\nBest content type for {platform} + {category}:")
    ctype, ranked = best_content_type(df, platform, category)
    if ctype is not None:
        print(f"  Recommended type: {ctype}")
    else:
        print("  Not enough historical data for a confident recommendation.")
    print(ranked.to_string(index=False))


if __name__ == "__main__":
    main()