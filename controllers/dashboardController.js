const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

function dashboard(req, res, next) {
  res.render('dashboard.ejs');
}

module.exports = { dashboard };
