import React from 'react'
import './footer.css'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { useLocale, useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Navbar')
  const locale = useLocale();
  return (
    <footer>
        <div className="waves">
            <div className='wave' id='wave1'></div>
            <div className='wave' id='wave2'></div>
            <div className='wave' id='wave3'></div>
            <div className='wave' id='wave4'></div>
        </div>
        <ul className='social-icon'>
            <li><Link href="https://www.facebook.com/profile.php?id=61561167363198&mibextid=ZbWKwL" target='_blank'><FaFacebook className='icon' /></Link></li>
            <li><Link href="https://youtube.com/@lieupropre?si=8vTRu36Y8jh7CkWe" target='_blank'><FaYoutube className='icon' /></Link></li>
            <li><Link href="https://www.linkedin.com/in/lieupropre-lieu-propre-164b83338/" target='_blank'><FaLinkedin className='icon' /></Link></li>
        </ul>
        <ul className='menu'>
            <li><Link className='link' href={`/${locale}`}>{t('home')}</Link></li>
            <li><Link className='link' href={`/${locale}/Services`}>{t('services')}</Link></li>
            <li><Link className='link' href={`/${locale}/About`}>{t('about')}</Link></li>
            <li><Link className='link' href={`/${locale}/Contact`}>{t('contact')}</Link></li>
        </ul>
        <p>© Copyright <Link href="https://www.linkedin.com/in/abdenour-garti-19177b192/" target='_blank'>Abdenour</Link> | {t('copyright')}</p>
    </footer>
  )
}

export default Footer
