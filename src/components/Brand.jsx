import React from 'react'
 const brands = [
    {
        id:1,
        image:"src/assets/brand_1.png"
    },
    {
        id:2,
        image:"src/assets/brand_2.png"
    },
    {
        id:3,
        image:"/src/assets/brand_3.png"
    },
    {
        id:4,
        image:"/src/assets/brand_4.png"
    },
    {
        id:5,
        image:"/src/assets/brand_5.png"
    },
    {
        id:6,
        image:"/src/assets/brand_6.png"
    },
    {
        id:7,
        image:"/src/assets/brand_7.png"
    },

    
 ] 

const Brand = () => {
  return (
    <div className='lg:container mx:auto'>
      <div className='grid grid-cols-7 items-center justify-center gap-4'>
        {
            brands?.map((brand) =>(
                <div>
                    <img src={brand?.image} alt="brand" />
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Brand
