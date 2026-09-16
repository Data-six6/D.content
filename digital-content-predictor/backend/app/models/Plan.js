const db = require('../config/db');

class Plan {
    static async createPlan(data) {
        const [result] = await db.query(
            "INSERT INTO Plan (user_id, plan_purpose, product_name, product_category, product_description, demographics_age, demographics_gender, audience_description, plan_goal, plan_channel) VALUES (?,?,?,?,?,?,?,?,?,?)",
            [
                data.userId,
                data.planPurpose,
                data.productName,
                data.productCategory,
                data.productDescription,
                data.demographicsAge,
                data.demographicsGender,
                data.audienceDescription,
                data.planGoal,
                data.planChannel,
            ]
        );

        const planId = result.insertId;

        if (Array.isArray(data.interests) && data.interests.length > 0) {
            await this.addPlanInterests(planId, data.interests);
        }

        return planId;
    }

    static async addPlanInterests(planId, interests) {
        const uniqueInterests = [...new Set(interests.map((item) => String(item).trim()).filter(Boolean))];

        for (const interestName of uniqueInterests) {
            let [rows] = await db.query(
                "SELECT interest_id FROM Interest WHERE interest_name = ?",
                [interestName]
            );

            let interestId = rows[0]?.interest_id;

            if (!interestId) {
                const [insertResult] = await db.query(
                    "INSERT INTO Interest (interest_name) VALUES (?)",
                    [interestName]
                );
                interestId = insertResult.insertId;
            }

            await db.query(
                "INSERT IGNORE INTO PlanInterest (plan_id, interest_id) VALUES (?, ?)",
                [planId, interestId]
            );
        }
    }

    static async getPlanById(planId) {
        const [rows] = await db.query(
            "SELECT * FROM Plan WHERE plan_id = ?",
            [planId]
        );
        return rows[0] || null;
    }

    static async getPlanByUser(userId) {
    // 1. Fetch all plans for the user, ordered by creation date
    const [plans] = await db.query(
        `SELECT * FROM Plan WHERE user_id = ? ORDER BY created_at DESC`,
        [userId]
    );

    if (!plans || plans.length === 0) return [];

    const planIds = plans.map(p => p.plan_id);

    // 2. Fetch all related Recommendations, Captions, Platforms, Ideas, and Alternates for these plans in parallel
    const [
        [recommendations],
        [captions],
        [platforms],
        [ideas],
        [alternates]
    ] = await Promise.all([
        db.query(
            `SELECT * FROM Recommendation WHERE plan_id IN (?)`,
            [planIds]
        ),
        db.query(
            `SELECT c.* FROM Caption c 
             JOIN Recommendation r ON c.recommendation_id = r.recommendation_id 
             WHERE r.plan_id IN (?)`,
            [planIds]
        ),
        db.query(
            `SELECT pl.* FROM Platform pl 
             JOIN Recommendation r ON pl.recommendation_id = r.recommendation_id 
             WHERE r.plan_id IN (?)`,
            [planIds]
        ),
        db.query(
            `SELECT i.* FROM Idea i 
             JOIN Recommendation r ON i.recommendation_id = r.recommendation_id 
             WHERE r.plan_id IN (?)`,
            [planIds]
        ),
        db.query(
            `SELECT a.* FROM alternate a 
             JOIN Idea i ON a.idea_id = i.idea_id 
             JOIN Recommendation r ON i.recommendation_id = r.recommendation_id 
             WHERE r.plan_id IN (?)`,
            [planIds]
        )
    ]);

    // 3. Nest data hierarchically back into each plan
    return plans.map(plan => {
        // Find recommendations belonging to this plan (can be multiple or single)
        const planRecs = recommendations.filter(r => r.plan_id === plan.plan_id);

        const formattedRecs = planRecs.map(rec => {
            const recId = rec.recommendation_id;

            const recIdeas = ideas
                .filter(i => i.recommendation_id === recId)
                .map(idea => ({
                    ...idea,
                    alternates: alternates.filter(alt => alt.idea_id === idea.idea_id)
                }));

            return {
                ...rec,
                captions: captions.filter(c => c.recommendation_id === recId),
                platform_predictions: platforms.filter(p => p.recommendation_id === recId),
                ideas: recIdeas
            };
        });

        return {
            ...plan,
            recommendations: formattedRecs // or nest a single 'recommendation' if a plan only has 1
        };
    });
}

    static async createSavedPlan(data) {
        const [result] = await db.query(
            "INSERT INTO SavedPlan (user_id, plan_id) VALUES (?, ?)",
            [data.userId, data.planId]
        );
        return result.insertId;
    }

    static async viewSavedPlan(userId) {
    const [plans] = await db.query(
        `SELECT p.*, s.* FROM SavedPlan s JOIN Plan p ON s.plan_id = p.plan_id WHERE s.user_id = ? ORDER BY s.created_at DESC`,
        [userId]
    );

    if (!plans || plans.length === 0) return [];

    const planIds = plans.map(p => p.plan_id);

    // 2. Fetch all related Recommendations, Captions, Platforms, Ideas, and Alternates for these plans in parallel
    const [
        [recommendations],
        [captions],
        [platforms],
        [ideas],
        [alternates]
    ] = await Promise.all([
        db.query(
            `SELECT * FROM Recommendation WHERE plan_id IN (?)`,
            [planIds]
        ),
        db.query(
            `SELECT c.* FROM Caption c 
             JOIN Recommendation r ON c.recommendation_id = r.recommendation_id 
             WHERE r.plan_id IN (?)`,
            [planIds]
        ),
        db.query(
            `SELECT pl.* FROM Platform pl 
             JOIN Recommendation r ON pl.recommendation_id = r.recommendation_id 
             WHERE r.plan_id IN (?)`,
            [planIds]
        ),
        db.query(
            `SELECT i.* FROM Idea i 
             JOIN Recommendation r ON i.recommendation_id = r.recommendation_id 
             WHERE r.plan_id IN (?)`,
            [planIds]
        ),
        db.query(
            `SELECT a.* FROM alternate a 
             JOIN Idea i ON a.idea_id = i.idea_id 
             JOIN Recommendation r ON i.recommendation_id = r.recommendation_id 
             WHERE r.plan_id IN (?)`,
            [planIds]
        )
    ]);

    // 3. Nest data hierarchically back into each plan
    return plans.map(plan => {
        // Find recommendations belonging to this plan (can be multiple or single)
        const planRecs = recommendations.filter(r => r.plan_id === plan.plan_id);

        const formattedRecs = planRecs.map(rec => {
            const recId = rec.recommendation_id;

            const recIdeas = ideas
                .filter(i => i.recommendation_id === recId)
                .map(idea => ({
                    ...idea,
                    alternates: alternates.filter(alt => alt.idea_id === idea.idea_id)
                }));

            return {
                ...rec,
                captions: captions.filter(c => c.recommendation_id === recId),
                platform_predictions: platforms.filter(p => p.recommendation_id === recId),
                ideas: recIdeas
            };
        });

        return {
            ...plan,
            recommendations: formattedRecs // or nest a single 'recommendation' if a plan only has 1
        };
    });
        return rows;
    }

    static async getInterests() {
        const [rows] = await db.query(
            "SELECT * FROM Interest"
        );
        return rows || [];
    }

    static async getDashboardData(userId) {
        const [rows] = await db.query(
            "SELECT (SELECT COUNT(*) FROM Plan WHERE user_id = ?) AS planCount,(SELECT COUNT(*) FROM SavedPlan WHERE user_id = ?) AS savedCount", [userId, userId]
        );
        return rows[0] || null;
    }

    static async getRecentPlan(userId) {
    // 1. Fetch flat rows joining Plan -> Recommendation -> Platform
    const [rows] = await db.query(
        `SELECT 
            p.plan_id,
            p.user_id,
            p.plan_purpose,
            p.product_name,
            p.product_category,
            p.product_description,
            p.demographics_age,
            p.demographics_gender,
            p.audience_description,
            p.plan_goal,
            p.plan_channel,
            p.created_at,
            plat.platform_id,
            plat.platform,
            plat.prediction
         FROM Plan p
         LEFT JOIN Recommendation r ON p.plan_id = r.plan_id
         LEFT JOIN Platform plat ON r.recommendation_id = plat.recommendation_id
         WHERE p.user_id = ?
         ORDER BY p.created_at DESC`,
        [userId]
    );

    if (!rows || rows.length === 0) return [];

    // 2. Group flat join rows into structured Plan objects
    const plansMap = new Map();

    for (const row of rows) {
        if (!plansMap.has(row.plan_id)) {
            // Stop once we have grouped the 2 latest distinct plans
            if (plansMap.size === 2) break;

            plansMap.set(row.plan_id, {
                plan_id: row.plan_id,
                user_id: row.user_id,
                plan_purpose: row.plan_purpose,
                product_name: row.product_name,
                product_category: row.product_category,
                product_description: row.product_description,
                demographics_age: row.demographics_age,
                demographics_gender: row.demographics_gender,
                audience_description: row.audience_description,
                plan_goal: row.plan_goal,
                plan_channel: row.plan_channel,
                created_at: row.created_at,
                platform_predictions: []
            });
        }

        // Push prediction object if a matching row exists in Platform table
        if (row.platform_id) {
            plansMap.get(row.plan_id).platform_predictions.push({
                platform_id: row.platform_id,
                platform: row.platform,
                prediction: row.prediction
            });
        }
    }

    return Array.from(plansMap.values());
}

    static async deleteSaved(userId, savedId) {
       

        const [result] = await db.query(
            `DELETE FROM SavedPlan WHERE user_id = ? AND plan_id = ?`, [userId, savedId]
        );

        return result[0];

    }


}

module.exports = Plan;