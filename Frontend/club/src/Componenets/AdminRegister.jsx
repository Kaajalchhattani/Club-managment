import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./AdminRegister.css";

function AdminRegister() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateUsername = (username) => {
    // Regular expression for username validation
    const usernamePattern = /^\d{4}\/[A-Z]+\/\d+$/;
    return usernamePattern.test(username);
  };

  const register = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      setEmail("");
      return;
    }
    if (!validateUsername(userName)) {
      alert("Please enter a valid username (e.g., 2020/CTAE/124).");
      setUserName("");
      return;
    }
    try {
      await axios.post('http://localhost:8800/adminregister', { username: userName, password: password });
      console.log('Registered successfully!!!');
      navigate("/AdminLogin");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  useEffect(() => {
    axios.get('http://localhost:8800/adminlogin')
      .then((response) => {
        if (response.data.loggedIn === true) {
          setLoginStatus(response.data.user[0].user);
        }
      });
  }, []);

  return (
    <div>
       <a className="back-link" href="./adminfirst">Back to Portal</a>
    <div className="register-container">
     
      <div className="register-form">
        <h1>Register</h1>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="text"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>College ID/Username</label>
          <input 
            type="text"
            placeholder="2020/CTAE/374"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="signin-button" onClick={register}>Register</button>
        <p>Are you already registered? <Link to="/AdminLogin">Sign In</Link></p>
      </div>
    </div>
    </div>
  );
}

export default AdminRegister;
