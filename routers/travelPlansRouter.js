const express = require('express');
const router = express.Router();
const { Plan } = require('../models/plan');
const { travelplans } = require('../controllers/travelPlansController');



//GET travelplan by id route
// router.get('/:id', async (req, res) => {
//   const travelPlans = await Plan.findById(req.params.id);
//   res.render('newTravelPlanForm.ejs', { travelPlan });
// });

//GET all travelplans route
router.get('/', travelplans);

//-----consider making an actual event model....
//
// router.post('/', async (req, res) => {
//   console.log('You have reached the POST TravelPlansRoute');
//   console.log(req.body); 
//   const newPlan = await Plan.create(req.body);
//   res.json(newEvent);
// });


// GET 
router.get('/new', (req, res) => {
});

// POST
router.post('/:planId', async (req, res) => {
  console.log("You've created a new travel plan with an empty model");
  try {
    const newPlanData = req.body;
    const newPlan = await Plan.create(newPlanData);
    res.status(201).json(newPlan); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});





// // Route to update an existing plan within a specific plan
// router.put('/:planId/update', async (req, res) => {
//   const planId = req.params.planId;
  
//   try {
//     const updatedData = {
//       planName: req.body.planName,
//       location: req.body.location,
//       description: req.body.description,
//       events: [eventSchema],
//     };

//     const updatedPlan = await Plan.findByIdAndUpdate(planId, updatedData, { new: true });
//     console.log("Updated Plan") 

//     if (!updatedPlan) {
//       return res.status(404).json({ error: 'Plan not found' });
//     }

//     res.status(200).json(updatedPlan);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });













//--------------------------------------------WHAT DAVID HELPED WITH 😆

// router.get('/new', (req, res) => {
//   console.log('You have reached the send new travelplans form');
//   res.render('./newTravelPlanForm.ejs');
// });

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
