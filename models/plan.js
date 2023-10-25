const mongoose = require('mongoose');
<<<<<<< HEAD
const planSchema = new mongoose.Schema({
  planName: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
});
const Plan = mongoose.model('Plan', planSchema, 'plans');

module.exports = { Plan };
=======
const schema = new mongoose.Schema({
  name: String
});
const createNewPlan = mongoose.model('createNewPlan', schema);

async function run() {
  await mongoose.connect('mongodb://localhost:2023');
  await createNewPlan.nomadata.insertOne({ name: 'Test Testerson' });
}
run();
>>>>>>> f601b77 (pulling)
