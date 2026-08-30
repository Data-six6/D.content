const express = require('express');
const router = express.Router();
const planController = require('../controllers/planController');
const { authenticate } = require('../middleware/auth');

router.post('/', authenticate, planController.createNewPlan);
router.post('/saved', authenticate, planController.createNewSavedPlan);
router.get('/history', authenticate, planController.viewPlansHistory);
router.get('/saved/view', authenticate, planController.viewSavedPlan);
router.get('/:planId', authenticate, planController.findPlanById);

module.exports = router;