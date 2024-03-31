import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./NewEvent.css"
import { Link } from 'react-router-dom'
import UpdateEvent from './UpdateEvent'





function NewEvent() {
  const [up,setup]=useState([]);
  console.log(up);
    const [Event,setEvent]=useState(
        {  
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
            
            navigate("/admin")
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
            
            navigate("/")
        }
        catch(err){
            
            console.log(err)

        }
    }



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
      
        {
        up.map(updating=>(
          <> 
          <div class="Makerow">
          key={updating.id}
          <div>Title={updating.title}</div>
          <div>Desc={updating.description}</div>
          <div>Link={updating.link}</div>
          <div>Image={updating.image}</div>
          </div>
          <div>
          
      <button class="delete" onClick={()=>handleDelete(updating.id)}>Delete</button>
      <button class="update"><Link to={`/UpdateEvent/${updating.id}`}>Update</Link></button>
      </div>
          </>

        ))}
      </div>

    </>
  )


        }


export default NewEvent
