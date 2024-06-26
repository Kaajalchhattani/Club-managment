import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./Blog.css"









function Blog() {
    const [up,setup]=useState([]);
    
      const [Event,setEvent]=useState(
          {  
              title:"",
              content:"",
              author:"",
              imagelink:""
              
  
  
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
            console.log("Heloooo")
            console.log(Event)
            await axios.post("http://localhost:8800/Blog",Event)
            
            navigate("/Post")
        }
        catch(err){
            print(err)
            console.log(err)

        }
    }

    const handleDelete= async (id)=>{
        try{
            console.log(Event)
            await axios.delete("http://localhost:8800/blog/"+id)
            
            navigate("/Blog")
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
                const res=await axios.get("http://localhost:8800/Blog")
                console.log(res.data);
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
    
   
      <div className='event2'>
        
      <p>Put Your Idea and Imagination</p>

      <div className='form2' >
        
   

        <div className='input2'>
        <label>Title : </label>
      <input
      type="text"
      placeholder='title'
      onChange={handleChange}
      name='title'/>
     
      </div>

      <div className='input2'>
        <label>Content : </label>
      <textarea type="textarea"
      placeholder='desc'
      onChange={handleChange}
      name='content'/>
      
      </div>


      <div className='input2'>
        <label>Author: </label>
      <input type="text"
      placeholder='author'
      onChange={handleChange}
      name='author'/>
     
      </div>

      
      <div className='input2'>
        <label>Image Link: </label>
      <input type="text"
      placeholder='Provide Link...'
      onChange={handleChange}
      name='imagelink'/>
     </div>

<button className ="button-5" onClick={handleClick}>Add</button>

      </div>




     




     


   
 
      
  

    </div>
  )


        }



  export default Blog