const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

function dashboard(req, res, next) {
  res.render('dashboard.ejs');
}

function myPlans(req, res, next) {
  res.render('plansmy.ejs');
}

function recentPlans(req, res, next) {
  res.render('plansrecent.ejs');
}

function favoritePlans(req, res, next) {
  res.render('plansfavorite.ejs');
}

function sharedPlans(req, res, next) {
  res.render('plansshared.ejs');
}

function trashedPlans(req, res, next) {
  res.render('planstrashed.ejs');
}

module.exports = { dashboard, myPlans, recentPlans, sharedPlans, favoritePlans, trashedPlans };

