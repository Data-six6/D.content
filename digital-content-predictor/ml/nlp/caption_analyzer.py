"""Rule-based Caption and Hashtag Analyzer (Feature 5)."""

from typing import Dict, Any, List, Union, Optional
import re


class CaptionAnalyzer:
    """Analyzes text metrics, readability, hashtag density, and tone of social media captions."""

    POSITIVE_WORDS = {
        "love", "great", "amazing", "awesome", "best", "perfect", "excited",
        "happy", "super", "easy", "helpful", "boost", "grow", "success", "win",
        "incredible", "valuable", "top", "favorite", "proven", "simple",
    }
    
    NEGATIVE_WORDS = {
        "bad", "terrible", "worst", "fail", "hard", "mistake", "stop", "never",
        "ruin", "waste", "problem", "difficult", "lose", "scam", "wrong", "broke",
    }

    CTA_PATTERNS = [
        r"comment\s+below",
        r"link\s+in\s+bio",
        r"save\s+this",
        r"share\s+with",
        r"follow\s+for",
        r"dm\s+us",
        r"click\s+the\s+link",
        r"tag\s+a\s+friend",
        r"let\s+me\s+know",
        r"what\s+do\s+you\s+think",
        r"sign\s+up",
        r"check\s+out",
    ]

    def _extract_hashtags(self, text: str) -> List[str]:
        """Extract hashtag tokens from raw text string."""
        return re.findall(r"#\w+", text)

    def _estimate_sentiment(self, text: str) -> str:
        """Rule-based sentiment estimation based on positive and negative word occurrences."""
        words = re.findall(r"\b\w+\b", text.lower())
        pos_count = sum(1 for w in words if w in self.POSITIVE_WORDS)
        neg_count = sum(1 for w in words if w in self.NEGATIVE_WORDS)

        if pos_count > neg_count:
            return "Positive"
        elif neg_count > pos_count:
            return "Negative"
        return "Neutral"

    def analyze(
        self,
        caption: str,
        hashtags: Optional[Union[List[str], str]] = None,
    ) -> Dict[str, Any]:
        """Analyze a post caption and hashtags for structure, readability, and best practices."""
        raw_caption = caption or ""
        
        embedded_tags = self._extract_hashtags(raw_caption)
        explicit_tags = []
        if isinstance(hashtags, list):
            explicit_tags = hashtags
        elif isinstance(hashtags, str):
            explicit_tags = self._extract_hashtags(hashtags) or hashtags.split()

        all_tags = list(dict.fromkeys(embedded_tags + [t if t.startswith("#") else f"#{t}" for t in explicit_tags if t]))

        char_count = len(raw_caption)
        words = re.findall(r"\b\w+\b", raw_caption)
        word_count = len(words)
        tag_count = len(all_tags)
        question_count = raw_caption.count("?")
        has_question = question_count > 0

        has_cta = any(re.search(pat, raw_caption, re.IGNORECASE) for pat in self.CTA_PATTERNS)
        sentiment = self._estimate_sentiment(raw_caption)

        suggestions = []
        if word_count < 10:
            suggestions.append("Caption is very short. Adding 1-2 sentences of context helps post reach.")
        elif word_count > 250:
            suggestions.append("Caption is quite long. Consider breaking it into bite-sized paragraphs with line breaks.")

        if tag_count == 0:
            suggestions.append("No hashtags detected. Adding 3-5 relevant hashtags increases discoverability.")
        elif tag_count > 15:
            suggestions.append(f"{tag_count} hashtags detected. Platforms penalize hashtag stuffing; aim for 4-8 targeted tags.")

        if not has_question and not has_cta:
            suggestions.append("Add an engaging question or Call to Action (e.g. 'Save for later' or 'Comment your thoughts') to boost engagement.")

        if not suggestions:
            suggestions.append("Caption length, structure, and hashtag density look well balanced!")

        return {
            "character_count": char_count,
            "word_count": word_count,
            "hashtag_count": tag_count,
            "hashtags": all_tags,
            "has_call_to_action": has_cta,
            "has_question": has_question,
            "estimated_sentiment": sentiment,
            "suggestions": suggestions,
        }