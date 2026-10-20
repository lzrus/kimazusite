import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

interface ServicesSectionProps {
  isStandalonePage?: boolean;
}

interface ServiceData {
  id: string;
  title: string;
  titleFormatted: React.ReactNode;
  description: string;
  fullDesc: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  btnVariant: 'navy' | 'orange';
  link: string;
  hasNavyStripe?: boolean;
}

const SERVICES: ServiceData[] = [
  {
    id: 'gestion-taxis',
    title: 'Gestion de taxis',
    titleFormatted: 'Gestion de taxis',
    description: "Nous assurons un suivi rigoureux de l'exploitation de vos véhicules pour maximiser vos revenus et réduire les risques.",
    fullDesc: "Nous prenons en charge la coordination quotidienne de votre taxi à Pointe-Noire : suivi régulier des versements, entretien mécanique préventif et gestion des formalités administratives pour sécuriser votre investissement.",
    bullets: [
      "Suivi quotidien de l'exploitation",
      "Encadrement des chauffeurs",
      "Analyse des recettes et dépenses",
      "Optimisation des performances"
    ],
    image: '/Futuristic Taxi Fleet at Sunset.png',
    imageAlt: 'Flotte moderne de taxis au coucher du soleil à Pointe-Noire',
    btnVariant: 'navy',
    link: '/services/gestion-taxis',
    hasNavyStripe: false
  },
  {
    id: 'accompagnement-proprietaires',
    title: 'Accompagnement des propriétaires',
    titleFormatted: (
      <>
        Accompagnement<br className="hidden sm:inline" /> des propriétaires
      </>
    ),
    description: 'Nous vous accompagnons à chaque étape pour une gestion sereine et rentable de votre véhicule.',
    fullDesc: 'Vous gardez la gestion directe de votre véhicule tout en bénéficiant de notre accompagnement opérationnel : conseils personnalisés, suivi des performances et assistance administrative.',
    bullets: [
      'Conseil personnalisé',
      'Suivi des performances',
      'Aide à la prise de décision',
      'Accompagnement administratif'
    ],
    image: '/Professional Collaboration by the Blue Taxi.png',
    imageAlt: 'Collaboration professionnelle et accompagnement auprès d’un taxi bleu à Pointe-Noire',
    btnVariant: 'orange',
    link: '/services/accompagnement-proprietaires',
    hasNavyStripe: true
  },
  {
    id: 'formation',
    title: 'Formation',
    titleFormatted: 'Formation',
    description: 'Nous formons les propriétaires à la gestion rigoureuse de leurs taxis et aux clés du business de transport.',
    fullDesc: 'Une formation concrète et opérationnelle dédiée aux propriétaires et investisseurs : pilotage des recettes journalières, sélection et encadrement des chauffeurs, maîtrise des coûts mécaniques et optimisation de la rentabilité de votre business de transport à Pointe-Noire.',
    bullets: [
      'Gestion financière & rentabilité',
      'Encadrement des chauffeurs',
      'Maîtrise des charges & pannes',
      'Stratégie business transport'
    ],
    image: '/Gemini_Generated_Image_19q1mq19q1mq19q1.jpeg',
    imageAlt: 'Formation des propriétaires à la gestion de taxis et business de transport à Pointe-Noire',
    btnVariant: 'navy',
    link: '/services/formation',
    hasNavyStripe: true
  }
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  isStandalonePage = false
}) => {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

  const renderBadgeIcon = (id: string) => {
    switch (id) {
      case 'gestion-taxis':
        return (
          // Icône Taxi / Voiture linéaire
          <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H8c-.7 0-1.3.3-1.8.7C5.3 8.6 4 10 4 10s-2.7.6-4.5 1.1C-.7 11.3 0 12.1 0 13v3c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <path d="M9 17h6" />
            <circle cx="17" cy="17" r="2" />
          </svg>
        );
      case 'accompagnement-proprietaires':
        return (
          // Icône Poignée de main / Partenariat linéaire
          <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
            <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-3-3" />
            <path d="m7 13 4 4" />
            <path d="M2 11h4l3-3a1 1 0 0 1 1.4 0l1.6 1.6" />
            <path d="M18 13l2-2a2 2 0 0 0 0-2.8l-1.4-1.4a2 2 0 0 0-2.8 0L14 8.6" />
            <path d="M13 3 7.8 8.2a2 2 0 0 0 0 2.8l1.4 1.4" />
          </svg>
        );
      case 'formation':
      case 'conseil-rentabilite':
        return (
          // Icône Formation / Chapeau de diplômé et apprentissage
          <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="services"
      className={`relative overflow-hidden py-20 md:py-28 ${
        isStandalonePage ? 'bg-white' : 'bg-[#F7F9FC]'
      }`}
      aria-labelledby="services-heading"
    >
      {/* Deux grandes formes organiques très discrètes en haut à droite (opacité 5 à 8 %) */}
      <div
        className="absolute -top-20 -right-24 w-96 md:w-[480px] h-96 md:h-[480px] rounded-[43%_57%_70%_30%/30%_45%_55%_70%] bg-[#0B2A5B] opacity-[0.06] pointer-events-none z-0"
        aria-hidden="true"
      />
      <div
        className="absolute top-16 right-28 w-80 md:w-96 h-80 md:h-96 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-[#FF7A1A] opacity-[0.05] pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div data-reveal="up" className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-semibold font-poppins text-[#FF7A1A] uppercase tracking-[2px] block">
            Solutions Clés en Main
          </span>
          <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-[42px] font-bold font-poppins text-[#0B2A5B] tracking-tight leading-[1.15]">
            Nos services
          </h2>
          <p className="text-base text-[#3F5675] leading-relaxed">
            Un accompagnement rigoureux et transparent pour transformer chaque véhicule en une source de revenus stable à Pointe-Noire.
          </p>
        </div>

        {/* Grille 3 colonnes élargies et équilibrées pour étendre le contenu et réduire la hauteur */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {SERVICES.map((service, index) => {
            const isOrangeBtn = service.btnVariant === 'orange';

            return (
              <article
                key={service.id}
                data-reveal="up"
                data-reveal-delay={(index + 1) * 150}
                className="bg-white rounded-[22px] shadow-[0_12px_32px_rgba(11,42,91,0.08)] hover:shadow-[0_20px_40px_rgba(11,42,91,0.14)] transition-all duration-250 ease-out hover:-translate-y-1.5 flex flex-col overflow-hidden relative group"
                aria-labelledby={`service-title-${service.id}`}
              >
                {/* 1. Zone image panoramique élégante (hauteur optimisée 165-175px pour élargir visuellement la carte) */}
                <div className="relative w-full h-[165px] sm:h-[175px] overflow-hidden bg-[#071B3D]">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-400 ease-out group-hover:scale-105"
                    width={600}
                    height={380}
                    loading="lazy"
                  />

                  {/* Courbe concave douce (vague blanche) */}
                  <svg
                    className="absolute -bottom-1 left-0 right-0 w-full h-7 pointer-events-none z-10 text-white fill-current"
                    viewBox="0 0 100 20"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path d="M0,0 C32,15 68,15 100,0 L100,20 L0,20 Z" />
                  </svg>

                  {/* Petit triangle diagonal orange dans le coin inférieur droit */}
                  <div className="absolute bottom-0 right-0 w-9 h-9 pointer-events-none z-20">
                    <svg className="w-full h-full" viewBox="0 0 44 44" aria-hidden="true">
                      <polygon points="44,0 44,44 0,44" fill="#FF7A1A" />
                      {service.hasNavyStripe && (
                        <line x1="2" y1="44" x2="44" y2="2" stroke="#071B3D" strokeWidth="3" />
                      )}
                    </svg>
                  </div>
                </div>

                {/* 2. Pastille d'icône compacte (cercle 66px, fond marine, bordure blanche 4px) */}
                <div
                  className="absolute left-6 sm:left-7 top-[132px] sm:top-[142px] w-[66px] h-[66px] rounded-full bg-[#0B2A5B] border-4 border-white shadow-[0_8px_20px_rgba(11,42,91,0.18)] flex items-center justify-center z-30"
                  aria-hidden="true"
                >
                  {renderBadgeIcon(service.id)}
                </div>

                {/* 3. Contenu (padding optimisé pour étendre la largeur et réduire la hauteur globale) */}
                <div className="pt-9 px-6 pb-6 sm:px-7 sm:pt-9 sm:pb-6 flex flex-col flex-grow">
                  
                  {/* Titre Poppins SemiBold 600, bleu marine */}
                  <h3
                    id={`service-title-${service.id}`}
                    className="font-poppins font-semibold text-lg sm:text-[21px] text-[#0B2A5B] leading-[1.2] mb-1.5"
                  >
                    {service.titleFormatted}
                  </h3>

                  {/* Description Inter Regular 14.5-15px */}
                  <p className="font-sans text-[14px] sm:text-[14.5px] text-[#3F5675] leading-relaxed mb-3">
                    {service.description}
                  </p>

                  {/* Petit trait orange */}
                  <div className="w-9 h-[3px] bg-[#FF7A1A] rounded-full mb-3" aria-hidden="true" />

                  {/* 4 atouts / puces en grille 2 colonnes bien étalées */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2 mb-5">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 font-sans text-[13.5px] sm:text-[14px] font-medium text-[#0B2A5B] leading-snug">
                        <svg
                          className="w-4 h-4 min-w-[16px] text-[#FF7A1A] stroke-current fill-none mt-0.5 shrink-0"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* 4. Bouton « En savoir plus » + flèche → */}
                  <div className="mt-auto pt-1">
                    <button
                      onClick={() => setSelectedService(service)}
                      className={`inline-flex items-center justify-center gap-2 h-10 px-5 rounded-full font-poppins font-medium text-[14px] transition-all duration-200 cursor-pointer min-h-[40px] ${
                        isOrangeBtn
                          ? 'bg-[#FF7A1A] hover:bg-[#E86A0D] text-white shadow-sm hover:shadow'
                          : 'bg-[#0B2A5B] hover:bg-[#071B3D] text-white'
                      }`}
                      aria-label={`En savoir plus sur ${service.title}`}
                    >
                      <span>En savoir plus</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Modale interactive détaillée lors du clic sur « En savoir plus » */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fadeIn">
          <div className="bg-white rounded-[20px] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Fermer la fenêtre"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#0B2A5B] flex items-center justify-center">
                {renderBadgeIcon(selectedService.id)}
              </div>
              <h3 className="font-poppins font-semibold text-xl text-[#0B2A5B]">
                {selectedService.title}
              </h3>
            </div>

            <p className="text-[15px] text-[#3F5675] leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2A5B] mb-3">
                Prestations incluses :
              </h4>
              <ul className="space-y-2.5 bg-[#F7F9FC] p-4 rounded-xl border border-slate-200/80">
                {selectedService.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#0B2A5B]">
                    <svg className="w-4 h-4 min-w-4 text-[#FF7A1A] stroke-current fill-none mt-0.5" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`https://wa.me/242065257442?text=${encodeURIComponent(`Bonjour KIMAZU Transport, je souhaite des informations sur le service : ${selectedService.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#FF7A1A] hover:bg-[#E86A0D] text-white font-poppins font-medium text-sm transition-colors min-h-[44px]"
              >
                <i className="fa-brands fa-whatsapp text-[18px] leading-none" aria-hidden="true" />
                <span>Nous contacter sur WhatsApp</span>
              </a>
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto h-12 px-5 rounded-full border border-slate-300 text-[#0B2A5B] font-poppins font-medium text-sm hover:bg-slate-50 transition-colors min-h-[44px] cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
