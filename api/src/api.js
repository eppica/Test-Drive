const app = require("./config")();
const port = app.get("port");
const db = app.get("uri");
const mongoose = require("mongoose");
const serverless = require("serverless-http");

mongoose.connect(db, { useNewUrlParser: true });

app.use(`/.netlify/functions/api`, require("./routes"));

module.exports = app;
module.exports.handler = serverless(app);
