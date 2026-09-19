# Backend Integration Guide — Meateka ML Services

This document details how to load and consume the trained **Unsupervised Machine Learning Pipeline** and its recommendation services in production (e.g., FastAPI, Flask, Node.js/Next.js backend).

---

## 1. Saved Artifacts Required for Deployment

The production predictor relies on two files located in `ml/saved_models/`:

| File | Description |
| :--- | :--- |
| `best_model.pkl` | Scikit-Learn `Pipeline` containing the `ColumnTransformer` (scaling continuous + one-hot encoding categoricals + passthrough binary) bundled with the `InductiveKMeans` model ($K=3$). |
| `cluster_mapping.pkl` | Dictionary mapping discovered cluster IDs (`0, 1, 2`) to human-interpretable performance labels (`"Low"`, `"Medium"`, `"High"`). |

---

## 2. Python Dependencies

Ensure the deployment environment has the following packages installed:

```bash
pip install pandas numpy scikit-learn joblib fastapi uvicorn pydantic
```

---

## 3. High-Level Python Service Usage

You do **not** need to manually preprocess data or parse raw cluster distances. Use the provided production-ready service classes directly:

```python
from ml.prediction.predictor import EngagementPredictor
from ml.prediction.platform_comparator import PlatformComparator
from ml.recommendations.posting_time import PostingTimeRecommender

# Initialize services once at application startup (singleton pattern)
predictor = EngagementPredictor()
comparator = PlatformComparator(predictor)
recommender = PostingTimeRecommender(predictor)
```

### Feature 1: Engagement Prediction
Predicts engagement tier (`Low`, `Medium`, `High`) and cluster-membership similarity confidence probabilities using distance-to-centroid softmax.

```python
sample_post = {
    "Platform": "TikTok",
    "Content_Type": "Video",
    "Category": "Fashion",
    "Day_of_Week": "Friday",
    "Sentiment": "Positive",
    "Influencer_Tier": "Micro",
    "Hour_of_Day": 19,
    "Month": 9,
    "Hashtag_Count": 5,
    "Content_Length": 120,
    "Follower_Count": 35000,
    "Has_Media": True,
    "Is_Verified": False
}

result = predictor.predict(sample_post)
# Output:
# {
#   "prediction": "High",
#   "predicted_engagement": "High",
#   "cluster_id": 1,
#   "confidence": 0.4928,
#   "confidence_metric": "cluster_membership_similarity",
#   "probabilities": {"Low": 0.2859, "Medium": 0.2213, "High": 0.4928},
#   "platform": "TikTok",
#   "category": "Fashion",
#   "content_type": "Video"
# }
```

### Feature 2: Cross-Platform Comparison
Tests the same post concept across TikTok, Instagram, and Facebook, automatically adapting the format (e.g., Reel -> Video) and ranking the best platform.

```python
comparison = comparator.compare(sample_post)
# Output:
# {
#   "best_platform": "Instagram",
#   "summary_insight": "'Instagram' shows the strongest engagement potential...",
#   "platform_predictions": { ... },
#   "recommended_platform_ranking": ["Instagram", "Facebook", "TikTok"]
# }
```

### Feature 3: Best Posting Time Recommendation
Evaluates candidate posting hours across the day to find the time window that maximizes high-engagement probability.

```python
times = recommender.get_best_posting_times(sample_post)
# Output:
# {
#   "platform": "TikTok",
#   "recommended_peak_hour": "12:00 - 12:59",
#   "all_predictions": [ ... ],
#   "recommendation_summary": "Based on predicted engagement, the recommended posting time is 12:00 - 12:59."
# }
```

---

## 4. Input Validation & Fault Tolerance

The `EngagementPredictor` has built-in sanitization:
* Missing non-critical fields automatically receive sensible defaults (`Has_Media=True`, `Sentiment="Positive"`, etc.).
* Unknown categories or invalid platforms automatically fall back to supported categories without crashing the server.

---

## 5. REST API Endpoints (FastAPI)

The FastAPI server in `backend/main.py` provides production HTTP REST endpoints:

Start the API:
```bash
python -m uvicorn backend.main:app --host 127.0.0.1 --port 8000
```
Interactive Swagger Documentation: `http://127.0.0.1:8000/docs`

### Endpoints:
1. `GET /api/health`: Health check and model metadata.
2. `POST /api/predict`: Predict engagement tier (`Low`, `Medium`, `High`) and similarity probabilities. Accepts either explicit `Month` and `Content_Length` OR `planned_posting_date` and `caption`.
3. `POST /api/compare-platforms`: Simulates post performance across TikTok, Instagram, and Facebook.
4. `POST /api/recommend-best-time`: Recommends the optimal publishing hour of the day.

