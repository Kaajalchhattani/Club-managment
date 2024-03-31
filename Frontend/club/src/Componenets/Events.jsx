import React, { useEffect, useState } from 'react'
import "./Event.css"
import axios from 'axios'
import { Link } from 'react-router-dom';

function Events() {
    const [up,setup]=useState([]);

    useEffect(()=>
    {
        const fetchUpdate=async()=>
        {
            try{
                const res=await axios.get("http://localhost:8800/update")
                setup(res.data)

            }catch(err)
            {
                console.log(err)
            }
        }
        fetchUpdate()

    },[])
  return (
    <>
      <h2>Upcoming events</h2>
      <div className="full" >
        {up.map(updating=>(
          <>
          <div className="UpdatingEvents" >
          <img className='image' src={updating.image}></img>
          <div className='title'>{updating.title}</div>
          <div className='desc'>{updating.description}</div>
          <a className='link' href={updating.link}>Link</a>
          
          </div> 
          </>

        ))}
      </div>

    </>
  )
}

export default Events
