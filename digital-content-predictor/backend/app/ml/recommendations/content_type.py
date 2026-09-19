"""Content Type Recommender (Feature 4) based on historical performance per platform and category."""

from typing import Dict, Any, List, Optional
import pandas as pd

from ml.config import SUPPORTED_PLATFORMS, VALID_CATEGORIES, PLATFORM_CONTENT_TYPES
from ml.data_processing.loader import load_cleaned_data


class ContentTypeRecommender:
    """Recommends high-performing content formats for a given platform and niche."""

    def __init__(self, data_path: Optional[str] = None):
        """Initialize recommender with historical dataset."""
        self.df = load_cleaned_data(data_path)
        self._precompute_rankings()

    def _precompute_rankings(self):
        """Precompute platform + content_type + category aggregations."""
        self.platform_stats = (
            self.df.groupby(["Platform", "Content_Type"])["Engagement_Rate"]
            .agg(["median", "mean", "count"])
            .reset_index()
        )

        self.cat_stats = (
            self.df.groupby(["Platform", "Category", "Content_Type"])["Engagement_Rate"]
            .agg(["median", "mean", "count"])
            .reset_index()
        )

    def recommend(
        self,
        platform: str,
        category: Optional[str] = None,
    ) -> Dict[str, Any]:
        """Rank and recommend content formats for a platform and optional category."""
        if platform not in SUPPORTED_PLATFORMS:
            platform = "Instagram"

        df_target = None
        used_category = False
        if category and category in VALID_CATEGORIES:
            cat_df = self.cat_stats[
                (self.cat_stats["Platform"] == platform) &
                (self.cat_stats["Category"] == category)
            ]
            if len(cat_df) > 0 and cat_df["count"].sum() >= 15:
                df_target = cat_df
                used_category = True

        if df_target is None:
            df_target = self.platform_stats[self.platform_stats["Platform"] == platform]

        ranked = df_target.sort_values(by="median", ascending=False)

        rankings = []
        for rank_idx, (_, row) in enumerate(ranked.iterrows(), start=1):
            rankings.append({
                "rank": rank_idx,
                "content_type": str(row["Content_Type"]),
                "median_engagement_rate": round(float(row["median"]), 2),
                "sample_size": int(row["count"]),
            })

        best_type = rankings[0]["content_type"]
        best_er = rankings[0]["median_engagement_rate"]

        advice_scope = f"{platform} ({category})" if used_category else platform
        strategic_tip = (
            f"On {advice_scope}, '{best_type}' is historically the top-performing content format "
            f"with a median engagement rate of {best_er:.2f}%."
        )

        return {
            "platform": platform,
            "category": category if used_category else "All Categories",
            "recommended_content_type": best_type,
            "ranked_formats": rankings,
            "strategic_tip": strategic_tip,
        }
