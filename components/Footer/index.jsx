import React from 'react'
import './footer.css'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <div className="waves">
            <div className='wave' id='wave1'></div>
            <div className='wave' id='wave2'></div>
            <div className='wave' id='wave3'></div>
            <div className='wave' id='wave4'></div>
        </div>
        <ul className='social-icon'>
            <li><Link href="/"><FaFacebook className='icon' /></Link></li>
            <li><Link href="/"><FaInstagram className='icon' /></Link></li>
            <li><Link href="/"><FaTwitter className='icon' /></Link></li>
            <li><Link href="/"><FaLinkedin className='icon' /></Link></li>
        </ul>
        <ul className='menu'>
            <li><Link className='link' href="/">Home</Link></li>
            <li><Link className='link' href="/">Services</Link></li>
            <li><Link className='link' href="/">About Us</Link></li>
            <li><Link className='link' href="/">Contact Us</Link></li>
        </ul>
        <p>© Copyright <Link href="https://www.linkedin.com/in/abdenour-garti-19177b192/" target='_blank'>Abdenour</Link> | All rights Reserved</p>
    </footer>
  )
}

export default Footer
