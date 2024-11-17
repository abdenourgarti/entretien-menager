import React from 'react';
import { CheckCircle2, Leaf, Calendar, Award, Users, ThumbsUp } from 'lucide-react';
import TestimonialsCarousel from './AvisSection';

// Composant Card intégré
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm ${className}`}
    {...props}
  />
));
Card.displayName = "Card";

// Composant CardContent intégré
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`p-6 pt-0 ${className}`}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <CheckCircle2 className="w-10 h-10 text-blue-600" />,
      title: "Professionnels de Confiance",
      description: "Notre équipe qualifiée et sympathique est entièrement formée pour votre tranquillité d'esprit."
    },
    {
      icon: <Leaf className="w-10 h-10 text-green-600" />,
      title: "Produits Écologiques",
      description: "Nous prenons soin de votre santé et de l'environnement en utilisant uniquement des produits certifiés écologiques."
    },
    {
      icon: <Calendar className="w-10 h-10 text-purple-600" />,
      title: "Horaires Flexibles",
      description: "Choisissez un horaire qui correspond à votre emploi du temps - nous nous occupons du reste."
    },
    {
      icon: <Award className="w-10 h-10 text-yellow-600" />,
      title: "Satisfaction Garantie",
      description: "Nous ne sommes satisfaits que lorsque vous l'êtes. Votre satisfaction est notre priorité absolue."
    }
  ];

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

  const testimonials = [
    {
      text: "Un service exceptionnel ! L'équipe est professionnelle et minutieuse.",
      author: "Marie L."
    },
    {
      text: "Je recommande vivement leurs services. Ma maison n'a jamais été aussi propre !",
      author: "Pierre D."
    }
  ];

  return (
    <section className="min-h-screen py-16 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pourquoi Nous Choisir pour Vos Besoins de Nettoyage ?
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Chez Lieu Propre, nous nous engageons à offrir plus qu'un simple nettoyage. 
            Avec des années d'expérience et une passion pour l'excellence, notre équipe 
            garantit que chaque recoin de votre maison ou bureau soit impeccable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4 mt-2">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

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

        {/* Testimonials */}
        <TestimonialsCarousel />

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            Obtenir un Devis Gratuit
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;