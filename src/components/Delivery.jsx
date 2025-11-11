import { Clock10, Percent, ShieldCheck, Truck } from 'lucide-react'
import React from 'react'

const Delivery = () => {
  return (
    <div className='lg:container bg-white mx-auto shadow-md p-7 rounded-b-2xl'>
      <div className='grid grid-cols-4'>
        <div className="delivery_wrapper">
            <div className='flex items-center gap-4'>
                <p><Percent color="#1e293b" size='3rem' /></p>
                <div>
                    <h4 className='text-base text-[#272343] capitalize font-inter font-medium mb-2.5'>Discount</h4>
                    <p className='text-sm text-[#9a9caa] font-inter font-normal'>Every new week sale</p>
                </div>
            </div>
            
        </div>
        <div className="delivery_wrapper">
            <div className='flex items-center gap-4'>
                <p><Truck color="#1e293b" size='3rem' /></p>
                <div>
                    <h4 className='text-base text-[#272343] capitalize font-inter font-medium mb-2.5'>Free Delivery</h4>
                    <p className='text-sm text-[#9a9caa] font-inter font-normal'>100% free for all orders</p>
                </div>
            </div>
            
        </div>
        <div className="delivery_wrapper">
            <div className='flex items-center gap-4'>
                <p><Clock10 color="#1e293b" size='3rem' /></p>
                <div>
                    <h4 className='text-base text-[#272343] capitalize font-inter font-medium mb-2.5'>Great support 24/7</h4>
                    <p className='text-sm text-[#9a9caa] font-inter font-normal'>we care your experience</p>
                </div>
            </div>
            
        </div>
        <div className="delivery_wrapper">
            <div className='flex items-center gap-4'>
                <p><ShieldCheck color="#1e293b" size='3rem' /></p>
                <div>
                    <h4 className='text-base text-[#272343] capitalize font-inter font-medium mb-2.5'>Secure payment</h4>
                    <p className='text-sm text-[#9a9caa] font-inter font-normal'>100% secure payment method</p>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Delivery
