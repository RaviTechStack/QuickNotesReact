import React, { useEffect, useState } from 'react'
import "./index.css"
import Home from './pages/Home'
import SignUp from './pages/signup'
import SignIn from './pages/SignIn'
import {createBrowserRouter, RouterProvider} from "react-router-dom"


const Url = "http://127.0.0.1:8000/api/notes/"




const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element : <Home />
    },
    {
      path: "/signUp",
      element : <SignUp />
    },
    {
      path: "/login",
      element : <SignIn />
    },
   
  ])
 
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
