const express = require('express');
const router = express.Router();
// add models
// add controllers

const { travelplan } = require('../controllers/travelplanController');

router.get('/', travelplan);

module.exports = router;
