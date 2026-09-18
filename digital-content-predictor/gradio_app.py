"""Gradio web application for Meateka Digital Content Engagement & Reach Predictor.

Uses Unsupervised Learning (K-Means K=3) to provide pre-posting decision support.
"""

import sys
from pathlib import Path
from datetime import datetime, date
import json
import urllib.request
import pandas as pd
import gradio as gr

# Ensure project root in sys.path
BASE_DIR = Path(__file__).resolve().parent
if str(BASE_DIR) not in sys.path:
    sys.path.insert(0, str(BASE_DIR))

from ml.config import (
    SUPPORTED_PLATFORMS,
    PLATFORM_CONTENT_TYPES,
    VALID_CATEGORIES,
    VALID_SENTIMENTS,
    VALID_INFLUENCER_TIERS,
    DAYS_OF_WEEK,
)
from ml.prediction.predictor import EngagementPredictor, parse_date_to_month
from ml.prediction.platform_comparator import PlatformComparator
from ml.recommendations.posting_time import PostingTimeRecommender

# Initialize local services
predictor = EngagementPredictor()
comparator = PlatformComparator(predictor)
recommender = PostingTimeRecommender(predictor)

API_PREDICT_URL = "http://127.0.0.1:8000/api/predict"


def call_api_or_local_predict(payload: dict) -> dict:
    """Attempt HTTP POST to FastAPI backend; fall back cleanly to local predictor."""
    try:
        data_bytes = json.dumps(payload).encode("utf-8")
        req = urllib.request.Request(
            API_PREDICT_URL,
            data=data_bytes,
            headers={"Content-Type": "application/json"},
            method="POST",
        )
        with urllib.request.urlopen(req, timeout=2.0) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except Exception:
        # Seamless local predictor fallback
        return predictor.predict(payload)


def parse_profile_and_media(creator_profile: str, post_media: str) -> tuple:
    """Map user-friendly radio selections to (is_verified, has_media) booleans."""
    is_verified = (creator_profile == "Verified Creator")
    has_media = (post_media == "With Media")
    return is_verified, has_media


ALL_CONTENT_TYPES = sorted(
    list(set(ct for types in PLATFORM_CONTENT_TYPES.values() for ct in types))
)


def update_tab1_content_types(selected_platform: str):
    """Dynamically update content type choices when platform changes."""
    allowed = PLATFORM_CONTENT_TYPES.get(selected_platform, ["Video"])
    return gr.Dropdown(choices=allowed, value=allowed[0])


def predict_engagement(
    platform: str,
    content_type: str,
    category: str,
    day_of_week: str,
    sentiment: str,
    tier: str,
    followers: float,
    hashtags: float,
    hour: float,
    posting_date: str,
    caption: str,
    creator_profile: str = "Regular Creator",
    post_media: str = "With Media",
):
    """Feature 1: Predict engagement level with confidence breakdown."""
    is_verified, has_media = parse_profile_and_media(creator_profile, post_media)
    derived_month = parse_date_to_month(posting_date)
    derived_length = len(caption.strip()) if caption else 0

    payload = {
        "Platform": platform,
        "Content_Type": content_type,
        "Category": category,
        "Day_of_Week": day_of_week,
        "Sentiment": sentiment,
        "Influencer_Tier": tier,
        "Follower_Count": int(followers),
        "Hashtag_Count": int(hashtags),
        "Hour_of_Day": int(hour),
        "Month": int(derived_month),
        "Content_Length": int(derived_length),
        "Is_Verified": bool(is_verified),
        "Has_Media": bool(has_media),
    }

    result = call_api_or_local_predict(payload)
    tier_label = result.get("prediction") or result.get("predicted_engagement", "Medium")
    conf = float(result.get("confidence", 0.5)) * 100

    color_styles = {
        "High": ("#2e7d32", "#e8f5e9"),
        "Medium": ("#ef6c00", "#fff3e0"),
        "Low": ("#c62828", "#ffebee"),
    }
    text_color, bg_color = color_styles.get(tier_label, ("#1565c0", "#e3f2fd"))

    summary_html = f"""
    <div style="padding: 16px; border-radius: 8px; background-color: {bg_color}; border-left: 6px solid {text_color}; margin-bottom: 12px;">
        <h3 style="margin: 0; color: {text_color};">Predicted Engagement: {tier_label}</h3>
        <p style="margin: 6px 0 0 0; color: #333; font-size: 14px;">
            Cluster-Membership Similarity Confidence: <strong>{conf:.1f}%</strong> | Model: <strong>Inductive K-Means (K=3)</strong>
        </p>
        <p style="margin: 4px 0 0 0; color: #666; font-size: 12px;">
            Derived Inputs: Month = <strong>{derived_month}</strong> | Content Length = <strong>{derived_length} chars</strong>
        </p>
    </div>
    """

    probs = {label: float(prob) for label, prob in result["probabilities"].items()}
    return summary_html, probs


def compare_platforms(
    category: str,
    content_type: str,
    day_of_week: str,
    sentiment: str,
    tier: str,
    followers: float,
    hashtags: float,
    hour: float,
    posting_date: str,
    caption: str,
    creator_profile: str = "Regular Creator",
    post_media: str = "With Media",
):
    """Feature 2: Compare potential performance across all platforms."""
    is_verified, has_media = parse_profile_and_media(creator_profile, post_media)
    derived_month = parse_date_to_month(posting_date)
    derived_length = len(caption.strip()) if caption else 0

    base_post = {
        "Category": category,
        "Content_Type": content_type,
        "Day_of_Week": day_of_week,
        "Sentiment": sentiment,
        "Influencer_Tier": tier,
        "Follower_Count": int(followers),
        "Hashtag_Count": int(hashtags),
        "Hour_of_Day": int(hour),
        "Month": int(derived_month),
        "Content_Length": int(derived_length),
        "Is_Verified": bool(is_verified),
        "Has_Media": bool(has_media),
    }

    result = comparator.compare(base_post)
    best_plat = result["best_platform"]
    insight = result["summary_insight"]

    summary_html = f"""
    <div style="padding: 16px; border-radius: 8px; background-color: #e8f5e9; border-left: 6px solid #2e7d32; margin-bottom: 12px;">
        <h3 style="margin: 0; color: #2e7d32;">🏆 Recommended Platform: {best_plat}</h3>
        <p style="margin: 6px 0 0 0; color: #333; font-size: 14px;">{insight}</p>
        <p style="margin: 4px 0 0 0; color: #666; font-size: 12px;">
            Derived Inputs: Month = <strong>{derived_month}</strong> | Content Length = <strong>{derived_length} chars</strong>
        </p>
    </div>
    """

    rows = []
    for plat in result["recommended_platform_ranking"]:
        pdata = result["platform_predictions"][plat]
        rows.append({
            "Platform": plat,
            "Adapted Format": pdata["adapted_content_type"],
            "Predicted Tier": pdata["predicted_engagement"],
            "High Cluster Match": f"{pdata['high_probability'] * 100:.1f}%",
            "Cluster Confidence": f"{pdata['confidence'] * 100:.1f}%",
        })

    return summary_html, pd.DataFrame(rows)


def recommend_best_time(
    platform: str,
    content_type: str,
    category: str,
    day_of_week: str,
    sentiment: str,
    tier: str,
    followers: float,
    hashtags: float,
    posting_date: str,
    caption: str,
    creator_profile: str = "Regular Creator",
    post_media: str = "With Media",
):
    """Feature 3: Find the optimal posting hour of the day."""
    is_verified, has_media = parse_profile_and_media(creator_profile, post_media)
    derived_month = parse_date_to_month(posting_date)
    derived_length = len(caption.strip()) if caption else 0

    base_post = {
        "Platform": platform,
        "Category": category,
        "Content_Type": content_type,
        "Day_of_Week": day_of_week,
        "Sentiment": sentiment,
        "Influencer_Tier": tier,
        "Follower_Count": int(followers),
        "Hashtag_Count": int(hashtags),
        "Month": int(derived_month),
        "Content_Length": int(derived_length),
        "Is_Verified": bool(is_verified),
        "Has_Media": bool(has_media),
    }

    result = recommender.get_best_posting_times(base_post)
    peak_hour = result["recommended_peak_hour"]
    summary = result["recommendation_summary"]

    summary_html = f"""
    <div style="padding: 16px; border-radius: 8px; background-color: #e3f2fd; border-left: 6px solid #1565c0; margin-bottom: 12px;">
        <h3 style="margin: 0; color: #1565c0;">⏰ Recommended Peak Time: {peak_hour}</h3>
        <p style="margin: 6px 0 0 0; color: #333; font-size: 14px;">{summary}</p>
        <p style="margin: 4px 0 0 0; color: #666; font-size: 12px;">
            Derived Inputs: Month = <strong>{derived_month}</strong> | Content Length = <strong>{derived_length} chars</strong>
        </p>
    </div>
    """

    rows = []
    for item in result["all_predictions"]:
        rows.append({
            "Time Window": item["time_window"],
            "Predicted Engagement": item["predicted_engagement"],
            "High Cluster Match": f"{item['high_probability'] * 100:.1f}%",
            "Medium Cluster Match": f"{item['medium_probability'] * 100:.1f}%",
        })

    return summary_html, pd.DataFrame(rows)


# =====================================================================
# Gradio UI Layout
# =====================================================================

custom_css = """
footer {visibility: hidden}
.gradio-container {max-width: 960px !important; margin: auto;}
"""

with gr.Blocks(title="Meateka ML Predictor") as demo:
    gr.Markdown(
        """
        # 📱 Meateka: Digital Content Engagement & Reach Predictor
        **Interactive Pre-Posting Optimization Dashboard**  
        *Powered by Unsupervised K-Means Clustering (K=3)*
        """
    )

    with gr.Tabs():
        # -------------------------------------------------------------
        # TAB 1: Engagement Prediction
        # -------------------------------------------------------------
        with gr.Tab("🎯 1. Predict Engagement Level"):
            gr.Markdown("Configure draft attributes to predict whether engagement will match **High**, **Medium**, or **Low** historical patterns.")

            with gr.Row():
                t1_platform = gr.Dropdown(
                    label="Platform",
                    choices=SUPPORTED_PLATFORMS,
                    value="TikTok",
                )
                t1_content_type = gr.Dropdown(
                    label="Content Type",
                    choices=PLATFORM_CONTENT_TYPES["TikTok"],
                    value="Video",
                )
                t1_category = gr.Dropdown(
                    label="Category / Niche",
                    choices=VALID_CATEGORIES,
                    value="Food",
                )

            with gr.Row():
                t1_day = gr.Dropdown(
                    label="Day of Week",
                    choices=DAYS_OF_WEEK,
                    value="Friday",
                )
                t1_sentiment = gr.Dropdown(
                    label="Caption Sentiment",
                    choices=VALID_SENTIMENTS,
                    value="Positive",
                )
                t1_tier = gr.Dropdown(
                    label="Influencer Tier",
                    choices=VALID_INFLUENCER_TIERS,
                    value="Micro",
                )

            with gr.Row():
                t1_followers = gr.Slider(
                    label="Follower Count",
                    minimum=100,
                    maximum=500000,
                    step=1000,
                    value=35000,
                )
                t1_hashtags = gr.Slider(
                    label="Hashtag Count",
                    minimum=0,
                    maximum=30,
                    step=1,
                    value=4,
                )
                t1_hour = gr.Slider(
                    label="Posting Hour (24h)",
                    minimum=0,
                    maximum=23,
                    step=1,
                    value=19,
                )

            with gr.Row():
                t1_date = gr.Textbox(
                    label="Planned Posting Date",
                    value=datetime.now().strftime("%Y-%m-%d"),
                    info="Format: YYYY-MM-DD (Derives Month automatically)",
                )
                t1_caption = gr.Textbox(
                    label="Post Caption / Draft Content",
                    value="Check out our brand new recipe! Delicious, fast, and healthy. #food #cooking",
                    placeholder="Type or paste draft caption here...",
                    lines=2,
                    info="Character count automatically derives Content_Length",
                )

            with gr.Row():
                t1_creator_profile = gr.Radio(
                    label="Creator Profile",
                    choices=["Regular Creator", "Verified Creator"],
                    value="Regular Creator",
                )
                t1_post_media = gr.Radio(
                    label="Post Media",
                    choices=["With Media", "Text-Only"],
                    value="With Media",
                )

            t1_platform.change(
                fn=update_tab1_content_types,
                inputs=[t1_platform],
                outputs=[t1_content_type],
            )

            t1_button = gr.Button("🚀 Predict Engagement", variant="primary")
            t1_summary = gr.HTML()
            t1_probs = gr.Label(label="Cluster Membership Similarity Distribution", num_top_classes=3)

            t1_button.click(
                fn=predict_engagement,
                inputs=[
                    t1_platform,
                    t1_content_type,
                    t1_category,
                    t1_day,
                    t1_sentiment,
                    t1_tier,
                    t1_followers,
                    t1_hashtags,
                    t1_hour,
                    t1_date,
                    t1_caption,
                    t1_creator_profile,
                    t1_post_media,
                ],
                outputs=[t1_summary, t1_probs],
            )

        # -------------------------------------------------------------
        # TAB 2: Platform Comparison
        # -------------------------------------------------------------
        with gr.Tab("⚖️ 2. Platform Comparison"):
            gr.Markdown("Have a post concept ready? Compare how it performs across **TikTok**, **Instagram**, and **Facebook**.")

            with gr.Row():
                t2_category = gr.Dropdown(
                    label="Category",
                    choices=VALID_CATEGORIES,
                    value="Technology",
                )
                t2_content_type = gr.Dropdown(
                    label="Original Format",
                    choices=ALL_CONTENT_TYPES,
                    value="Video",
                )
                t2_day = gr.Dropdown(
                    label="Day of Week",
                    choices=DAYS_OF_WEEK,
                    value="Thursday",
                )

            with gr.Row():
                t2_sentiment = gr.Dropdown(
                    label="Sentiment",
                    choices=VALID_SENTIMENTS,
                    value="Positive",
                )
                t2_tier = gr.Dropdown(
                    label="Influencer Tier",
                    choices=VALID_INFLUENCER_TIERS,
                    value="Micro",
                )
                t2_followers = gr.Slider(
                    label="Follower Count",
                    minimum=100,
                    maximum=500000,
                    step=1000,
                    value=45000,
                )

            with gr.Row():
                t2_hashtags = gr.Slider(
                    label="Hashtag Count",
                    minimum=0,
                    maximum=30,
                    step=1,
                    value=5,
                )
                t2_hour = gr.Slider(
                    label="Posting Hour (24h)",
                    minimum=0,
                    maximum=23,
                    step=1,
                    value=18,
                )

            with gr.Row():
                t2_date = gr.Textbox(
                    label="Planned Posting Date",
                    value=datetime.now().strftime("%Y-%m-%d"),
                    info="Format: YYYY-MM-DD",
                )
                t2_caption = gr.Textbox(
                    label="Post Caption / Draft Content",
                    value="Reviewing the latest tech breakthrough! Watch full review. #tech #gadgets",
                    lines=2,
                    info="Derives Content_Length",
                )

            with gr.Row():
                t2_creator_profile = gr.Radio(
                    label="Creator Profile",
                    choices=["Regular Creator", "Verified Creator"],
                    value="Regular Creator",
                )
                t2_post_media = gr.Radio(
                    label="Post Media",
                    choices=["With Media", "Text-Only"],
                    value="With Media",
                )

            t2_button = gr.Button("⚖️ Compare Platforms", variant="primary")
            t2_summary = gr.HTML()
            t2_table = gr.Dataframe(label="Platform Comparison Table")

            t2_button.click(
                fn=compare_platforms,
                inputs=[
                    t2_category,
                    t2_content_type,
                    t2_day,
                    t2_sentiment,
                    t2_tier,
                    t2_followers,
                    t2_hashtags,
                    t2_hour,
                    t2_date,
                    t2_caption,
                    t2_creator_profile,
                    t2_post_media,
                ],
                outputs=[t2_summary, t2_table],
            )

        # -------------------------------------------------------------
        # TAB 3: Best Posting Time
        # -------------------------------------------------------------
        with gr.Tab("⏰ 3. Best Posting Time"):
            gr.Markdown("Discover the optimal time window to publish your content for maximum engagement.")

            with gr.Row():
                t3_platform = gr.Dropdown(
                    label="Target Platform",
                    choices=SUPPORTED_PLATFORMS,
                    value="TikTok",
                )
                t3_content_type = gr.Dropdown(
                    label="Content Type",
                    choices=ALL_CONTENT_TYPES,
                    value="Video",
                )
                t3_category = gr.Dropdown(
                    label="Category",
                    choices=VALID_CATEGORIES,
                    value="Food",
                )

            with gr.Row():
                t3_day = gr.Dropdown(
                    label="Day of Week",
                    choices=DAYS_OF_WEEK,
                    value="Thursday",
                )
                t3_sentiment = gr.Dropdown(
                    label="Sentiment",
                    choices=VALID_SENTIMENTS,
                    value="Positive",
                )
                t3_tier = gr.Dropdown(
                    label="Influencer Tier",
                    choices=VALID_INFLUENCER_TIERS,
                    value="Micro",
                )

            with gr.Row():
                t3_followers = gr.Slider(
                    label="Follower Count",
                    minimum=100,
                    maximum=500000,
                    step=1000,
                    value=45000,
                )
                t3_hashtags = gr.Slider(
                    label="Hashtag Count",
                    minimum=0,
                    maximum=30,
                    step=1,
                    value=5,
                )

            with gr.Row():
                t3_date = gr.Textbox(
                    label="Planned Posting Date",
                    value=datetime.now().strftime("%Y-%m-%d"),
                    info="Format: YYYY-MM-DD",
                )
                t3_caption = gr.Textbox(
                    label="Post Caption / Draft Content",
                    value="Cooking our favorite evening dinner! Easy 15-minute recipe. #quickmeals",
                    lines=2,
                    info="Derives Content_Length",
                )

            with gr.Row():
                t3_creator_profile = gr.Radio(
                    label="Creator Profile",
                    choices=["Regular Creator", "Verified Creator"],
                    value="Regular Creator",
                )
                t3_post_media = gr.Radio(
                    label="Post Media",
                    choices=["With Media", "Text-Only"],
                    value="With Media",
                )

            t3_button = gr.Button("🔍 Find Optimal Posting Time", variant="primary")
            t3_summary = gr.HTML()
            t3_table = gr.Dataframe(label="Hourly Performance Breakdown")

            t3_button.click(
                fn=recommend_best_time,
                inputs=[
                    t3_platform,
                    t3_content_type,
                    t3_category,
                    t3_day,
                    t3_sentiment,
                    t3_tier,
                    t3_followers,
                    t3_hashtags,
                    t3_date,
                    t3_caption,
                    t3_creator_profile,
                    t3_post_media,
                ],
                outputs=[t3_summary, t3_table],
            )


if __name__ == "__main__":
    print("\n" + "=" * 60)
    print(" [MEATEKA] Starting Gradio Web Application...")
    print(" Open your browser at: http://127.0.0.1:7860")
    print("=" * 60 + "\n")
    demo.launch(
        server_name="127.0.0.1",
        server_port=7860,
        inbrowser=False,
        share=False,
        theme=gr.themes.Soft(),
        css=custom_css,
    )
