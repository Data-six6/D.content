"""Best Posting Time Recommender (Feature 3) using the Engagement Predictor."""

from typing import Dict, Any, List, Optional
import copy

from ml.prediction.predictor import EngagementPredictor

class PostingTimeRecommender:
    """Recommends best posting time by running the ML model on different hours."""

    def __init__(self, predictor: Optional[EngagementPredictor] = None):
        """Initialize with an existing or newly created EngagementPredictor."""
        self.predictor = predictor or EngagementPredictor()

    def get_best_posting_times(
        self,
        base_post: Dict[str, Any],
        candidate_hours: Optional[List[int]] = None,
    ) -> Dict[str, Any]:
        """Test candidate hours through the ML model and recommend the best one."""
        if candidate_hours is None:
            # Default candidate times (e.g. 9 AM, 12 PM, 3 PM, 6 PM, 7 PM, 8 PM, 9 PM)
            candidate_hours = [9, 12, 15, 18, 19, 20, 21]

        results = []
        for hr in candidate_hours:
            adapted_post = copy.deepcopy(base_post)
            adapted_post["Hour_of_Day"] = hr
            
            pred_res = self.predictor.predict(adapted_post)
            results.append({
                "hour": hr,
                "time_window": f"{hr:02d}:00 - {hr:02d}:59",
                "predicted_engagement": pred_res["predicted_engagement"],
                "high_probability": pred_res["probabilities"].get("High", 0.0),
                "medium_probability": pred_res["probabilities"].get("Medium", 0.0),
            })

        # Sort by predicted engagement logic: High first, then highest probability
        # Or just sort by high_probability descending
        results.sort(
            key=lambda x: (
                x["predicted_engagement"] == "High",
                x["high_probability"],
                x["medium_probability"]
            ),
            reverse=True
        )

        best_result = results[0]

        return {
            "platform": base_post.get("Platform", "Instagram"),
            "recommended_peak_hour": best_result["time_window"],
            "all_predictions": results,
            "recommendation_summary": (
                f"Based on predicted engagement, the recommended posting time is "
                f"{best_result['time_window']}."
            )
        }
