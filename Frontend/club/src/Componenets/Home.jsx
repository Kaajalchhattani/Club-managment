import React, { useEffect, useState } from 'react'
import exampleImage from"./HD-wallpaper-technology-code-programming-programmer.jpg"
import axios from 'axios'
import "./Home.css"

function Home() {
  return (
   <>
   <div className="float">
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nihil rerum sit inventore nostrum quas ipsa ab enim corporis delectus ipsum, porro reprehenderit ipsam est debitis! Ea vel ipsa culpa obcaecati quibusdam molestiae autem molestias nostrum qui cum facilis dolores, voluptatem consequuntur quasi, libero amet magni perferendis deleniti dicta quia?</div>
    <img className="Image" src={exampleImage} alt="Example" />
    </div>
    </>
  )
  
}

export default Home
