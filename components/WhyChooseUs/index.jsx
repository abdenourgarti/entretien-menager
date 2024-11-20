import React from 'react';
import { useTranslations } from 'next-intl';
import { CheckCircle2, Leaf, Calendar, Award, Users, ThumbsUp } from 'lucide-react';

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
  const t = useTranslations('WhyChoose');

  const features = [
    {
      icon: <CheckCircle2 className="w-10 h-10 text-blue-600" />,
      title: t('features.trustworthy.title'),
      description: t('features.trustworthy.description')
    },
    {
      icon: <Leaf className="w-10 h-10 text-green-600" />,
      title: t('features.eco.title'),
      description: t('features.eco.description')
    },
    {
      icon: <Calendar className="w-10 h-10 text-purple-600" />,
      title: t('features.flexible.title'),
      description: t('features.flexible.description')
    },
    {
      icon: <Award className="w-10 h-10 text-yellow-600" />,
      title: t('features.satisfaction.title'),
      description: t('features.satisfaction.description')
    }
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      number: t('stats.clients.number'),
      label: t('stats.clients.label')
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-green-600" />,
      number: t('stats.satisfaction.number'),
      label: t('stats.satisfaction.label')
    }
  ];

  return (
    <section className="min-h-screen py-16 px-4 bg-gradient-to-b from-white to-blue-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('mainTitle')}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            {t('mainDescription')}
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            {t('ctaButton')}
          </button>
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
      </div>
    </section>
  );
};

export default WhyChooseUs;