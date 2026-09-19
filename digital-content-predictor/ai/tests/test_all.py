"""
Manual smoke tests — makes real Gemini API calls and prints output for
you to eyeball. Run with: python -m tests.test_all
"""

from content_idea.idea_generator import generate_content_idea
from caption.caption_generator import generate_caption, generate_captions_for_platforms
from hashtag.hashtag_generator import generate_hashtags
from shared.safety_check import is_content_safe


def test_content_idea():
    print("\n--- Content Idea Recommendation (Feature 1) ---")
    result = generate_content_idea(
        category="Beauty",
        product="Facial Cleanser",
        target_audience="Women 25-34 interested in skincare",
        goal="Drive Sales",
        platform="TikTok",
    )
    print(result)
    assert "recommended_idea" in result


def test_caption_creator():
    print("\n--- Caption (Content Creator) ---")
    result = generate_caption(
        content_idea="3 Common Skincare Mistakes Wrecking Your Barrier",
        platform="TikTok",
        content_purpose="Content Creator",
    )
    print(result)
    assert "caption" in result and "hashtags" in result


def test_caption_business_multi_platform():
    print("\n--- Caption (Business Owner, multi-platform) ---")
    result = generate_captions_for_platforms(
        content_idea="Try our new spicy burger today!",
        platforms=["TikTok", "Instagram", "Facebook"],
        content_purpose="Business Owner",
        product="Spicy Burger",
    )
    print(result)
    assert set(result.keys()) == {"TikTok", "Instagram", "Facebook"}


def test_hashtags():
    print("\n--- Standalone Hashtags ---")
    result = generate_hashtags(
        caption="3 Common Skincare Mistakes Wrecking Your Barrier",
        platform="TikTok",
        category="Beauty",
    )
    print(result)
    assert isinstance(result, list)


def test_safety_check():
    print("\n--- Safety Check ---")
    result = is_content_safe("3 Common Skincare Mistakes Wrecking Your Barrier")
    print(result)
    assert "safe" in result


if __name__ == "__main__":
    test_content_idea()
    test_caption_creator()
    test_caption_business_multi_platform()
    test_hashtags()
    test_safety_check()
    print("\nAll smoke tests ran. Review printed output above for quality/safety issues.")