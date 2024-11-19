import AboutUs from '@/components/AboutSection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='bg-gradient-to-b from-white to-blue-100'>
            <Navbar />
            <div className="w-full h-[400px] bg-[url('/about.jpg')] bg-cover bg-center overflow-hidden text-white flex items-center justify-center px-[10%] lg:px-[5%]">
                <h1 className='text-5xl md:text-7xl lg:text-9xl font-bold bg-gradient-to-r from-white to-[#212EA0] text-transparent bg-clip-text'>About Us</h1>
            </div>
            <AboutUs />
          <Footer />
        </div>
    )
}

export default About
