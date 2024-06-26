import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateUserName = (username) => {
    // Regular expression for username validation (2020/CTAE/274 format)
    const usernamePattern = /^\d{4}\/[A-Z]{4}\/\d{3}$/;
    return usernamePattern.test(username);
  };

  const register = async (e) => {
    e.preventDefault();
    if (!validateUserName(userName)) {
      alert("Please enter a valid username in the format '2020/CTAE/274'.");
      setUserName("");
      setPassword("");
      return;
    }
    if (!validateEmail(user)) {
      alert("Please enter a valid email address.");
      return;
    }
    axios
      .post("http://localhost:8800/user", { username: userName, password: password })
      .then((response) => {
        console.log(response);
      });
  };

  const login = async (e) => {
    e.preventDefault();
    if (!validateEmail(user)) {
      alert("Please enter a valid email address.");
      return;
    }
    axios
      .post("http://localhost:8800/login", { username: user, password: pass })
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
    axios.get("http://localhost:8800/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].user);
        console.log(response.data.user[0].user);

        setTimeout(() => {
          navigate("/Home");
        }, 500);
      }
    });
  }, []);

  return (
    <div>
      <div className="Login">
        <div className="login-form">
          <h1 className="h1">Login</h1>
          <label>College Id</label>
          <input
            type="text"
            placeholder="Username.. "
            onChange={(e) => {
              setUser(e.target.value);
            }}
          ></input>
          <label>Password</label>
          <input
            type="password"
            placeholder="Placeholder.."
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <button className="button" onClick={login}>
            Login
          </button>
        </div>
      </div>
      <h2>{loginStatus}</h2>
    </div>
  );
}

export default Login;
