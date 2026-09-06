const express = require('express');
const router = express.Router();
const planController = require('../controllers/planController');
const { authenticate } = require('../middleware/auth');

router.post('/create-content', authenticate, planController.createNewPlan);
router.post('/saved', authenticate, planController.createNewSavedPlan);
router.get('/interest', authenticate, planController.viewInterest);
router.get('/my-content', authenticate, planController.viewPlansHistory);
router.get('/saved-ideas', authenticate, planController.viewSavedPlan);
router.get('/:planId', authenticate, planController.findPlanById);


module.exports = router;