const express = require('express');
const router = express.Router();

//GET Homepage
router.get('/', async (req, res) =>{
    console.log('Showing the Homepage')
    res.render('./homepage.ejs')
}); 

//GET Create New Travel Plans Route 
// router.post('/new', (req, res) => {
//     console.log('Showing the New Travel Plan Page');
//     res.render('./newTravelPlanForm.ejs');
// });

// //POST Newly Created Travel Plan (form submission)
// router.post('/create', (req, res)=> {
//     console.log('Creating and Posting a new Travel Plan')

//     res.redirect('/')
// })


module.exports = router;