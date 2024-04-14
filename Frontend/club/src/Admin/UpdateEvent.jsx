import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Update.css"

function UpdateEvent() {
    
    const [up,setup]=useState([]);
    const [Event,setEvent]=useState(
        {  id:"null",
            title:"",
            desc:"",
            link:"",
            image:"",


        }
    )
    

    const navigate=useNavigate()
    const location =useLocation()
    const updateid=Number(location.pathname.split("/")[2])
    const handleChange=(e)=>
    {
        setEvent(prev=>({...prev,[e.target.name]:e.target.value

        }))
    }
    const handleClick= async (e)=>{
        e.preventDefault()
        try{
            console.log(Event)
            await axios.put("http://localhost:8800/update/"+updateid , Event)
            
            navigate("/admin")
        }
        catch(err){
            print(err)
            console.log(err)

        }

        
    }
  return (
   
     <>
     
    <div className='event'>
      <h2>Update event</h2>
      <div className='form' >
        
    

        <div className='input'>
        <label>Title : </label>
      <input
      type="text"
      placeholder='title'
      onChange={handleChange}
      name='title'/>
     
      </div>

      <div className='input'>
        <label>Description : </label>
      <textarea type="textarea"
      placeholder='desc'
      onChange={handleChange}
      name='desc'/>
      
      </div>

      <div className='input'>
        <label>Link : </label>
      <input type="text"
      placeholder='link'
      onChange={handleChange}
      name='link'/>
     
      </div>

      <div className='input'>
        <label>Image : </label>
      <input type="text"
      placeholder='image'
      onChange={handleChange}
      name='image'/>
     
      </div>
      
      </div>
      <button className='button-2' onClick={handleClick}>Update</button>
      </div>
    </>
  )
}

export default UpdateEvent
