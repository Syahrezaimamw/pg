import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Baru from './Baru.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },{
    path:'/baru',
    element:<Baru/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
