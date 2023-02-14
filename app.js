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

    // SERVING STATIC FILES
    app.use(express.static("frontend/build"));
    // SERVE UP INDEX.HTML IF IT DOESNOT RECORGANISE THE ROUTE
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
    });

module.exports = app;
