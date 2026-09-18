"""Engagement prediction service loading saved pipeline and generating class predictions."""

from typing import Dict, Any, List, Union, Optional
import pandas as pd
import numpy as np
import joblib
from pathlib import Path
from sklearn.pipeline import Pipeline

from ml.models.hierarchical import InductiveHierarchicalClustering
from ml.models.kmeans import InductiveKMeans
from datetime import datetime, date

from ml.config import (
    BEST_MODEL_PATH,
    SAVED_MODELS_DIR,
    FEATURE_COLUMNS,
    SUPPORTED_PLATFORMS,
    PLATFORM_CONTENT_TYPES,
    VALID_CATEGORIES,
)
from ml.models.model_registry import load_model_pipeline


def parse_date_to_month(val: Any) -> int:
    """Derive month integer (1-12) from date string, date/datetime object, or timestamp."""
    if not val:
        return datetime.now().month
    if isinstance(val, (datetime, date)):
        return val.month
    if isinstance(val, (int, float)):
        try:
            return datetime.fromtimestamp(val).month
        except Exception:
            return datetime.now().month
    if isinstance(val, str):
        # Try common date string formats (e.g. 2026-09-20)
        clean_str = val.strip().split("T")[0].split(" ")[0]
        for fmt in ("%Y-%m-%d", "%m/%d/%Y", "%d/%m/%Y"):
            try:
                return datetime.strptime(clean_str, fmt).month
            except ValueError:
                continue
    return datetime.now().month


def resolve_platform(raw_platform: Optional[str]) -> str:
    """Safely validate platform, defaulting to Instagram."""
    return raw_platform if raw_platform in SUPPORTED_PLATFORMS else "Instagram"


def resolve_content_type(platform: str, raw_content_type: Optional[str]) -> str:
    """Safely validate content type against platform constraints."""
    allowed = PLATFORM_CONTENT_TYPES.get(platform, ["Video"])
    return raw_content_type if raw_content_type in allowed else allowed[0]


def resolve_category(raw_category: Optional[str]) -> str:
    """Safely validate category, defaulting to Entertainment."""
    return raw_category if raw_category in VALID_CATEGORIES else "Entertainment"


def apply_feature_defaults(data: Dict[str, Any]) -> Dict[str, Any]:
    """Populate default values for non-critical pre-posting metadata if omitted."""
    # 1. Derive Month from planned_posting_date if provided
    if "planned_posting_date" in data and "Month" not in data:
        data["Month"] = parse_date_to_month(data["planned_posting_date"])

    # 2. Derive Content_Length from caption text if provided
    if "caption" in data and "Content_Length" not in data:
        caption_text = str(data.get("caption") or "").strip()
        data["Content_Length"] = len(caption_text)

    # 3. Safe, domain-valid fallback defaults (NO synthetic post-event metrics)
    defaults = {
        "Day_of_Week": "Wednesday",
        "Sentiment": "Positive",
        "Influencer_Tier": "Micro",
        "Has_Media": True,
        "Is_Verified": False,
        "Hour_of_Day": 18,
        "Month": datetime.now().month,  # Dynamic current calendar month (never hardcoded 6)
        "Hashtag_Count": 5,
        "Content_Length": 0,            # 0 characters for empty caption (never hardcoded 150)
        "Follower_Count": 25000,
    }
    for key, val in defaults.items():
        data.setdefault(key, val)
    return data


class EngagementPredictor:
    """Production predictor for social media content engagement levels using Unsupervised Learning."""

    def __init__(
        self,
        model_path: Optional[str] = None,
        mapping_path: Optional[str] = None,
    ):
        """Initialize predictor by loading the trained pipeline and cluster mapping."""
        self.pipeline: Pipeline = load_model_pipeline(model_path or BEST_MODEL_PATH)
        
        default_mapping_path = Path(SAVED_MODELS_DIR) / "cluster_mapping.pkl"
        actual_mapping_path = mapping_path or default_mapping_path
        
        if Path(actual_mapping_path).exists():
            self.cluster_mapping = joblib.load(actual_mapping_path)
        else:
            # Fallback if mapping not found
            self.cluster_mapping = {2: "Low", 0: "Medium", 1: "High"}
            
        self.class_labels = ["Low", "Medium", "High"]

    def _validate_and_sanitize_input(self, payload: Dict[str, Any]) -> Dict[str, Any]:
        """Validate input payload using modular helper functions."""
        data = dict(payload)

        data["Platform"] = resolve_platform(data.get("Platform"))
        data["Content_Type"] = resolve_content_type(data["Platform"], data.get("Content_Type"))
        data["Category"] = resolve_category(data.get("Category"))

        data = apply_feature_defaults(data)

        # Ensure correct datatypes for the 13 pre-posting attributes
        data["Has_Media"] = bool(data["Has_Media"])
        data["Is_Verified"] = bool(data["Is_Verified"])
        data["Hour_of_Day"] = int(data["Hour_of_Day"])
        data["Month"] = int(data["Month"])
        data["Hashtag_Count"] = int(data["Hashtag_Count"])
        data["Content_Length"] = int(data["Content_Length"])
        data["Follower_Count"] = int(data["Follower_Count"])

        return data

    def predict(self, payload: Dict[str, Any]) -> Dict[str, Any]:
        """Generate engagement level prediction for a single post using clustering."""
        sanitized = self._validate_and_sanitize_input(payload)
        df_input = pd.DataFrame([sanitized])[FEATURE_COLUMNS]

        # Unsupervised prediction (Cluster ID)
        cluster_id = int(self.pipeline.predict(df_input)[0])
        
        # Map cluster ID to label
        predicted_label = self.cluster_mapping.get(cluster_id, "Medium")

        probabilities = {label: 0.0 for label in self.class_labels}
        probabilities[predicted_label] = 1.0
        
        # Calculate cluster-membership similarity probabilities if predict_proba is available
        if hasattr(self.pipeline, "predict_proba"):
            try:
                proba_array = self.pipeline.predict_proba(df_input)[0]
                clusterer_classes = self.pipeline.named_steps['clusterer'].classes_
                for cid, p in zip(clusterer_classes, proba_array):
                    label = self.cluster_mapping.get(int(cid), "Medium")
                    probabilities[label] = round(float(p), 4)
            except Exception:
                pass

        confidence = probabilities.get(predicted_label, 1.0)

        return {
            "prediction": predicted_label,
            "predicted_engagement": predicted_label,
            "cluster_id": cluster_id,
            "confidence": confidence,
            "confidence_metric": "cluster_membership_similarity",
            "probabilities": probabilities,
            "platform": sanitized["Platform"],
            "category": sanitized["Category"],
            "content_type": sanitized["Content_Type"],
        }

    def predict_batch(self, payloads: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """Run predictions across a batch of post scenarios."""
        return [self.predict(p) for p in payloads]