"""'I Don't Know What to Post' Idea Recommender (Feature 6)."""

from typing import Dict, Any, List, Optional
import random

from ml.config import SUPPORTED_PLATFORMS, VALID_CATEGORIES, PLATFORM_CONTENT_TYPES
from ml.recommendations.content_type import ContentTypeRecommender
from ml.recommendations.posting_time import PostingTimeRecommender


class ContentIdeaGenerator:
    """Generates structured content concepts, proven hooks, and execution templates."""

    HOOK_TEMPLATES = {
        "Food": [
            "3 quick steps to elevate your {topic} in under 10 minutes",
            "Why your {topic} isn't tasting right (and the simple fix)",
            "The secret technique top chefs use for {topic}",
            "Stop doing {topic} the hard way — try this instead",
        ],
        "Technology": [
            "3 hidden {topic} features you are probably not using",
            "This tool completely changed how I handle {topic}",
            "Before you buy {topic}, watch this 30-second breakdown",
            "The biggest mistake people make with {topic} in 2026",
        ],
        "Fitness": [
            "The 1 exercise you should never skip for {topic}",
            "Stop doing endless reps — here is the real way to build {topic}",
            "3 common posture mistakes during {topic} and how to fix them",
            "My 15-minute daily routine for {topic}",
        ],
        "Business": [
            "How we solved {topic} without spending a dime on ads",
            "3 high-leverage habits that doubled our {topic}",
            "If I had to start {topic} from scratch today, here is what I would do",
            "The #1 reason most small businesses struggle with {topic}",
        ],
        "Fashion": [
            "How to style {topic} 3 different ways for any occasion",
            "The timeless wardrobe rule for {topic}",
            "Stop overpaying for {topic} — here is what to look for",
            "3 styling mistakes that ruin your {topic} look",
        ],
        "General": [
            "The unfiltered truth about {topic} that nobody talks about",
            "3 things I wish I knew before starting {topic}",
            "Step-by-step beginner guide to mastering {topic}",
            "A quick reminder for anyone working on {topic} today",
        ],
    }

    def __init__(
        self,
        content_type_rec: Optional[ContentTypeRecommender] = None,
        posting_time_rec: Optional[PostingTimeRecommender] = None,
    ):
        """Initialize idea generator with statistical recommenders."""
        self.content_rec = content_type_rec or ContentTypeRecommender()
        self.time_rec = posting_time_rec or PostingTimeRecommender()

    def generate_ideas(
        self,
        platform: str,
        category: Optional[str] = None,
        topic: Optional[str] = None,
        content_purpose: str = "creator",
    ) -> Dict[str, Any]:
        """Generate structured data-backed content concepts."""
        if platform not in SUPPORTED_PLATFORMS:
            platform = "Instagram"
        selected_category = category if category in VALID_CATEGORIES else "Technology"
        keyword = topic.strip() if topic else f"{selected_category.lower()} tips"

        fmt_rec = self.content_rec.recommend(platform, selected_category)
        best_format = fmt_rec["recommended_content_type"]

        time_rec = self.time_rec.get_best_posting_times(platform)
        best_time = time_rec["recommended_peak_hour"]
        best_day = time_rec["recommended_peak_day"]

        category_hooks = self.HOOK_TEMPLATES.get(selected_category, self.HOOK_TEMPLATES["General"])
        formatted_hooks = [h.format(topic=keyword) for h in category_hooks]

        if content_purpose.lower() == "business":
            call_to_action = "Drop a comment or message us to learn how we help with this!"
            framework = "Hook (Problem) -> Solution Breakdown -> Case Study/Proof -> Direct CTA"
            strategic_focus = "Focus on business value, customer results, and clear conversion paths."
        else:
            call_to_action = "Which of these points resonated most with you? Let me know below!"
            framework = "Snappy Hook -> Quick Demonstration -> Actionable Takeaway -> Community Question"
            strategic_focus = "Focus on relatable delivery, visual storytelling, and high retention."

        content_concepts = [
            {
                "concept_title": f"Educational Spotlight: {keyword.title()}",
                "suggested_format": best_format,
                "hook": formatted_hooks[0],
                "structure": framework,
                "suggested_cta": call_to_action,
            },
            {
                "concept_title": f"Mistake Breakdown & Fix: {keyword.title()}",
                "suggested_format": best_format,
                "hook": formatted_hooks[1] if len(formatted_hooks) > 1 else formatted_hooks[0],
                "structure": framework,
                "suggested_cta": call_to_action,
            },
            {
                "concept_title": f"Step-by-Step Tutorial / Walkthrough: {keyword.title()}",
                "suggested_format": best_format,
                "hook": formatted_hooks[2] if len(formatted_hooks) > 2 else formatted_hooks[0],
                "structure": framework,
                "suggested_cta": call_to_action,
            },
        ]

        return {
            "platform": platform,
            "category": selected_category,
            "topic": keyword,
            "content_purpose": content_purpose,
            "recommended_content_type": best_format,
            "recommended_posting_window": f"{best_day} at {best_time}",
            "strategic_focus": strategic_focus,
            "concepts": content_concepts,
        }
