"""Feature engineering and target creation module."""

import pandas as pd
import numpy as np
from typing import Tuple, List, Optional

from ml.config import (
    FEATURE_COLUMNS,
    CATEGORICAL_FEATURES,
    NUMERICAL_FEATURES,
    LEAKAGE_COLUMNS,
    TARGET_COLUMN,
)


def create_engagement_level_target(
    df: pd.DataFrame,
    quantiles: Tuple[float, float] = (0.3333, 0.6667),
) -> pd.DataFrame:
    """Create engagement_level target (Low, Medium, High) using empirical quantile thresholds.
    
    Thresholds:
      - Low: Engagement_Rate <= 33.33rd percentile (~1.89%)
      - Medium: 33.33rd < Engagement_Rate <= 66.67th percentile (~4.84%)
      - High: Engagement_Rate > 66.67th percentile
      
    Args:
        df: DataFrame containing 'Engagement_Rate'.
        quantiles: Tuple of lower and upper quantile thresholds.
        
    Returns:
        pd.DataFrame with added 'engagement_level' column.
    """
    df_out = df.copy()
    if "Engagement_Rate" not in df_out.columns:
        raise ValueError("Cannot create target: 'Engagement_Rate' column missing.")

    q_low = df_out["Engagement_Rate"].quantile(quantiles[0])
    q_high = df_out["Engagement_Rate"].quantile(quantiles[1])

    conditions = [
        df_out["Engagement_Rate"] <= q_low,
        (df_out["Engagement_Rate"] > q_low) & (df_out["Engagement_Rate"] <= q_high),
        df_out["Engagement_Rate"] > q_high,
    ]
    choices = ["Low", "Medium", "High"]

    df_out[TARGET_COLUMN] = np.select(conditions, choices, default="Medium")
    return df_out


def prepare_model_ready_dataset(
    cleaned_df: pd.DataFrame,
    include_engagement_rate: bool = True,
) -> pd.DataFrame:
    """Transform cleaned dataset into the model-ready dataset.
    
    1. Extracts 'Month' from Timestamp if Timestamp is present.
    2. Derives engagement_level target.
    3. Retains only pre-publication features + target.
    4. Excludes post-publication leakage columns (Likes, Comments, Shares, Views, etc.).
    
    Args:
        cleaned_df: Validated cleaned dataset DataFrame.
        include_engagement_rate: If True, keeps Engagement_Rate for reference/analysis.
        
    Returns:
        pd.DataFrame: Model-ready dataset.
    """
    df = cleaned_df.copy()

    # Extract Month if available and not present
    if "Month" not in df.columns:
        if "Timestamp" in df.columns:
            df["Month"] = pd.to_datetime(df["Timestamp"]).dt.month
        else:
            df["Month"] = 6  # Default fallback

    # Generate target if not present
    if TARGET_COLUMN not in df.columns:
        df = create_engagement_level_target(df)

    cols_to_keep = list(FEATURE_COLUMNS) + [TARGET_COLUMN]
    if include_engagement_rate and "Engagement_Rate" in df.columns:
        cols_to_keep.append("Engagement_Rate")

    return df[cols_to_keep].copy()
