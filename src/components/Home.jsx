import React from 'react'
import Banner from './Banner'
import Delivery from './Delivery'
import Brand from './Brand'
import Features from './Features'
import Categories from './Categories'
import Products from './Products'
import Client from './Client'

const Home = () => {
  return (
    <div>
        <div className='w-full min-h[850px] bg-[#f0f2f3] flex items-center justify-center rounded-b-3xl'>
          <Banner />
        </div>
        <div className='delivery_component w-full min-h-[#150px] shadow-md p-7'>
          <Delivery />
        </div>
        <div className='brand flex items-center justify-center w-full mt-10'>
          <Brand />
        </div>
        <div className='features w-full min-h-[150px] mt-10'>
          <h2 className='text-2xl font-bold text-center mb-4 text-black'>Features</h2>
          <Features />
        </div>
        <div className='w-full items-center justify-center mb-[80px]'>
          <Categories/>
        </div>
        <div className='w-full flex items-center justify-center'>
          <Products/>
        </div>
        <div className='w-full items-center justify-center bg-[#f0f2f3] min-h-[580px]'>
          <Client/>
        </div>
    </div>
  )
}

export default Home
