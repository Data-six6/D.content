"""Pydantic schemas for Meateka ML Prediction API."""

from typing import Dict, Any, List, Optional
from pydantic import BaseModel, Field


class PredictionRequest(BaseModel):
    """Schema for single post engagement prediction."""
    Platform: str = Field(..., description="Target platform (TikTok, Instagram, Facebook)", example="TikTok")
    Content_Type: str = Field(..., description="Format of content (Video, Photo, Reel, etc.)", example="Video")
    Category: str = Field(..., description="Content niche/category", example="Food")
    Day_of_Week: str = Field(..., description="Day of publication", example="Friday")
    Sentiment: str = Field(default="Positive", description="Caption sentiment (Positive, Neutral, Negative)", example="Positive")
    Influencer_Tier: str = Field(default="Micro", description="Creator tier (Nano, Micro, Mid-tier, Macro)", example="Micro")
    Hour_of_Day: int = Field(default=18, ge=0, le=23, description="Hour of the day (0-23)", example=19)
    Month: Optional[int] = Field(default=None, ge=1, le=12, description="Month of publication (1-12)", example=9)
    Hashtag_Count: int = Field(default=4, ge=0, le=30, description="Number of hashtags used", example=4)
    Content_Length: Optional[int] = Field(default=None, ge=0, description="Caption length in characters", example=120)
    Follower_Count: int = Field(default=25000, ge=0, description="Total account followers", example=35000)
    Has_Media: bool = Field(default=True, description="True if post contains image/video, False if text-only", example=True)
    Is_Verified: bool = Field(default=False, description="True if creator account is verified", example=False)

    # Optional UX convenience inputs (derived automatically if provided)
    planned_posting_date: Optional[str] = Field(default=None, description="Optional ISO date (e.g. '2026-09-20') to derive Month", example="2026-09-20")
    caption: Optional[str] = Field(default=None, description="Optional caption text to derive Content_Length = len(caption)", example="Check out our new culinary creation!")


class PredictionResponse(BaseModel):
    """Schema for prediction response."""
    prediction: str = Field(..., description="Predicted tier: Low, Medium, or High", example="High")
    predicted_engagement: str = Field(..., description="Alias for prediction", example="High")
    cluster_id: int = Field(..., description="Identified cluster ID (0, 1, 2)", example=1)
    confidence: float = Field(..., description="Soft similarity score for assigned cluster (0.0 - 1.0)", example=0.5039)
    confidence_metric: str = Field(default="cluster_membership_similarity", description="Defines what confidence measures")
    probabilities: Dict[str, float] = Field(..., description="Cluster membership similarity distribution")
    platform: str
    category: str
    content_type: str


class PlatformComparisonRequest(BaseModel):
    """Schema for cross-platform simulation request."""
    Category: str = Field(..., example="Technology")
    Content_Type: str = Field(default="Video", example="Video")
    Day_of_Week: str = Field(default="Thursday", example="Thursday")
    Sentiment: str = Field(default="Positive", example="Positive")
    Influencer_Tier: str = Field(default="Micro", example="Micro")
    Follower_Count: int = Field(default=45000, example=45000)
    Hashtag_Count: int = Field(default=5, example=5)
    Hour_of_Day: int = Field(default=18, example=18)
    Month: Optional[int] = Field(default=None, example=9)
    Content_Length: Optional[int] = Field(default=None, example=150)
    Has_Media: bool = Field(default=True, example=True)
    Is_Verified: bool = Field(default=False, example=False)
    planned_posting_date: Optional[str] = None
    caption: Optional[str] = None


class BestTimeRequest(BaseModel):
    """Schema for posting time recommendation request."""
    Platform: str = Field(default="TikTok", example="TikTok")
    Category: str = Field(default="Food", example="Food")
    Content_Type: str = Field(default="Video", example="Video")
    Day_of_Week: str = Field(default="Thursday", example="Thursday")
    Sentiment: str = Field(default="Positive", example="Positive")
    Influencer_Tier: str = Field(default="Micro", example="Micro")
    Follower_Count: int = Field(default=45000, example=45000)
    Hashtag_Count: int = Field(default=5, example=5)
    Month: Optional[int] = Field(default=None, example=9)
    Content_Length: Optional[int] = Field(default=None, example=150)
    Has_Media: bool = Field(default=True, example=True)
    Is_Verified: bool = Field(default=False, example=False)
    planned_posting_date: Optional[str] = None
    caption: Optional[str] = None


class HealthResponse(BaseModel):
    """Health check status response."""
    status: str
    model_name: str
    num_clusters: int
    tiers: List[str]
