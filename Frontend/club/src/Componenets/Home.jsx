import React, { useEffect, useState } from 'react';
import downloaddImage from "./downloadf.gif";
import axios from 'axios';
import "./Home.css";

function Home() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowText(true);
    }, 1000); // Adjust the delay time as needed
    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      <div className="float">
        <div className="overlay-text">
          <h1>CODECRAZE</h1>
          <h1 className="h1">Website To Code And Explore!!</h1>
        </div>
        <div className="image-container">
          <img className="Image" src={downloaddImage} alt="Example" />
        </div>
        <div className="buttons">
          <a className="overlay-button button1" href="/About">About Us</a>
          <a className="overlay-button button2" href="/Events">Explore</a>
        </div>
        <div className="buttons">
  <a className="overlay-button button1" href="Members">About Us</a>
  <a href="#About">
  <i className="fas fa-chevron-down arrow-icon"></i>
  </a>
  <a className="overlay-button button2" href="/Events">Explore</a>
</div>

      </div>
      <section className="about-section" id="About">
        <h2>About Us</h2>
        {showText && (
          <p>
            Welcome to CODECRAZE, the official programming club of CTAE Udaipur! 
            We're a dynamic community of tech enthusiasts
            <p>dedicated to advancing our coding skills 
              and exploring the thrilling world of technology.</p>
            <p>Join us for exciting workshops, thrilling competitions, and collaborative projects as we push boundaries,</p>
           learn together, and make a splash in the field of computer science. Get ready for an adventure like no other—welcome aboard! 🚀</p>
        )}
      </section>
      <section className="glimpse-section">
  <h2>Glimpse into Our Community</h2>
  <div class="row" style = {{display:'flex' , flexDirection:'row', gap:3}}>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Make new friends</h5>
        <p class="card-text">Find a community discover new connections, share experiences, and build lasting friendships. You'll become part of a tight-knit group of friends with diverse interests.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Learn on a project team</h5>
        <p class="card-text">You'll hit the ground running by learning new programming skills, receiving mentorship from industry engineers, and contributing to a real product for real users.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Engage with industry professionals</h5>
        <p class="card-text">Participate in seminars, workshops, and networking events. Connect with industry leaders and expand your professional network!</p>

      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Gain leadership experience</h5>
        <p class="card-text">Take on new roles and gain invaluable leadership experience by becoming a project manager or a vice president and giving back to our community.</p>
      </div>
    </div>
  </div>
</div>
  {/* <div className="containerr" >
  Make new friends
    <p>Find a community discover new connections, share experiences, and build lasting friendships. You'll become part of a tight-knit group of friends with diverse interests.</p>
  </div>
  <div className="containerr" style={{ backgroundColor: '#4682b4' }}>
  Learn on a project team
    <p>You'll hit the ground running by learning new programming skills, receiving mentorship from industry engineers, and contributing to a real product for real users.</p>
  </div>
  <div className="containerr" style={{ backgroundColor: '#32cd32' }}>
  Engage with industry professionals
    <p>Participate in seminars, workshops, and networking events. Connect with industry leaders and expand your professional network!</p>
  </div>
  <div className="containerr" style={{ backgroundColor: '#ffa500' }}>
  Gain leadership experience
    <p>Take on new roles and gain invaluable leadership experience by becoming a project manager or a vice president and giving back to our community.</p>
  </div>
  <div className="containerr" style={{ backgroundColor: '#9370db' }}>
  Interact with community
    <p>Join us for exhilarating volunteer experiences with student groups, fostering connections within the CTAE community!</p>
  </div> */}
</section>

    </>
  );
}

export default Home;