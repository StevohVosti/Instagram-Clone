const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    likes: {
      type: Array,
      default: [],
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Post", userSchema);
