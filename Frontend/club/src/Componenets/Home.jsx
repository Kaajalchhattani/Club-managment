import React, { useEffect, useState } from 'react'
import exampleImage from"./code-coding-binary-code-abstract-patterns-4k_1539370547.jpg.webp"
import axios from 'axios'
import "./Home.css"

function Home() {
  return (
   <>
   <div className="float">
   <div className="overlay-text"><h1> CTAE PROGRAMM;NG CLUB</h1>
    <h2 className="h2"> Website To Code And Explore !!</h2></div>
    <div className=".image-container">
    <img className="Image" src={exampleImage} alt="Example" height="700px" width="1379px" />
    </div>
    <div className="buttons">
    
    <a className="overlay-button button1" href="Members">About Us</a>
    <a  className="overlay-button button2" href="/Events">Explore</a>
    </div>
    </div>
    </>
  )
  
}

export default Home
