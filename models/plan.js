const mongoose = require('mongoose');
const planSchema = new mongoose.Schema({
  planName: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
});
const Plan = mongoose.model('Plan', planSchema, 'plans');

module.exports = { Plan };
