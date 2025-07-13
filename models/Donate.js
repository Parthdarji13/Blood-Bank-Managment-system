const mongoose = require('mongoose');

const donateSchema = new mongoose.Schema({
  name: String,
  email: String,
  bloodGroup: String,
  gender: String,
  age: Number,
  phone: String,
  city: String,
  message: String,
  date: {
    type: Date,
    default: Date.now
  }
});

const Donate = mongoose.model('Donate', donateSchema);

module.exports = Donate;
