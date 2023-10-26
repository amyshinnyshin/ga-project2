const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

function travelplans(req, res, next) {
  res.render("newTravelPlanForm.ejs");
}

module.exports = { travelplans };