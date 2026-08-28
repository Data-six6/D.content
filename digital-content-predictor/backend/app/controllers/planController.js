const Plan = require('../models/Plan');

exports.createNewPlan = async (req, res) => {
    try {
        const { userId } = req.user;
        if (!userId) {
            return res.status(400).json({ error: 'Invalid user id' });
        }
        const {
            plan_purpose: planPurpose,
            product_name: productName,
            product_category_id: productCategoryId,
            product_description: productDescription,
            demographics_age: demographicsAge,
            demographics_gender: demographicsGender,
            audience_description: audienceDescription,
            plan_goal: planGoal,
            plan_channel: planChannel,
        } = req.body;

        if (!planPurpose || !productName || !productCategoryId || !demographicsAge || !demographicsGender || !planChannel || !planGoal) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const planId = await Plan.createPlan({
            userId: userId,
            planPurpose,
            productName,
            productCategoryId, 
            productDescription, 
            demographicsAge, 
            demographicsGender, 
            audienceDescription, 
            planGoal, 
            planChannel 
        })

        return res.status(201).json({
            message: 'Plan created successfully',
            planId
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: 'Failed to create plan'
        });
    }
};

exports.findPlanById = async (req, res) => {
    try {
        const { planId } = req.params;
        const { userId } = req.user;

        const plan = await Plan.getPlanById(planId);

        if (!plan) {
            return res.status(404).json({
                error: 'Plan not found'
            });
        }
        if (plan.user_id !== userId) {
            return res.status(403).json({ 
                error: 'Forbidden access' 
            });
        }

        return res.status(200).json({ plan });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: 'Failed to fetch plan'
        });
    }
};

exports.viewPlansHistory = async (req, res) => {
    try {
        const { userId } = req.user;

        const history = await Plan.getPlanByUser(userId);

        return res.status(200).json({ history });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: 'Failed to fetch history'
        });
    }
};