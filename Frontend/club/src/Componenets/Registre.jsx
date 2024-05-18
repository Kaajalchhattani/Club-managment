import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [LoginStatus, setLoginStatus] = useState("");
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();

  const validateUserName = (username) => {
    // Regular expression for username validation (2020/CTAE/274 format)
    const usernamePattern = /^\d{4}\/[A-Z]{4}\/\d{3}$/;
    return usernamePattern.test(username);
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const register = async (e) => {
    e.preventDefault();
    if (!validateUserName(userName)) {
      alert("Please enter a valid College ID (e.g., 2020/CTAE/274).");
      setUserName("");
      setPassword("");
      setEmail("");
      return;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      setEmail("");
      return;
    }
    axios.post("http://localhost:8800/user", { username: userName, password: password, email: email }).then((response) => {
      console.log(response);
    });
    console.log("Registered!!!");
    navigate("/Login");
  };

  const login = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:8800/login", { username: user, password: pass }).then((response) => {
      if (response.data.message) {
        console.log(response);
        setLoginStatus(response.data.message);
      } else {
        console.log(response.data[0]);
        setLoginStatus(response.data[0].user);
      }
    });
  };

  useEffect(() => {
    axios.get("http://localhost:8800/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].user);
      }
    });
  }, []);

  return (
    <div className="Register-full">
      <div className="Register">
        <div>
          <h1 className="form">Register</h1>
          <div className="login-form">
            <label>Email</label>
            <input
              type="text"
              placeholder="johnsharma@gmail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="login-form">
            <label>CollegeId/Username</label>
            <input
              type="text"
              placeholder="2020/CTAE/374"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className="login-form">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button className="signin" onClick={register}>
            Register
          </button>
          <br />
          Already a User Please <Link to="/Login">Sign Up</Link>
          <br />
          Are You an Admin? <Link to="/AdminLogin">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;

