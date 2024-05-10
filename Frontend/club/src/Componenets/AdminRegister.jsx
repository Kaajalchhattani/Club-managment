import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import "./AdminRegister.css"



function AdminRegister() {
  const[userName,setuserName]=useState("");
  const[password,setpassword]=useState("");
  const[user,setuser]=useState("");
  const[pass,setpass]=useState("");
  const[email,setemail]=useState("");

  const[LoginStatus,setLoginStatus]=useState("");
axios.defaults.withCredentials=true;

  const register=async (e)=>{
  
    axios.post('http://localhost:8800/adminregister',
    {username:userName,password:password})
    .then((response)=>{
      console.log(response);
    })
      // Prevent the default form submit action
    console.log('Registered!!!');
   navigate("/AdminLogin")
}
const navigate=useNavigate();

const login=async (e)=>{
  e.preventDefault()
  axios.post('http://localhost:8800/adminlogin',
  {username:user,password:pass})
  .then((response)=>{
    if(response.data.message)
    {
      console.log(response);
      setLoginStatus(response.data.message)
    }
    else{
      console.log(response.data[0]);
      
      setLoginStatus(response.data[0].user)

    }
  })
}

useEffect(()=>
{
  axios.get('http://localhost:8800/adminlogin')
  .then((response)=>{
    if(response.data.loggedIn==true){
    setLoginStatus(response.data.user[0].user)
    }
   
  })
},[])

  return (
    <div>
      <a className="Back"href="./adminfirst">Back to Portal</a>
      <div className="Register">
        <div>
        <h1 class="form">Register</h1>
        
        <div class="login-form">
      
       
        </div>
        <div class="login-form">
        <label>CollegeId/Username</label>
        <input type="text" 
        placeholder="2020/CTAE/374"
        onChange={(e)=>{
        setuserName(e.target.value);
        }}>
        </input>
        </div>
        <div class="login-form">
        <label>Password</label>
        <input type="text"  
        onChange={(e)=>{
        setpassword(e.target.value);
        }}>

        </input>
        </div>
        <div>
        </div>
        <button className="signin" onClick={register}>Register</button>
        
     
      
     <br></br>
        Are You a Admin ?  <Link  to="/AdminLogin">Sign Up</Link>
       
      </div>
       </div>

    </div>
  )
}

export default AdminRegister