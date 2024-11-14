import Link from 'next/link'
import React from 'react'
import './navbar.css'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='containr'>
      <Image className='logo' src="/logo.png" width={100} height={70} />
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li><button className='btn'>Contact Us</button></li>
        
      </ul>
    </nav>
  )
}

export default Navbar
