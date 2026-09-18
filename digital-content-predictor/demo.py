"""Interactive CLI Demo & Tester for Digital Content Engagement & Reach Predictor."""

import sys
import os
import json

sys.path.insert(0, os.path.abspath("."))

from ml.prediction.predictor import EngagementPredictor
from ml.prediction.platform_comparator import PlatformComparator
from ml.recommendations.posting_time import PostingTimeRecommender

def print_header(title):
    print("\n" + "=" * 65)
    print(f" {title}")
    print("=" * 65)

def demo_feature_1():
    print_header("FEATURE 1: ENGAGEMENT PREDICTION")
    predictor = EngagementPredictor()
    sample_post = {
        "Platform": "TikTok",
        "Content_Type": "Video",
        "Category": "Food",
        "Day_of_Week": "Friday",
        "Sentiment": "Positive",
        "Influencer_Tier": "Micro",
        "Has_Media": True,
        "Is_Verified": False,
        "Hour_of_Day": 19,
        "Month": 9,
        "Hashtag_Count": 4,
        "Content_Length": 120,
        "Follower_Count": 35000,
    }
    print("Input Post Payload:")
    print(json.dumps(sample_post, indent=2))
    
    result = predictor.predict(sample_post)
    print("\nPrediction Output:")
    print(f"  Predicted Level : {result['predicted_engagement']}")
    print(f"  Confidence      : {result['confidence'] * 100:.2f}%")
    print(f"  Probabilities   : {result['probabilities']}")

def demo_feature_2():
    print_header("FEATURE 2: PLATFORM COMPARISON")
    comparator = PlatformComparator()
    base_post = {
        "Category": "Technology",
        "Content_Type": "Video",
        "Day_of_Week": "Thursday",
        "Sentiment": "Positive",
        "Influencer_Tier": "Micro",
        "Hour_of_Day": 18,
        "Month": 9,
        "Hashtag_Count": 5,
        "Content_Length": 180,
        "Follower_Count": 45000,
    }
    result = comparator.compare(base_post)
    print(f"Winning Platform: {result['best_platform']}")
    print(f"Insight: {result['summary_insight']}\n")
    print("Side-by-Side Comparison:")
    for plat, pdata in result["platform_predictions"].items():
        print(f"    {plat:<10} | Format: {pdata['adapted_content_type']:<7} | Tier: {pdata['predicted_engagement']:<6} | High Prob: {pdata['high_probability']*100:.1f}%")

def demo_feature_3():
    print_header("FEATURE 3: BEST POSTING TIME RECOMMENDATION")
    recommender = PostingTimeRecommender()
    
    base_post = {
        "Platform": "TikTok",
        "Category": "Food",
        "Content_Type": "Video",
        "Day_of_Week": "Thursday",
        "Sentiment": "Positive",
        "Influencer_Tier": "Micro",
        "Month": 9,
        "Hashtag_Count": 5,
        "Content_Length": 140,
        "Follower_Count": 45000,
    }
    
    times = recommender.get_best_posting_times(base_post)
    print(f"Platform: {times['platform']}")
    print(f"  Recommended Peak Hour: {times['recommended_peak_hour']}")
    print(f"  Summary: {times['recommendation_summary']}")
    print("  All Predictions:")
    for h in times["all_predictions"]:
        print(f"    - {h['time_window']} | Predicted Engagement: {h['predicted_engagement']} | High Prob: {h['high_probability']*100:.1f}%")

def run_all_demos():
    """Execute all three feature demos in sequence."""
    demo_feature_1()
    demo_feature_2()
    demo_feature_3()


def get_demo_action(choice: str):
    """Function dispatch table avoiding redundant if/else statements."""
    actions = {
        "1": demo_feature_1,
        "2": demo_feature_2,
        "3": demo_feature_3,
    }
    return actions.get(choice, run_all_demos)


def main():
    print("=" * 65)
    print(" MEATEKA ML - INTERACTIVE TEST RUNNER")
    print("=" * 65)
    print("1. Test Feature 1: Engagement Prediction")
    print("2. Test Feature 2: Platform Comparison")
    print("3. Test Feature 3: Best Posting Time")
    print("4. Run ALL 3 Features in Sequence")
    print("=" * 65)
    
    choice = sys.argv[1] if len(sys.argv) > 1 else "4"
    action = get_demo_action(choice)
    action()
        
    print_header("ALL TESTS COMPLETED SUCCESSFULLY!")


if __name__ == "__main__":
    main()