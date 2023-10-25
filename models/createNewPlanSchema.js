const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  name: String
});
const createNewPlan = mongoose.model('createNewPlan', schema);

async function run() {
  await mongoose.connect('mongodb://localhost:2023');
  await createNewPlan.nomadata.insertOne({ name: 'Test Testerson' });
}
run();