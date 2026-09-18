"""Comprehensive Test Suite for the Unified predict_content_plan API.

Validates all 8 required test scenarios from Part 11:
- TEST 1: TikTok + Food + Video
- TEST 2: Instagram + Fashion + Photo
- TEST 3: Facebook + Business-related content
- TEST 4: All three platforms together
- TEST 5: Regular Creator + With Media
- TEST 6: Verified Creator + With Media
- TEST 7: Regular Creator + Text Only
- TEST 8: Verified Creator + Text Only

Verification checks per test:
- No crash
- Valid JSON serializability
- Prediction exists
- Platform comparison exists
- Best posting time exists
- Confidence is between 0.0 and 1.0
- No NaN or Infinity in output
- No post-event engagement metrics required
"""

import sys
import json
import math
from pathlib import Path

# Add project root to sys.path
BASE_DIR = Path(__file__).resolve().parent
if str(BASE_DIR) not in sys.path:
    sys.path.insert(0, str(BASE_DIR))

from ml import predict_content_plan

FORBIDDEN_POST_EVENT_KEYS = {"likes", "comments", "shares", "views", "saves", "engagement_rate"}

def assert_no_nan_or_inf(obj, path=""):
    """Recursively verify no NaN or Infinite float values exist."""
    if isinstance(obj, float):
        assert not math.isnan(obj), f"NaN found at {path}"
        assert not math.isinf(obj), f"Infinity found at {path}"
    elif isinstance(obj, dict):
        for k, v in obj.items():
            assert_no_nan_or_inf(v, f"{path}.{k}")
    elif isinstance(obj, list):
        for idx, item in enumerate(obj):
            assert_no_nan_or_inf(item, f"{path}[{idx}]")

def validate_test_result(test_name: str, payload: dict, result: dict):
    """Rigorous assertion checks on output structure and values."""
    print(f"\n" + "=" * 70)
    print(f"RUNNING {test_name}")
    print("=" * 70)
    
    # 1. Verify no forbidden post-event metrics were in input
    lower_keys = {k.lower() for k in payload.keys()}
    leakage = lower_keys.intersection(FORBIDDEN_POST_EVENT_KEYS)
    assert not leakage, f"Data leakage detected in input: {leakage}"
    print("[PASS] 1. Zero post-event engagement leakage in input")

    # 2. Verify status and JSON serializability
    assert result.get("status") == "success", f"Invalid status: {result.get('status')}"
    json_str = json.dumps(result)
    assert len(json_str) > 0, "JSON serialization produced empty string"
    print(f"[PASS] 2. Valid JSON serializable ({len(json_str)} bytes)")

    # 3. Verify no NaN or Infinity
    assert_no_nan_or_inf(result)
    print("[PASS] 3. No NaN or Infinity values")

    # 4. Verify engagement_prediction exists and is non-empty
    eng_pred = result.get("engagement_prediction")
    assert isinstance(eng_pred, dict) and len(eng_pred) > 0, "engagement_prediction missing or empty"
    for plat, p_info in eng_pred.items():
        assert p_info.get("level") in ["Low", "Medium", "High"], f"Invalid tier: {p_info.get('level')}"
        assert isinstance(p_info.get("cluster_id"), int), "cluster_id must be int"
        conf = p_info.get("cluster_membership_confidence")
        assert conf is not None and 0.0 <= conf <= 1.0, f"Confidence {conf} out of range [0, 1]"
        assert p_info.get("confidence_metric") == "cluster_membership_confidence"
        assert "probabilities" in p_info
    print(f"[PASS] 4. Engagement prediction exists for: {list(eng_pred.keys())}")

    # 5. Verify platform_comparison exists and is non-empty
    plat_comp = result.get("platform_comparison")
    assert isinstance(plat_comp, list) and len(plat_comp) > 0, "platform_comparison missing or empty"
    for item in plat_comp:
        assert "platform" in item and "rank" in item
        assert item.get("predicted_engagement") in ["Low", "Medium", "High"]
        conf = item.get("cluster_membership_confidence")
        assert conf is not None and 0.0 <= conf <= 1.0, f"Comparison confidence out of range"
    assert "best_platform" in result
    assert "comparison_summary" in result
    print(f"[PASS] 5. Platform comparison exists (Best platform: {result['best_platform']})")

    # 6. Verify best_posting_time exists
    best_time = result.get("best_posting_time")
    assert isinstance(best_time, dict), "best_posting_time must be dict"
    assert "platform" in best_time
    assert "day_of_week" in best_time
    assert isinstance(best_time.get("hour"), int) and 0 <= best_time["hour"] <= 23
    assert "recommended_peak_hour" in best_time
    assert "all_predictions" in best_time and len(best_time["all_predictions"]) > 0
    print(f"[PASS] 6. Best posting time exists ({best_time['recommended_peak_hour']} on {best_time['day_of_week']})")

    # Summary
    print(f"[SUCCESS] {test_name} PASSED ALL AUDITS")


def run_all_tests():
    # TEST 1: TikTok + Food + Video
    p1 = {
        "Platform": "TikTok",
        "Category": "Food",
        "Content_Type": "Video",
        "Day_of_Week": "Friday",
        "Sentiment": "Positive",
        "Influencer_Tier": "Micro",
        "Hour_of_Day": 19,
        "planned_posting_date": "2026-09-20",
        "Hashtag_Count": 4,
        "caption": "Crispy spring rolls street food review in Phnom Penh! #foodie #cambodia",
        "Follower_Count": 35000,
        "Has_Media": True,
        "Is_Verified": False
    }
    r1 = predict_content_plan(p1)
    validate_test_result("TEST 1: TikTok + Food + Video", p1, r1)

    # TEST 2: Instagram + Fashion + Photo
    p2 = {
        "Platform": "Instagram",
        "Category": "Fashion",
        "Content_Type": "Photo",
        "Day_of_Week": "Saturday",
        "Sentiment": "Positive",
        "Influencer_Tier": "Mid-tier",
        "Hour_of_Day": 18,
        "planned_posting_date": "2026-10-05",
        "Hashtag_Count": 6,
        "caption": "Autumn fashion capsule collection drop. Link in bio! #ootd #style",
        "Follower_Count": 120000,
        "Has_Media": True,
        "Is_Verified": True
    }
    r2 = predict_content_plan(p2)
    validate_test_result("TEST 2: Instagram + Fashion + Photo", p2, r2)

    # TEST 3: Facebook + Business-related content
    p3 = {
        "Platform": "Facebook",
        "Category": "Business",
        "Content_Type": "Post",
        "Day_of_Week": "Monday",
        "Sentiment": "Neutral",
        "Influencer_Tier": "Nano",
        "Hour_of_Day": 10,
        "planned_posting_date": "2026-09-22",
        "Hashtag_Count": 2,
        "caption": "Quarterly market growth report and key strategic insights for startups.",
        "Follower_Count": 4500,
        "Has_Media": True,
        "Is_Verified": False
    }
    r3 = predict_content_plan(p3)
    validate_test_result("TEST 3: Facebook + Business-related content", p3, r3)

    # TEST 4: All three platforms together
    p4 = {
        "Platform": "Instagram",
        "platforms": ["Facebook", "Instagram", "TikTok"],
        "Category": "Entertainment",
        "Content_Type": "Video",
        "Day_of_Week": "Wednesday",
        "Sentiment": "Positive",
        "Influencer_Tier": "Micro",
        "Hour_of_Day": 20,
        "Month": 9,
        "Hashtag_Count": 5,
        "Content_Length": 140,
        "Follower_Count": 45000,
        "Has_Media": True,
        "Is_Verified": False
    }
    r4 = predict_content_plan(p4)
    validate_test_result("TEST 4: All three platforms together", p4, r4)
    assert len(r4["engagement_prediction"]) == 3, "Expected predictions for 3 platforms in Test 4"

    # TEST 5: Regular Creator + With Media
    p5 = {
        "Platform": "Instagram",
        "Category": "Lifestyle",
        "Content_Type": "Photo",
        "Day_of_Week": "Sunday",
        "Sentiment": "Positive",
        "Influencer_Tier": "Nano",
        "Hour_of_Day": 14,
        "Month": 9,
        "Hashtag_Count": 3,
        "Content_Length": 80,
        "Follower_Count": 3000,
        "Has_Media": True,
        "Is_Verified": False  # Regular Creator
    }
    r5 = predict_content_plan(p5)
    validate_test_result("TEST 5: Regular Creator + With Media", p5, r5)
    assert r5["input"]["Is_Verified"] is False and r5["input"]["Has_Media"] is True

    # TEST 6: Verified Creator + With Media
    p6 = {
        "Platform": "Instagram",
        "Category": "Lifestyle",
        "Content_Type": "Photo",
        "Day_of_Week": "Sunday",
        "Sentiment": "Positive",
        "Influencer_Tier": "Macro",
        "Hour_of_Day": 14,
        "Month": 9,
        "Hashtag_Count": 3,
        "Content_Length": 80,
        "Follower_Count": 650000,
        "Has_Media": True,
        "Is_Verified": True  # Verified Creator
    }
    r6 = predict_content_plan(p6)
    validate_test_result("TEST 6: Verified Creator + With Media", p6, r6)
    assert r6["input"]["Is_Verified"] is True and r6["input"]["Has_Media"] is True

    # TEST 7: Regular Creator + Text Only
    p7 = {
        "Platform": "Facebook",
        "Category": "Education",
        "Content_Type": "Post",
        "Day_of_Week": "Tuesday",
        "Sentiment": "Neutral",
        "Influencer_Tier": "Micro",
        "Hour_of_Day": 11,
        "Month": 9,
        "Hashtag_Count": 1,
        "Content_Length": 250,
        "Follower_Count": 15000,
        "Has_Media": False,  # Text Only
        "Is_Verified": False  # Regular Creator
    }
    r7 = predict_content_plan(p7)
    validate_test_result("TEST 7: Regular Creator + Text Only", p7, r7)
    assert r7["input"]["Is_Verified"] is False and r7["input"]["Has_Media"] is False

    # TEST 8: Verified Creator + Text Only
    p8 = {
        "Platform": "Facebook",
        "Category": "Education",
        "Content_Type": "Post",
        "Day_of_Week": "Tuesday",
        "Sentiment": "Neutral",
        "Influencer_Tier": "Mid-tier",
        "Hour_of_Day": 11,
        "Month": 9,
        "Hashtag_Count": 1,
        "Content_Length": 250,
        "Follower_Count": 180000,
        "Has_Media": False,  # Text Only
        "Is_Verified": True   # Verified Creator
    }
    r8 = predict_content_plan(p8)
    validate_test_result("TEST 8: Verified Creator + Text Only", p8, r8)
    assert r8["input"]["Is_Verified"] is True and r8["input"]["Has_Media"] is False

    print("\n" + "=" * 70)
    print(" >>> 100% SUCCESS: ALL 8 TEST SCENARIOS PASSED WITH ZERO ERRORS <<<")
    print("=" * 70 + "\n")


if __name__ == "__main__":
    run_all_tests()