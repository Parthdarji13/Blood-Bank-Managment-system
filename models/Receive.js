const mongoose = require('mongoose');

const receiveSchema = new mongoose.Schema({
  name: String,
  email: String,
  bloodGroup: String,
  gender: String,
  age: Number,
  phone: String,
  city: String,
  urgency: String,
  message: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Receive', receiveSchema);
