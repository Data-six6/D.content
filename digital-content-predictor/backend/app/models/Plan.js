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

}

module.exports = Plan;