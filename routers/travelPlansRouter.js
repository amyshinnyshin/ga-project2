const express = require('express');
const router = express.Router();
const { Plan } = require('../models/plan');
const { travelplans } = require('../controllers/travelPlansController');

// GET travelplan by id route
router.get('/:id', async (req, res) => {
  const travelPlans = await Plan.findById(req.params.id);
  res.render('newTravelPlanForm.ejs', { travelPlan });
});

// GET all travelplans route
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

  // send to browser acknowledgement: redirect to homepage (with note?)

  // UPDATE travelPlan by id route
  router.put('/:id', async (req, res) => {
    await Plan.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/travelplans/' + req.params.id);
  });

  // DELETE travel by id route
  router.delete('/:id', async (req, res) => {
    await Plan.findByIdAndRemove(req.params.id);
    res.redirect('/travelplans');
  });

});

router.get('/new', (req, res) => {
  console.log('You have reached the send new travelplans form');
  res.render('./newTravelPlanForm.ejs');
});

module.exports = router;
