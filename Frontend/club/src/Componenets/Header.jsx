import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
function Header() {
  return (
    <>
  
      <div className="header">
       <div className='logo'><a href="/Home">CodeCraze</a></div>
       <div className='events'>
       <NavLink exact to="/Home" activeClassName="active" className="item">Home</NavLink>
       <NavLink exact to="/Events" activeClassName="active" className="item">Events</NavLink>
       <NavLink exact to="/Post" activeClassName="active" className="item">Blogs</NavLink>
       <NavLink exact to="/Members" activeClassName="active" className="item">Members</NavLink>
       <NavLink exact to="/About" activeClassName="active" className="item">About Us</NavLink>
      </div>
      </div>
      
    </>
  )
}

export default Header
