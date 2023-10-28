const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

//Instead of using mongoose's promise-like system, we'll be using Javascript's promise system:
mongoose.Promise = global.Promise;

const { DATABASE_URL, PORT } = require('../config');
const { User } = require('../models/user'); // importing USER model

//--------------  CRUD  ----------------//
//--------------  CRUD  ----------------//

//--------------  CREATE new user  ----------------//
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

function allUsers() {
  const userlist = (req, res, next) => {
    User.find({}).then((users) => {
      res.render('users.ejs', { users });
    });
  };
}
function allUsers() {
  const userlist = (req, res, next) => {
    User.find({}).then((users) => {
      res.render('users.ejs', { users });
    });
  };
}

//--------------  READ single user Profile  ----------------//

//--------------  UPDATE user  ----------------//
const updateUserById = async (req, res, next) => {
  console.log('controller updateUserById');

  const theUser = await User.findById(req.params.id);
  console.log('theUser', theUser);
  res.render('updateUserForm.ejs', { theUser });
};

function updateUserInDB(req, res, next) {
  const requiredFields = ['_id', 'firstName', 'lastName', 'email'];

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

  const { _id, firstName, lastName, email } = req.body;
  console.log('2.', req.body);
  const updatedUser = { firstName, lastName };

  User.findOneAndUpdate({ id: req.body._id }, updatedUser);

  res.render('/');
}

//--------------  READ: List all users  ----------------//

function allUsers() {
  const userlist = (req, res, next) => {
    User.find({}).then((users) => {
      res.render('users.ejs', { users });
    });
  };
}

//--------------  DELETE user  ----------------//

module.exports = { User, signup, allUsers, updateUserById, updateUserInDB };
