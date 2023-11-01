const express = require('express');
const router = express.Router();

//GET Homepage
router.get('/', async (req, res) =>{
    console.log('Showing the Homepage')
    res.render('./homepage.ejs')
}); 

//CREATE Creating New Travel Plans Route 
router.get('/newtravelplan', (req, res) => {
    console.log('Showing the New Travel Plan Page');
    res.render('newTravelPlanForm.ejs');
});

//UPDATE Travel Plans 

//DELETE Travel Plans

module.exports = router;