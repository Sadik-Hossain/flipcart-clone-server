const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true, // for removing white spaces
    min: 5,
    max: 20,
  },
  lastname: {
    type: String,
    required: true,
    trim: true, // for removing white spaces
    min: 5,
    max: 20,
  },
  username: {
    type: String,
    required: true,
    trim: true, // for removing white spaces
    unique: true,
    index: true, // mongo will auto index
    lowercase: true, // mongo will auto index
  },
  email: {
    type: String,
    required: true,
    trim: true, // for removing white spaces
    unique: true,
    lowercase: true, // mongo will auto index
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

// create model
const User = mongoose.model("user", userSchema);

module.exports = User;
