"""
FEATURE 1 — ENGAGEMENT PREDICTION
==================================
Trains a Logistic Regression model to predict whether a planned post will get
Low / Medium / High engagement, based on features known BEFORE posting.

Saves the trained model + scaler + column list to feature1_model.pkl, which
Feature 2 (platform comparison) loads and reuses -- no separate model needed.

Requirements:
    pip install pandas numpy scikit-learn

Usage:
    python feature1_engagement_prediction.py
"""

import pandas as pd
import pickle
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

from common import (
    CATEGORICAL_COLS, NUMERIC_COLS, build_target, build_features, encode_single_post,
)

DATA_PATH = "E:\\Y2-ITE\\nextgen\\Data _Engagement.csv"
MODEL_PATH = "feature1_model.pkl"
RANDOM_STATE = 42
TEST_SIZE = 0.2


def split_and_scale(X: pd.DataFrame, y: pd.Series):
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=TEST_SIZE, random_state=RANDOM_STATE, stratify=y
    )
    scaler = StandardScaler()
    X_train_scaled = X_train.copy()
    X_test_scaled = X_test.copy()
    # fit the scaler on TRAIN ONLY, then apply to test -- never fit on test data
    X_train_scaled[NUMERIC_COLS] = scaler.fit_transform(X_train[NUMERIC_COLS])
    X_test_scaled[NUMERIC_COLS] = scaler.transform(X_test[NUMERIC_COLS])
    return X_train_scaled, X_test_scaled, y_train, y_test, scaler


def train_model(X_train, y_train) -> LogisticRegression:
    model = LogisticRegression(max_iter=1000, random_state=RANDOM_STATE)
    model.fit(X_train, y_train)
    return model


def evaluate_model(model, X_test, y_test):
    y_pred = model.predict(X_test)
    labels = ["Low", "Medium", "High"]
    print(f"\nAccuracy: {accuracy_score(y_test, y_pred):.4f}\n")
    print("Classification report:")
    print(classification_report(y_test, y_pred))
    print("Confusion matrix (rows = actual, cols = predicted):")
    cm = confusion_matrix(y_test, y_pred, labels=labels)
    print(pd.DataFrame(cm, index=labels, columns=labels))


def interpret_model(model, X_train, top_n: int = 8):
    coefs = pd.DataFrame(model.coef_, columns=X_train.columns, index=model.classes_)
    for cls in model.classes_:
        print(f"\n--- Top features pushing TOWARD {cls} ---")
        print(coefs.loc[cls].sort_values(ascending=False).head(top_n).round(3))
    print("\n--- Overall importance (avg absolute coefficient across classes) ---")
    print(coefs.abs().mean(axis=0).sort_values(ascending=False).head(15).round(3))


def predict_new_post(model, scaler, X_columns, post: dict) -> str:
    """
    post: a dict with the raw feature values, e.g.
        {
            "Platform": "TikTok", "Content_Type": "Video", "Category": "Food",
            "Day_of_Week": "Friday", "Sentiment": "Positive", "Influencer_Tier": "Micro",
            "Follower_Count": 5000, "Hour_of_Day": 19, "Hashtag_Count": 8,
            "Content_Length": 120, "Has_Media": True, "Is_Verified": False,
        }
    """
    row_encoded = encode_single_post(post, list(X_columns))
    row_encoded[NUMERIC_COLS] = scaler.transform(row_encoded[NUMERIC_COLS])
    return model.predict(row_encoded)[0]


def main():
    print("Loading data...")
    df = pd.read_csv(DATA_PATH)

    print("Building target variable...")
    df = build_target(df)
    print(df["Engagement_Level"].value_counts())

    print("\nBuilding features...")
    X = build_features(df)
    y = df["Engagement_Level"]

    print("Splitting and scaling...")
    X_train, X_test, y_train, y_test, scaler = split_and_scale(X, y)

    print("Training Logistic Regression...")
    model = train_model(X_train, y_train)

    evaluate_model(model, X_test, y_test)
    interpret_model(model, X_train)

    # Save trained model + scaler + column list so Feature 2 can reuse it
    with open(MODEL_PATH, "wb") as f:
        pickle.dump({"model": model, "scaler": scaler, "columns": list(X.columns)}, f)
    print(f"\nSaved trained model to {MODEL_PATH}")

    # Example: predict a brand-new planned post
    example_post = {
        "Platform": "TikTok", "Content_Type": "Video", "Category": "Food",
        "Day_of_Week": "Friday", "Sentiment": "Positive", "Influencer_Tier": "Micro",
        "Follower_Count": 5000, "Hour_of_Day": 19, "Hashtag_Count": 8,
        "Content_Length": 120, "Has_Media": True, "Is_Verified": False,
    }
    result = predict_new_post(model, scaler, X.columns, example_post)
    print(f"\nExample prediction for a new post: {result}")


if __name__ == "__main__":
    main()