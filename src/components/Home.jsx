import React from 'react'
import Banner from './Banner'
import Delivery from './Delivery'
import Brand from './Brand'

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
    </div>
  )
}

export default Home
