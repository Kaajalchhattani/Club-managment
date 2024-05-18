

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./AdminRegister.css";

function AdminRegister() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [LoginStatus, setLoginStatus] = useState("");
  
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    for (let i = 0; i < email.length; i++) {
      if (!emailPattern.test(email[i])) {
        return false;
      }
    }
    return true;
  };
  const validateUsername = (user) => {
    // Regular expression for username validation
    const usernamePattern = /^[\d]{4}\/[A-Z]+\/[\d]+$/;
    return usernamePattern.test(user);
  };

  const register = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      setEmail("");
      return;
    }
    if (!validateUsername(user)) {
      alert("Please enter a valid username (e.g., 2020/CTAE/124).");
      setUser("");
      return;
    }
    axios.post('http://localhost:8800/adminregister', { username: userName, password: password })
      .then((response) => {
        console.log(response);
        console.log('Registered!!!');
        navigate("/AdminLogin");
      })
      .catch((error) => {
        console.error("Registration failed:", error);
      });
  };

  const login = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:8800/adminlogin', { username: user, password: pass })
      .then((response) => {
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
    axios.get('http://localhost:8800/adminlogin')
      .then((response) => {
        if (response.data.loggedIn == true) {
          setLoginStatus(response.data.user[0].user);
        }
      });
  }, []);

  return (
    <div>
      <a className="Back" href="./adminfirst">Back to Portal</a>
      <div className="Register">
        <div>
          <h1 className="form">Register</h1>
          <div className="login-form">
          </div>
          <div className="login-form">
            <label>Email</label>
            <input type="text"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}>
            </input>
          </div>
          <div className="login-form">
            <label>CollegeId/Username</label>
            <input type="text"
              placeholder="2020/CTAE/374"
              onChange={(e) => {
                setUserName(e.target.value);
              }}>
            </input>
          </div>
          <div className="login-form">
            <label>Password</label>
            <input type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}>
            </input>
          </div>
          <button className="signin" onClick={register}>Register</button>
          <br></br>
          Are You an Admin?  <Link to="/AdminLogin">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default AdminRegister;
