import React, { useEffect, useState } from 'react'
import exampleImage from"./1677167165755.jpg"
import axios from 'axios'
import "./Home.css"

function Home() {
  return (
   <>
   <div className="float">
   <div className="overlay-text"><h1> CTAE PROGRAMM;NG CLUB</h1>
    <h2 className="h2"> Website To Code And Explore !!</h2></div>
    <img className="Image" src={exampleImage} alt="Example" />
    
    <div className="buttons">
    
    <a className="overlay-button button1" href="Members">About Us</a>
    <a  className="overlay-button button2" href="Events.jsx">Explore</a>
    </div>
    </div>
    </>
  )
  
}

export default Home
