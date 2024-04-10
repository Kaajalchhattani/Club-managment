import React,{useState,useEffect} from "react";
import axios from "axios";




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
    }
    console.log(response)
  })
},[])

  return (
    <div>
      <div className="Register">
        <h1>Register</h1>
        <label>CollegeId</label>
        <input type="text" onChange={(e)=>{
          setuserName(e.target.value);
        }}></input>
        <label>Password</label>
        <input type="text"  onChange={(e)=>{
          setpassword(e.target.value);
        }}></input>
        <button onClick={register}>Register</button>
      </div>

      <div className="Login">
        <h1>Login</h1>
        <input type="text" placeholder="Username.. " onChange={(e)=>{
          setuser(e.target.value);
        }}></input>
        <input type="password" placeholder="Placeholder.." onChange={(e)=>{
          setpass(e.target.value);
        }}/>
        <button onClick={login}>Login</button>

      </div>
            <h1>{LoginStatus}</h1>

    </div>
  )
}

export default Login
