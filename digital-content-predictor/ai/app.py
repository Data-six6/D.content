"""
Gradio testing interface for Meateka AI functions.
Run with: python app.py  (from the ai/ folder)
"""

import time
import gradio as gr

from content_idea.idea_generator import generate_content_idea
from caption.caption_generator import generate_captions_for_platforms
from shared.safety_check import is_content_safe


CATEGORIES = ["Food", "Travel", "Gaming", "Beauty", "Fashion", "Fitness",
              "Lifestyle", "Entertainment", "Tech", "Education", "Comedy", "Music"]
GOALS = ["Maximize Reach", "Drive Sales", "Increase Followers", "Brand Awareness"]
PLATFORMS = ["TikTok", "Instagram", "Facebook"]
PURPOSES = ["Content Creator", "Business Owner"]

CATEGORY_PLACEHOLDERS = {
    "Food": "e.g., Street Food Tour, Coffee Shop",
    "Travel": "e.g., Siem Reap Temple Tour",
    "Gaming": "e.g., Mobile Legends Account",
    "Beauty": "e.g., Facial Cleanser, Lipstick",
    "Fashion": "e.g., Streetwear Clothing Line",
    "Fitness": "e.g., Home Workout Program",
    "Lifestyle": "e.g., Morning Routine Vlog",
    "Entertainment": "e.g., Comedy Skit Series",
    "Tech": "e.g., Budget Smartphone Review",
    "Education": "e.g., Math Tutoring Course",
    "Comedy": "e.g., Prank Video Series",
    "Music": "e.g., Original Song Cover",
}


def format_idea_result(result):
    if not result or not result.get("recommended_idea"):
        return ("### Error\n\n"
                "The AI returned an empty result. This usually means the API is overloaded. "
                "Please wait a few seconds and try again.")

    output = f"## Recommended Idea\n\n{result['recommended_idea']}\n\n"
    output += f"**Content Type:** {result['content_type']}\n\n"

    alternatives = result.get("alternative_ideas", [])
    if alternatives:
        output += "## Alternative Ideas\n\n"
        for i, alt in enumerate(alternatives, 1):
            output += f"{i}. {alt}\n"

    posting_times = result.get("best_posting_times", {})
    if posting_times:
        output += "\n## Best Posting Times (Cambodia)\n\n"
        for platform, times in posting_times.items():
            output += f"- **{platform}:** {times}\n"

    return output


def format_caption_results(results):
    if not results:
        return "### Error\n\nNo results returned. Please try again."

    output = ""
    for platform, data in results.items():
        if not data or not data.get("caption"):
            output += f"### {platform}\n\n*Failed to generate. Please try again.*\n\n---\n\n"
            continue

        safety = data.get("safety", {})
        hashtags = data.get("hashtags", [])
        hashtag_str = " ".join(f"#{h}" for h in hashtags) if hashtags else "No hashtags"

        safety_note = ""
        if not safety.get("safe", True):
            reason = safety.get("reason", "No reason provided")
            safety_note = f"\n\n> **Safety Warning:** {reason}\n"

        output += f"### {platform}\n\n"
        output += f"**Caption:**\n{data['caption']}\n\n"
        output += f"**Hashtags:**\n{hashtag_str}\n"
        output += safety_note
        output += "\n---\n\n"

    return output


def format_safety_result(result):
    if not result:
        return "### Error\n\nSafety check failed. Please try again."

    if result.get("safe"):
        return "### Safe\n\nThis content passed the harmful content check."
    else:
        return f"### Flagged\n\n**Reason:** {result.get('reason', 'No reason provided')}"


def run_idea(category, product, audience, goal, platform):
    try:
        result = generate_content_idea(category, product, audience, goal, platform)
        return format_idea_result(result)
    except Exception as e:
        return f"### Error\n\nSomething went wrong: {e}\n\nPlease try again."


def run_captions(idea, purpose, product):
    try:
        results = generate_captions_for_platforms(idea, PLATFORMS, purpose, product)
        return format_caption_results(results)
    except Exception as e:
        return f"### Error\n\nSomething went wrong: {e}\n\nPlease try again."


def run_safety_check(text):
    try:
        result = is_content_safe(text)
        return format_safety_result(result)
    except Exception as e:
        return f"### Error\n\nSomething went wrong: {e}\n\nPlease try again."


SAFETY_EXAMPLES = {
    "Exaggerated Marketing Claim": "This product will make you lose 10kg in 3 days with no exercise! Guaranteed results or your money back!",
    "False Medical Claim": "This herbal supplement cures cancer, diabetes, and heart disease. Doctors don't want you to know this!",
    "Aggressive Offensive Tone": "Buy now or you're a complete idiot. Everyone who doesn't use this product is a loser.",
    "Clean Content": "Here are 3 easy skincare tips for beginners. Always remember to wear sunscreen!",
}


def update_placeholder(category):
    return CATEGORY_PLACEHOLDERS.get(category, "e.g., Product or Service")


def build_interface():
    with gr.Blocks(title="Meateka AI Testing") as demo:
        gr.Markdown("# Meateka AI Testing Interface\n\n"
                    "Generate content ideas with posting times and platform-specific captions.")

        with gr.Tabs():
            with gr.Tab("Content Idea"):
                with gr.Row():
                    with gr.Column():
                        idea_category = gr.Dropdown(CATEGORIES, label="Category", value="Beauty")
                        idea_product = gr.Textbox(
                            label="Product / Service",
                            placeholder=CATEGORY_PLACEHOLDERS["Beauty"]
                        )
                        idea_category.change(
                            fn=update_placeholder,
                            inputs=[idea_category],
                            outputs=[idea_product]
                        )
                        idea_audience = gr.Textbox(
                            label="Target Audience",
                            placeholder="e.g., Women 25-34 interested in skincare"
                        )
                        idea_goal = gr.Dropdown(GOALS, label="Goal", value="Drive Sales")
                        idea_platform = gr.Dropdown(PLATFORMS, label="Platform", value="TikTok")
                        idea_btn = gr.Button("Generate Idea", variant="primary")

                    with gr.Column():
                        idea_output = gr.Markdown(label="Result")

                idea_btn.click(
                    fn=run_idea,
                    inputs=[idea_category, idea_product, idea_audience, idea_goal, idea_platform],
                    outputs=idea_output,
                )

            with gr.Tab("Captions & Hashtags"):
                with gr.Row():
                    with gr.Column():
                        caption_idea = gr.Textbox(
                            label="Content Idea",
                            placeholder="e.g., 3 Common Skincare Mistakes"
                        )
                        caption_purpose = gr.Radio(
                            PURPOSES,
                            label="Content Purpose",
                            value="Content Creator"
                        )
                        caption_product = gr.Textbox(
                            label="Product / Service (for Business Owner)",
                            placeholder="e.g., Facial Cleanser"
                        )
                        caption_btn = gr.Button("Generate All Platforms", variant="primary")

                    with gr.Column():
                        caption_output = gr.Markdown(label="Results")

                caption_btn.click(
                    fn=run_captions,
                    inputs=[caption_idea, caption_purpose, caption_product],
                    outputs=caption_output,
                )

            with gr.Tab("Safety Check"):
                with gr.Row():
                    with gr.Column():
                        safety_text = gr.Textbox(
                            label="Text to Check",
                            placeholder="Paste any AI-generated text here...",
                            lines=4
                        )
                        safety_btn = gr.Button("Check Safety", variant="primary")

                        gr.Markdown("### Quick Test Examples")
                        with gr.Row():
                            ex1_btn = gr.Button("Marketing Claim")
                            ex2_btn = gr.Button("Medical Claim")
                        with gr.Row():
                            ex3_btn = gr.Button("Aggressive Tone")
                            ex4_btn = gr.Button("Clean Content")

                    with gr.Column():
                        safety_output = gr.Markdown(label="Result")

                safety_btn.click(
                    fn=run_safety_check,
                    inputs=[safety_text],
                    outputs=safety_output,
                )

                ex1_btn.click(
                    fn=lambda: format_safety_result(is_content_safe(SAFETY_EXAMPLES["Exaggerated Marketing Claim"])),
                    outputs=safety_output,
                )
                ex2_btn.click(
                    fn=lambda: format_safety_result(is_content_safe(SAFETY_EXAMPLES["False Medical Claim"])),
                    outputs=safety_output,
                )
                ex3_btn.click(
                    fn=lambda: format_safety_result(is_content_safe(SAFETY_EXAMPLES["Aggressive Offensive Tone"])),
                    outputs=safety_output,
                )
                ex4_btn.click(
                    fn=lambda: format_safety_result(is_content_safe(SAFETY_EXAMPLES["Clean Content"])),
                    outputs=safety_output,
                )

    return demo


if __name__ == "__main__":
    demo = build_interface()
    demo.launch(server_name="0.0.0.0")
