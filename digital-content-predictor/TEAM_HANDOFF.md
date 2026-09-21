# Meateka — Team Handoff Guide

## What Changed

| Before | After |
|--------|-------|
| Model: `gemini-3.6-flash` | Model: `gemini-3.1-flash-lite` |
| 6 RPM, 20 RPD | 15 RPM, 500 RPD |
| 4 API calls per request | **1 API call per request** |
| Rate limit errors | Works within limits |

---

## For Backend Team

### What to Change

**File:** `ai_bridge.py`, line 64

```python
# CHANGE FROM:
content = ai.generate_combined_response(...)

# TO:
content = ai.generate_single_request(...)
```

### Test the Bridge

```bash
# Start bridge
uvicorn ai_bridge:app --host 127.0.0.1 --port 8000

# Test health
curl http://127.0.0.1:8000/health

# Test recommendation
curl -X POST http://127.0.0.1:8000/recommendation \
  -H "Content-Type: application/json" \
  -d '{
    "plan_purpose": "Content Creator",
    "product_name": "Mobile Legends Account",
    "product_category": "Gaming",
    "demographics_age": "18-24",
    "demographics_gender": "All",
    "interests": ["Gaming"],
    "plan_goal": "Increase Followers",
    "plan_channel": "TikTok"
  }'
```

---

## For Hosting Team

### Deploy Python Bridge

The Python bridge (`ai_bridge.py`) needs to be hosted separately from Vercel.

**Option 1: Railway (Recommended)**
1. Go to [railway.app](https://railway.app)
2. Create new project from GitHub repo
3. Set start command: `uvicorn ai_bridge:app --host 0.0.0.0 --port $PORT`
4. Set environment variables (see below)

**Option 2: Render**
1. Go to [render.com](https://render.com)
2. Create Web Service from GitHub repo
3. Set build command: `pip install -r ai/requirements.txt`
4. Set start command: `uvicorn ai_bridge:app --host 0.0.0.0 --port $PORT`

### Environment Variables

**On Railway/Render (Python bridge):**
```
GOOGLE_API_KEY_1=your_key_1
GOOGLE_API_KEY_2=your_key_2
GOOGLE_API_KEY_3=your_key_3
GOOGLE_API_KEY_4=your_key_4
```

**On Vercel (Node.js + Frontend):**
```
BRIDGE_URL=https://your-bridge.railway.app
GOOGLE_API_KEY_1=your_key_1
GOOGLE_API_KEY_2=your_key_2
GOOGLE_API_KEY_3=your_key_3
GOOGLE_API_KEY_4=your_key_4
JWT_SECRET=your_jwt_secret
DB_HOST=your_db_host
DB_PORT=3306
DB_NAME=digital_content_predictor
DB_USER=your_db_user
DB_PASSWORD=your_db_password
```

---

## Quick Reference

| Component | Local | Production |
|-----------|-------|------------|
| Frontend | `localhost:5173` | `meateka.vercel.app` |
| Backend | `localhost:5000` | Vercel serverless |
| Python Bridge | `localhost:8000` | Railway/Render |
| Gemini API | Direct | Via bridge |

---

## API Response Format

```json
{
  "idea": "Main content idea text",
  "title": "Short Video",
  "posting_times": {
    "TikTok": "12:00-13:00, 19:00-21:00",
    "Instagram": "11:00-13:00, 19:00-21:00",
    "Facebook": "13:00-15:00, 19:00-21:00"
  },
  "captions": [
    {"platform": "TikTok", "caption": "...", "hashtag": "#tag1 #tag2"},
    {"platform": "Instagram", "caption": "...", "hashtag": "#tag1"},
    {"platform": "Facebook", "caption": "...", "hashtag": "#tag1 #tag2"}
  ],
  "ideas": [
    {
      "idea_name": "Main idea",
      "content_type": "Short Video",
      "alternates": [
        {"idea_name": "Alt 2", "content_type": "Short Video"},
        {"idea_name": "Alt 3", "content_type": "Short Video"}
      ]
    }
  ]
}
```

---

## Questions?

Contact the AI module owner for any issues.
