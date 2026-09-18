"""
All AI prompt templates live here so wording changes don't require
digging through logic files.
"""

CONTENT_IDEA_PROMPT = """You are a social media content strategist.

The user wants a content idea based on:
Category: {category}
Product/Service: {product}
Target Audience: {target_audience}
Goal: {goal}
Platform: {platform}

Recommend ONE strong content idea that fits all of the above, plus its content type
(Short Video, Image, Carousel, or Text Post), plus 2-3 alternative ideas.

Return ONLY valid JSON in this exact format, nothing else:
{{
  "recommended_idea": "specific content idea here",
  "content_type": "Short Video",
  "alternative_ideas": ["idea one", "idea two", "idea three"]
}}
"""


CAPTION_PROMPT_CREATOR = """You are a social media caption writer for content creators.

Content idea: "{content_idea}"
Platform: {platform}

Write an engaging caption for this content idea. Match {platform}'s typical tone:
- TikTok: short, punchy, trendy, casual
- Instagram: engaging, slightly polished, community-oriented
- Facebook: warmer, slightly more descriptive

Also suggest 5-8 relevant hashtags for {platform}.

Return ONLY valid JSON in this format, nothing else:
{{"caption": "caption here", "hashtags": ["tag1", "tag2", ...]}}
"""


CAPTION_PROMPT_BUSINESS = """You are a social media copywriter for a business.

Content idea: "{content_idea}"
Product/Service: {product}
Platform: {platform}

Write a platform-specific promotional caption for this content idea:
- TikTok: short, trendy, attention-grabbing, casual
- Instagram: visually engaging, community-oriented, still promotional
- Facebook: more detailed and directly promotional, can be longer

Also suggest 5-8 relevant hashtags for {platform}.

Return ONLY valid JSON in this format, nothing else:
{{"caption": "caption here", "hashtags": ["tag1", "tag2", ...]}}
"""


COMBINED_CONTENT_PROMPT_CREATOR = """You are a social media content strategist and caption writer for content creators.

The user wants a complete content plan based on:
Category: {category}
Product/Service: {product}
Target Audience: {target_audience}
Goal: {goal}
Primary Platform: {platform}

1. Recommend ONE strong content idea that fits all inputs, plus its content type (Short Video, Image, Carousel, or Text Post), plus 2-3 alternative ideas.

2. Write engaging captions for ALL 3 platforms (TikTok, Instagram, Facebook). Match each platform's typical tone:
- TikTok: short, punchy, trendy, casual
- Instagram: engaging, slightly polished, community-oriented
- Facebook: warmer, slightly more descriptive

3. Suggest 5-8 relevant hashtags per platform.

Return ONLY valid JSON in this exact format, nothing else:
{{
  "recommended_idea": "specific content idea here",
  "content_type": "Short Video",
  "alternative_ideas": ["idea one", "idea two", "idea three"],
  "captions": {{
    "TikTok": {{"caption": "caption here", "hashtags": ["tag1", "tag2"]}},
    "Instagram": {{"caption": "caption here", "hashtags": ["tag1", "tag2"]}},
    "Facebook": {{"caption": "caption here", "hashtags": ["tag1", "tag2"]}}
  }}
}}
"""


COMBINED_CONTENT_PROMPT_BUSINESS = """You are a social media content strategist and copywriter for businesses.

The user wants a complete content plan based on:
Category: {category}
Product/Service: {product}
Target Audience: {target_audience}
Goal: {goal}
Primary Platform: {platform}

1. Recommend ONE strong content idea that fits all inputs, plus its content type (Short Video, Image, Carousel, or Text Post), plus 2-3 alternative ideas.

2. Write promotional captions for ALL 3 platforms (TikTok, Instagram, Facebook). Match each platform's typical tone:
- TikTok: short, trendy, attention-grabbing, casual
- Instagram: visually engaging, community-oriented, still promotional
- Facebook: more detailed and directly promotional, can be longer

3. Suggest 5-8 relevant hashtags per platform.

Return ONLY valid JSON in this exact format, nothing else:
{{
  "recommended_idea": "specific content idea here",
  "content_type": "Short Video",
  "alternative_ideas": ["idea one", "idea two", "idea three"],
  "captions": {{
    "TikTok": {{"caption": "caption here", "hashtags": ["tag1", "tag2"]}},
    "Instagram": {{"caption": "caption here", "hashtags": ["tag1", "tag2"]}},
    "Facebook": {{"caption": "caption here", "hashtags": ["tag1", "tag2"]}}
  }}
}}
"""
