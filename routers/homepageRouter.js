const express = require('express');
const router = express.Router();

//GET Homepage
router.get('/', async (req, res) =>{
    console.log('Showing the Homepage')
    res.render('./homepage.ejs')
}); 

//GET Create New Travel Plans Route 
router.get('/new', (req, res) => {
    console.log('Showing the New Travel Plan Page');
    res.render('newTravelPlanForm.ejs');
});

// //POST Newly Created Travel Plan (form submission)
// router.post('/create', (req, res)=> {
//     console.log('Creating and Posting a new Travel Plan')

//     res.redirect('/')
// })

//GET Edit Travel Plan Page 
router.get('/edit/:id', (req, res) => {
    const travelPlanId = req.params.id;
    console.log('Editing Travel Plan by ID');

    res.render(`/edit/{travelPlanId}`)//How to render the same travel plan
})


//POST Update Travel Plans
router.post('/update/:id', (req, res) =>{
    const travelPlanId = req.params.id;
    console.log('Updating Travel Plan');
    res.redirect(`/update/${travelPlanId}`);
})


//POST Delete Travel Plans
router.post('/delete/:id', (req, res) => {
    const travelPlanId = req.params.id;
    console.log('Deleting Travel Plan');
    res.redirect('/')
}) 


module.exports = router;