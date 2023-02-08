import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../actions/userActions";
import "./Register.css";

function Register() {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: "",
    bio: "",
    password: "",
  });

  const { name, userName, bio, email, password } = user;

  const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("userName", userName);
    myForm.set("email", email);
    myForm.set("bio", bio);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    dispatch(register(myForm));
  };

  return (
    <div className="register">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNMprznJym84yrhcXItC59AcEdRAFzPQBfaL1YVSVJw&s"
        alt="logo"
      />

      <div className="form-input">
        <form encType="multipart/form-data" onSubmit={registerSubmit}>
          <input
            type="text"
            placeholder="Name"
            required
            name="name"
            value={name}
            onChange={registerDataChange}
          />
          <input
            type="text"
            placeholder="UserName"
            required
            name="userName"
            value={userName}
            onChange={registerDataChange}
          />
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            value={email}
            onChange={registerDataChange}
          />
          <input
            type="text"
            placeholder="Bio"
            required
            name="bio"
            value={bio}
            onChange={registerDataChange}
          />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            value={password}
            onChange={registerDataChange}
          />

          <div id="registerImage">
            <img src={avatarPreview} alt="Avatar Preview" />
            <input
              type="file"
              name="avatar"
              accept="image/*"
              onChange={registerDataChange}
            />
          </div>

          <p>
            Already have an account? <a href="/login">Log in</a>
          </p>
          <input type="submit" value="Register" className="loginBtn" />
        </form>
      </div>
    </div>
  );
}

export default Register;
