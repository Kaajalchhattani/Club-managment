import { Link,NavLink } from 'react-router-dom';
import React from 'react';
import "./Footer.css"

function Footer() {
  return (
    <>
    <div className="whole">
      <hr></hr>
      <div className="container">
        
        <div className="Logo">Logo</div>
        <div className="division">
          <div className="first">
            <div className='Link-item'>Links</div>
            <NavLink exact to="/" activeClassName="active" className="item">Home</NavLink>
            <NavLink exact to="/footesr" activeClassName="active" className="item">Blog</NavLink>
            <NavLink exact to="/footers" activeClassName="active" className="item">ContactUs</NavLink>
          </div>
          <div className="sec">
          <div className='Link-item'>Contacts</div>
            <div className="second-item">Mobile:75*******7</div>
            <div className="second-item">Email:Kaajalchhattani@gmail.com</div>
            <div className="second-item">Address:63/73 HeeraPath,Mansarovar,Jaipur,Rajasthan</div>
          </div>
          </div>
      </div>
</div>
    </>
  )
}

export default Footer
