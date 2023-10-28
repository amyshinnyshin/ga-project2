const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  firstName: {type:String},
  lastName: {type:String},
  email: {type:String, required: true, unique: true},
  plans: [{type:mongoose.Schema.Types.ObjectId, ref: 'plans'}]
});

const User = mongoose.model('User', userSchema, 'users');





module.exports = { User };