import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./Blog.css"
import { Link } from 'react-router-dom'
import "./DeleteBlog.css"







function DeleteBlog() {
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
            console.log(Event)
            await axios.post("http://localhost:8800/Blog",Event)
            
            navigate("/Blog")
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
            
            navigate("/Post")
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
    <div className="hello">
   
    
     



<a className="Back"href="./adminfirst">Back to Portal</a>
     
<div className="Updating">
      
      {
      up.map(updating=>(
        <> 
        <div class="Makerow">
        key={updating.id}
        <div>ImageLink={updating.imagelink}</div>
        <div>Title={updating.title}</div>
        <div>Desc={updating.content}</div>
        <div>Author={updating.author}</div>
        
        </div>
        <div>
        
    <button class="delete" onClick={()=>handleDelete(updating.id)}>Delete</button>
    
    </div>
        </>

      ))}
    </div>

   
 
      
  

    </div>
  )


        }



  export default DeleteBlog