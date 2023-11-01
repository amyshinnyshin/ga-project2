const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');


const { DATABASE_URL, PORT } = require('../config');
const { Plan, Event } = require('../models/plan'); // importing USER model


//---------------------List All Events--------------------//
// const allEvents = (req, res, next) => {
//   User.find({}).then((events) => {
//     res.render('users.ejs', { users });
//   });
// };

//---------------------Creates New User--------------------//


function travelplans(req, res, next) {
  res.render("newTravelPlanForm.ejs");
}

module.exports = { travelplans };


