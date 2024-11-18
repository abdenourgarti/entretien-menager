'use client'
import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Users, ThumbsUp } from 'lucide-react';
import Image from 'next/image';

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

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const testimonials = [
    {
      text: "Un service exceptionnel ! L'équipe est professionnelle et minutieuse. Je recommande vivement leurs services pour la qualité et le professionnalisme.",
      author: "Marie Lambert",
      gender: "female"
    },
    {
      text: "Très satisfait de la prestation. Le personnel est ponctuel et efficace. Ma maison n'a jamais été aussi propre !",
      author: "Pierre Dubois",
      gender: "male"
    },
    {
      text: "Service impeccable et personnel très courtois. Je suis cliente depuis 6 mois et je ne changerais pour rien au monde.",
      author: "Sophie Martin",
      gender: "female"
    },
    {
      text: "Excellent rapport qualité-prix. Le service client est remarquable et les résultats sont toujours au rendez-vous.",
      author: "Thomas Richard",
      gender: "male"
    },
    {
      text: "Une équipe à l'écoute et très professionnelle. Je suis pleinement satisfaite des prestations.",
      author: "Julie Moreau",
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
    // Pour les grands écrans, retourner 3 témoignages
    const lgVisible = 3;
    // Pour les écrans moyens, retourner 2 témoignages
    const mdVisible = 2;
    // Pour les petits écrans, retourner 1 témoignage
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
        {/* Navigation Buttons */}
        <button 
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        {/* Testimonials Container */}
        <div ref={scrollContainerRef} className="relative overflow-hidden">
          {/* Large Screens (3 cards) */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-4">
            {visibleTestimonials().lg.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </div>

          {/* Medium Screens (2 cards) */}
          <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-4">
            {visibleTestimonials().md.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </div>

          {/* Small Screens (1 card) */}
          <div className="block md:hidden">
            <TestimonialCard testimonial={visibleTestimonials().sm[0]} />
          </div>
        </div>

        <button 
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Dots Indicator */}
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

const AvisSection = () =>{
    const stats = [
        {
          icon: <Users className="w-8 h-8 text-blue-600" />,
          number: "500+",
          label: "Clients Satisfaits"
        },
        {
          icon: <ThumbsUp className="w-8 h-8 text-green-600" />,
          number: "98%",
          label: "Taux de Satisfaction"
        }
    ];

    return (
        <section className="py-16 px-4 bg-gradient-to-b to-white from-blue-100">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-2xl font-bold text-center mb-8">Ce que disent nos clients</h3>
                {/* Stats Section */}
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
                <TestimonialsCarousel />
            </div>
        </section>
    )
}

export default AvisSection;