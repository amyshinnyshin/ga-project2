//leave it...

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');


const { DATABASE_URL, PORT } = require('../config');
const { Plan, Event } = require('../models/plan'); // importing USER model


//---------------------List All Plans--------------------//
const allPlans = (req, res, next) => {
  User.find({}).then((events) => {
    res.render('allmyplans.ejs', { plans });
  });
};

//---------------------Creates New Plan--------------------//



function travelplans(req, res, next) {
  res.render("newTravelPlanForm.ejs");
}

module.exports = { travelplans , allPlans };


