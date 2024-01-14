const mongoose = require("mongoose");

const userData = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: Number,
  },
  Confirmpassword: {
    type: Number,
  },
});

const User = mongoose.model("User", userData);
module.exports = User;
