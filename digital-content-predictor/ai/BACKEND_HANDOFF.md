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

## Main API Method

### `generate_combined_response()`

The primary method that returns content in the expected JSON format.

```python
response = ai.generate_combined_response(
    category="Gaming",
    product="Mobile Legends Account",
    target_audience="MOBA players aged 16-25",
    goal="Increase Followers",
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

---

## Response Format

### Success Response
```json
{
  "idea": "POV: You just unlocked the ultimate MLBB account",
  "title": "Short Video",
  "posting_times": {
    "TikTok": "12:00-13:00, 19:00-21:00",
    "Instagram": "11:00-13:00, 19:00-21:00",
    "Facebook": "13:00-15:00, 19:00-21:00"
  },
  "captions": [
    {
      "platform": "TikTok",
      "caption": "This MLBB account is actually insane...",
      "hashtag": "#MobileLegends #MLBB #MLBBAccount"
    },
    {
      "platform": "Instagram",
      "caption": "Imagine stepping into the Land of Dawn...",
      "hashtag": "#MLBB #Gaming #MobileLegends"
    },
    {
      "platform": "Facebook",
      "caption": "After testing countless accounts...",
      "hashtag": "#MobileLegends #MLBB"
    }
  ],
  "ideas": [
    {
      "idea_name": "POV: You just unlocked the ultimate MLBB account",
      "content_type": "Short Video",
      "alternates": [
        {
          "idea_name": "Alternative idea 2",
          "content_type": "Short Video"
        },
        {
          "idea_name": "Alternative idea 3",
          "content_type": "Short Video"
        }
      ]
    }
  ]
}
```

### Empty Response (on failure)
```json
{
  "idea": "",
  "title": "",
  "posting_times": {},
  "captions": [
    {"platform": "TikTok", "caption": "", "hashtag": ""},
    {"platform": "Instagram", "caption": "", "hashtag": ""},
    {"platform": "Facebook", "caption": "", "hashtag": ""}
  ],
  "ideas": [
    {
      "idea_name": "",
      "content_type": "",
      "alternates": []
    }
  ]
}
```

**Check for failure**: if `idea` is empty string → show "Service temporarily unavailable" to user.

---

## Response Field Reference

| Field | Type | Description |
|-------|------|-------------|
| `idea` | str | Main content idea text |
| `title` | str | Content type (e.g., "Short Video") |
| `posting_times` | object | Best posting times per platform (Cambodia GMT+7) |
| `captions` | array | Captions for all 3 platforms |
| `captions[].platform` | str | "TikTok", "Instagram", or "Facebook" |
| `captions[].caption` | str | Platform-specific caption text |
| `captions[].hashtag` | str | Space-separated hashtags WITH `#` prefix |
| `ideas` | array | Array with main idea + alternatives |
| `ideas[0].idea_name` | str | Main content idea |
| `ideas[0].content_type` | str | "Short Video", "Image", "Carousel", or "Text Post" |
| `ideas[0].alternates` | array | 2-3 alternative ideas |
| `ideas[0].alternates[].idea_name` | str | Alternative idea text |
| `ideas[0].alternates[].content_type` | str | Same as main idea's content type |

---

## FastAPI Endpoint Example

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
    return ai.generate_combined_response(
        category=request.category,
        product=request.product,
        target_audience=request.target_audience,
        goal=request.goal,
        platform=request.platform,
        content_purpose=request.content_purpose,
    )
```

---

## Other Available Methods

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

## Error Handling

| Scenario | What Happens | What to Show User |
|----------|-------------|-------------------|
| All API keys exhausted | Returns empty response | "Service temporarily unavailable. Please try again." |
| Single API call fails | Automatic retry (3 attempts) with key rotation | Nothing (handled internally) |
| API server overloaded (503) | Automatic retry with backoff | Nothing (handled internally) |
| Safety check fails | Caption still returned, safety marked unavailable | Content shown normally |

---

## Important Notes

1. **Retry is built-in** — each function retries up to 3 times with exponential backoff. Do NOT wrap in another retry loop.

2. **Key rotation is automatic** — when one API key hits quota, it automatically tries the next key. If all 3 keys are exhausted, the function returns empty results.

3. **Safety check runs internally** — the safety check runs inside `generate_caption()` but its result is not included in the combined response (backend team's format doesn't have a field for it).

4. **Hashtags come WITH # prefix** — in the combined response, hashtags are formatted as `"#tag1 #tag2 #tag3"` (single string with # prefixes).

5. **Content types are always one of**: `"Short Video"`, `"Image"`, `"Carousel"`, `"Text Post"`.

6. **Platforms are always one of**: `"TikTok"`, `"Instagram"`, `"Facebook"`. Invalid values are auto-corrected.

7. **Posting times** are included in `posting_times` field at the top level. Cambodia times (GMT+7) for each platform.

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
