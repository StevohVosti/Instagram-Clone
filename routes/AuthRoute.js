const express = require("express");
const router = express.Router();
const User = require("./models/userModel.js");

router.get("/", (req, res) => {
  res.send("Hello")
})


router.post("/signUp", (req,res) => {
  const {name, email, password} = req.body; 

  if(!name || !email || !password) {
    return res.status(404).json({error: `Please add all fields`});
  }

  User.findOne({ email }).then((savedUser) => {
    if(savedUser){
      return res.status(200).json({message: `User already exists wth that email`});
    }

    const user = new User({
      email, 
      name,
      password
    })

    user.save()
    .then((user) => {
      res.json({message: `Registered Succesfully`})
    }).catch((err) => {
      return err;
    })
  })
});

router.post("login", )



module.exports = router;