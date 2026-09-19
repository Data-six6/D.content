// backend/app/models/Recommendation.js
const db = require('../config/db');

const clip = (value, max) => String(value ?? '').slice(0, max);

class Recommendation {
    /**
     * Shared by both getters: given a Recommendation row, load its captions,
     * platform predictions, ideas and alternates, and build the composite payload.
     */
    static async _assemble(rec) {
        const recId = rec.recommendation_id;

        const [
            [captions],
            [platforms],
            [ideas],
            [alternates]
        ] = await Promise.all([
            db.query(
                `SELECT caption_id, platform, caption, hashtag
                 FROM Caption
                 WHERE recommendation_id = ?
                 ORDER BY caption_id`,
                [recId]
            ),
            db.query(
                `SELECT platform_id, platform, prediction
                 FROM Platform
                 WHERE recommendation_id = ?
                 ORDER BY platform_id`,
                [recId]
            ),
            db.query(
                `SELECT idea_id, idea_name, content_type
                 FROM Idea
                 WHERE recommendation_id = ?
                 ORDER BY idea_id`,
                [recId]
            ),
            db.query(
                `SELECT a.alternate_id, a.idea_id, a.idea_name, a.content_type
                 FROM alternate a
                 JOIN Idea i ON a.idea_id = i.idea_id
                 WHERE i.recommendation_id = ?
                 ORDER BY a.alternate_id`,
                [recId]
            )
        ]);

        // Nest alternate ideas inside their corresponding parent Idea
        const structuredIdeas = ideas.map((idea) => ({
            ...idea,
            alternates: alternates.filter((alt) => alt.idea_id === idea.idea_id)
        }));

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

    // Latest Recommendation for a user
    static async getRecommendation(userId) {
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
             ORDER BY r.created_at DESC, r.recommendation_id DESC
             LIMIT 1`,
            [userId]
        );

        if (!recRows || recRows.length === 0) return null;
        return Recommendation._assemble(recRows[0]);
    }

    // Latest Recommendation for a plan
    static async getRecommendationByPlan(planId) {
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
             WHERE r.plan_id = ?
             ORDER BY r.created_at DESC, r.recommendation_id DESC
             LIMIT 1`,
            [planId]
        );

        if (!recRows || recRows.length === 0) return null;
        return Recommendation._assemble(recRows[0]);
    }

    /**
     * Insert Plan + Interests + Recommendation + Captions + Platform predictions
     * + Idea + alternates in ONE transaction, then return the saved recommendation.
     *
     * @param {number} userId
     * @param {object} plan  user input (plan_purpose, product_name, ..., interests[], plan_channel)
     * @param {object} ml    result of predict_ml_plan
     * @param {object} ai    result of generate_combined_response
     */
    static async create(userId, plan, ml, ai) {
        const conn = await db.getConnection();
        let planId;

        try {
            await conn.beginTransaction();

            // Plan
            const [planResult] = await conn.execute(
                `INSERT INTO Plan
                   (user_id, plan_purpose, product_name, product_category, product_description,
                    demographics_age, demographics_gender, audience_description, plan_goal, plan_channel)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    userId,
                    plan.plan_purpose,
                    plan.product_name,
                    plan.product_category,
                    plan.product_description ?? null,
                    plan.demographics_age,
                    plan.demographics_gender ?? 'All',
                    plan.audience_description ?? null,
                    plan.plan_goal,
                    plan.plan_channel
                ]
            );
            planId = planResult.insertId;

            // Interests (upsert by unique name, then link to the plan)
            const interestNames = [...new Set(plan.interests.map((i) => String(i).trim()).filter(Boolean))];
            for (const name of interestNames) {
                const [r] = await conn.execute(
                    `INSERT INTO Interest (interest_name) VALUES (?)
                     ON DUPLICATE KEY UPDATE interest_id = LAST_INSERT_ID(interest_id)`,
                    [name]
                );
                await conn.execute(
                    'INSERT IGNORE INTO PlanInterest (plan_id, interest_id) VALUES (?, ?)',
                    [planId, r.insertId]
                );
            }

            // Recommendation (ML: platform/performance/time, AI: idea/title)
            const [recResult] = await conn.execute(
                `INSERT INTO Recommendation (plan_id, idea, platform, title, performance, time)
                 VALUES (?, ?, ?, ?, ?, ?)`,
                [
                    planId,
                    clip(ai.idea, 255),
                    clip(ml.platform, 16),
                    clip(ai.title, 50),
                    clip(ml.performance, 10),
                    clip(ml.time, 50)
                ]
            );
            const recommendationId = recResult.insertId;

            // Captions
            for (const c of ai.captions || []) {
                await conn.execute(
                    'INSERT INTO Caption (recommendation_id, platform, caption, hashtag) VALUES (?, ?, ?, ?)',
                    [recommendationId, clip(c.platform, 16), c.caption, clip(c.hashtag, 255)]
                );
            }

            // Per-platform ML predictions
            for (const p of ml.platform_predictions || []) {
                await conn.execute(
                    'INSERT INTO Platform (recommendation_id, platform, prediction) VALUES (?, ?, ?)',
                    [recommendationId, clip(p.platform, 16), clip(p.prediction, 16)]
                );
            }

            // Idea + alternates
            for (const idea of ai.ideas || []) {
                const [ideaResult] = await conn.execute(
                    'INSERT INTO Idea (recommendation_id, idea_name, content_type) VALUES (?, ?, ?)',
                    [recommendationId, clip(idea.idea_name, 255), clip(idea.content_type, 50)]
                );
                for (const alt of idea.alternates || []) {
                    await conn.execute(
                        'INSERT INTO alternate (idea_id, idea_name, content_type) VALUES (?, ?, ?)',
                        [ideaResult.insertId, clip(alt.idea_name, 255), clip(alt.content_type, 50)]
                    );
                }
            }

            await conn.commit();
        } catch (err) {
            await conn.rollback();
            throw err;
        } finally {
            conn.release();
        }

        // Read back after commit, same shape as the fetch endpoint
        return Recommendation.getRecommendationByPlan(planId);
    }
}

module.exports = Recommendation;