import { Link,NavLink } from 'react-router-dom';
import React from 'react';
import "./Footer.css"

function Footer() {
  return (
    
        <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">CodeCraze</div>
        <div className="footer-sections">
         
           
            <ul className="section-list">
            <li><NavLink exact to="/Home" activeClassName="active" className="section-link">Home</NavLink></li>
            <li><NavLink exact to="/Post" activeClassName="active" className="section-link">Blog</NavLink></li>
            <li><NavLink exact to="/footers" activeClassName="active" className="section-link">ContactUs</NavLink></li>
          </ul>
          </div>
          <div className="sec">
          <div className="footer-section">
            <h3 className='section-title'>Contacts</h3>
            <ul className="section-list">
              <li className="contact-info">Mobile: 75*******7</li>
              <li className="contact-info">Email: Kaajalchhattani@gmail.com</li>
              <li className="contact-info">Address: 63/73 HeeraPath, Mansarovar, Jaipur, Rajasthan</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    
  )
}

export default Footer
