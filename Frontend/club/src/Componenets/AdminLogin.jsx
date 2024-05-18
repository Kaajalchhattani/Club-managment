
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [LoginStatus, setLoginStatus] = useState("");
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();

  const validateUser = (username) => {
    // Regular expression for username validation
    const usernamePattern = /^\d{4}\/[A-Z]+\/\d{3}$/;
    return usernamePattern.test(username);
  };

  const login = async (e) => {
    e.preventDefault();
    if (!validateUser(user)) {
      alert("Please enter a valid College ID (e.g., 2020/CTAE/274).");
      setUser("");
      setPass("");
      return;
    }
    axios.post("http://localhost:8800/adminlogin", { username: user, password: pass }).then((response) => {
      if (response.data.message) {
        console.log(response);
        setLoginStatus(response.data.message);
      } else {
        console.log(response.data[0]);
        setLoginStatus(response.data[0].user);
        setTimeout(() => {
          navigate("/adminfirst");
        }, 500);
      }
    });
  };

  useEffect(() => {
    axios.get("http://localhost:8800/adminlogin").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].user);
        console.log(response.data.user[0].user);
        setTimeout(() => {
          navigate("/adminfirst");
        }, 500);
      }
    });
  }, []);

  return (
    <div>
      <div className="Login">
        <div className="login-form">
          <h1>Admin-Login</h1>
          <label>College Id</label>
          <input
            type="text"
            placeholder="Username.. "
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          ></input>
          <label>Password</label>
          <input
            type="password"
            placeholder="Placeholder.."
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <button className=".button-3" onClick={login}>
            Login
          </button>
        </div>
      </div>
      <h2>Welcome {LoginStatus}</h2>
    </div>
  );
}

export default AdminLogin;
