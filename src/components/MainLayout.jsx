import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import AuthCheck from './AuthCheck'
import Home from './Home'

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

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MainLayout
