const passport = require("passport"),
  config = require("../../config"),
  models = require("../setup");

module.exports = app => {
  const api = app.api.user;
  app.post("/auth/signup", api.signup(models.User));
};
