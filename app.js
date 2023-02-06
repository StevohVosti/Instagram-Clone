const express = require("express");
const app = express();

app.use(express.json());

// Imports
const auth = require("./routes/authRoute");
const users = require("./routes/usersRoute");
const post  = require("./routes/postRoute");


app.use("/api/v1", auth);
app.use("/api/v1", users);
app.use("/api/v1", post);

module.exports = app;
