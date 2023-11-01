//leave it...

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');


const { DATABASE_URL, PORT } = require('../config');
const { Plan } = require('../models/plan'); // importing USER model


//---------------------List All Plans--------------------//
const allPlans = (req, res, next) => {
  Plan.find({}).then((plans) => {
    res.render('allmyplans.ejs', { plans });
  }).catch((error) => {
    console.error(error);
  });
};

//---------------------Creates New Plan--------------------//



function travelplans(req, res, next) {
  console.log('You have reached the send new travel plans form');
  res.render('./newTravelPlanForm.ejs');
}

module.exports = { travelplans , allPlans };


