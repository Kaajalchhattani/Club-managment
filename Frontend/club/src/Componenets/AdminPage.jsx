import React from 'react'
import "./AdminPage.css"
import { Link } from 'react-router-dom'
function AdminPage() {
  return (
    <div className="full">
      <a className="Registration"  href="./adminregister" >Admin Registration</a>
      <a className="New" href="./admin" >New Event</a >

      <a  className="Delete" href="./DeleteBlog" >Delete Blog</a >
      <a  className="Delete" href="./newmembers" >Add Members</a >
    </div>
  )
}

export default AdminPage
