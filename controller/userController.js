const User = require("../models/authModel");

exports.getAllUsers = async (req, res) => {
  let users;

  try {
    users = await User.find();
  } catch (err) {
    res.status(404).json({ err: err.message });
  }

  if (!users) {
    return res.status(404).json({ msg: "No users Found" });
  }

  return res.status(200).json({ users });
};

// get followers of user

exports.getFollowers = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const friends = await Promise.all(
      user.followings.map((fri_id) => {
        return User.findById(fri_id);
      })
    );

    let friendsList = [];

    friends.map((friend) => {
      const { _id, userName, avatar } = friend;

      friendsList.push({ _id, userName, avatar });
    });
    res.status(200).json({ friendsList });
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
};

// Follow

exports.followUser = async (req, res) => {
  if (req.body.userId != req.params.id) {
    try {
      const user = await User.findById(req.params.id);

      const currentUser = await User.findById(req.params.userId);

      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { following: req.body.id } });
        res.status(200).json({ msg: "You followed this User" });
      } else {
        res.status(404).json({ msg: "You already follow this user" });
      }
    } catch (err) {
      return res.status(404).json({ err: err.message });
    }
  } else {
    res.status(404).json({ msg: "You cannot follow yourself!" });
  }
};

// unfollow user

exports.unfollowUser = async (req, res) => {
  if (req.body.userId != req.params.id) {
    try {
      const user = await User.findById(req.params.id);

      const currentUser = await User.findById(req.params.userId);

      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { following: req.body.id } });
        res.status(200).json({ msg: "User as been unfollowed" });
      } else {
        res.status(404).json({ msg: "You don't follow this user" });
      }
    } catch (err) {
      return res.status(404).json({ err: err.message });
    }
  } else {
    res.status(404).json({ msg: "You cannot unfollow yourself!" });
  }
};
