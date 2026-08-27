"""
FEATURE 2 — PLATFORM COMPARISON
=================================
Does NOT train a new model. Loads the model already trained and saved by
feature1_engagement_prediction.py, and runs the SAME planned content through
it once per platform (only the Platform field changes), then reports which
platform is predicted to perform best.

Requirements:
    Run feature1_engagement_prediction.py first -- it produces feature1_model.pkl.

Usage:
    python feature2_platform_comparison.py
"""

import pickle
from common import NUMERIC_COLS, encode_single_post

MODEL_PATH = "feature1_model.pkl"


def load_model(path: str = MODEL_PATH):
    with open(path, "rb") as f:
        saved = pickle.load(f)
    return saved["model"], saved["scaler"], saved["columns"]


def compare_platforms(model, scaler, columns, post: dict,
                       platforms=("TikTok", "Instagram", "Facebook")) -> dict:
    """
    post: the planned content WITHOUT a "Platform" key (or with one -- it
    gets overwritten for each platform tested), e.g.
        {
            "Content_Type": "Video", "Category": "Food", "Day_of_Week": "Friday",
            "Sentiment": "Positive", "Influencer_Tier": "Micro",
            "Follower_Count": 5000, "Hour_of_Day": 19, "Hashtag_Count": 8,
            "Content_Length": 120, "Has_Media": True, "Is_Verified": False,
        }
    Returns a dict: {platform: {"prediction": ..., "probabilities": {...}}}
    """
    results = {}
    for platform in platforms:
        row = post.copy()
        row["Platform"] = platform
        row_encoded = encode_single_post(row, columns)
        row_encoded[NUMERIC_COLS] = scaler.transform(row_encoded[NUMERIC_COLS])
        pred = model.predict(row_encoded)[0]
        proba = dict(zip(model.classes_, model.predict_proba(row_encoded)[0].round(3)))
        results[platform] = {"prediction": pred, "probabilities": proba}
    return results


def best_platform(comparison_results: dict) -> str:
    """Picks the platform with the highest predicted probability of 'High' engagement."""
    return max(comparison_results.items(), key=lambda kv: kv[1]["probabilities"]["High"])[0]


def main():
    print("Loading Feature 1's trained model...")
    model, scaler, columns = load_model()

    example_post = {
        "Content_Type": "Video", "Category": "Food", "Day_of_Week": "Friday",
        "Sentiment": "Positive", "Influencer_Tier": "Micro",
        "Follower_Count": 5000, "Hour_of_Day": 19, "Hashtag_Count": 8,
        "Content_Length": 120, "Has_Media": True, "Is_Verified": False,
    }

    print("\nComparing the same content across platforms...")
    comparison = compare_platforms(model, scaler, columns, example_post)
    for platform, res in comparison.items():
        print(f"  {platform:10s} -> {res['prediction']:8s}  {res['probabilities']}")

    print(f"\nBest predicted platform: {best_platform(comparison)}")


if __name__ == "__main__":
    main()