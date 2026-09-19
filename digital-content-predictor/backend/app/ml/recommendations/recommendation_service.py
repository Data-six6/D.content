"""Master Recommendation Service bridging ML Prediction, Platform Comparison,
Posting Time Recommendation, and Generative NLP Content Optimization.

Produces the exact composite JSON structure expected by the backend and frontend:
{
  "recommendation": {
    "idea": "...",
    "platform": "...",
    "title": "...",
    "performance": "...",
    "time": "...",
    "captions": [
      {"platform": "TikTok", "caption": "...", "hashtag": "..."},
      {"platform": "Instagram", "caption": "...", "hashtag": "..."},
      {"platform": "Facebook", "caption": "...", "hashtag": "..."}
    ],
    "platform_predictions": [
      {"platform": "TikTok", "prediction": "..."},
      {"platform": "Instagram", "prediction": "..."},
      {"platform": "Facebook", "prediction": "..."}
    ],
    "ideas": [
      {
        "idea_name": "...",
        "content_type": "...",
        "alternates": [
          {"idea_name": "...", "content_type": "..."},
          {"idea_name": "...", "content_type": "..."}
        ]
      }
    ]
  }
}
"""

from typing import Dict, Any, List, Optional
import copy

from ml.prediction.predictor import get_ml_suite, parse_date_to_month
from ml.recommendations.idea_generator import ContentIdeaGenerator
from ml.nlp.content_optimizer import ContentOptimizer
from ml.config import SUPPORTED_PLATFORMS, VALID_CATEGORIES

_shared_idea_gen = None
_shared_optimizer = None


def get_content_suite():
    """Lazily load and reuse content recommendation & NLP singletons."""
    global _shared_idea_gen, _shared_optimizer
    if _shared_idea_gen is None:
        _shared_idea_gen = ContentIdeaGenerator()
        _shared_optimizer = ContentOptimizer()
    return _shared_idea_gen, _shared_optimizer


def generate_recommendation(input_data: Dict[str, Any]) -> Dict[str, Any]:
    """Master backend function generating the composite content recommendation payload.

    Integrates:
    - ML: EngagementPredictor (performance)
    - ML: PlatformComparator (platform_predictions, winning platform)
    - ML: PostingTimeRecommender (time)
    - AI/NLP: ContentIdeaGenerator (idea, title, ideas with alternates)
    - AI/NLP: ContentOptimizer (captions, hashtag per platform)

    Args:
        input_data (Dict[str, Any]): Input dictionary containing pre-posting features:
            - Platform (str, optional): Target platform, e.g. 'TikTok', 'Instagram', 'Facebook'
            - Content_Type (str, optional): e.g. 'Video', 'Photo', 'Carousel', etc.
            - Category (str, optional): e.g. 'Food', 'Fashion', 'Technology', 'Business', etc.
            - Day_of_Week (str, optional): e.g. 'Friday', 'Wednesday', etc.
            - Sentiment (str, optional): 'Positive', 'Neutral', 'Negative'
            - Influencer_Tier (str, optional): 'Nano', 'Micro', 'Mid-tier', 'Macro'
            - Hour_of_Day (int, optional): 0-23
            - Month (int, optional): 1-12 (derived from planned_posting_date or current calendar month)
            - Hashtag_Count (int, optional): e.g. 4
            - Content_Length (int, optional): character length (derived from caption if omitted)
            - Follower_Count (int, optional): e.g. 35000
            - Has_Media (bool, optional): True (With Media) or False (Text-Only)
            - Is_Verified (bool, optional): True (Verified Creator) or False (Regular Creator)
            - caption (str, optional): Base caption or topic
            - topic / title (str, optional): Content topic/product name
            - content_purpose (str, optional): 'creator' or 'business'

    Returns:
        Dict[str, Any]: Exact JSON structure with "recommendation" root key.
    """
    predictor, comparator, recommender = get_ml_suite()
    idea_gen, optimizer = get_content_suite()

    raw = copy.deepcopy(input_data)

    # 1. Feature normalization & extraction
    if "planned_posting_date" in raw and ("Month" not in raw or raw["Month"] is None):
        raw["Month"] = parse_date_to_month(raw["planned_posting_date"])

    user_caption = str(raw.get("caption") or "").strip()
    topic = str(raw.get("topic") or raw.get("product") or raw.get("title") or "").strip()
    if not topic and user_caption:
        clean_text = user_caption.split("#")[0].strip()
        topic = clean_text[:40].rsplit(" ", 1)[0] if len(clean_text) > 40 else clean_text
    if not topic:
        topic = f"{raw.get('Category', 'Content')} Highlights"

    if user_caption and ("Content_Length" not in raw or raw["Content_Length"] is None):
        raw["Content_Length"] = len(user_caption)

    # 2. Sanitize base post for ML
    base_post = predictor._validate_and_sanitize_input(raw)
    selected_category = base_post.get("Category", "Entertainment")

    # 3. ML Platform Comparison across all 3 platforms: TikTok, Instagram, Facebook
    platforms_order = ["TikTok", "Instagram", "Facebook"]
    comp_res = comparator.compare(base_post, platforms=platforms_order)
    best_platform = comp_res.get("best_platform", "TikTok")

    platform_predictions = [
        {
            "platform": p,
            "prediction": comp_res["platform_predictions"][p]["predicted_engagement"]
        }
        for p in platforms_order
    ]

    # 4. ML Prediction for winning / target platform -> performance
    winning_format = comp_res["platform_predictions"][best_platform]["adapted_content_type"]
    winning_post = copy.deepcopy(base_post)
    winning_post["Platform"] = best_platform
    winning_post["Content_Type"] = winning_format
    pred_res = predictor.predict(winning_post)
    performance = pred_res["predicted_engagement"]

    # 5. ML Posting Time for winning platform -> time
    time_res = recommender.get_best_posting_times(winning_post)
    recommended_time = time_res.get("recommended_peak_hour", "12:00 - 12:59")

    # 6. AI/NLP Content Optimization -> captions & hashtags per platform
    base_copy = user_caption if user_caption else f"Check out our latest insights on {topic}!"
    purpose = str(raw.get("content_purpose", "business")).lower()
    if purpose == "creator":
        opt_res = optimizer.optimize_for_creator(
            caption=base_copy,
            category=selected_category,
        )
        clean_caption_body = opt_res["improved_caption"].strip()
        captions = [
            {
                "platform": "TikTok",
                "caption": clean_caption_body,
                "hashtag": " ".join(opt_res["recommended_hashtags"])
            },
            {
                "platform": "Instagram",
                "caption": clean_caption_body,
                "hashtag": " ".join(opt_res["recommended_hashtags"])
            },
            {
                "platform": "Facebook",
                "caption": clean_caption_body,
                "hashtag": " ".join(opt_res["recommended_hashtags"])
            }
        ]
    else:
        opt_res = optimizer.optimize_for_business(
            caption=base_copy,
            category=selected_category,
        )
        plat_recs = opt_res.get("platform_specific_recommendations", {})
        captions = []
        for p in platforms_order:
            p_rec = plat_recs.get(p, {})
            p_caption = p_rec.get("caption", base_copy)
            clean_lines = [line.strip() for line in p_caption.split("\n") if line.strip()]
            clean_caption_text = clean_lines[0] if clean_lines else base_copy
            p_tags = p_rec.get("hashtags", ["#viral", f"#{selected_category.lower()}"])
            captions.append({
                "platform": p,
                "caption": clean_caption_text,
                "hashtag": " ".join(p_tags)
            })

    # 7. AI/NLP Content Ideas & Format Alternates -> idea, title, ideas
    hook_list = ContentIdeaGenerator.HOOK_TEMPLATES.get(
        selected_category,
        ContentIdeaGenerator.HOOK_TEMPLATES["General"]
    )
    formatted_hooks = [h.format(topic=topic) for h in hook_list]
    main_hook = formatted_hooks[0]
    main_title = f"{selected_category} Spotlight: {topic.title()}"

    format_pool = ["Video", "Carousel", "Photo", "Reel", "Post"]
    filtered_formats = [f for f in format_pool if f != winning_format]
    alt1_format = filtered_formats[0] if len(filtered_formats) > 0 else "Carousel"
    alt2_format = filtered_formats[1] if len(filtered_formats) > 1 else "Photo"

    ideas_structure = [
        {
            "idea_name": f"{topic.title()} - {winning_format} Strategy",
            "content_type": winning_format,
            "alternates": [
                {
                    "idea_name": f"Step-by-Step Guide: {topic.title()}",
                    "content_type": alt1_format
                },
                {
                    "idea_name": f"Key Highlights & Tips: {topic.title()}",
                    "content_type": alt2_format
                }
            ]
        }
    ]

    # 8. Return exact composite schema requested by backend
    return {
        "recommendation": {
            "idea": main_hook,
            "platform": best_platform,
            "title": main_title,
            "performance": performance,
            "time": recommended_time,
            "captions": captions,
            "platform_predictions": platform_predictions,
            "ideas": ideas_structure
        }
    }