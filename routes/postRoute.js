const express = require("express");
const { getFeedPosts, getUserPosts, likePost } = require("../controllers/postController");
const { verifyToken } = require("../middleware/auth");

const router = express.Router();

router.route("/").get(verifyToken,  getFeedPosts);
router.route("/:userId/posts").get(verifyToken, getUserPosts);

// Update
router.route("/:id/like").patch(likePost);


module.exports = router;