import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ServicesComponenet from '@/components/Services'

const Services = () => {
  return (
    <div className='bg-gradient-to-b from-white to-blue-100'>
        <Navbar />
        <div className="w-full h-[400px] bg-[url('/services.jpg')] bg-cover bg-center overflow-hidden text-white flex items-center justify-center px-[10%] lg:px-[5%]">
          <h1 className='text-5xl md:text-7xl lg:text-9xl font-bold bg-gradient-to-r from-white to-[#212EA0] text-transparent bg-clip-text'>Services</h1>
        </div>
        <ServicesComponenet />
      <Footer />
    </div>
  )
}

export default Services
