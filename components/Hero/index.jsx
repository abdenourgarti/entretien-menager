import React from 'react'
import './hero.css'
import { MdOutlineEast } from "react-icons/md";

const Hero = () => {
  return (
    <div className='hero containr'>
      <div className='hero-text'>
        <h1>Transforming Spaces, Elevating Comfort</h1>
        <p>Experience a cleaner, healthier home with our top-notch cleaning services. From spotless kitchens to pristine floors, we bring a touch of perfection to every corner. Let us handle the mess so you can enjoy more of what truly matters</p>
        <button className='btn'>Explore more <MdOutlineEast className='icon'/></button>
      </div>
    </div>
  )
}

export default Hero
