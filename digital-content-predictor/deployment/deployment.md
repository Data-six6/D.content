# Deployment Guide

## Local (Docker Compose)

```bash
docker-compose up --build
```

## Production

- Backend: containerize with `deployment/Dockerfile`, run behind Nginx (`deployment/nginx.conf`).
- Frontend: build with `npm run build`, serve static files via Nginx.
- Database: managed PostgreSQL instance recommended.
- Set all secrets via environment variables (see `.env.example`).
