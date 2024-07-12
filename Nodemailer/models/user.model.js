let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

let user = mongoose.model("userSchema", userSchema);

module.exports = user;
