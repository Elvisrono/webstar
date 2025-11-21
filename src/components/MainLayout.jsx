import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import AuthCheck from './AuthCheck'
import Home from './Home'
import Auth from './Auth'
import Register from './Register'

const MainLayout = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={
          <AuthCheck>
            <Home />
          </AuthCheck>
          }/>
          <Route path='auth' element={<Auth/>}>
            {/* Nested routes for auth can be defined here */}
            <Route path='register' element={<Register/>}/>
          </Route>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MainLayout
