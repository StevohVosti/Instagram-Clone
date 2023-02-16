const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const fileupload = require('express-fileupload'); 

const path = require("path");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "config/config.env" });
}

// Using Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use(fileupload({useTempFiles: true}));

// Importing Routes
const post = require("./routes/postRoute");
const user = require("./routes/usersRoute");

// Using Routes
app.use("/api/v1", post);
app.use("/api/v1", user);

// serving the frontend
app.use(express.static(path.join(__dirname, "./frontend/build")))

app.get("*", (req, res) => {
    res.sendFile(
        path.join(__dirname, "./frontend/build/index.html"),
        function (err) {
            res.status(500).send(err)
        }
    )
})

module.exports = app;
