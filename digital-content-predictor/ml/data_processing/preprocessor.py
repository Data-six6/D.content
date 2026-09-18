"""Data preprocessing pipeline definitions using scikit-learn ColumnTransformer."""

from typing import List, Optional
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder, StandardScaler

from ml.config import CATEGORICAL_FEATURES, NUMERICAL_FEATURES


def build_column_transformer(
    scale_numeric: bool = True,
    categorical_cols: Optional[List[str]] = None,
    numerical_cols: Optional[List[str]] = None,
) -> ColumnTransformer:
    """Build a standard scikit-learn ColumnTransformer for preprocessing.
    
    Uses OneHotEncoder(handle_unknown='ignore') for categoricals, and either
    StandardScaler() or passthrough for numericals.
    
    Args:
        scale_numeric: If True, applies StandardScaler to numerical columns (for Logistic Regression).
                       If False, passes numerical columns through unchanged (for Tree models).
        categorical_cols: List of categorical feature names.
        numerical_cols: List of numerical feature names.
        
    Returns:
        ColumnTransformer: Preprocessing transformer ready for an sklearn Pipeline.
    """
    cats = categorical_cols or CATEGORICAL_FEATURES
    nums = numerical_cols or NUMERICAL_FEATURES

    transformers = [
        ("cat", OneHotEncoder(handle_unknown="ignore"), cats),
    ]

    if scale_numeric:
        transformers.append(("num", StandardScaler(), nums))
    else:
        transformers.append(("num", "passthrough", nums))

    return ColumnTransformer(transformers=transformers)


def get_feature_names(transformer: ColumnTransformer) -> List[str]:
    """Retrieve generated feature names after OneHotEncoder and scaling transformations.
    
    Args:
        transformer: Fitted ColumnTransformer instance.
        
    Returns:
        List[str]: Transformed feature column names.
    """
    if hasattr(transformer, "get_feature_names_out"):
        return list(transformer.get_feature_names_out())
    return []
