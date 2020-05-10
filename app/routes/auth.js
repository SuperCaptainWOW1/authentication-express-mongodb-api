const models = require("../setup");

module.exports = app => {
  const api = app.api.auth;
  app.get("/", (req, res) => res.send("Authentication API"));
  app.post("/auth/login", api.login(models.User));
};
