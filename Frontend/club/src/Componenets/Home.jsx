import React, { useEffect, useState } from 'react'

import axios from 'axios'

function Home() {
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
      <h1>Upcoming events</h1>
      <div className="Updating">
        {up.map(updating=>(
          <> key={updating.id}
          <div>{updating.title}</div>
          <div>{updating.desc}</div>
          <div>{updating.link}</div>
          <div>{updating.image}</div>
          </>

        ))}
      </div>

    </>
  )
}

export default Home
