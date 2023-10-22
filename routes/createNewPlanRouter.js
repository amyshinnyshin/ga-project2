const express = require('express');
const router = express.Router();
// add models
// add controllers
const { createNewPlan } = require('../controllers/createNewPlanController');


router.get('/createNewPlanRouter', createNewPlan);

module.exports = router;