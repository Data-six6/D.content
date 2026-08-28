const db = require('../config/db');

class Plan {
    static async createPlan(data){
        const [result] = await db.query(
            "INSERT INTO Plan (user_id, plan_purpose, product_name, product_category_id, product_description, demographics_age, demographics_gender, audience_description, plan_goal, plan_channel) VALUES (?,?,?,?,?,?,?,?,?,?)",
            [data.userId, data.planPurpose, data.productName, data.productCategoryId, data.productDescription, data.demographicsAge, data.demographicsGender, data.audienceDescription, data.planGoal, data.planChannel]
        );
        return result.insertId;
    }

    static async getPlanById(planId){
        const [rows] = await db.query(
            "SELECT * FROM Plan WHERE plan_id = ?",  [planId]
        );
        return rows[0] || null;
    }

    static async getPlanByUser(userId){
        const [rows] = await db.query(
            "SELECT * FROM Plan WHERE user_id = ?",  [userId]
        );
        return rows || null;
    }
}

module.exports = Plan;