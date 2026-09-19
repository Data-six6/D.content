"""Configuration module for Digital Content Engagement and Reach Predictor."""

import os
from pathlib import Path

# Base directories
BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"
PROCESSED_DATA_DIR = DATA_DIR / "processed"
RAW_DATA_DIR = DATA_DIR / "raw"
SAVED_MODELS_DIR = BASE_DIR / "ml" / "saved_models"
DOCS_DIR = BASE_DIR / "docs"

# File paths
CLEANED_DATA_PATH = PROCESSED_DATA_DIR / "cleaned_dataset.csv"
MODEL_READY_DATA_PATH = PROCESSED_DATA_DIR / "model_ready_dataset.csv"
X_TRAIN_PATH = PROCESSED_DATA_DIR / "X_train.csv"
X_TEST_PATH = PROCESSED_DATA_DIR / "X_test.csv"
Y_TRAIN_PATH = PROCESSED_DATA_DIR / "y_train.csv"
Y_TEST_PATH = PROCESSED_DATA_DIR / "y_test.csv"

BEST_MODEL_PATH = SAVED_MODELS_DIR / "best_model.pkl"
CLUSTER_MAPPING_PATH = SAVED_MODELS_DIR / "cluster_mapping.pkl"

# Feature schema
CATEGORICAL_FEATURES = [
    "Platform",
    "Content_Type",
    "Category",
    "Day_of_Week",
    "Sentiment",
    "Influencer_Tier",
]

NUMERICAL_FEATURES = [
    "Hour_of_Day",
    "Month",
    "Hashtag_Count",
    "Content_Length",
    "Follower_Count",
    "Has_Media",
    "Is_Verified",
]

# Post-event interaction metrics preserved in dataset for EDA and cluster profiling (NOT for clustering features)
POST_EVENT_METRICS = [
    "Likes",
    "Comments",
    "Shares",
    "Views",
    "Saves",
    "Engagement_Rate",
]

PRE_POSTING_FEATURES = CATEGORICAL_FEATURES + NUMERICAL_FEATURES
FEATURE_COLUMNS = PRE_POSTING_FEATURES
TARGET_COLUMN = "engagement_level"
TARGET_CLASSES = ["Low", "Medium", "High"]

# Supported platforms
SUPPORTED_PLATFORMS = ["TikTok", "Instagram", "Facebook"]

# Valid content types per platform
PLATFORM_CONTENT_TYPES = {
    "Instagram": ["Carousel", "Photo", "Reel", "Story", "Video"],
    "TikTok": ["Duet", "Stitch", "Story", "Video"],
    "Facebook": ["Live", "Post", "Story", "Video"],
}

# Cross-platform fallback map for platform comparison
CONTENT_TYPE_CROSS_PLATFORM_MAP = {
    "TikTok": {
        "Reel": "Video",
        "Photo": "Video",
        "Carousel": "Video",
        "Post": "Video",
        "Live": "Video",
    },
    "Instagram": {
        "Duet": "Reel",
        "Stitch": "Reel",
        "Post": "Photo",
        "Live": "Video",
    },
    "Facebook": {
        "Reel": "Video",
        "Photo": "Post",
        "Carousel": "Post",
        "Duet": "Video",
        "Stitch": "Video",
    },
}

# Valid categories
VALID_CATEGORIES = [
    "Business",
    "Education",
    "Entertainment",
    "Fashion",
    "Fitness",
    "Food",
    "Gaming",
    "Health",
    "Lifestyle",
    "Sports",
    "Technology",
    "Travel",
]

VALID_SENTIMENTS = ["Positive", "Neutral", "Negative"]
VALID_INFLUENCER_TIERS = ["Nano", "Micro", "Mid-tier", "Macro"]
DAYS_OF_WEEK = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
]

# Columns excluded from clustering feature space (IDs and binary outlier flags)
EXCLUDED_COLUMNS = [
    "Post_ID",
    "Flag_Engagement_Above_Views",
    "Flag_Engagement_Rate_Outlier",
    "Timestamp",
]
LEAKAGE_COLUMNS = EXCLUDED_COLUMNS

# Modeling constants
RANDOM_STATE = 42
TEST_SIZE = 0.20
