import pandas as pd
import numpy as np
import json
from ml.prediction.predictor import EngagementPredictor
from ml.prediction.platform_comparator import PlatformComparator
from ml.recommendations.posting_time import PostingTimeRecommender

def run_tests():
    print("Initializing predictor, comparator, and recommender...")
    predictor = EngagementPredictor()
    comparator = PlatformComparator(predictor)
    recommender = PostingTimeRecommender(predictor)
    
    test_cases = [
        # 1. TikTok + Video + Food
        ("Test 1: TikTok + Video + Food", {
            "Platform": "TikTok", "Content_Type": "Video", "Category": "Food",
            "Day_of_Week": "Friday", "Sentiment": "Positive", "Influencer_Tier": "Micro",
            "Hour_of_Day": 19, "Month": 6, "Hashtag_Count": 4, "Content_Length": 120,
            "Follower_Count": 35000, "Has_Media": True, "Is_Verified": False
        }),
        # 2. Instagram + Photo + Fashion
        ("Test 2: Instagram + Photo + Fashion", {
            "Platform": "Instagram", "Content_Type": "Photo", "Category": "Fashion",
            "Day_of_Week": "Saturday", "Sentiment": "Positive", "Influencer_Tier": "Mid-tier",
            "Hour_of_Day": 14, "Month": 8, "Hashtag_Count": 10, "Content_Length": 200,
            "Follower_Count": 75000, "Has_Media": True, "Is_Verified": True
        }),
        # 3. Facebook + Video + Business
        ("Test 3: Facebook + Video + Business", {
            "Platform": "Facebook", "Content_Type": "Video", "Category": "Business",
            "Day_of_Week": "Monday", "Sentiment": "Neutral", "Influencer_Tier": "Nano",
            "Hour_of_Day": 10, "Month": 3, "Hashtag_Count": 2, "Content_Length": 500,
            "Follower_Count": 5000, "Has_Media": False, "Is_Verified": False
        }),
        # 4. Different posting hours (comparison across 3, 12, 21)
        ("Test 4a: Early Morning (03:00)", {
            "Platform": "TikTok", "Content_Type": "Video", "Category": "Gaming",
            "Hour_of_Day": 3, "Follower_Count": 25000
        }),
        ("Test 4b: Evening Peak (20:00)", {
            "Platform": "TikTok", "Content_Type": "Video", "Category": "Gaming",
            "Hour_of_Day": 20, "Follower_Count": 25000
        }),
        # 5. Different categories (Tech vs Travel)
        ("Test 5a: Technology", {"Platform": "Instagram", "Category": "Technology"}),
        ("Test 5b: Travel", {"Platform": "Instagram", "Category": "Travel"}),
        # 6. Different content types (Carousel vs Reel)
        ("Test 6a: Instagram Carousel", {"Platform": "Instagram", "Content_Type": "Carousel"}),
        ("Test 6b: Instagram Reel", {"Platform": "Instagram", "Content_Type": "Reel"}),
        # 7. Different sentiments (Positive vs Negative)
        ("Test 7a: Positive", {"Platform": "Facebook", "Sentiment": "Positive"}),
        ("Test 7b: Negative", {"Platform": "Facebook", "Sentiment": "Negative"}),
        # 8. Missing values (Empty payload, relying completely on defaults)
        ("Test 8: Completely Empty Payload", {}),
        # 9. Unknown categories and platforms
        ("Test 9: Unknown Platform and Category", {
            "Platform": "Twitter/X",
            "Category": "CryptoMining",
            "Content_Type": "Thread"
        }),
        # 10. Extreme values (Huge follower count, extreme content length, etc.)
        ("Test 10: Extreme Values", {
            "Platform": "Instagram",
            "Follower_Count": 10000000, # 10M
            "Content_Length": 10000,   # 10k chars
            "Hashtag_Count": 100,
            "Hour_of_Day": 23
        })
    ]
    
    print("\n" + "="*70)
    print("RUNNING 10 COMPREHENSIVE TEST SCENARIOS")
    print("="*70)
    
    all_passed = True
    for name, payload in test_cases:
        try:
            res = predictor.predict(payload)
            print(f"\n[PASS] {name}")
            print(f"       Platform: {res['platform']} | Category: {res['category']} | Content_Type: {res['content_type']}")
            print(f"       Prediction: {res['predicted_engagement']} (Confidence: {res['confidence']*100:.2f}%)")
            print(f"       Probabilities: {res['probabilities']}")
        except Exception as e:
            print(f"\n[FAIL] {name} raised exception: {e}")
            all_passed = False
            
    print("\n" + "="*70)
    print("TESTING PLATFORM COMPARATOR & POSTING TIME RECOMMENDER")
    print("="*70)
    try:
        comp_res = comparator.compare({"Category": "Technology", "Content_Type": "Video", "Follower_Count": 50000})
        print(f"[PASS] Platform Comparison Winner: {comp_res['best_platform']}")
        print(f"       Insight: {comp_res['summary_insight']}")
        
        time_res = recommender.get_best_posting_times({"Platform": "TikTok", "Category": "Gaming"})
        print(f"[PASS] Best Posting Time: {time_res['recommended_peak_hour']}")
        print(f"       Summary: {time_res['recommendation_summary']}")
    except Exception as e:
        print(f"[FAIL] Comparator/Recommender raised exception: {e}")
        all_passed = False

    print("\n" + "="*70)
    print(f"ALL TESTS COMPLETED: {'SUCCESS' if all_passed else 'FAILED'}")
    print("="*70)

if __name__ == "__main__":
    run_tests()
