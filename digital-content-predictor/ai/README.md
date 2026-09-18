# AI Module — Digital Content Engagement & Reach Predictor

This folder contains all NLP/AI features (Interest Matching, Caption &
Hashtag Generation, Content Idea Generation, Safety Checking). 
This README is for the Backend Engineer
integrating these functions into the FastAPI app.

## Setup

```bash
cd ai
pip install -r requirements.txt
cp .env.example .env   # then fill in the real OPENAI_API_KEY
```

## What each function does and returns

### 1. Interest Matching — `category/category_detector.py`

```python
from category.category_detector import match_interests_to_categories

match_interests_to_categories("I like cooking and gaming", top_n=3)
# -> [{"category": "Food", "match_percent": 94}, {"category": "Gaming", "match_percent": 80}, ...]
```

### 2. Content Idea Generation — `content_generation/generate_ideas.py`

```python
from content_generation.generate_ideas import generate_content_ideas

generate_content_ideas("Gaming", num_ideas=5)
# -> ["3 beginner mistakes everyone makes in this game", "Top 5 games this month", ...]
```

### 3. Caption Generation — `caption/caption_generator.py`

```python
from caption.caption_generator import generate_caption, generate_captions_for_platforms

generate_caption(
    original_caption="I tried making this spicy noodle recipe today and it was so good!",
    platform="TikTok",
    content_purpose="Content Creator",  # or "Business/Promotion"
)
# -> {"caption": "...", "hashtags": ["tag1", "tag2", ...]}

# For multi-platform requests (Feature 2 style):
generate_captions_for_platforms(
    original_caption="Try our new spicy burger today!",
    platforms=["TikTok", "Instagram", "Facebook"],
    content_purpose="Business/Promotion",
)
# -> {"TikTok": {...}, "Instagram": {...}, "Facebook": {...}}


### 5. Safety Check — `content_generation/safety_check.py`

Wrap any AI-generated text before showing it to the user.

```python
from content_generation.safety_check import is_content_safe

is_content_safe("some generated caption text")
# -> {"safe": True, "reason": ""}
```

## Suggested FastAPI wiring

Each function above returns plain Python dicts/lists — they can be
returned directly from an endpoint as JSON, no extra conversion needed.

```python
@app.post("/api/match-interests")
def match_interests(payload: InterestInput):
    return {"matches": match_interests_to_categories(payload.text)}

@app.post("/api/generate-caption")
def caption_endpoint(payload: CaptionInput):
    result = generate_caption(payload.text, payload.platform, payload.content_purpose)
    safety = is_content_safe(result["caption"])
    if not safety["safe"]:
        raise HTTPException(status_code=422, detail="Generated content failed safety check")
    return result
```

## Notes for Security team

- `OPENAI_API_KEY` lives only in `.env`, which is gitignored. Please
  confirm your key-management approach (env vars vs a secrets
  manager) before deployment.
- All functions fail "closed" on API errors (return safe defaults /
  empty results) rather than crashing — but none of them currently
  rate-limit or sanitize input beyond basic empty-string checks, so
  that's worth a security pass before demo day.

## Running smoke tests

```bash
python -m tests.test_all
```

This makes real OpenAI API calls and prints output for manual review
— it's not a strict pass/fail CI suite, just a way to eyeball quality
and safety before integration.
