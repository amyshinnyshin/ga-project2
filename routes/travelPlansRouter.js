const express = require('express');
const router = express.Router();
// add models
// add controllers
const { travelplans } = require('../controllers/travelPlansController');
const { Plan } = require('../models/plan');

router.get('/', (req, res) => {
  console.log('Your have reached the all TravelPlansRoute');
  res.send('<h1>this is the JSON format</h1>'); // sends a string, should send a file
  //res.render('requires a view'); /// needs a view here
  // res.json(sends json) // sends JSON
});

router.post('/', async (req, res) => {
  console.log('You have reached the POST TravelPlansRoute');
  console.log(req.body); // console.log the data on server
  const newPlan = await Plan.create(req.body);
  res.json(newPlan);
  // send to browser acknowledgement: redirect to homepage (with note?)

  // Plan.create()/delete/findById
});

router.get('/new', (req, res) => {
  console.log('You have reached the send new travelplans form');
  res.render('./newTravelPlanForm.ejs');
});

module.exports = router;
