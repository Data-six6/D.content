"""
FEATURE 3 — BEST POSTING TIME RECOMMENDATION
==============================================
No ML model. Uses historical Engagement_Rate grouped by Platform + Category
+ Hour_of_Day to recommend the best hour to post.

Uses the MEDIAN (not mean) so a single outlier/viral post can't skew the
result, and requires a minimum number of historical posts (MIN_SAMPLES)
before trusting a given hour's number -- otherwise a "best hour" based on
just 1-2 posts would be unreliable.

Requirements:
    pip install pandas

Usage:
    python feature3_best_posting_time.py
"""

import pandas as pd
from common import MIN_SAMPLES

DATA_PATH = "E:\\Y2-ITE\\nextgen\\Data _Engagement.csv"


def best_posting_time(df: pd.DataFrame, platform: str, category: str):
    """
    Returns (best_hour, ranked_dataframe).
    best_hour is None if no hour in this Platform+Category combo has at
    least MIN_SAMPLES historical posts to be confident about.
    """
    sub = df[(df.Platform == platform) & (df.Category == category)]
    stats = sub.groupby("Hour_of_Day")["Engagement_Rate"].agg(["median", "count"]).reset_index()
    reliable = stats[stats["count"] >= MIN_SAMPLES].sort_values("median", ascending=False)
    if len(reliable) == 0:
        return None, stats.sort_values("count", ascending=False)
    return int(reliable.iloc[0]["Hour_of_Day"]), reliable


def best_posting_time_all_platforms(df: pd.DataFrame, category: str,
                                     platforms=("TikTok", "Instagram", "Facebook")) -> dict:
    """Convenience wrapper: best hour for each platform, for a given category."""
    return {p: best_posting_time(df, p, category)[0] for p in platforms}


def main():
    print("Loading data...")
    df = pd.read_csv(DATA_PATH)

    platform, category = "TikTok", "Food"
    print(f"\nBest posting time for {platform} + {category}:")
    hour, ranked = best_posting_time(df, platform, category)
    if hour is not None:
        print(f"  Recommended hour: {hour}:00")
    else:
        print("  Not enough historical data for a confident recommendation.")
    print(ranked.to_string(index=False))

    print(f"\nBest posting time for '{category}' content, across all platforms:")
    per_platform = best_posting_time_all_platforms(df, category)
    for p, h in per_platform.items():
        print(f"  {p:10s} -> {h}:00" if h is not None else f"  {p:10s} -> not enough data")


if __name__ == "__main__":
    main()