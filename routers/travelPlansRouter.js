const express = require('express');
const router = express.Router();
const { Plan } = require('../models/plan');
const { travelplans } = require('../controllers/travelPlansController');

//GET travelplan by id route
router.get('/:id', async (req, res) => {
  const travelPlans = await Plan.findById(req.params.id);
  res.render('newTravelPlanForm.ejs', { travelPlan });
});

//GET all travelplans route
router.get('/', async (req, res) => {
  const travelPlans = await Plan.find();
  res.render('server.ejs', { travelPlans });
});

// CREATE - Add a new travel plan to the database
router.post('/', async (req, res) => {
  console.log('You have reached the POST travelPlansRouter');
  console.log(req.body);
  const newPlan = await Plan.create(req.body);
  res.json(newPlan);

  //UPDATE travelPlan by id route
  router.put('/:id', async (req, res) => {
    await Plan.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/travelplans/' + req.params.id);
  });

  //DELETE travel by id route
  router.delete('/:id', async (req, res) => {
    await Plan.findByIdAndRemove(req.params.id);
    res.redirect('/travelplans');
  });
});

router.get('/new', (req, res) => {
  console.log('You have reached the send new travelplans form');
  res.render('./newTravelPlanForm.ejs');
});


//------------------Events 

//GET all events by route


//GET events by id

//GET create new events modal 

//Post Added event
router.post('/travelplan/:id/events', async (req, res) => {
  const id = req.params.id;
  const eventData = req.body;
  // Create and save the new event associated with the travel plan
  const newEvent = await Event.create({ ...eventData, travelPlan: id });
  // Redirect back to the events list or the travel plan details page
  res.redirect(`/${id}`);
});


//Get Edit event modal 

//Post Update events modal 

//Post Delete events modal 









module.exports = router;
