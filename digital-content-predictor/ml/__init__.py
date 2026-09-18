"""Production Machine Learning Package for Digital Content Engagement and Reach Predictor."""

from ml.config import (
    SUPPORTED_PLATFORMS,
    FEATURE_COLUMNS,
    TARGET_CLASSES,
    PLATFORM_CONTENT_TYPES,
)
from ml.prediction.predictor import predict_content_plan, EngagementPredictor

__version__ = "1.0.0"
__all__ = [
    "predict_content_plan",
    "EngagementPredictor",
    "SUPPORTED_PLATFORMS",
    "FEATURE_COLUMNS",
    "TARGET_CLASSES",
    "PLATFORM_CONTENT_TYPES",
]

