const express = require('express');
const router = express.Router();
const recommendationController = require('../controllers/recommendationController');
const { authenticate } = require('../middleware/auth');

router.get('/fetch-data', authenticate, recommendationController.fetchRecommendation);


module.exports = router;