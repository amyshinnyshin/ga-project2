const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

//Instead of using mongoose's promise-like system, we'll be using Javascript's promise system:
mongoose.Promise = global.Promise;

const { DATABASE_URL, PORT } = require('../config');
const { User } = require('../models/user'); // importing USER model

//--------------  CRUD  ----------------//

//--------------  CREATE new user  ----------------//

function signup(req, res, next) {
  const requiredFields = ['firstName', 'lastName', 'email'];

  for (let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const errorMessage = `missing ${field} in request body`;
      console.error(errorMessage);
      return res.send(errorMessage);
    }
  }

  //normalizing email
  req.body.email = req.body.email.toLowerCase();
  console.log(req.body);

  const { firstName, lastName, email } = req.body;

  console.log(req.body);
  const newUser = { firstName, lastName, email };

  User.create(newUser);

  res.render('/');
}

//--------------  READ: List all users  ----------------//

const allUsers = (req, res, next) => {
  User.find({}).then((users) => {
    res.render('users.ejs', { users });
  });
};

//--------------  READ single user Profile  ----------------//

//--------------  UPDATE user  ----------------//
function updateUserById(req, res, next) {
  console.log('controller User');
}

//--------------  DELETE user  ----------------//

module.exports = { User, signup, allUsers, updateUserById };
