const express = require('express');
const router = express.Router();
const { dashboard, myPlans, recentPlans, sharedPlans, favoritePlans, trashedPlans } = require('../controllers/dashboardController');

//GET travelplan by id route

//GET all travelplans route
router.get('/', dashboard);
router.get('/myplans', myPlans);
router.get('/recentplans', recentPlans);
router.get('/sharedplans', sharedPlans);
router.get('/favoriteplans', favoritePlans);
router.get('/trashedplans', trashedPlans);


module.exports = router;
