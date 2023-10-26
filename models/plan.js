const mongoose = require('mongoose');


const eventSchema = new mongoose.Schema({
  name: {type:String},
  date: {type:Date, default:Date.now()},
  startTime: {type:Date, default:Date.now()},
  endTime: {type:Date, default:Date.now()},
  description: {type:String}
});



const planSchema = new mongoose.Schema({
  planName: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  events: [eventSchema]
});

const Plan = mongoose.model('Plan', planSchema, 'plans');


module.exports = { Plan };
