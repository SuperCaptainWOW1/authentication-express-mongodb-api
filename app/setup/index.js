const mongoose = require("mongoose"),
  UserModel = require("../models/user");

const models = {
  User: mongoose.model("User")
};

module.exports = models;
