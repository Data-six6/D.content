"""
Gradio testing interface for Meateka AI functions.
Run with: python app.py  (from the ai/ folder)
"""

import gradio as gr

from ai_service import AIService

ai = AIService()

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


def format_combined_plan(plan):
    """Format the single-request response for display."""
    if not plan:
        return "### Error\n\nNo result returned. Please try again."

    idea_text = plan.get("idea", "")
    title = plan.get("title", "")
    captions = plan.get("captions", [])
    posting_times = plan.get("posting_times", {})
    ideas_list = plan.get("ideas", [])

    if not idea_text:
        return ("### Error\n\n"
                "The AI returned an empty result. This usually means the API is overloaded. "
                "Please wait a few seconds and try again.")

    output = f"## Recommended Idea\n\n{idea_text}\n\n"
    output += f"**Content Type:** {title}\n\n"

    alternatives = ideas_list[0].get("alternates", []) if ideas_list else []
    if alternatives:
        output += "## Alternative Ideas\n\n"
        for i, alt in enumerate(alternatives, 1):
            output += f"{i}. {alt.get('idea_name', alt)}\n"

    if posting_times:
        output += "\n## Best Posting Times (Cambodia)\n\n"
        for platform, times in posting_times.items():
            output += f"- **{platform}:** {times}\n"

    output += "\n---\n\n"

    for cap in captions:
        platform = cap.get("platform", "Unknown")
        caption_text = cap.get("caption", "")
        hashtag_str = cap.get("hashtag", "")

        if not caption_text:
            output += f"### {platform}\n\n*Failed to generate. Please try again.*\n\n---\n\n"
            continue

        output += f"### {platform}\n\n"
        output += f"**Caption:**\n{caption_text}\n\n"
        output += f"**Hashtags:**\n{hashtag_str}\n"
        output += "\n---\n\n"

    return output


def format_safety_result(result):
    if not result:
        return "### Error\n\nSafety check failed. Please try again."

    if result.get("safe"):
        return "### Safe\n\nThis content passed the harmful content check."
    else:
        return f"### Flagged\n\n**Reason:** {result.get('reason', 'No reason provided')}"


def run_full_plan(category, product, audience, goal, platform, purpose):
    try:
        plan = ai.generate_single_request(category, product, audience, goal, platform, purpose)
        return format_combined_plan(plan)
    except Exception as e:
        return f"### Error\n\nSomething went wrong: {e}\n\nPlease try again."


def run_safety_check(text):
    try:
        result = ai.check_safety(text)
        return format_safety_result(result)
    except Exception as e:
        return f"### Error\n\nSomething went wrong: {e}\n\nPlease try again."


SAFETY_EXAMPLES = {
    "Marketing Claim": "This product will make you lose 10kg in 3 days with no exercise! Guaranteed results or your money back!",
    "Medical Claim": "This herbal supplement cures cancer, diabetes, and heart disease. Doctors don't want you to know this!",
    "Aggressive Tone": "Buy now or you're a complete idiot. Everyone who doesn't use this product is a loser.",
    "Clean Content": "Here are 3 easy skincare tips for beginners. Always remember to wear sunscreen!",
}


def update_placeholder(category):
    return CATEGORY_PLACEHOLDERS.get(category, "e.g., Product or Service")


def build_interface():
    with gr.Blocks(title="Meateka AI Testing") as demo:
        gr.Markdown("# Meateka AI Testing Interface\n\n"
                    "Generate complete content plans with one click.")

        with gr.Tabs():
            with gr.Tab("Full Content Plan"):
                with gr.Row():
                    with gr.Column():
                        plan_category = gr.Dropdown(CATEGORIES, label="Category", value="Beauty")
                        plan_product = gr.Textbox(
                            label="Product / Service",
                            placeholder=CATEGORY_PLACEHOLDERS["Beauty"]
                        )
                        plan_category.change(
                            fn=update_placeholder,
                            inputs=[plan_category],
                            outputs=[plan_product]
                        )
                        plan_audience = gr.Textbox(
                            label="Target Audience",
                            placeholder="e.g., Women 25-34 interested in skincare"
                        )
                        plan_goal = gr.Dropdown(GOALS, label="Goal", value="Drive Sales")
                        plan_platform = gr.Dropdown(PLATFORMS, label="Platform", value="TikTok")
                        plan_purpose = gr.Radio(PURPOSES, label="Content Purpose", value="Content Creator")
                        plan_btn = gr.Button("Generate Full Plan", variant="primary")

                    with gr.Column():
                        plan_output = gr.Markdown(label="Result")

                plan_btn.click(
                    fn=run_full_plan,
                    inputs=[plan_category, plan_product, plan_audience, plan_goal, plan_platform, plan_purpose],
                    outputs=plan_output,
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
                    fn=lambda: format_safety_result(ai.check_safety(SAFETY_EXAMPLES["Marketing Claim"])),
                    outputs=safety_output,
                )
                ex2_btn.click(
                    fn=lambda: format_safety_result(ai.check_safety(SAFETY_EXAMPLES["Medical Claim"])),
                    outputs=safety_output,
                )
                ex3_btn.click(
                    fn=lambda: format_safety_result(ai.check_safety(SAFETY_EXAMPLES["Aggressive Tone"])),
                    outputs=safety_output,
                )
                ex4_btn.click(
                    fn=lambda: format_safety_result(ai.check_safety(SAFETY_EXAMPLES["Clean Content"])),
                    outputs=safety_output,
                )

    return demo


if __name__ == "__main__":
    demo = build_interface()
    demo.launch(server_name="0.0.0.0")
