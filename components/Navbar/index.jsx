'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import './navbar.css'
import Image from 'next/image'
import { CiMenuFries } from "react-icons/ci"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { IoEarthOutline } from "react-icons/io5"
import { usePathname, useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { IoIosArrowDown } from "react-icons/io"

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [showLanguages, setShowLanguages] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()

  const t = useTranslations('Navbar');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  const changeLanguage = (newLocale) => {
    const currentPath = pathname.split('/').slice(2).join('/') || ''
    router.push(`/${newLocale}/${currentPath}`)
    setShowLanguages(false)
  }

  const isActive = (path) => {
    const currentPath = pathname.split('/').slice(2).join('/') || ''
    return currentPath === path
  }

  return (
    <nav className={`containr ${sticky ? (mobileMenu ? 'menuOpen' : 'dark-nav') : ''}`}>
      <Link href={`/${locale}`}>
        <Image className='logo' src="/logo.png" width={100} height={70} alt="logo" />
      </Link>
      <ul className={`${mobileMenu ? '' : 'hide-mobile-menu'}`}>
        <li className={isActive('') ? 'active' : ''}>
          <Link href={`/${locale}`}>{t('home')}</Link>
        </li>
        <li className={isActive('Services') ? 'active' : ''}>
          <Link href={`/${locale}/Services`}>{t('services')}</Link>
        </li>
        <li className={isActive('About') ? 'active' : ''}>
          <Link href={`/${locale}/About`}>{t('about')}</Link>
        </li>
        <li>
          <button className={`${sticky ? (mobileMenu ? 'btn' : 'btn-dark') : 'btn'}`} onClick={() => router.push(`/${locale}/Contact`)}>
          {t('contact')}
          </button>
        </li>
        <li className="language-selector">
          <button 
            onClick={() => setShowLanguages(!showLanguages)}
            className="lang-btn"
          >
            <IoEarthOutline className="lang-icon" />
            <span>{locale === 'fr' ? 'Français' : 'English'}</span>
            <IoIosArrowDown className={`arrow-icon ${showLanguages ? 'rotate' : ''}`} />
          </button>
          {showLanguages && (
            <div className="language-dropdown">
              <button 
                onClick={() => changeLanguage(locale === 'fr' ? 'en' : 'fr')}
                className="dropdown-item"
              >
                {locale === 'fr' ? 'Anglais' : 'French'}
              </button>
            </div>
          )}
        </li>
      </ul>
      {!mobileMenu ? 
        <CiMenuFries 
          className={`menu-icon ${sticky ? 'text-[#212EA0]' : 'text-white'}`} 
          onClick={toggleMenu} 
        />
        :
        <IoIosCloseCircleOutline 
          className='menu-icon text-white' 
          onClick={toggleMenu} 
        />
      }
    </nav>
  )
}

export default Navbar