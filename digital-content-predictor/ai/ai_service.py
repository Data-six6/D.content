"""
Unified AI service for Meateka backend.
Backend team imports this ONE file to access all AI features.

Usage:
    from ai_service import AIService

    ai = AIService()
    plan = ai.generate_content_plan(category, product, target_audience, goal, platform)
"""

from content_idea.idea_generator import generate_content_idea
from caption.caption_generator import generate_caption, generate_captions_for_platforms
from hashtag.hashtag_generator import generate_hashtags
from shared.safety_check import is_content_safe


class AIService:
    """Single entry point for all AI content generation features."""

    def generate_content_plan(
        self,
        category: str,
        product: str,
        target_audience: str,
        goal: str,
        platform: str,
        content_purpose: str = "Content Creator",
    ) -> dict:
        """
        Generate a complete content plan: idea + captions for all 3 platforms.

        Args:
            category: Content category (e.g., "Beauty", "Food", "Gaming")
            product: Product or service name
            target_audience: Target audience description
            goal: "Maximize Reach", "Drive Sales", "Increase Followers", "Brand Awareness"
            platform: Primary platform ("TikTok", "Instagram", "Facebook")
            content_purpose: "Content Creator" or "Business Owner"

        Returns:
            {
              "idea": {
                "recommended_idea": str,
                "content_type": str,
                "alternative_ideas": [str, str, str],
                "best_posting_times": {platform: str, ...}
              },
              "captions": {
                "TikTok": {"caption": str, "hashtags": [str], "safety": {safe: bool, reason: str}},
                "Instagram": {...},
                "Facebook": {...}
              }
            }
        """
        idea = generate_content_idea(category, product, target_audience, goal, platform)

        if not idea.get("recommended_idea"):
            return {"idea": idea, "captions": {}}

        captions = generate_captions_for_platforms(
            content_idea=idea["recommended_idea"],
            platforms=["TikTok", "Instagram", "Facebook"],
            content_purpose=content_purpose,
            product=product,
        )

        return {"idea": idea, "captions": captions}

    def generate_content_idea(self, category: str, product: str, target_audience: str, goal: str, platform: str, retries: int = 2) -> dict:
        """Generate a content idea with posting times."""
        return generate_content_idea(category, product, target_audience, goal, platform, retries)

    def generate_caption(self, content_idea: str, platform: str, content_purpose: str = "Content Creator", product: str = "", retries: int = 2) -> dict:
        """Generate a caption for a single platform."""
        return generate_caption(content_idea, platform, content_purpose, product, retries)

    def generate_all_platforms(self, content_idea: str, content_purpose: str = "Content Creator", product: str = "") -> dict:
        """Generate captions for all 3 platforms."""
        return generate_captions_for_platforms(content_idea, ["TikTok", "Instagram", "Facebook"], content_purpose, product)

    def generate_hashtags(self, caption: str, platform: str, category: str = "General", num_hashtags: int = 8, retries: int = 2) -> list:
        """Generate hashtags for a caption."""
        return generate_hashtags(caption, platform, category, num_hashtags, retries)

    def check_safety(self, text: str, retries: int = 1) -> dict:
        """Check if content is safe."""
        return is_content_safe(text, retries)
