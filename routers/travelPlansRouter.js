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

//-----consider making an actual event model....
router.put('/:planId/:eventId', async (req, res) =>{
  console.log("You've reach the updated plan by ID.");
  const updatedEventData = req.body;
  const planUpdate = await Plan.findOneAndUpdate({"events._id":mongoose.Types.ObjectId(req.params.eventId)}, {$set:{"events.$": updatedEventData}}, { new: true, useFindAndModify: false })
  console.log(planUpdate);
})



router.put('/:planId/newevent', async (req, res) => {
  console.log("You've reach create new event.");
  const newEvent = req.body;
  const thisPlan = await Plan.findById(req.param.planId);
  console.log(thisPlan);

//Now that we've found the plan, we are updating the event array... 
  thisPlan.events.push(newEvent);
  await thisPlan.save()
});

//don't necessarily need CRUD delete for events.. but we can use the same logic.... (instead of push... its the opposite of the push)




//------------------Events 

//GET all events by route





//Get Edit event modal 

//Post Update events modal 

//Post Delete events modal 









module.exports = router;
