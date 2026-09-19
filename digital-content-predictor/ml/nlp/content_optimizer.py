"""Content Optimizer supporting Content Creator and Business Owner modes (Feature 5)."""

from typing import Dict, Any, List, Union, Optional
import re

from ml.config import SUPPORTED_PLATFORMS, VALID_CATEGORIES
from ml.nlp.caption_analyzer import CaptionAnalyzer


class ContentOptimizer:
    """Optimizes captions and hashtags based on Content Purpose:
    
    - Content Creator: Improves polish, hook, and hashtags while preserving identical main message across platforms.
    - Business Owner: Generates customized platform-specific versions.
    """

    def __init__(self, analyzer: Optional[CaptionAnalyzer] = None):
        self.analyzer = analyzer or CaptionAnalyzer()

    CATEGORY_HASHTAGS = {
        "Food": ["#Foodie", "#EasyRecipes", "#QuickMeals", "#FoodTok", "#Delicious"],
        "Technology": ["#TechTips", "#ProductivityHacks", "#AItools", "#TechTrends", "#Innovation"],
        "Fitness": ["#FitnessMotivation", "#WorkoutRoutine", "#GymTips", "#HealthyHabits", "#FitLife"],
        "Business": ["#SmallBusinessTips", "#EntrepreneurLife", "#MarketingStrategy", "#GrowthHacks", "#BusinessGrowth"],
        "Fashion": ["#OOTD", "#StyleInspo", "#FashionHacks", "#WardrobeEssentials", "#Trends"],
        "Lifestyle": ["#DailyVlog", "#SelfCare", "#LifeHacks", "#MotivationDaily", "#Inspiration"],
        "Gaming": ["#GamingCommunity", "#GamerLife", "#GameClips", "#GameStream", "#NextGenGaming"],
        "Travel": ["#TravelGram", "#Wanderlust", "#TravelHacks", "#ExploreMore", "#BucketList"],
        "General": ["#LearnOnSocial", "#ContentCreation", "#ViralTips", "#MustWatch"],
    }

    def _clean_caption(self, text: str) -> str:
        clean = re.sub(r"#\w+", "", text).strip()
        clean = re.sub(r"\s+", " ", clean)
        return clean

    def optimize_for_creator(
        self,
        caption: str,
        hashtags: Optional[Union[List[str], str]] = None,
        category: str = "Technology",
    ) -> Dict[str, Any]:
        raw_clean = self._clean_caption(caption)
        if not raw_clean:
            raw_clean = "Sharing some game-changing tips and insights on this topic!"

        polished_caption = raw_clean
        if not polished_caption.endswith((".", "!", "?")):
            polished_caption += "."

        closing_question = " What are your thoughts on this? Let me know below!"
        if "?" not in polished_caption:
            polished_caption += closing_question

        cat_tags = self.CATEGORY_HASHTAGS.get(category, self.CATEGORY_HASHTAGS["General"])
        existing_analysis = self.analyzer.analyze(caption, hashtags)
        user_tags = existing_analysis["hashtags"]

        final_tags = list(dict.fromkeys(user_tags + cat_tags[:3]))[:6]
        formatted_tags_str = " ".join(final_tags)

        nl = chr(10)
        full_improved_post = polished_caption + nl + nl + formatted_tags_str

        return {
            "content_purpose": "Content Creator",
            "main_message_preserved": True,
            "improved_caption": polished_caption,
            "recommended_hashtags": final_tags,
            "full_post_ready": full_improved_post,
            "strategy_note": (
                "Enhanced clarity and added an engagement hook while keeping your original message intact. "
                "This single post format works effectively across TikTok, Instagram, and Facebook."
            ),
        }

    def optimize_for_business(
        self,
        caption: str,
        hashtags: Optional[Union[List[str], str]] = None,
        category: str = "Business",
        business_cta: Optional[str] = None,
    ) -> Dict[str, Any]:
        raw_clean = self._clean_caption(caption)
        if not raw_clean:
            raw_clean = "We help solve key challenges with practical, proven solutions."

        cta = business_cta or "Click the link in bio or send us a direct message to get started today!"
        cat_tags = self.CATEGORY_HASHTAGS.get(category, self.CATEGORY_HASHTAGS["Business"])
        nl = chr(10)

        # Facebook
        fb_caption = (
            "Looking for better results in your business?" + nl + nl
            + raw_clean + nl + nl
            + "Here is why this matters: consistent execution leads to measurable breakthroughs." + nl + nl
            + cta
        )
        fb_tags = ["#BusinessTips", "#SmallBusiness", f"#{category}Solutions"]
        fb_full = fb_caption + nl + nl + " ".join(fb_tags)

        # TikTok
        tt_hook = f"Stop scrolling if you want to fix your {category.lower()} struggles!"
        tt_caption = tt_hook + nl + nl + raw_clean + nl + nl + "Drop a comment if you want part 2!"
        tt_tags = ["#fyp", "#smallbusiness", f"#{category.lower()}tips", "#learnontiktok"]
        tt_full = tt_caption + nl + nl + " ".join(tt_tags)

        # Instagram
        ig_caption = (
            f"The smarter way to handle {category.lower()}:" + nl + nl
            + "- " + raw_clean + nl + nl
            + "Have you tried this approach yet? Save this post for your next planning session!"
        )
        ig_tags = list(dict.fromkeys(cat_tags + ["#InstaBusiness", "#MarketingDaily"]))[:7]
        ig_full = ig_caption + nl + nl + " ".join(ig_tags)

        return {
            "content_purpose": "Business Owner",
            "main_message_preserved": True,
            "platform_specific_recommendations": {
                "Facebook": {
                    "style": "Promotional / Community Storytelling / Clear CTA",
                    "caption": fb_caption,
                    "hashtags": fb_tags,
                    "full_post": fb_full,
                },
                "TikTok": {
                    "style": "Snappy / Hook-First / High Energy",
                    "caption": tt_caption,
                    "hashtags": tt_tags,
                    "full_post": tt_full,
                },
                "Instagram": {
                    "style": "Aesthetic / Visual Bullets / Comment & Save Driver",
                    "caption": ig_caption,
                    "hashtags": ig_tags,
                    "full_post": ig_full,
                },
            },
            "strategy_note": (
                "Tailored specifically for business growth: Facebook maximizes conversions with a direct offer, "
                "TikTok grabs fast attention with a hook, and Instagram builds authority with clean aesthetic spacing."
            ),
        }

    def optimize(
        self,
        caption: str,
        hashtags: Optional[Union[List[str], str]] = None,
        category: str = "Technology",
        content_purpose: str = "creator",
        business_cta: Optional[str] = None,
    ) -> Dict[str, Any]:
        if content_purpose.lower() == "business":
            return self.optimize_for_business(caption, hashtags, category, business_cta)
        return self.optimize_for_creator(caption, hashtags, category)