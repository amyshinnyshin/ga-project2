const express = require('express');
const { User } = require('../models/user.js');
const router = express.Router();

const { signup, allUsers } = require('../controllers/usersController');

//GET user by id route

//GET all users router
router.get('/', allUsers);

//CREATE new user route

//CREATE new user route
// returns form
router.get('/newuser', async (req, res) => {
  console.log('Now creating a new user');
  res.render('./newUserForm.ejs'); // starts at views
});

// sends data to DB
router.post('/signup', signup);

//UPDATE user by id route

//DELETE user by id route

module.exports = router;
