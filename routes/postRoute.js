const express = require("express");
const {
  createPost,
  updatePost,
  deletePost,
  getAllPost,
  likePost,
  getPostId,
  getUserPost,
  getTimeline,
} = require("../controller/postController");
// const { verifyToken } = require("../middleware/auth");
const multer = require("multer");

const router = express.Router();

// /* FILE STORAGE */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

router.route("/posts").post(upload.single("picture"), createPost);
router.route("/:id").put(updatePost);
router.route("/:id").delete(deletePost);
router.route("/").get(getAllPost);
router.route("/:id/like").put(likePost);
router.route("/:id").get(getPostId);
router.route("/timeline/:userId").get(getTimeline);
router.route("/profile/:userName").get(getUserPost);


module.exports = router;
