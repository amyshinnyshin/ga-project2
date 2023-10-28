const express = require('express');
const { User } = require('../models/user.js');
const router = express.Router();

const { signup, allUsers, updateUserById } = require('../controllers/usersController');

//--------------  READ: GET single user by id route  ----------------//

//--------------   READ: GET all users router  ----------------//

router.get('/', allUsers);

//--------------  CREATE new user route  ----------------//
// returns create user form
router.get('/newuser', async (req, res) => {
  console.log('Now creating a new user');
  res.render('./newUserForm.ejs'); // starts at views
});

// sends data to DB
router.post('/signup', signup);

//--------------   UPDATE user by id route  ----------------//
// get edit form
router.get('/updateuser/:id', (req, res) => {
  res.render('./updateUserForm.ejs');
});

//--------------   DELETE user by id route  ----------------//

module.exports = router;
