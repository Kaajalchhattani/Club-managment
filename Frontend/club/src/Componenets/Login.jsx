import React,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import "./Login.css"




function Login() {
  const[userName,setuserName]=useState("");
  const[password,setpassword]=useState("");
  const[user,setuser]=useState("");
  const[pass,setpass]=useState("");

  const[LoginStatus,setLoginStatus]=useState("");
axios.defaults.withCredentials=true;

  const register=async (e)=>{
    e.preventDefault()
    axios.post('http://localhost:8800/user',
    {username:userName,password:password})
    .then((response)=>{
      console.log(response);
    })
}
const navigate=useNavigate() 

const login=async (e)=>{
  e.preventDefault()
  axios.post('http://localhost:8800/login',
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
  axios.get('http://localhost:8800/login')
  .then((response)=>{
    if(response.data.loggedIn==true){
    setLoginStatus(response.data.user[0].user)
    console.log(response.data.user[0].user);
    
  setTimeout(()=>{
    navigate('/Home')
    },500)}
   
  })
},[])

  return (
    <div>
  

      <div className="Login">
        <div className="login-form">
        <h1 className="h1">Login</h1>
        <label>College Id</label>
        <input type="text" placeholder="Username.. " onChange={(e)=>{
          setuser(e.target.value);
        }}></input>
        <label>Password</label>
        <input type="password" placeholder="Placeholder.." onChange={(e)=>{
          setpass(e.target.value);
        }}/>
        <button className="button"onClick={login}>Login</button>
        </div>

      </div>
            <h2>{LoginStatus}</h2>

    </div>
  )
}

export default Login
