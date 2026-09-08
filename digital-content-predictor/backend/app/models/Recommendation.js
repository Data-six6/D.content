const db = require('../config/db');

class Recommendation {
    // backend/app/models/Recommendation.js
// backend/app/models/Recommendation.js

static async getRecommendation(userId) {
    // 1. Fetch the latest Recommendation + Plan details for the user
    const [recRows] = await db.query(
        `SELECT 
            r.recommendation_id,
            r.plan_id, 
            r.idea, 
            r.platform, 
            r.title, 
            r.performance, 
            r.time
         FROM Recommendation r 
         JOIN Plan p ON r.plan_id = p.plan_id 
         WHERE p.user_id = ? 
         ORDER BY r.created_at DESC 
         LIMIT 1`,
        [userId]
    );

    if (!recRows || recRows.length === 0) return null;

    const rec = recRows[0];
    const recId = rec.recommendation_id;

    // 2. Fetch associated Captions, Platform Predictions, and Ideas in parallel
    const [
        [captions],
        [platforms],
        [ideas],
        [alternates]
    ] = await Promise.all([
        db.query(
            `SELECT caption_id, platform, caption, hashtag 
             FROM Caption 
             WHERE recommendation_id = ?`, 
            [recId]
        ),
        db.query(
            `SELECT platform_id, platform, prediction 
             FROM Platform 
             WHERE recommendation_id = ?`, 
            [recId]
        ),
        db.query(
            `SELECT idea_id, idea_name, content_type 
             FROM Idea 
             WHERE recommendation_id = ?`, 
            [recId]
        ),
        db.query(
            `SELECT a.alternate_id, a.idea_id, a.idea_name, a.content_type 
             FROM alternate a 
             JOIN Idea i ON a.idea_id = i.idea_id 
             WHERE i.recommendation_id = ?`, 
            [recId]
        )
    ]);

    // 3. Nest alternate ideas inside their corresponding parent Idea
    const structuredIdeas = ideas.map((idea) => ({
        ...idea,
        alternates: alternates.filter((alt) => alt.idea_id === idea.idea_id)
    }));

    // 4. Return complete composite data payload
    return {
        recommendation_id: rec.recommendation_id,
        plan_id: rec.plan_id,
        idea: rec.idea,
        platform: rec.platform,
        title: rec.title,
        performance: rec.performance,
        time: rec.time,
        captions,
        platform_predictions: platforms,
        ideas: structuredIdeas
    };
}

}

module.exports = Recommendation;