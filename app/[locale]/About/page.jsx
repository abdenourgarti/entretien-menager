import AboutUs from '@/components/AboutSection'
import AvisSection from '@/components/AvisSection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import { MdOutlineEast } from "react-icons/md";
import { useTranslations } from 'next-intl';

const About = () => {
    const t = useTranslations('About');
    return (
        <div>
            <Navbar />
            <div className="w-full h-[400px] bg-[url('/about.jpg')] bg-cover bg-center overflow-hidden text-white flex items-center justify-center px-[10%] lg:px-[5%]">
                <h1 className='text-5xl md:text-7xl lg:text-9xl font-bold bg-gradient-to-r from-white to-[#212EA0] text-transparent bg-clip-text'>{t('title')}</h1>
            </div>
            <AboutUs />
            <AvisSection />
            <div className="bg-gradient-to-b to-white from-blue-100 py-12 px-4 text-center mb-24">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('work')}</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">{t('take')}</p>
                <div className="text-center mb-12">
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                    {t('btn')}
                    </button>
                </div>
            </div>
          <Footer />
        </div>
    )
}

export default About
