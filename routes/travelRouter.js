const express = require('express');
const router = express.Router();
// add models
// add controllers
const { travelplan } = require('../controllers/travelPlanController');


router.get('/travelplan', travelplan);

module.exports = router;