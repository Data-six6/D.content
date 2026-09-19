"""
One shared Gemini connection with key rotation.
Loads multiple API keys and rotates to the next one when quota is exceeded.
"""

import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

GEMINI_MODEL = "gemini-3.6-flash"

API_KEYS = [
    os.environ.get("GOOGLE_API_KEY_1", ""),
    os.environ.get("GOOGLE_API_KEY_2", ""),
    os.environ.get("GOOGLE_API_KEY_3", ""),
]
API_KEYS = [k for k in API_KEYS if k]

_current_key_index = 0


def get_client():
    """Get the current client."""
    global _current_key_index
    if _current_key_index >= len(API_KEYS):
        _current_key_index = 0
    return genai.Client(api_key=API_KEYS[_current_key_index])


def rotate_key():
    """Move to the next API key."""
    global _current_key_index
    _current_key_index = (_current_key_index + 1) % len(API_KEYS)
    print(f"[gemini_client] Rotated to key {_current_key_index + 1}/{len(API_KEYS)}")


client = get_client()


def call_gemini(prompt: str, max_key_rotations: int = None):
    """
    Call Gemini with automatic key rotation on quota errors.
    Returns the response, or raises if all keys are exhausted.
    """
    global _current_key_index

    if max_key_rotations is None:
        max_key_rotations = len(API_KEYS)

    for rotation in range(max_key_rotations):
        current_client = get_client()
        try:
            response = current_client.models.generate_content(
                model=GEMINI_MODEL,
                contents=prompt,
                config={"response_mime_type": "application/json"},
            )
            # Reset to first key on success so next call starts fresh
            _current_key_index = 0
            return response
        except Exception as e:
            error_str = str(e)
            if "429" in error_str or "RESOURCE_EXHAUSTED" in error_str:
                print(f"[gemini_client] Key {_current_key_index + 1} quota exhausted, rotating...")
                rotate_key()
                continue
            raise

    raise RuntimeError(f"All {len(API_KEYS)} API keys exhausted. Please wait for quota reset.")