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
        const [rows] = await db.query(
            "SELECT * FROM Plan WHERE user_id = ?",
            [userId]
        );
        return rows || null;
    }

    static async createSavedPlan(data) {
        const [result] = await db.query(
            "INSERT INTO SavedPlan (user_id, plan_id) VALUES (?, ?)",
            [data.userId, data.planId]
        );
        return result.insertId;
    }

    static async viewSavedPlan(userId) {
        const [rows] = await db.query(
            `SELECT p.*, s.saved_plan_id, s.created_at
             FROM SavedPlan s
             JOIN Plan p ON s.plan_id = p.plan_id
             WHERE s.user_id = ?`,
            [userId]
        );
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


}

module.exports = Plan;