import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Componenets/Home.jsx'
import NewEvent from './Admin/NewEvent.jsx'
import UpdateEvent from './Admin/UpdateEvent.jsx'
import Events from './Componenets/Events.jsx'
import Login from './Componenets/Login.jsx'
import Blog from './Componenets/Blog.jsx'
import PostBlog from './Componenets/PostBlog.jsx'
import Post from './Componenets/Post.jsx'
import Register from './Componenets/Registre.jsx'
import AdminRegister from './Componenets/AdminRegister.jsx'
import AdminLogin from './Componenets/AdminLogin.jsx'
import AdminPage from './Componenets/AdminPage.jsx'
import DeleteBlog from './Componenets/DeleteBlog.jsx'
import Members from './Componenets/Members.jsx'
import NewMembers from './Componenets/NewMembers.jsx'
import About from './Componenets/About.jsx'
const router=createBrowserRouter([
  
  {
    path:"/",
    element:<Register/>
  },
  {
    path:"/Newmembers",
    element:<NewMembers/>
  },
  {
    path:"/Login",
    element:<Login/>
  },
  {
    path:"/adminlogin",
    element:<AdminLogin/>
  },
   {
    path:"/adminregister",
    element:<AdminRegister/>
  },
  {
    path:"/adminFirst",
    element:<AdminPage/>
  },
  {
    path:"/admin",
    element:<NewEvent/>
  },
  {
    path:"/UpdateEvent/:id",
    element:<UpdateEvent/>
  },
  {
    path:"/deleteblog",
    element:<DeleteBlog/>
  },
  {
    path:'',
    element:<Layout/>,
    children:[
      {
        path:"/Home",
        element:<Home/>
      },
   
      {
        path:"/Events",
        element:<Events/>
      },
     
      
      {
        path:"/Post",
        element:<Post/>
      },
      {
        path:"/Blog",
        element:<Blog/>
      },
      {
        path:"/PostBlog/:id",
        element:<PostBlog/>
      },
      {
        path:"/members",
        element:<Members/>
      },
      {
        path:"/About",
        element:<About/>
      },


    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
