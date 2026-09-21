# DEPLOYMENT GUIDE — Meateka AI Bridge

## Overview

The Meateka AI module requires a Python bridge (`ai_bridge.py`) that connects the Node.js backend to the Gemini API. This guide explains how to deploy it.

---

## Architecture

```
Frontend (Vercel) → Node.js Backend → Python Bridge (Railway) → Gemini API
```

---

## Step 1: Deploy Python Bridge to Railway

### 1.1 Create Railway Account
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Verify email

### 1.2 Create New Project
1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Choose your Meateka repository
4. Set root directory to repo root (where `ai_bridge.py` lives)

### 1.3 Configure Settings
| Setting | Value |
|---------|-------|
| Start Command | `uvicorn ai_bridge:app --host 0.0.0.0 --port $PORT` |
| Runtime | Python 3.11 |
| Build Command | `pip install -r ai/requirements.txt` |

### 1.4 Set Environment Variables
In Railway dashboard → your service → **Variables**:

```
GOOGLE_API_KEY_1=your_first_gemini_key_here
GOOGLE_API_KEY_2=your_second_gemini_key_here
GOOGLE_API_KEY_3=your_third_gemini_key_here
```

### 1.5 Get URL
After deployment, Railway gives you a URL like:
```
https://meateka-bridge-production.up.railway.app
```

### 1.6 Test
```bash
curl https://meateka-bridge-production.up.railway.app/health
```

Expected response:
```json
{
  "status": "ok",
  "keys_loaded": 3,
  "models": ["gemini-2.0-flash", "gemini-2.0-flash-lite", "gemini-3.6-flash"]
}
```

---

## Step 2: Set Environment Variables on Vercel

### 2.1 Go to Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Select your Meateka project
3. Click **Settings** → **Environment Variables**

### 2.2 Add These Variables

| Variable | Value | Environment |
|----------|-------|-------------|
| `BRIDGE_URL` | `https://meateka-bridge-production.up.railway.app` | Production, Preview |
| `GOOGLE_API_KEY_1` | your_first_gemini_key_here | Production, Preview |
| `GOOGLE_API_KEY_2` | your_second_gemini_key_here | Production, Preview |
| `GOOGLE_API_KEY_3` | your_third_gemini_key_here | Production, Preview |
| `JWT_SECRET` | your-jwt-secret-here | Production, Preview |
| `DB_HOST` | your-database-host | Production, Preview |
| `DB_PORT` | `3306` | Production, Preview |
| `DB_NAME` | `digital_content_predictor` | Production, Preview |
| `DB_USER` | your-database-user | Production, Preview |
| `DB_PASSWORD` | your-database-password | Production, Preview |

### 2.3 Redeploy
After adding variables, redeploy the project:
1. Go to **Deployments** tab
2. Click **"Redeploy"** on latest deployment

---

## Step 3: Update Node.js Backend

### 3.1 Update Bridge URL
In your Node.js backend code, find where the bridge is called and update the URL:

```javascript
// Find this line (in recommendationController or similar):
const BRIDGE_URL = process.env.BRIDGE_URL || 'http://127.0.0.1:8000';

// Update the fetch call:
const response = await fetch(`${BRIDGE_URL}/recommendation`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload),
});
```

### 3.2 Add Health Check (Optional)
Add a health check endpoint to your Node.js backend:

```javascript
app.get('/api/health', async (req, res) => {
  try {
    const bridgeHealth = await fetch(`${process.env.BRIDGE_URL}/health`);
    const data = await bridgeHealth.json();
    res.json({ bridge: data, status: 'ok' });
  } catch (e) {
    res.status(500).json({ error: 'Bridge unreachable' });
  }
});
```

---

## Step 4: Local Development Setup

### 4.1 Install Dependencies
```bash
cd ai
pip install -r requirements.txt
```

### 4.2 Create `ai/.env`
```
GOOGLE_API_KEY_1=your_first_key
GOOGLE_API_KEY_2=your_second_key
GOOGLE_API_KEY_3=your_third_key
```

### 4.3 Start Bridge Locally
```bash
# From repo root
uvicorn ai_bridge:app --host 127.0.0.1 --port 8000 --reload
```

### 4.4 Test Locally
```bash
# Health check
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
    "interests": ["Gaming", "Esports"],
    "plan_goal": "Increase Followers",
    "plan_channel": "TikTok"
  }'
```

---

## Step 5: Troubleshooting

| Problem | Cause | Solution |
|---------|-------|----------|
| "recommendation failed" | Bridge not running | Check Railway dashboard for errors |
| "All API keys exhausted" | Quota exceeded | Add more keys or wait for daily reset |
| "API overloaded" | Gemini 503 errors | Normal — retry logic handles it |
| "Bridge unreachable" | Wrong URL | Check `BRIDGE_URL` in Vercel env vars |
| "keys_loaded: 0" | Missing env vars | Set `GOOGLE_API_KEY_1/2/3` on Railway |
| Empty response from Gemini | Model overloaded | Model fallback chain will try alternatives |

### Check Railway Logs
1. Go to Railway dashboard
2. Select your service
3. Click **"Logs"** tab
4. Look for error messages

### Check Vercel Logs
1. Go to Vercel dashboard
2. Select your project
3. Click **"Logs"** tab
4. Look for bridge connection errors

---

## Step 6: Alternative Deployment (Render)

If Railway doesn't work, use Render:

1. Go to [render.com](https://render.com)
2. Create **Web Service**
3. Connect GitHub repo
4. Set:
   - Build Command: `pip install -r ai/requirements.txt`
   - Start Command: `uvicorn ai_bridge:app --host 0.0.0.0 --port $PORT`
5. Add environment variables (same as Railway)
6. Deploy

---

## Quick Reference

| Component | Local | Production |
|-----------|-------|------------|
| Frontend | `localhost:5173` | `meateka.vercel.app` |
| Backend | `localhost:5000` | Vercel serverless |
| Bridge | `localhost:8000` | Railway/Render |
| Gemini API | Direct | Via bridge |

---

## File Checklist

Before deploying, ensure these files exist:

- [ ] `ai_bridge.py` — Python bridge (repo root)
- [ ] `ai/shared/gemini_client.py` — Updated with fallback + retry
- [ ] `ai/ai_service.py` — Updated with `generate_single_request()`
- [ ] `ai/.env` — Local API keys (gitignored)
- [ ] `ai/.env.example` — Template (committed)
- [ ] `ai/requirements.txt` — Python dependencies

---

END OF DEPLOYMENT GUIDE
