module.exports = {
  secret: process.env.AUTH_SECRET || "secret",
  session: { session: false },
  database: process.env.DB_URI || "mongodb://localhost:27017/authapi"
};
