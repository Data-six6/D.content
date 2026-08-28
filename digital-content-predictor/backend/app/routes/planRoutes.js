const express = require('express');
const router = express.Router();
const planController = require('../controllers/planController');
const authenticate = require('../middleware/auth');

router.post('/', authenticate, planController.createNewPlan);
router.get('/history', authenticate, planController.viewPlansHistory);
router.get('/:planId', authenticate, planController.findPlanById);
