'use client'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className='bg-gradient-to-b from-white to-blue-100'>
        <Navbar />
        <div className="w-full h-[400px] overflow-hidden">
            <Image 
                width={400}
                height={400}
                src="/contact.jpg" 
                alt="Contact Background" 
                className="w-full h-full object-cover"
            />
        </div>
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact