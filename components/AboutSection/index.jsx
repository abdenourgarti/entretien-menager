'use client'
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Users, Award, Leaf, Calendar, Shield, Home, Building2, Store, Hotel, GraduationCap, Warehouse, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaHistory } from "react-icons/fa";

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm ${className}`}
    {...props}
  />
));
Card.displayName = "Card";

const TestimonialsCarousel = () => {
  const t = useTranslations('About.services');
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  
  const testimonials = [
    { icon: Home, value: 'home' },
    { icon: Building2, value: 'office' },
    { icon: Store, value: 'store' },
    { icon: Hotel, value: 'clinic' },
    { icon: GraduationCap, value: 'school' },
    { icon: Warehouse, value: 'warehouse' },
  ].map(item => ({
    ...item,
    label: t(`types.${item.value}.title`),
    description: t(`types.${item.value}.description`)
  }));

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const visibleTestimonials = () => {
    const lgVisible = 3;
    const mdVisible = 2;
    const smVisible = 1;

    return {
      lg: Array.from({ length: lgVisible }, (_, i) => {
        const index = (currentIndex + i) % testimonials.length;
        return testimonials[index];
      }),
      md: Array.from({ length: mdVisible }, (_, i) => {
        const index = (currentIndex + i) % testimonials.length;
        return testimonials[index];
      }),
      sm: [testimonials[currentIndex]]
    };
  };

  const TestimonialCard = ({ testimonial }) => (
    <Card className="testimonial-card w-full transition-all duration-500 ease-in-out">
      <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
        <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
          <testimonial.icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{testimonial.label}</h3>
        <p className="text-gray-600 mb-4">{testimonial.description}</p>
        <a href="#" className="text-blue-600 font-medium hover:underline">
          {t('learnMore')}
        </a>
      </div>
    </Card>
  );

  return (
    <div className="relative mb-16">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">{t('title')}</h2>
        <p className="text-lg text-gray-600">{t('subtitle')}</p>
      </div>
      
      <div className="relative px-8">
        <button 
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 rounded-full p-2 shadow-lg hover:bg-blue-700"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <div ref={scrollContainerRef} className="relative overflow-hidden">
          <div className="hidden lg:grid lg:grid-cols-3 gap-4">
            {visibleTestimonials().lg.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </div>

          <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-4">
            {visibleTestimonials().md.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </div>

          <div className="block md:hidden">
            <TestimonialCard testimonial={visibleTestimonials().sm[0]} />
          </div>
        </div>

        <button 
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 rounded-full p-2 shadow-lg hover:bg-blue-700"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-blue-600 w-4' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

const AboutSection = () => {
  const t = useTranslations('About');

  return (
    <div className="w-full px-4 py-12 bg-gradient-to-b from-white to-blue-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('whoWeAre.title')}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('whoWeAre.description')}
              </p>
            </div>
            <div className="w-full lg:w-1/2 h-[400px] relative">
              <Image
                src="/who-we-are.jpg"
                alt="Service de nettoyage professionnel"
                fill
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center text-[200px] text-center font-bold bg-gradient-to-r from-white to-blue-200 text-transparent bg-clip-text">
                ?
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('ourHistory.title')}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('ourHistory.description')}
              </p>
            </div>
            <div className="w-full lg:w-1/2 h-[400px] relative">
              <Image
                src="/histoire.jpg"
                alt="Histoire de notre entreprise"
                fill
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <FaHistory 
                  className="w-[100px] h-[100px] text-white bg-gradient-to-r from-white to-blue-200 text-transparent bg-clip-text"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 md:mb-32">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('missionValues.title')}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('missionValues.description')}
            </p>
          </div>

          <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[400px] md:h-[400px] mx-auto">
            <div className="absolute inset-0 rounded-full border-blue-600 border-[10px]" />

            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center -mt-2 flex flex-col items-center justify-center">
              <span className="font-semibold mb-2 text-[10px] sm:text-[14px] md:text-[18px]">
                {t('missionValues.values.trust')}
              </span>
              <div className="w-12 h-12 md:w-24 md:h-24 bg-white rounded-full flex items-center">
                <Users className="w-6 h-6 md:w-14 md:h-14 text-blue-600 mx-auto" />
              </div>
            </div>

            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 text-center -mr-4 sm:-mr-6 md:-mr-7 flex items-center justify-center">
              <div className="w-12 h-12 md:w-24 md:h-24 bg-white rounded-full flex items-center">
                <Award className="w-6 h-6 md:w-14 md:h-14 text-blue-600 mx-auto" />
              </div>  
              <span className="font-semibold ml-2 text-[10px] sm:text-[14px] md:text-[18px]">
                {t('missionValues.values.quality')}
              </span>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-center -mb-2 flex flex-col items-center justify-center">
              <div className="w-12 h-12 md:w-24 md:h-24 bg-white rounded-full flex items-center">
                <Leaf className="w-6 h-6 md:w-14 md:h-14 text-blue-600 mx-auto" />
              </div>  
              <span className="font-semibold mt-2 text-[10px] sm:text-[14px] md:text-[18px]">
                {t('missionValues.values.ecology')}
              </span>
            </div>

            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center -ml-4 sm:-ml-6 md:-ml-7 flex items-center justify-center">
              <span className="font-semibold mr-2 text-[10px] sm:text-[14px] md:text-[18px]">
                {t('missionValues.values.security')}
              </span>
              <div className="w-12 h-12 md:w-24 md:h-24 bg-white rounded-full flex items-center">
                <Shield className="w-6 h-6 md:w-14 md:h-14 text-blue-600 mx-auto" />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mt-36">
              {t('uniqueFeatures.title')}
            </h2>
            <p className="text-lg text-gray-600">{t('uniqueFeatures.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-full h-[100px] mx-auto mb-4 relative">
                <Image 
                  src="/green-cleaning.jpeg" 
                  alt={t('uniqueFeatures.cards.ecological.title')} 
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {t('uniqueFeatures.cards.ecological.title')}
              </h3>
              <p className="text-gray-600">{t('uniqueFeatures.cards.ecological.description')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-full h-[100px] mx-auto mb-4 relative">
                <Image 
                  src="/team-experience.jpg" 
                  alt={t('uniqueFeatures.cards.experienced.title')} 
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {t('uniqueFeatures.cards.experienced.title')}
              </h3>
              <p className="text-gray-600">{t('uniqueFeatures.cards.experienced.description')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-full h-[100px] mx-auto mb-4 relative">
                <Image 
                  src="/felixible.webp" 
                  alt={t('uniqueFeatures.cards.flexible.title')} 
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {t('uniqueFeatures.cards.flexible.title')}
              </h3>
              <p className="text-gray-600">{t('uniqueFeatures.cards.flexible.description')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-full h-[100px] mx-auto mb-4 relative">
                <Image 
                  src="/satisfaction.jpg" 
                  alt={t('uniqueFeatures.cards.satisfaction.title')} 
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {t('uniqueFeatures.cards.satisfaction.title')}
              </h3>
              <p className="text-gray-600">{t('uniqueFeatures.cards.satisfaction.description')}</p>
            </div>
          </div>
        </div>

        <TestimonialsCarousel />
      </div>
    </div>
  );
};

export default AboutSection;