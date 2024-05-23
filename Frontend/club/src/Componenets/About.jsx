import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import pic1 from "./pic1 (1).jpeg";
import pic2 from "./pic2.jpeg";
import pic3 from "./pic3.jpeg";
import pic4 from "./pic4.jpeg";
import pic5 from "./pic 5.jpeg";
import pic6 from "./pic6.jpeg";
import pic7 from "./pic7.jpeg";
import pic8 from "./pic8.jpeg";
import pic9 from "./pic9.jpeg";
import pic10 from "./pic10.jpeg";
import pic11 from "./pic11.jpeg";


function About() {
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10,pic11];
  const delay = 2500;

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)),
      delay
    );
    return () => clearTimeout(timeoutRef.current);
  }, [index, images.length]);

  const handleDotClick = (idx) => {
    setIndex(idx);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)),
      delay
    );
  };

  return (
    <div className="about-page">
      <section className="about-club">
        <h2>About Our Club</h2>
        <p>
          Welcome to the College Code Club, where passion meets proficiency in the world of coding! Established with a vision to cultivate a vibrant community of tech enthusiasts, we are a dynamic hub for students eager to explore the realms of programming and software development. Our club provides an inclusive platform where novices and experts alike can collaborate, learn, and innovate together.
        </p>
        <p>
          Through workshops, hackathons, and project collaborations, we empower our members to expand their skill sets and embark on exciting coding adventures. Whether you're delving into web development, app creation, or diving deep into algorithms, we offer resources and support to fuel your journey.
        </p>
        <p>
          Join us to unleash your creativity, sharpen your problem-solving abilities, and forge lifelong connections with like-minded individuals. At College Code Club, we believe that code is not just lines on a screen but a gateway to endless possibilities. Let's shape the future of technology together!
        </p>
      </section>
      <section className="slideshow">
      <div className="slideshowSlider" style={{ transform: `translate3d(${(-Math.min(index, 4) * 100)}%, 0, 0)` }}>
          {images.map((image, idx) => (
            <img className="slide" src={image} alt={`Slide ${idx}`} key={idx} />
          ))}
        </div>
        <div className="slideshowDots">
          {images.map((_, idx) =>
          idx % 5 === 0 && (
            <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`} onClick={() => handleDotClick(idx)}></div>
          ))}
        </div>
      </section>
      <section className="join-club">
        <h3>How to Join Our Club</h3>
        <p>
          <p>
            # Register during Semester Registration: Sign up for the coding club when registering for classes. Look for an option or form to express interest in joining extracurricular activities.
          </p>
          <p>
            # Take the Coding Knowledge Test: Complete a brief test designed to assess your coding knowledge. This test may cover fundamental programming concepts and problem-solving skills.
          </p>
          <p>
            # Answer Follow-Up Questions: Be prepared to answer additional questions about coding concepts. These may include questions about specific programming languages, projects you've worked on, or your interest in specific areas of coding.
          </p>
          <p>
            # Confirmation: Once you've completed the test and answered the follow-up questions satisfactorily, you'll receive confirmation of your membership in the coding club. This confirmation may come via email, in-person communication, or through an online platform used by the club.
          </p>
        </p>
        <button><a href = "Events" >Explore Now</a></button>
      </section>
    </div>
  );
}

export default About;