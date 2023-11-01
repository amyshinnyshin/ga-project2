const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const { DATABASE_URL, PORT } = require('../config');
const { Plan } = require('../models/plan'); // importing USER model

//---------------------List All Events--------------------//
// const allEvents = (req, res, next) => {

// }


//---------------------Creates New Event--------------------//


function travelplans(req, res, next) {
  res.render("newTravelPlanForm.ejs");
}

module.exports = { travelplans };


