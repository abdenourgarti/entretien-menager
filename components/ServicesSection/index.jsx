'use client'
import React from 'react';
import { Home, Building2, Store, Hotel, GraduationCap, Warehouse } from 'lucide-react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation'

const ServiceCard = ({ title, description, icon: Icon, imageUrl, lien, isLeft, isMobile }) => {
  const t = useTranslations('ServicesHome');
  const router = useRouter();
  
  if (isMobile) {
    return (
      <div className="w-full p-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        
        <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-lg">
          <Image
            width={400}
            height={250} 
            src={imageUrl} 
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
        
        <p className="text-gray-600 mb-6">{description}</p>
        
        <button onClick={() => router.push(lien)} className="px-6 py-2 text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
          {t('learnMore')}
        </button>
      </div>
    );
  }

  return (
    <div className={`max-w-[450px] ${isLeft ? 'ml-auto mr-12' : 'mr-auto ml-12'}`}>
      <h3 className={`text-xl font-bold mb-6 mt-5 ${isLeft ? 'text-right' : 'text-left'}`}>{title}</h3>
      
      <div className={`relative w-full aspect-video mb-4 overflow-hidden rounded-lg`}>
        <Image
          width={400}
          height={250}  
          src={imageUrl} 
          alt={title}
          className={`object-cover w-11/12 lg:w-full h-full`}
        />
      </div>
      
      <p className={`text-gray-600 mb-6`}>{description}</p>
      
      <div>
        <button onClick={() => router.push(lien)} className="px-6 py-2 text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
          {t('learnMore')}
        </button>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const t = useTranslations('ServicesHome');
  const locale = useLocale();
  
  const services = [
    {
      title: t('services.house.title'),
      description: t('services.house.description'),
      icon: Home,
      imageUrl: "/house-cleaning.jpg",
      lien: `/${locale}/Services#house`
    },
    {
      title: t('services.office.title'),
      description: t('services.office.description'),
      icon: Building2,
      imageUrl: "/office-cleaning.jpg",
      lien: `/${locale}/Services#office`
    },
    {
      title: t('services.store.title'),
      description: t('services.store.description'),
      icon: Store,
      imageUrl: "/deep-cleaning.webp",
      lien: `/${locale}/Services#commercial`
    },
    {
      title: t('services.clinic.title'),
      description: t('services.clinic.description'),
      icon: Hotel, 
      imageUrl: "/clinique.png",
      lien: `/${locale}/Services#clinic`
    },
    {
      title: t('services.school.title'),
      description: t('services.school.description'),
      icon: GraduationCap,
      imageUrl: "/ecoles.jpg",
      lien: `/${locale}/Services#school`
    },
    {
      title: t('services.warehouse.title'),
      description: t('services.warehouse.description'),
      icon: Warehouse,
      imageUrl: "/entrepot.webp",
      lien: `/${locale}/Services#warehouse`
    }
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          {t('sectionTitle')}
        </h2>

        {/* Desktop View */}
        <div className="hidden lg:block relative">
          {/* Services Container */}
          <div className="max-w-6xl mx-auto relative">
            {/* Timeline */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-blue-600" />
            
            {/* Services */}
            <div className="relative space-y-24">
              {services.map((service, idx) => (
                <div key={idx} className="relative grid grid-cols-2 gap-8">
                  {/* Timeline Icon */}
                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-blue-600">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Service Card - Position based on index */}
                  <div className={idx % 2 === 0 ? 'col-start-1' : 'col-start-2'}>
                    <ServiceCard 
                      {...service}
                      isLeft={idx % 2 === 0}
                      isMobile={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden grid gap-8">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              {...service}
              isMobile={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;