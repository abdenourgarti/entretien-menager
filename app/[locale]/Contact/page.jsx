'use client'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Contact = () => {
  return (
    <div className='bg-gradient-to-b from-blue-800 to-blue-100'>
        <Navbar />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact