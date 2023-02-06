const User = require("../models/authModel");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
  const { name, userName, email, password, bio } = req.body;

  if (!name || !userName || !email || !password  || !bio) {
    return res.status(404).json({ msg: "Plase add all the fields" });
  }

  let existingUser;

  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }

  if (existingUser) {
    res.status(404).json({ msg: "user already exist" });
  }
  // Hashing password

  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  const user = new User({
    name,
    userName,
    email,
    password: passwordHash,
    avatar,
  });

  try {
    user.save();
  } catch (err) {
    console.log(err);
  }

  return res.status(202).json({ user });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(404).json({ msg: "Please Enter Email & Password" });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(404).json({ msg: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    return res.status(200).json({ user });
  } catch (err) {
    res.status(404).json(err);
  }
};
