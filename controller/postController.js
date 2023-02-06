const Post = require("../models/postModel");
const User = require("../models/authModel");

// Create Post

exports.createPost = async (req, res) => {
  const newPost = new Post(req.body);

  try {
    const savedPost = await newPost.save();
    res.status(200).json({ msg: "Post created successfully", data: savedPost });
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
};

//  Update Post

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body }, { new: true });

      res.status(200).json({ msg: "You post as been updated", data: post });
    } else {
      res.status(404).json({ msg: "You can only update you post!" });
    }
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
};

// Delete Post

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne({ $set: req.body });

      res.status(200).json({ msg: "You post as been deleted" });
    } else {
      res.status(404).json({ msg: "You can only delete you post!" });
    }
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
};

// Get All Posts

exports.getAllPost = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json({ posts });
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
};

// Like

exports.likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json({ msg: "the post has been liked", post });
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(404).json({ msg: "the post has been dislike" });
    }
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
};

// Get post by id

exports.getPostId = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
};

// Post Timeline

exports.getTimeline = async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id });

    const friendsPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );

    res.status(200).json(userPosts.concat(...friendsPosts));
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
};

// Profile Post

exports.getUserPost = async(req, res) => {
  try {
    const user = await User.findOne({userName: req.params.userName});
    const posts = await Post.find({userId: user._id});

    res.status(200).json(posts)

  } catch(err){
    res.status(404).json({err: err.message});
  }
}