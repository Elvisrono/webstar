import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'

const MainLayout = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      </BrowserRouter>
    </div>
  )
}

export default MainLayout
