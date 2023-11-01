const mongoose = require('mongoose');


const eventSchema = new mongoose.Schema({
  eventName: {type: String},
  eventDate: {type: Date, default:Date.now()},
  startTime: {type: String, default:Date.now()},
  endTime: {type: String, default:Date.now()},
  description: {type:String}
});



const planSchema = new mongoose.Schema({
  planName: { type: String},
  location: { type: String},
  description: { type: String},
  events: [eventSchema],
  traveler: {type:mongoose.Schema.Types.ObjectId, ref: 'users'}
});

const Plan = mongoose.model('Plan', planSchema, 'plans');
// const Event = mongoose.model('Event', eventSchema, 'event');


module.exports = { Plan, Event};
