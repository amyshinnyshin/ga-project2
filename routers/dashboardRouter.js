const express = require('express');
const router = express.Router();
const { dashboard } = require('../controllers/dashboardController');

//GET travelplan by id route

//GET all travelplans route
router.get('/', dashboard);

module.exports = router;
