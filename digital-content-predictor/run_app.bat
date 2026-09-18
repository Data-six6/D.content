@echo off
chcp 65001 > nul
set PYTHONUTF8=1
set PYTHONIOENCODING=utf-8
title Meateka ML Web Dashboard
cd /d "%~dp0"
echo ==========================================================
echo Starting Meateka ML Gradio Web App...
echo Your web browser will open automatically once loaded!
echo (Press Ctrl+C in this window when you want to stop the app)
echo ==========================================================
python gradio_app.py
if errorlevel 1 (
    echo.
    echo An error occurred while running the application.
    pause
)
