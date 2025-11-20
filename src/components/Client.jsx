import React from 'react'
import SectionTitle from './sectionTitle'
import Slider from 'react-slick'

const Client = () => {
  return (
    <div className='lg:container mx:auto'>
        <SectionTitle title='What client says about us'></SectionTitle>
        <div className='slider-container w-full h-full'>
            <Slider {...settings}>
                {
                    clientSays.map((client, index) => (
                        <div key={index} className='p-12 border-[1px] border-[#e1e1e3] rounded-lg'>
                            <p></p>
                        </div>
                    ))
                }
            </Slider>
        </div>
      
    </div>
  )
}

export default Client
