import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./NewEvent.css"





function NewEvent() {
    const [Event,setEvent]=useState(
        {  id:"null",
            title:"",
            desc:"",
            link:"",
            image:"",


        }
    )
    const navigate=useNavigate() 

    const handleChange=(e)=>
    {
        setEvent(prev=>({...prev,[e.target.name]:e.target.value

        }))
    }
    const handleClick= async (e)=>{
        e.preventDefault()
        try{
            console.log(Event)
            await axios.post("http://localhost:8800/update",Event)
            
            navigate("/")
        }
        catch(err){
            print(err)
            console.log(err)

        }
    }

    const handleDelete= async (id)=>{
        try{
            console.log(Event)
            await axios.delete("http://localhost:8800/update/"+id)
            
            window.location.reload()
        }
        catch(err){
            
            console.log(err)

        }
    }

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

    console.log(Event);
  return (
    <>
    <div className='event'>
      <h2>Add NewEvent</h2>
      <div className='form' >
        
        <div className='input'>
    <label>Id : </label>
      <input 
      type="number" 
      placeholder='id'
      onChange={handleChange}
      name='id'/>
     
        </div>

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

     
      
<button class='button' onClick={handleClick}>Add</button>
</div>
</div>


   
 
      
      <div className="Updating">
        {up.map(updating=>(
          <> key={updating.id}
          <div>{updating.title}</div>
          <div>{updating.desc}</div>
          <div>{updating.link}</div>
          <div>{updating.image}</div>
          <div>
      <button onClick={()=>handleDelete(up.id)}>Delete</button>
      <button>Update</button>
      </div>
          </>

        ))}
      </div>

    </>
  )


        }


export default NewEvent
