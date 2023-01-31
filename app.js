const express = require("express");
const app = express();
const multer = require("multer");

app.use(express.json());

// Imports
const auth = require("./routes/authRoute");
const user = require("./routes/usersRoute");
const posts = require("./routes/postRoute");
const { register } = require("./controllers/Authcontroller");
const { createPost } = require("./controllers/postController");
const { verifyToken } = require("./middleware/auth");

/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

/* ROUTES WITH FILES */
app.post("/register", upload.single("picture"), register);
app.post("/posts",  upload.single("picture"), createPost);

app.use("/api/v1", auth);
app.use("/api/v1", user);
app.use("/api/v1", posts);

module.exports = app;
