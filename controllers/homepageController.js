const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

function dashboard(req, res, next) {
    res.render('dashboard.ejs');
}

function myPlans(req, res, next) {
    res.render('myplans.ejs');
}

function recentPlans(req, res, next) {
    res.render('recentplans.ejs');
}

function favoritePlans(req, res, next) {
    res.render('favoriteplans.ejs');
}

function sharedPlans(req, res, next) {
    res.render('sharedplans.ejs');
}

function trashedPlans(req, res, next) {
    res.render('trashedplans.ejs');
}

module.exports = { dashboard, myPlans, recentPlans, sharedPlans, favoritePlans, trashedPlans };

