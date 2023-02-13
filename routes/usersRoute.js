const express = require("express");
const {
  getAllUsers,
  followUser,
  unfollowUser,
  getFollowers,
  getUserById,
} = require("../controller/userController");

const router = express.Router();

router.route("/users").get(getAllUsers);
router.route("/user/:id").get(getUserById);
router.route("/followers/:userId").get(getFollowers);
router.route("/:id/follow").put(followUser);
router.route("/:id/unfollow").put(unfollowUser);

module.exports = router;
