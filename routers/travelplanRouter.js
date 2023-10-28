const express = require('express');
const router = express.Router();
const { Plan } = require('../models/plan');
const { travelplans } = require('../controllers/travelPlansController');

//GET travelplan by id route

//GET all travelplans route
router.get('/', travelplans);

router.post('/', async (req, res) => {
  console.log('You have reached the POST TravelPlansRoute');
  console.log(req.body); // console.log the data on server
  const newPlan = await Plan.create(req.body);
  res.json(newPlan);
  // send to browser acknowledgement: redirect to homepage (with note?)

  //CREATE new user route


//UPDATE user by id route


//DELETE user by id route
});

router.get('/new', (req, res) => {
  console.log('You have reached the send new travelplans form');
  res.render('./newTravelPlanForm.ejs');
});

module.exports = router;