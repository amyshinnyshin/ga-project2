const express = require('express')
const router = express.Router();

const mongoose = require ('mongoose');

function homepage(req, res, next) {
    res.render("homepage.ejs");
  }

module.exports = { homepage }