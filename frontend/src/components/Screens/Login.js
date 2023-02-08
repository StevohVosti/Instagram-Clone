import React, { useEffect, useState } from "react";
import { clearErrors, login } from "../../actions/userActions";
import "./Register.css";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const history = useNavigate();
  // const alert = useAlert();
  const { error, isAuthenticated } = useSelector((state) => state.user);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  }

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history("/");
    }
  }, [dispatch, error, alert, history, isAuthenticated]);


  return (
    <div className="register">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNMprznJym84yrhcXItC59AcEdRAFzPQBfaL1YVSVJw&s"
        alt="logo"
      />

      <div className="form-input">
        <form onSubmit={loginSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />

          <p>
            Don't have an account? <a href="/register">Sign up</a>
          </p>
          <input type="submit" value="Login" className="loginBtn" />
        </form>
      </div>
    </div>
  );
}

export default Login;
