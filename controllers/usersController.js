const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

// auth
// const jwt = require('jsonwebtoken');

//Instead of using mongoose's promise-like system, we'll be using Javascript's promise system:
mongoose.Promise = global.Promise;

const { DATABASE_URL, PORT } = require('../config');
const { User } = require('../models/user'); // importing USER model


//--------------  READ: List all users  ----------------//

async function allUsers(req, res, next) {
  const users = await User.find({});
  res.render('users.ejs', { users });
}

//--------------  READ single user Profile  ----------------//

async function userProfile(req, res, next) {
  const oneUser = User.findById(req.params.id);
  res.render('userprofile.ejs', { oneUser });
}

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

//--------------  READ single user Profile  ----------------//

//--------------  UPDATE user  ----------------//
const updateUserById = async (req, res, next) => {
  console.log('controller updateUserById');
  const theUser = await User.findById(req.params.id);
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

  const { _id, firstName, lastName, email } = req.body;

  const updatedUser = { firstName, lastName };

  User.findOneAndUpdate({ id: req.body.id }, updatedUser);

  res.redirect('/users');
}

//--------------  DELETE user  ----------------//

async function deleteUser(req,res){
  await User.findOneAndDelete({id:req.body.id});
  res.redirect('/users');
}

module.exports = { User, signup, allUsers, updateUserById, updateUserInDB, userProfile, deleteUser };
