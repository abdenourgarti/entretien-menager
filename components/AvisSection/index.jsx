'use client'
import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Users, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm ${className}`}
    {...props}
  />
));
Card.displayName = "Card";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`p-6 pt-0 ${className}`}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const TestimonialsCarousel = ({ t }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const testimonials = [
    {
      text: t('testimonials.1.text'),
      author: t('testimonials.1.author'),
      gender: "female"
    },
    {
      text: t('testimonials.2.text'),
      author: t('testimonials.2.author'),
      gender: "male"
    },
    {
      text: t('testimonials.3.text'),
      author: t('testimonials.3.author'),
      gender: "female"
    },
    {
      text: t('testimonials.4.text'),
      author: t('testimonials.4.author'),
      gender: "male"
    },
    {
      text: t('testimonials.5.text'),
      author: t('testimonials.5.author'),
      gender: "female"
    }
  ];

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
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              width={100}
              height={100} 
              src={testimonial.gender === 'female' 
                ? "/woman-avatar.png" 
                : "/man-avatar.png"} 
              alt={`Avatar de ${testimonial.author}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-3">
            <p className="font-semibold text-gray-900">{testimonial.author}</p>
          </div>
        </div>
        <p className="text-gray-600 italic">&#34;{testimonial.text}&#34;</p>
      </CardContent>
    </Card>
  );

  return (
    <div className="relative mb-16">
      <div className="relative px-8">
        <button 
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
          aria-label={t('previousButton')}
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
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
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
          aria-label={t('nextButton')}
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
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

const AvisSection = () => {
    const t = useTranslations('AvisSection');
    
    const stats = [
        {
          icon: <Users className="w-8 h-8 text-blue-600" />,
          number: "500+",
          label: t('statsClients')
        },
        {
          icon: <ThumbsUp className="w-8 h-8 text-green-600" />,
          number: "98%",
          label: t('statsSatisfaction')
        }
    ];

    return (
        <section className="py-16 px-4 bg-gradient-to-b to-white from-blue-100">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-2xl font-bold text-center mb-8">{t('title')}</h3>
                <div className="flex flex-wrap justify-center gap-12 mb-16">
                    {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                        <div className="flex justify-center mb-2">
                        {stat.icon}
                        </div>
                        <div className="text-3xl font-bold text-blue-600">
                        {stat.number}
                        </div>
                        <div className="text-gray-600">
                        {stat.label}
                        </div>
                    </div>
                    ))}
                </div>
                <TestimonialsCarousel t={t} />
            </div>
        </section>
    )
}

export default AvisSection;