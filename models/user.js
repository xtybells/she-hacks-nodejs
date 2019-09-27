const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  fname: {
    type: String
  },
  lname: {
    type: String
  },
  dateOfBirth: {
    type: Date
  },
  phone: {
    type: String
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  }
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
