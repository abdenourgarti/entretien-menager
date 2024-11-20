'use client'
import React from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Home, Building2, Building, Hospital, GraduationCap, Warehouse } from 'lucide-react';
import { useRouter } from 'next/navigation'

const ServicesComponent = () => {
  const t = useTranslations('ServicesComponent');
  const locale = useLocale();
  const router = useRouter();
  
  const GotoContact = () => {
    router.push(`/${locale}/Contact`)
  }

  const services = [
    {
      id: 'house',
      icon: Home,
      image: "/house-cleaning.jpg",
    },
    {
      id: 'office',
      icon: Building2,
      image: "/office-cleaning.jpg",
    },
    {
      id: 'commercial',
      icon: Building,
      image: "/deep-cleaning.webp",
    },
    {
      id: 'clinic',
      icon: Hospital,
      image: "/clinique.png",
    },
    {
      id: 'school',
      icon: GraduationCap,
      image: "/ecoles.jpg",
    },
    {
      id: 'warehouse',
      icon: Warehouse,
      image: "/entrepot.webp",
    }
  ];

  // Fonction pour navigation douce vers les sections
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-32 bg-gradient-to-b from-white to-blue-100 mb-24">
      {/* Section titre et introduction SEO */}
      <div className="text-center space-y-6 mb-16">
        <h1 className="text-3xl font-bold text-gray-800">
          {t('seo.title')}
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('seo.introduction')}
          </p>
        </div>

        {/* Navigation des services */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => scrollToSection(service.id)}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:bg-blue-50 transition-colors"
            >
              <service.icon className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">{t(`services.${service.id}.title`)}</span>
            </button>
          ))}
        </div>
      </div>

      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <div 
            id={service.id} 
            key={index} 
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 scroll-mt-24`}
          >
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="flex items-center gap-4">
                <Icon className="w-10 h-10 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-800">
                  {t(`services.${service.id}.title`)}
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {t(`services.${service.id}.description`)}
              </p>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {t('common.serviceIncludes')}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {t.raw(`services.${service.id}.details`).map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {t('common.whyChooseUs')}
                </h3>
                <p className="text-gray-600">
                  {t(`services.${service.id}.why`)}
                </p>
              </div>
              
              <button 
                onClick={() => GotoContact()} 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                {t(`services.${service.id}.buttonText`)}
              </button>
            </div>
            
            <div className="w-full lg:w-1/2 h-[400px] relative">
              <Image
                src={service.image}
                alt={`Service de ${t(`services.${service.id}.title`)}`}
                fill
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-black/10 rounded-lg" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesComponent;