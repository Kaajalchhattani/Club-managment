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
                console.log(res)

            }catch(err)
            {
                console.log(err)
            }
        }
        fetchUpdate()

    },[])
  return (
    <div>
      Home

    </div>
  )
}

export default Home
