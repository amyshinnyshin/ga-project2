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
// // GET request to render the page for creating a new travel plan (newtravelplan)
// router.get('/newtravelplan', (req, res) => {
//   res.render('newTravelPlanForm.ejs');
// });

// // POST request to create a new event for a specific travel plan (newtravelplan)
// router.post('/newtravelplan', (req, res) => {
//   const planId = req.body.planId; // Assuming you send the plan ID in the request body
//   const eventData = req.body; // Extract event data from the request body

//   Plan.findById(planId, (err, plan) => {
//     if (err) {
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }

//     if (!plan) {
//       return res.status(404).json({ error: 'Plan not found' });
//     }

//     // Add the new event data to the plan's events array
//     plan.events.push(eventData);

//     // Save the updated plan
//     plan.save((err, updatedPlan) => {
//       if (err) {
//         return res.status(500).json({ error: 'Failed to save plan' });
//       }

//       res.json(eventData); // Respond with the newly created event data
//     });
//   });
// });





router.get('/newtravelplan', (req, res) => {
  const planId = req.params.planId;

  Plan.findById(planId, (err, plan) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (!plan) {
      return res.status(404).json({ error: 'Plan not found' });
    }
    const eventList = plan.events;
    res.json(eventList);
  });
});


//GET create new events modal 

//Post Added event
router.post('/newtravelplan', (req, res) => {
  const planId = req.params.planId; 
  const eventData = req.body;

  Plan.findById(planId, (err, plan) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    plan.events.push(eventData);
    plan.save((err, updatedPlan) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to save plan' });
      }
      res.json(eventData);
    });
  });
});



//Get Edit event modal 

//Post Update events modal 

//Post Delete events modal 









module.exports = router;
