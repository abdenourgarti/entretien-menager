'use client'
import React from 'react';

const HowItWorksSection = () => {
    const steps = [
      {
        icon: (
          <svg className="w-12 h-12 text-[#2563EB]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        title: "Réserver un Service",
        description: "Choisissez une date et une heure qui conviennent à votre emploi du temps."
      },
      {
        icon: (
          <svg className="w-12 h-12 text-[#2563EB]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.0008 15.4H8.0108M11.9998 15.4H12.0098M15.9998 15.4H16.0098M8.0008 11.4H8.0108M11.9998 11.4H12.0098M15.9998 11.4H16.0098M3 7.80078V17.0008C3 20.0008 4.5 22.0008 8 22.0008H16C19.5 22.0008 21 20.0008 21 17.0008V7.80078H3ZM3 7.80078H21M13.5 2.00078L12 3.50078M6.5 2.00078L8 3.50078" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        title: "Obtenir un Devis",
        description: "Recevez une estimation transparente pour les services dont vous avez besoin."
      },
      {
        icon: (
          <svg className="w-12 h-12 text-[#2563EB]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3L14.286 9.857L21 12L14.286 14.143L12 21L9.714 14.143L3 12L9.714 9.857L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        title: "Nous Nettoyons",
        description: "Notre équipe professionnelle s'occupe de tout, garantissant des résultats de haute qualité."
      },
      {
        icon: (
          <svg className="w-12 h-12 text-[#2563EB]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        title: "Profitez de Votre Espace Propre",
        description: "Détendez-vous dans votre espace fraîchement nettoyé."
      }
    ];
  
    return (
      <section className="py-16 bg-gradient-to-b from-white to-blue-100">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Processus en 4 Étapes Simples
            </h2>
            <p className="text-lg text-gray-600 mx-auto max-w-3xl">
              Découvrez comment nous transformons votre espace en un environnement impeccable
            </p>
          </div>
  
          <div className="relative">
            {/* Timeline ligne horizontale - visible uniquement en lg */}
            <div className="hidden lg:block absolute top-[128px] left-[12%] right-[12%] h-1 bg-[#212EA0]"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {steps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center">
                  {/* Cercle blanc avec icône */}
                  <div className="bg-white rounded-full p-6 shadow-lg mb-4 relative">
                    {step.icon}
                  </div>
                  
                  {/* Numéro de l'étape */}
                  <div className="w-8 h-8 rounded-full bg-[#2563EB] flex items-center justify-center text-white font-bold mb-4">
                    {index + 1}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center max-w-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
  
            {/* Bouton */}
            <div className="text-center relative">
              <button className="bg-[#2563EB] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                Prendre rendez-vous
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorksSection;