import React from 'react';
import Image from 'next/image';
import { Users, Award, Leaf, Shield } from 'lucide-react';
import { FaHistory } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="w-full px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Qui sommes-nous ? Section */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Qui sommes-nous ?</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Bienvenue chez Lieu Propre ! Nous sommes une entreprise spécialisée dans l&#39;entretien ménager,
                dédiée à rendre votre environnement plus propre, plus sain, et plus agréable. Depuis notre création,
                nous nous engageons à offrir des services de nettoyage de haute qualité, adaptés à vos besoins.
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

        {/* Notre Histoire Section */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Notre Histoire</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fondée en 2015, Lieu Propre a commencé comme une petite entreprise familiale avec un objectif simple :
                offrir des services de nettoyage fiables et abordables. Aujourd&#39;hui, nous sommes fiers de servir une
                clientèle variée, des résidences privées aux bureaux professionnels, tout en maintenant notre
                engagement envers l&#39;excellence.
              </p>
            </div>
            <div className="w-full lg:w-1/2 h-[400px] relative">
              <Image
                src="/histoire.jpg"
                alt="Histoire de notre entreprise"
                fill
                className="rounded-lg object-cover"
              />
              {/* Conteneur pour l'icône centrée */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Icône au centre */}
                <FaHistory 
                  className="w-[100px] h-[100px] text-white bg-gradient-to-r from-white to-blue-200 text-transparent bg-clip-text"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Notre Mission et Nos Valeurs Section */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 md:mb-32">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Notre Mission et Nos Valeurs</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Notre mission est d&#39;assurer un service de nettoyage exceptionnel qui dépasse les attentes de nos clients.
              Nous croyons en l&#39;importance de la confiance, de la qualité, et du respect de l&#39;environnement.
              C&#39;est pourquoi nous utilisons des produits écologiques pour protéger votre santé et celle de la planète.
            </p>
          </div>

          {/* Cercle avec valeurs */}
          <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[400px] md:h-[400px] mx-auto">
            {/* Cercle bleu */}
            <div className="absolute inset-0 rounded-full border-blue-600 border-[10px]" />

            {/* Valeurs avec icônes */}
            {/* Haut */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center -mt-2 flex flex-col items-center justify-center">
              <span className="font-semibold mb-2 text-[10px] sm:text-[14px] md:text-[18px]">Confiance</span>
              <div className="w-12 h-12 md:w-24 md:h-24 bg-white rounded-full flex items-center">
                <Users className="w-6 h-6 md:w-14 md:h-14 text-blue-600 mx-auto" />
              </div>
            </div>

            {/* Droite */}
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 text-center -mr-4 sm:-mr-6 md:-mr-7 flex items-center justify-center">
              <div className="w-12 h-12 md:w-24 md:h-24 bg-white rounded-full flex items-center">
                <Award className="w-6 h-6 md:w-14 md:h-14 text-blue-600 mx-auto" />
              </div>  
              <span className="font-semibold ml-2 text-[10px] sm:text-[14px] md:text-[18px]">Qualité</span>
            </div>

            {/* Bas */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-center -mb-2 flex flex-col items-center justify-center">
              <div className="w-12 h-12 md:w-24 md:h-24 bg-white rounded-full flex items-center">
                <Leaf className="w-6 h-6 md:w-14 md:h-14 text-blue-600 mx-auto" />
              </div>  
              <span className="font-semibold mt-2 text-[10px] sm:text-[14px] md:text-[18px]">Écologie</span>
            </div>

            {/* Gauche */}
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center -ml-4 sm:-ml-6 md:-ml-7 flex items-center justify-center">
              <span className="font-semibold mr-2 text-[10px] sm:text-[14px] md:text-[18px]">Sécurité</span>
              <div className="w-12 h-12 md:w-24 md:h-24 bg-white rounded-full flex items-center">
                <Shield className="w-6 h-6 md:w-14 md:h-14 text-blue-600 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;