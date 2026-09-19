"""Dataset loading and validation utility functions."""

import os
from pathlib import Path
from typing import Dict, Optional, Tuple, Union, Any
import pandas as pd

from ml.config import (
    CLEANED_DATA_PATH,
    MODEL_READY_DATA_PATH,
    X_TRAIN_PATH,
    X_TEST_PATH,
    Y_TRAIN_PATH,
    Y_TEST_PATH,
    SUPPORTED_PLATFORMS,
    FEATURE_COLUMNS,
    CATEGORICAL_FEATURES,
    NUMERICAL_FEATURES,
)


def load_cleaned_data(file_path: Optional[Union[str, Path]] = None) -> pd.DataFrame:
    """Load the validated cleaned dataset.
    
    Args:
        file_path: Path to cleaned_dataset.csv. If None, uses default config path.
        
    Returns:
        pd.DataFrame: Cleaned dataset containing raw and engagement features.
    """
    path = Path(file_path) if file_path else CLEANED_DATA_PATH
    if not path.exists():
        raise FileNotFoundError(f"Cleaned dataset not found at: {path}")
    return pd.read_csv(path)


def load_model_ready_data(file_path: Optional[Union[str, Path]] = None) -> pd.DataFrame:
    """Load the feature-engineered model-ready dataset.
    
    Args:
        file_path: Path to model_ready_dataset.csv. If None, uses default config path.
        
    Returns:
        pd.DataFrame: Dataset ready for model training with target engagement_level.
    """
    path = Path(file_path) if file_path else MODEL_READY_DATA_PATH
    if not path.exists():
        raise FileNotFoundError(f"Model-ready dataset not found at: {path}")
    return pd.read_csv(path)


def load_train_test_splits(
    data_dir: Optional[Union[str, Path]] = None,
) -> Tuple[pd.DataFrame, pd.DataFrame, pd.Series, pd.Series]:
    """Load pre-split X_train, X_test, y_train, y_test.
    
    Args:
        data_dir: Directory containing split CSVs. If None, uses default processed data dir.
        
    Returns:
        Tuple of (X_train, X_test, y_train, y_test).
    """
    x_train_p = Path(data_dir) / "X_train.csv" if data_dir else X_TRAIN_PATH
    x_test_p = Path(data_dir) / "X_test.csv" if data_dir else X_TEST_PATH
    y_train_p = Path(data_dir) / "y_train.csv" if data_dir else Y_TRAIN_PATH
    y_test_p = Path(data_dir) / "y_test.csv" if data_dir else Y_TEST_PATH

    for p in [x_train_p, x_test_p, y_train_p, y_test_p]:
        if not p.exists():
            raise FileNotFoundError(f"Split file missing: {p}")

    X_train = pd.read_csv(x_train_p)
    X_test = pd.read_csv(x_test_p)
    y_train = pd.read_csv(y_train_p).squeeze()
    y_test = pd.read_csv(y_test_p).squeeze()

    return X_train, X_test, y_train, y_test


def validate_dataset(df: pd.DataFrame) -> Dict[str, Any]:
    """Validate data integrity, completeness, and schema consistency.
    
    Args:
        df: Input DataFrame to check.
        
    Returns:
        Dict with validation metrics (null_counts, platform_distribution, row_count, is_valid).
    """
    null_counts = df.isnull().sum().to_dict()
    total_nulls = sum(null_counts.values())
    platforms = df["Platform"].value_counts().to_dict() if "Platform" in df.columns else {}
    unsupported_platforms = [p for p in platforms.keys() if p not in SUPPORTED_PLATFORMS]

    is_valid = (total_nulls == 0) and (len(unsupported_platforms) == 0)

    return {
        "is_valid": is_valid,
        "row_count": len(df),
        "column_count": len(df.columns),
        "total_nulls": total_nulls,
        "null_counts": null_counts,
        "platform_distribution": platforms,
        "unsupported_platforms": unsupported_platforms,
    }
