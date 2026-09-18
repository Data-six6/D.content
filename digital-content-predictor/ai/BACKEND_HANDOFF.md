# Meateka AI Module — Backend Handoff

## Quick Setup (2 minutes)

### 1. Install Dependencies
```bash
pip install google-genai python-dotenv
```

### 2. Environment Variables
Create a `.env` file with your Google Gemini API key(s):
```
GOOGLE_API_KEY_1=your_first_key_here
GOOGLE_API_KEY_2=your_second_key_here
GOOGLE_API_KEY_3=your_third_key_here
```

Multiple keys are supported for automatic rotation when quota is exceeded.

### 3. Folder Structure
Place the `ai/` folder at the same level as your `backend/` folder:
```
project-root/
├── ai/           ← This module
│   ├── ai_service.py
│   ├── content_idea/
│   ├── caption/
│   ├── hashtag/
│   └── shared/
└── backend/      ← Your FastAPI code
```

### 4. Import in Backend
Add the project root to Python path, then import:
```python
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'ai'))

from ai_service import AIService

ai = AIService()
```

---

## API Reference

### `generate_content_plan()` — Main Endpoint

Generates a complete content plan in one call: idea + captions for all 3 platforms.

```python
plan = ai.generate_content_plan(
    category="Beauty",
    product="Facial Cleanser",
    target_audience="Women 25-34 interested in skincare",
    goal="Drive Sales",
    platform="TikTok",
    content_purpose="Content Creator",
)
```

**Input Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `category` | str | Yes | "Beauty", "Food", "Gaming", "Fashion", etc. |
| `product` | str | Yes | Product or service name |
| `target_audience` | str | Yes | Target audience description |
| `goal` | str | Yes | "Maximize Reach", "Drive Sales", "Increase Followers", "Brand Awareness" |
| `platform` | str | Yes | "TikTok", "Instagram", "Facebook" |
| `content_purpose` | str | No | "Content Creator" (default) or "Business Owner" |

**Response:**
```json
{
  "idea": {
    "recommended_idea": "POV: You just unlocked the ultimate MLBB account",
    "content_type": "Short Video",
    "alternative_ideas": ["idea 2", "idea 3"],
    "best_posting_times": {
      "TikTok": "12:00-13:00, 19:00-21:00",
      "Instagram": "11:00-13:00, 19:00-21:00",
      "Facebook": "13:00-15:00, 19:00-21:00"
    }
  },
  "captions": {
    "TikTok": {
      "caption": "This MLBB account is actually insane...",
      "hashtags": ["MobileLegends", "MLBB", "MLBBAccount"],
      "safety": {"safe": true, "reason": ""}
    },
    "Instagram": { "caption": "...", "hashtags": [...], "safety": {...} },
    "Facebook": { "caption": "...", "hashtags": [...], "safety": {...} }
  }
}
```

---

### Other Available Methods

```python
# Generate just the idea (no captions)
idea = ai.generate_content_idea(category, product, target_audience, goal, platform)

# Generate captions for all platforms (if you already have an idea)
captions = ai.generate_all_platforms(content_idea, content_purpose, product)

# Generate caption for a single platform
caption = ai.generate_caption(content_idea, platform, content_purpose, product)

# Generate hashtags only
hashtags = ai.generate_hashtags(caption, platform, category, num_hashtags)

# Check content safety
safety = ai.check_safety(text)
```

---

## FastAPI Endpoint Examples

### Main Endpoint (recommended)
```python
from fastapi import FastAPI
from pydantic import BaseModel
from ai_service import AIService

app = FastAPI()
ai = AIService()

class ContentPlanRequest(BaseModel):
    category: str
    product: str
    target_audience: str
    goal: str
    platform: str
    content_purpose: str = "Content Creator"

@app.post("/api/content-plan/generate")
def generate_plan(request: ContentPlanRequest):
    return ai.generate_content_plan(
        category=request.category,
        product=request.product,
        target_audience=request.target_audience,
        goal=request.goal,
        platform=request.platform,
        content_purpose=request.content_purpose,
    )
```

### Caption Only Endpoint (optional)
```python
class CaptionRequest(BaseModel):
    content_idea: str
    content_purpose: str = "Content Creator"
    product: str = ""

@app.post("/api/captions/generate")
def generate_captions(request: CaptionRequest):
    return ai.generate_all_platforms(
        content_idea=request.content_idea,
        content_purpose=request.content_purpose,
        product=request.product,
    )
```

---

## Error Handling

| Scenario | What Happens | What to Show User |
|----------|-------------|-------------------|
| All API keys exhausted | Returns empty idea/captions | "Service temporarily unavailable. Please try again." |
| Single API call fails | Automatic retry (3 attempts) with key rotation | Nothing (handled internally) |
| API server overloaded (503) | Automatic retry with backoff | Nothing (handled internally) |
| Safety check fails | Caption still returned, safety = `{"safe": true, "reason": "safety check unavailable, skipped"}` | Content shown normally |

---

## Important Notes

1. **Retry is built-in** — each function retries up to 3 times with exponential backoff. Do NOT wrap in another retry loop.

2. **Key rotation is automatic** — when one API key hits quota, it automatically tries the next key. If all 3 keys are exhausted, the function returns empty results.

3. **Safety check runs automatically** — `generate_caption()` and `generate_content_plan()` run the safety check internally. You do NOT need to call `check_safety()` separately.

4. **Hashtags come without #** — hashtags are returned as `["tag1", "tag2"]`, not `["#tag1", "#tag2"]`. Add the `#` in the frontend when displaying.

5. **Content types are always one of**: `"Short Video"`, `"Image"`, `"Carousel"`, `"Text Post"`.

6. **Platforms are always one of**: `"TikTok"`, `"Instagram"`, `"Facebook"`. Invalid values are auto-corrected.

---

## Troubleshooting

**Q: All requests return empty results.**
A: Check your API keys in `.env`. Verify they are valid in Google AI Studio.

**Q: Getting 429 quota errors.**
A: The free tier allows 20 requests/day per key. Add more keys or wait for daily reset. Consider enabling billing in Google AI Studio.

**Q: Getting 503 server errors.**
A: Temporary Gemini server overload. The retry logic handles this automatically. If persistent, wait a few minutes.

**Q: How do I test locally?**
A: Run `python app.py` from the `ai/` folder. This launches a Gradio web interface for testing.
