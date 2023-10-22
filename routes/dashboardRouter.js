const express = require('express');
const router = express.Router();
// add models
// add controllers
const { dashboard } = require('../controllers/dashboardController.js');


router.get('/', dashboard);

module.exports = router;