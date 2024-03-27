import React from 'react'

import Header from './Componenets/Header'
import Footer from './Componenets/Footer'
import {Outlet} from 'react-router-dom'
import "./Layout.css"

function Layout() {
  return (
    <>
    <Header></Header>
     <Outlet></Outlet>
    
    <Footer></Footer>
    
    </>
  )
}


export default Layout
