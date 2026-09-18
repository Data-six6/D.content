"""Cross-platform engagement comparison engine (Feature 2)."""

from typing import Dict, Any, List, Optional
import copy

from ml.config import (
    SUPPORTED_PLATFORMS,
    PLATFORM_CONTENT_TYPES,
    CONTENT_TYPE_CROSS_PLATFORM_MAP,
)
from ml.prediction.predictor import EngagementPredictor


class PlatformComparator:
    """Compares expected engagement performance across TikTok, Instagram, and Facebook."""

    def __init__(self, predictor: Optional[EngagementPredictor] = None):
        """Initialize with an existing or newly created EngagementPredictor."""
        self.predictor = predictor or EngagementPredictor()

    def _adapt_content_type(self, target_platform: str, original_content_type: str) -> str:
        """Map content format to a valid type on the target platform if needed."""
        valid_types = PLATFORM_CONTENT_TYPES.get(target_platform, ["Video"])
        if original_content_type in valid_types:
            return original_content_type

        fallback = CONTENT_TYPE_CROSS_PLATFORM_MAP.get(target_platform, {}).get(original_content_type)
        if fallback and fallback in valid_types:
            return fallback

        return valid_types[0]

    def compare(
        self,
        base_post: Dict[str, Any],
        platforms: Optional[List[str]] = None,
    ) -> Dict[str, Any]:
        """Run predictions for the same core content across all selected platforms."""
        target_platforms = platforms or SUPPORTED_PLATFORMS
        orig_content_type = base_post.get("Content_Type", "Video")

        results = {}
        for platform in target_platforms:
            adapted_post = copy.deepcopy(base_post)
            adapted_post["Platform"] = platform
            adapted_post["Content_Type"] = self._adapt_content_type(platform, orig_content_type)

            pred_res = self.predictor.predict(adapted_post)
            results[platform] = {
                "predicted_engagement": pred_res["predicted_engagement"],
                "probabilities": pred_res["probabilities"],
                "confidence": pred_res["confidence"],
                "adapted_content_type": adapted_post["Content_Type"],
                "high_probability": pred_res["probabilities"].get("High", 0.0),
            }

        ranking = sorted(
            results.keys(),
            key=lambda p: (
                results[p]["predicted_engagement"] == "High",
                results[p]["high_probability"],
                results[p]["predicted_engagement"] != "Low",
            ),
            reverse=True,
        )

        top_platform = ranking[0]
        summary_insight = (
            f"'{top_platform}' shows the strongest engagement potential for this content "
            f"({results[top_platform]['predicted_engagement']} tier, "
            f"{results[top_platform]['high_probability']*100:.1f}% High probability)."
        )

        return {
            "base_content_summary": {
                "Category": base_post.get("Category", "Entertainment"),
                "Original_Content_Type": orig_content_type,
                "Follower_Count": base_post.get("Follower_Count", 25000),
            },
            "platform_predictions": results,
            "recommended_platform_ranking": ranking,
            "best_platform": top_platform,
            "summary_insight": summary_insight,
        }
