import React from 'react';
import Image from 'next/image';
import { Home, Building2, Building, Hospital, GraduationCap, Warehouse } from 'lucide-react';

const ServicesComponenet = () => {
  const services = [
    {
      title: "Nettoyage Maison",
      description: "Offrez à votre foyer un soin complet pour un environnement propre, sain et accueillant.",
      details: [
        "Nettoyage des sols (aspiration, lavage)",
        "Dépoussiérage de toutes les surfaces",
        "Nettoyage des vitres",
        "Désinfection complète de la cuisine",
        "Désinfection des salles de bain",
        "Nettoyage des textiles légers"
      ],
      why: "Utilisation de produits écologiques et hypoallergéniques. Adaptation des prestations à vos besoins spécifiques.",
      image: "/house-cleaning.jpg",
      icon: Home,
      buttonText: "Demander un devis gratuit"
    },
    {
      title: "Nettoyage Bureau",
      description: "Un espace de travail propre améliore la productivité et reflète le professionnalisme de votre entreprise.",
      details: [
        "Nettoyage des espaces de travail individuels",
        "Entretien des sols",
        "Nettoyage et désinfection des salles communes",
        "Vidage et gestion des poubelles",
        "Nettoyage des points de contact fréquents"
      ],
      why: "Prestation possible en dehors des heures de bureau. Réduction des risques de maladies grâce à une désinfection approfondie.",
      image: "/office-cleaning.jpg",
      icon: Building2,
      buttonText: "Contactez-nous"
    },
    {
      title: "Nettoyage Commerce",
      description: "Créez une expérience agréable pour vos clients grâce à des locaux propres et accueillants.",
      details: [
        "Nettoyage des vitrines et des présentoirs",
        "Entretien des sols",
        "Désinfection des comptoirs et des caisses",
        "Gestion des déchets",
        "Nettoyage des toilettes clients"
      ],
      why: "Travail soigné pour répondre aux normes d'hygiène et de sécurité. Flexibilité dans les horaires pour ne pas perturber votre activité.",
      image: "/deep-cleaning.webp",
      icon: Building,
      buttonText: "Obtenir un devis personnalisé"
    },
    {
      title: "Nettoyage Clinique",
      description: "Assurez un environnement stérile et sécurisé pour vos patients et votre personnel.",
      details: [
        "Désinfection complète des salles d'examen",
        "Nettoyage et désinfection des sols",
        "Gestion des déchets médicaux",
        "Entretien des salles d'attente"
      ],
      why: "Utilisation de produits certifiés pour un environnement médical. Personnel formé aux protocoles spécifiques de nettoyage pour le secteur médical.",
      image: "/clinique.png",
      icon: Hospital,
      buttonText: "Demander une consultation"
    },
    {
      title: "Nettoyage École",
      description: "Un environnement propre favorise l'apprentissage et le bien-être des élèves.",
      details: [
        "Nettoyage des salles de classe",
        "Désinfection des toilettes et points de contact",
        "Entretien des sols dans les zones communes",
        "Gestion des déchets"
      ],
      why: "Services planifiés en dehors des heures de classe. Équipe dédiée pour respecter les normes de sécurité dans les établissements scolaires.",
      image: "/ecoles.jpg",
      icon: GraduationCap,
      buttonText: "Contactez-nous"
    },
    {
      title: "Nettoyage Entrepôt",
      description: "Maintenez un espace de stockage propre et organisé pour une gestion efficace.",
      details: [
        "Nettoyage des allées et zones de circulation",
        "Dépoussiérage et nettoyage des rayonnages",
        "Gestion des déchets industriels",
        "Nettoyage des zones de chargement"
      ],
      why: "Respect des normes de sécurité dans les environnements industriels. Flexibilité pour répondre aux exigences spécifiques de votre activité.",
      image: "/entrepot.webp",
      icon: Warehouse,
      buttonText: "Demander un devis gratuit"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-32 bg-gradient-to-b from-white to-blue-100 mb-24">
      {/* Section titre et introduction SEO */}
      <div className="text-center space-y-6 mb-16">
        <h1 className="text-3xl font-bold text-gray-800">
          Services de Nettoyage Professionnel pour Particuliers et Entreprises
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-600 leading-relaxed">
            Découvrez nos services de nettoyage haut de gamme à Québec. Notre équipe de professionnels qualifiés utilise des produits écologiques et des techniques innovantes pour garantir des résultats exceptionnels. Que ce soit pour votre maison, bureau, commerce, clinique, école ou entrepôt, nous vous offrons des solutions personnalisées adaptées à vos besoins spécifiques.
          </p>
        </div>
      </div>

      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="flex items-center gap-4">
                <Icon className="w-10 h-10 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-800">{service.title}</h2>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">Nos prestations incluent :</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {service.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">Pourquoi nous choisir ?</h3>
                <p className="text-gray-600">
                  {service.why}
                </p>
              </div>
              
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                {service.buttonText}
              </button>
            </div>
            
            <div className="w-full lg:w-1/2 h-[400px] relative">
              <Image
                src={service.image}
                alt={`Service de ${service.title}`}
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

export default ServicesComponenet;