const express = require("express");
const app = express();

app.use(express.json({limit: '50mb'}));
app.use(require("./routes/AuthRoute.js"))

module.exports = app