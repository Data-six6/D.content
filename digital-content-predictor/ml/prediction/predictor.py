"""Engagement prediction service loading saved pipeline and generating class predictions."""

from typing import Dict, Any, List, Union, Optional
import copy
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


_shared_predictor = None
_shared_comparator = None
_shared_recommender = None


def get_ml_suite():
    """Lazily load and reuse ML service singletons across requests."""
    global _shared_predictor, _shared_comparator, _shared_recommender
    if _shared_predictor is None:
        from ml.prediction.platform_comparator import PlatformComparator
        from ml.recommendations.posting_time import PostingTimeRecommender

        _shared_predictor = EngagementPredictor()
        _shared_comparator = PlatformComparator(_shared_predictor)
        _shared_recommender = PostingTimeRecommender(_shared_predictor)
    return _shared_predictor, _shared_comparator, _shared_recommender


def predict_content_plan(input_data: Dict[str, Any]) -> Dict[str, Any]:
    """Unified API function evaluating a content plan draft across all 3 analytical capabilities:

    1. Engagement Prediction (per platform)
    2. Platform Comparison (multi-platform ranking & insights)
    3. Best Posting Time Recommendation (hourly distribution)

    Args:
        input_data (Dict[str, Any]): Dictionary containing pre-posting features:
            - Platform (str): 'TikTok', 'Instagram', or 'Facebook'
            - Content_Type (str): e.g. 'Video', 'Photo', 'Carousel', etc.
            - Category (str): e.g. 'Food', 'Fashion', 'Business', etc.
            - Day_of_Week (str): e.g. 'Friday', 'Wednesday', etc.
            - Sentiment (str): 'Positive', 'Neutral', 'Negative'
            - Influencer_Tier (str): 'Nano', 'Micro', 'Mid-tier', 'Macro'
            - Hour_of_Day (int): 0-23
            - Month (int, optional): 1-12 (derived from planned_posting_date or current calendar month)
            - Hashtag_Count (int): e.g. 4
            - Content_Length (int, optional): character length (derived from caption if omitted)
            - Follower_Count (int): e.g. 35000
            - Has_Media (bool): True for With Media, False for Text-Only
            - Is_Verified (bool): True for Verified Creator, False for Regular Creator
            - platforms (List[str], optional): specific platforms to evaluate/compare

    Returns:
        Dict[str, Any]: JSON-serializable dictionary with:
            - input: sanitized 13 pre-posting features
            - engagement_prediction: dict of {platform: {level, cluster_id, cluster_membership_confidence, ...}}
            - platform_comparison: list of platform ranking details with comparison summary
            - best_posting_time: dict containing recommended hour, time window, and hourly breakdown
    """
    predictor, comparator, recommender = get_ml_suite()
    raw = copy.deepcopy(input_data)

    # 1. Derive Month from planned_posting_date if provided (never hardcoded 6)
    if "planned_posting_date" in raw and ("Month" not in raw or raw["Month"] is None):
        raw["Month"] = parse_date_to_month(raw["planned_posting_date"])
    elif "Month" not in raw or raw["Month"] is None:
        raw["Month"] = datetime.now().month

    # 2. Derive Content_Length from caption text if provided (never hardcoded 150)
    if "caption" in raw and ("Content_Length" not in raw or raw["Content_Length"] is None):
        caption_text = str(raw.get("caption") or "").strip()
        raw["Content_Length"] = len(caption_text)
    elif "Content_Length" not in raw or raw["Content_Length"] is None:
        raw["Content_Length"] = 0

    # 3. Determine platforms to evaluate
    if "platforms" in raw and isinstance(raw["platforms"], list) and len(raw["platforms"]) > 0:
        eval_platforms = [resolve_platform(p) for p in raw["platforms"]]
    elif isinstance(raw.get("Platform"), list) and len(raw["Platform"]) > 0:
        eval_platforms = [resolve_platform(p) for p in raw["Platform"]]
    elif raw.get("Platform"):
        eval_platforms = [resolve_platform(raw["Platform"])]
    else:
        eval_platforms = list(SUPPORTED_PLATFORMS)

    if raw.get("Platform") and raw.get("Platform") in eval_platforms:
        primary_platform = raw["Platform"]
    else:
        primary_platform = eval_platforms[0]
    raw["Platform"] = primary_platform

    # 4. Sanitize base post features (strictly pre-posting features only)
    base_post = predictor._validate_and_sanitize_input(raw)

    # 5. Feature 1: Engagement predictions per platform
    engagement_prediction = {}
    for plat in eval_platforms:
        adapted_type = comparator._adapt_content_type(plat, base_post.get("Content_Type", "Video"))
        p_post = copy.deepcopy(base_post)
        p_post["Platform"] = plat
        p_post["Content_Type"] = adapted_type

        pred_res = predictor.predict(p_post)
        conf_val = round(float(pred_res["confidence"]), 4)
        engagement_prediction[plat] = {
            "level": pred_res["predicted_engagement"],
            "cluster_id": int(pred_res["cluster_id"]),
            "cluster_membership_confidence": conf_val,
            "confidence": conf_val,
            "confidence_metric": "cluster_membership_confidence",
            "probabilities": {k: round(float(v), 4) for k, v in pred_res["probabilities"].items()},
            "content_type_used": adapted_type,
            "interpretation": (
                f"Content draft aligns with cluster {pred_res['cluster_id']} "
                f"({pred_res['predicted_engagement']} historical tier) with "
                f"{round(conf_val * 100, 1)}% cluster similarity confidence."
            ),
        }

    # 6. Feature 2: Multi-Platform Comparison
    compare_platforms = eval_platforms if len(eval_platforms) > 1 else list(SUPPORTED_PLATFORMS)
    comp_res = comparator.compare(base_post, platforms=compare_platforms)
    platform_comparison = []
    for rank_idx, p_name in enumerate(comp_res["recommended_platform_ranking"]):
        p_data = comp_res["platform_predictions"][p_name]
        platform_comparison.append({
            "platform": p_name,
            "rank": int(rank_idx + 1),
            "predicted_engagement": p_data["predicted_engagement"],
            "cluster_membership_confidence": round(float(p_data["confidence"]), 4),
            "high_probability": round(float(p_data["high_probability"]), 4),
            "adapted_content_type": p_data["adapted_content_type"],
        })

    # 7. Feature 3: Best Posting Time Recommendation
    time_res = recommender.get_best_posting_times(base_post)
    best_time_slot = time_res["all_predictions"][0] if time_res.get("all_predictions") else {}
    best_hour_int = int(best_time_slot.get("hour", base_post.get("Hour_of_Day", 12)))

    best_posting_time = {
        "platform": time_res.get("platform", primary_platform),
        "day_of_week": base_post.get("Day_of_Week", "Wednesday"),
        "hour": best_hour_int,
        "recommended_peak_hour": time_res.get("recommended_peak_hour", f"{best_hour_int:02d}:00 - {best_hour_int:02d}:59"),
        "predicted_engagement": best_time_slot.get("predicted_engagement", "High"),
        "cluster_membership_confidence": round(float(best_time_slot.get("high_probability", 0.5)), 4),
        "recommendation_summary": time_res.get("recommendation_summary", ""),
        "all_predictions": time_res.get("all_predictions", []),
    }

    # 8. Clean, serialized input summary
    input_summary = {
        "Platform": base_post["Platform"],
        "Content_Type": base_post["Content_Type"],
        "Category": base_post["Category"],
        "Day_of_Week": base_post["Day_of_Week"],
        "Sentiment": base_post["Sentiment"],
        "Influencer_Tier": base_post["Influencer_Tier"],
        "Hour_of_Day": int(base_post["Hour_of_Day"]),
        "Month": int(base_post["Month"]),
        "Hashtag_Count": int(base_post["Hashtag_Count"]),
        "Content_Length": int(base_post["Content_Length"]),
        "Follower_Count": int(base_post["Follower_Count"]),
        "Has_Media": bool(base_post["Has_Media"]),
        "Is_Verified": bool(base_post["Is_Verified"]),
    }
    if "caption" in raw:
        input_summary["caption"] = str(raw["caption"])
    if "planned_posting_date" in raw:
        input_summary["planned_posting_date"] = str(raw["planned_posting_date"])
    if "platforms" in raw:
        input_summary["platforms"] = raw["platforms"]

    return {
        "status": "success",
        "input": input_summary,
        "engagement_prediction": engagement_prediction,
        "platform_comparison": platform_comparison,
        "best_platform": comp_res.get("best_platform", primary_platform),
        "comparison_summary": comp_res.get("summary_insight", ""),
        "best_posting_time": best_posting_time,
    }


def predict_ml_plan(input_data: Dict[str, Any]) -> Dict[str, Any]:
    """Clean unified wrapper combining the 3 core validated ML capabilities:
    1. Engagement Prediction (performance)
    2. Platform Comparison (platform & platform_predictions)
    3. Best Posting Time Recommendation (time)

    Calls ONLY existing ML components:
    - EngagementPredictor -> performance
    - PlatformComparator -> platform & platform_predictions
    - PostingTimeRecommender -> time

    Does NOT use, import, or call any AI content-generation or NLP modules.

    Args:
        input_data (Dict[str, Any]): Dictionary containing pre-posting features:
            - Platform (str, optional): 'TikTok', 'Instagram', 'Facebook'
            - Content_Type (str, optional): 'Video', 'Photo', 'Carousel', etc.
            - Category (str, optional): 'Food', 'Fashion', 'Business', etc.
            - Day_of_Week (str, optional): 'Friday', 'Wednesday', etc.
            - Sentiment (str, optional): 'Positive', 'Neutral', 'Negative'
            - Influencer_Tier (str, optional): 'Nano', 'Micro', 'Mid-tier', 'Macro'
            - Hour_of_Day (int, optional): 0-23
            - Month (int, optional): 1-12 (or derived from planned_posting_date)
            - Hashtag_Count (int, optional): e.g. 4
            - Content_Length (int, optional): e.g. 120 (or derived from len(caption))
            - Follower_Count (int, optional): e.g. 35000
            - Has_Media (bool, optional): True or False
            - Is_Verified (bool, optional): True or False
            - planned_posting_date (str, optional): 'YYYY-MM-DD'
            - caption (str, optional): optional caption text used only for character length

    Returns:
        Dict[str, Any]:
        {
          "performance": "...",
          "platform": "...",
          "time": "...",
          "platform_predictions": [
            {"platform": "TikTok", "prediction": "..."},
            {"platform": "Instagram", "prediction": "..."},
            {"platform": "Facebook", "prediction": "..."}
          ]
        }
    """
    predictor, comparator, recommender = get_ml_suite()
    raw = copy.deepcopy(input_data)

    # 1. Derive Month from planned_posting_date if provided
    if "planned_posting_date" in raw and ("Month" not in raw or raw["Month"] is None):
        raw["Month"] = parse_date_to_month(raw["planned_posting_date"])

    # 2. Derive Content_Length from caption text if provided
    if "caption" in raw and ("Content_Length" not in raw or raw["Content_Length"] is None):
        caption_text = str(raw.get("caption") or "").strip()
        raw["Content_Length"] = len(caption_text)

    # 3. Sanitize base post features using existing pre-posting validation
    base_post = predictor._validate_and_sanitize_input(raw)

    # 4. Multi-Platform Comparison across TikTok, Instagram, Facebook -> platform & platform_predictions
    platforms_order = ["TikTok", "Instagram", "Facebook"]
    comp_res = comparator.compare(base_post, platforms=platforms_order)
    best_platform = comp_res.get("best_platform", "TikTok")

    platform_predictions = [
        {
            "platform": p,
            "prediction": comp_res["platform_predictions"][p]["predicted_engagement"],
        }
        for p in platforms_order
    ]

    # 5. ML Engagement Prediction for the winning platform -> performance
    winning_format = comp_res["platform_predictions"][best_platform]["adapted_content_type"]
    winning_post = copy.deepcopy(base_post)
    winning_post["Platform"] = best_platform
    winning_post["Content_Type"] = winning_format
    pred_res = predictor.predict(winning_post)
    performance = pred_res["predicted_engagement"]

    # 6. ML Posting Time Recommendation -> time
    time_res = recommender.get_best_posting_times(winning_post)
    recommended_time = time_res.get("recommended_peak_hour", "12:00 - 12:59")

    # 7. Return ONLY ML results with exact target schema
    return {
        "performance": performance,
        "platform": best_platform,
        "time": recommended_time,
        "platform_predictions": platform_predictions,
    }