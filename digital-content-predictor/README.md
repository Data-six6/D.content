# Digital Content Predictor

A full-stack machine learning application that predicts engagement/performance for digital content across social media platforms (Facebook, Instagram, TikTok), and provides recommendations for posting time, content type, captions, and hashtags.

## Project Structure

- `docs/` — Project documentation (overview, requirements, architecture, API, ML docs, meeting notes)
- `data/` — Raw, processed, and external datasets
- `notebooks/` — Jupyter notebooks for data exploration, cleaning, EDA, feature engineering, model training/evaluation
- `ml/` — Machine learning pipeline (data processing, models, training, prediction, recommendations, NLP)
- `backend/` — API server (routes, services, models, schemas, config)
- `frontend/` — React frontend (components, pages, services, hooks, utils)
- `database/` — SQL schema, migrations, seed data, ERD
- `ai/` — Generative AI helpers (content ideas, captions, hashtags, category detection)
- `tests/` — Frontend, backend, ML, and integration tests
- `deployment/` — Docker and deployment configuration
- `screenshots/` — App screenshots for documentation

## Getting Started

1. Copy `.env.example` to `.env` and fill in your configuration values.
2. Install backend dependencies: `pip install -r backend/requirements.txt`
3. Install frontend dependencies: `cd frontend && npm install`
4. Run with Docker: `docker-compose up`

## License

TBD
