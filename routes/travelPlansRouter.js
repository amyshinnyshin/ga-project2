const express = require('express');
const router = express.Router();
// add models
// add controllers
const { travelplan } = require('../controllers/travelPlanController');


router.get('/', (req, res) => {
    console.log ('you have reached the GET travelPlansRoute')
    res.json("this is GET")
});

router.post('/', (req, res) => {
    console.log ('you have reached the POST travelPlansRoute')
});

module.exports = router;