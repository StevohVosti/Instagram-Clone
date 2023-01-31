const express = require("express");
const { getUser, getUserFriends, addRemoveFriend } = require("../controllers/userController");
const { verifyToken } = require("../middleware/auth");

const router = express.Router();

router.route("/:id").get(verifyToken, getUser);
router.route("/:id/friends").get(verifyToken, getUserFriends);

// Update
router.route("/:id/friendId").patch(addRemoveFriend);


module.exports = router;