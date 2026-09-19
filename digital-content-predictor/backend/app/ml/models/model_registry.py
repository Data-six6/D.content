"""Persistence and artifact management for unsupervised models."""

import os
from pathlib import Path
from typing import Dict, Any, Union, Optional
import joblib
from sklearn.pipeline import Pipeline

from ml.config import (
    BEST_MODEL_PATH,
    SAVED_MODELS_DIR,
)

def save_model_pipeline(
    pipeline: Pipeline,
    file_path: Union[str, Path],
) -> Path:
    """Save a scikit-learn pipeline to disk using joblib."""
    path = Path(file_path)
    path.parent.mkdir(parents=True, exist_ok=True)
    joblib.dump(pipeline, path)
    return path


def load_model_pipeline(
    file_path: Optional[Union[str, Path]] = None,
) -> Pipeline:
    """Load a scikit-learn pipeline from disk."""
    path = Path(file_path) if file_path else BEST_MODEL_PATH
    if not path.exists():
        raise FileNotFoundError(f"Model file not found at: {path}")
    return joblib.load(path)
