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
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
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
        path:"/Events",
        element:<Events/>
      },
      {
        path:"/Login",
        element:<Login/>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
