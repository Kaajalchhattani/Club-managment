import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { Link } from 'react-router-dom'






function NewMembers() {
  const [up,setup]=useState([]);
  console.log(up);
    const [Event,setEvent]=useState(
        {  
            Name:"",
            
            Image:"",


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
            await axios.post("http://localhost:8800/members",Event)
            
            navigate("/members")
        }
        catch(err){
            print(err)
            console.log(err)

        }
    }

    const handleDelete= async (id)=>{
        try{
            console.log(Event)
            await axios.delete("http://localhost:8800/members/"+id)
            
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
                const res=await axios.get("http://localhost:8800/members")
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
      <h2>Add Member</h2>
      <div className='form' >
        
   

        <div className='input'>
        <label>Name : </label>
      <input
      type="text"
      placeholder='Name'
      onChange={handleChange}
      name='Name'/>
     </div>
     

      <div className='input'>
        <label>Image : </label>
      <input type="text"
      placeholder='Image'
      onChange={handleChange}
      name='Image'/>
     
      </div>

     
    
<button onClick={handleClick}>Add</button>
</div>
</div>


   

      
      <div className="Updating">
      <a className="Back"href="./adminfirst">Back to Portal</a>
        {
        up.map(updating=>(
          <> 
          <div class="Makerow">
          key={updating.id}
          <div>Title={updating.Name}</div>
      
          <div>Image={updating.Image}</div>
          </div>
          <div>
          
    </div>
          </>

        ))}
      </div>

    </>
  )


        }


export default NewMembers