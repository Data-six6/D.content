const Plan = require('../models/Plan');
const Recommendation = require('../models/Recommendation');

exports.fetchRecommendation = async (req, res) => {
    try {
        const userId = req.user.userId || req.user.id || req.user.user_id;
        const recommendation = await Recommendation.getRecommendation(userId);

        return res.status(200).json({ recommendation });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: 'Failed to fetch recommendation'
        });
    }
};