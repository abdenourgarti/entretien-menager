'use client'
import React from 'react'
import './hero.css'
import { MdOutlineEast } from "react-icons/md";
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation'

const Hero = () => {
  const t = useTranslations('hero');
  const locale = useLocale()
  const router = useRouter();
  return (
    <div className="w-full min-h-screen bg-[url('/hero.jpg')] bg-cover bg-center text-white flex items-center justify-center px-[10%] lg:px-[5%]">
      <div className='hero-text'>
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
        <button onClick={() => router.push(`/${locale}/About`)} className='btn'>{t('buttonText')} <MdOutlineEast className='icon'/></button>
      </div>
    </div>
  )
}

export default Hero
