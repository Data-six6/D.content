"""FastAPI application for Meateka ML Services."""

import sys
from pathlib import Path
from datetime import datetime

# Ensure project root is in sys.path
BASE_DIR = Path(__file__).resolve().parent.parent
if str(BASE_DIR) not in sys.path:
    sys.path.insert(0, str(BASE_DIR))

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from ml.prediction.predictor import EngagementPredictor, parse_date_to_month, predict_content_plan
from ml.prediction.platform_comparator import PlatformComparator
from ml.recommendations.posting_time import PostingTimeRecommender
try:
    from ml_api.schemas import (
        PredictionRequest,
        PredictionResponse,
        PlatformComparisonRequest,
        BestTimeRequest,
        HealthResponse,
        ContentPlanRequest,
    )
except ImportError:
    from backend.schemas import (
        PredictionRequest,
        PredictionResponse,
        PlatformComparisonRequest,
        BestTimeRequest,
        HealthResponse,
        ContentPlanRequest,
    )



app = FastAPI(
    title="Meateka ML Prediction API",
    description="Production REST API for Digital Content Engagement & Reach Predictor using Unsupervised Learning (K-Means K=3).",
    version="2.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize ML services as singletons at application startup
predictor = EngagementPredictor()
comparator = PlatformComparator(predictor)
recommender = PostingTimeRecommender(predictor)


def sanitize_incoming_payload(data: dict) -> dict:
    """Extract Month from date and Content_Length from caption if provided."""
    payload = dict(data)
    
    # 1. Month resolution
    if payload.get("Month") is None:
        if payload.get("planned_posting_date"):
            payload["Month"] = parse_date_to_month(payload["planned_posting_date"])
        else:
            payload["Month"] = datetime.now().month

    # 2. Content_Length resolution
    if payload.get("Content_Length") is None:
        if payload.get("caption") is not None:
            payload["Content_Length"] = len(str(payload["caption"]).strip())
        else:
            payload["Content_Length"] = 0

    return payload


@app.get("/api/health", response_model=HealthResponse, tags=["Health"])
def health_check():
    """Service health and model metadata endpoint."""
    return HealthResponse(
        status="healthy",
        model_name="Inductive K-Means (K=3)",
        num_clusters=3,
        tiers=["Low", "Medium", "High"],
    )


@app.post("/api/predict", response_model=PredictionResponse, tags=["Prediction"])
def predict_engagement(request: PredictionRequest):
    """Predict engagement tier (Low, Medium, High) and cluster-membership similarity probabilities."""
    try:
        raw_dict = request.model_dump()
        payload = sanitize_incoming_payload(raw_dict)
        result = predictor.predict(payload)
        return PredictionResponse(**result)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction error: {str(e)}")


@app.post("/api/compare-platforms", tags=["Recommendation"])
def compare_platforms(request: PlatformComparisonRequest):
    """Simulate post across TikTok, Instagram, and Facebook with format adaptation and ranking."""
    try:
        raw_dict = request.model_dump()
        payload = sanitize_incoming_payload(raw_dict)
        return comparator.compare(payload)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Platform comparison error: {str(e)}")


@app.post("/api/recommend-best-time", tags=["Recommendation"])
def recommend_best_time(request: BestTimeRequest):
    """Find the optimal publication hour of day to maximize high-engagement cluster similarity."""
    try:
        raw_dict = request.model_dump()
        payload = sanitize_incoming_payload(raw_dict)
        return recommender.get_best_posting_times(payload)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Time recommendation error: {str(e)}")


@app.post("/api/predict-content-plan", tags=["Unified Plan"])
@app.post("/predict-content-plan", tags=["Unified Plan"])
def api_predict_content_plan(request: ContentPlanRequest):
    """Unified API performing engagement prediction, platform comparison, and best posting time in one call."""
    try:
        raw_dict = request.model_dump(exclude_unset=False)
        return predict_content_plan(raw_dict)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Content plan prediction error: {str(e)}")


@app.post("/api/recommendation", tags=["Recommendation"])
@app.post("/api/recommendations", tags=["Recommendation"])
def api_recommendation(request: ContentPlanRequest):
    """Master backend endpoint returning the exact composite Recommendation schema."""
    try:
        raw_dict = request.model_dump(exclude_unset=False)
        from ml.recommendations.recommendation_service import generate_recommendation
        return generate_recommendation(raw_dict)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Recommendation error: {str(e)}")


@app.post("/api/ml-plan", tags=["ML Unified Plan"])
@app.post("/api/predict-ml-plan", tags=["ML Unified Plan"])
def api_predict_ml_plan(request: ContentPlanRequest):
    """Clean ML wrapper endpoint combining engagement prediction, platform comparison, and best posting time."""
    try:
        raw_dict = request.model_dump(exclude_unset=False)
        from ml.prediction.predictor import predict_ml_plan
        return predict_ml_plan(raw_dict)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"ML plan prediction error: {str(e)}")


if __name__ == "__main__":
    import uvicorn
    print("\n" + "=" * 60)
    print(" [MEATEKA] Starting FastAPI Backend on http://127.0.0.1:8000")
    print(" Swagger Docs available at: http://127.0.0.1:8000/docs")
    print("=" * 60 + "\n")
    uvicorn.run("backend.main:app", host="127.0.0.1", port=8000, reload=False)
