import React from 'react';
import { ArrowRight } from 'lucide-react';

interface MethodStepItem {
  step: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  badgeBg: 'navy' | 'orange';
  decorColor: 'blue' | 'orange';
}

const STEPS: MethodStepItem[] = [
  {
    step: 'ÉTAPE 01',
    title: 'Diagnostic du véhicule',
    description: "Évaluation technique et administrative de l'état du véhicule avant toute mise en circulation.",
    image: '/step1_diag_blue_taxi_1792480716135.jpg',
    imageAlt: 'Diagnostic mécanique sous le capot d’un taxi bleu et blanc à Pointe-Noire',
    badgeBg: 'navy',
    decorColor: 'blue'
  },
  {
    step: 'ÉTAPE 02',
    title: 'Accord clair sur les engagements',
    description: 'Définition concertée des modalités de versement, des charges et des règles d’exploitation.',
    image: '/step2_agreement_blue_taxi_1792480717978.jpg',
    imageAlt: 'Accord transparent et contrat avec le gestionnaire devant un taxi bleu et blanc à Pointe-Noire',
    badgeBg: 'orange',
    decorColor: 'orange'
  },
  {
    step: 'ÉTAPE 03',
    title: 'Suivi régulier',
    description: 'Contrôle périodique de l’état mécanique et point d’étape régulier avec le propriétaire.',
    image: '/step3_inspect_blue_taxi_1792480717898.jpg',
    imageAlt: 'Inspection minutieuse d’un taxi bleu et blanc au coucher du soleil à Pointe-Noire',
    badgeBg: 'navy',
    decorColor: 'blue'
  }
];

export const MethodSection: React.FC = () => {
  const renderBadgeIcon = (step: string) => {
    switch (step) {
      case 'ÉTAPE 01':
        return (
          // Icône Voiture avec loupe de diagnostic
          <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white stroke-current fill-none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H8c-.7 0-1.3.3-1.8.7C5.3 8.6 4 10 4 10s-2.7.6-4.5 1.1C-.7 11.3 0 12.1 0 13v3c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <circle cx="17" cy="17" r="2" />
            <circle cx="12" cy="7" r="3.5" fill="#0B2A5B" stroke="#FFFFFF" strokeWidth="2" />
            <line x1="14.5" y1="9.5" x2="17" y2="12" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        );
      case 'ÉTAPE 02':
        return (
          // Icône Presse-papiers avec liste cochée
          <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white stroke-current fill-none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="5" y="4" width="14" height="17" rx="2" />
            <path d="M9 2h6a1 1 0 0 1 1 1v1H8V3a1 1 0 0 1 1-1z" />
            <polyline points="9 11 11 13 15 9" />
            <line x1="9" y1="16" x2="15" y2="16" />
          </svg>
        );
      case 'ÉTAPE 03':
        return (
          // Icône Engrenage
          <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white stroke-current fill-none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="notre-methode"
      className="relative bg-[#F7F9FC] py-20 md:py-24 overflow-hidden border-b border-slate-200"
      aria-labelledby="method-section-title"
    >
      {/* Décor haut gauche : forme bleu nuit à bord arrondi débordante avec bande orange */}
      <div
        className="absolute -top-9 -left-12 w-56 h-44 bg-[#071B3D] rounded-[36px] pointer-events-none z-0 overflow-hidden opacity-90 hidden sm:block"
        aria-hidden="true"
      >
        <div
          className="absolute bottom-0 right-0 w-18 h-18"
          style={{
            background: 'linear-gradient(135deg, transparent 50%, #FF7A1A 50%)',
          }}
        />
      </div>

      {/* Décor droite : grande courbe de route très pâle (bleu #E8EEF7, opacité 60 %) avec tirets blancs */}
      <svg
        className="absolute top-[15%] -right-28 w-[420px] h-[560px] pointer-events-none z-0 opacity-60 hidden lg:block"
        viewBox="0 0 320 500"
        fill="none"
        aria-hidden="true"
      >
        <path d="M40 0 C180 120, 240 280, 100 500" stroke="#E8EEF7" strokeWidth="70" strokeLinecap="round" />
        <path d="M40 0 C180 120, 240 280, 100 500" stroke="#FFFFFF" strokeWidth="6" strokeDasharray="16 16" strokeLinecap="round" />
      </svg>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
             EN-TÊTE CENTRÉ
             ======================================================== */}
        <header data-reveal="up" className="max-w-[820px] mx-auto text-center flex flex-col items-center mb-12">
          
          {/* 1. Sur-titre avec deux traits orange de 60px sur 3px */}
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-[60px] h-[3px] bg-[#FF7A1A] rounded-full shrink-0" aria-hidden="true" />
            <span className="font-poppins font-semibold text-[13px] sm:text-[14px] text-[#0B2A5B] tracking-[0.15em] uppercase">
              NOTRE MÉTHODE
            </span>
            <div className="w-[60px] h-[3px] bg-[#FF7A1A] rounded-full shrink-0" aria-hidden="true" />
          </div>

          {/* 2. Titre H2 sur deux lignes */}
          <h2
            id="method-section-title"
            className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[42px] text-[#071B3D] leading-[1.2] tracking-tight mb-4"
          >
            Un processus simple en trois étapes<br />
            pour une <span className="text-[#FF7A1A]">sérénité totale.</span>
          </h2>

          {/* 3. Paragraphe max 720px */}
          <p className="font-sans font-normal text-[16px] text-[#3F5675] leading-relaxed max-w-[720px] mb-5">
            Chez KIMAZU Transport, nous avons mis en place une méthode claire et structurée pour vous accompagner à chaque étape, de l'évaluation à la gestion continue de votre véhicule.
          </p>

          {/* 4. Séparateur : trait orange (48px) + trait bleu nuit (48px) */}
          <div className="inline-flex items-center gap-2" aria-hidden="true">
            <div className="w-12 h-1 bg-[#FF7A1A] rounded-full" />
            <div className="w-12 h-1 bg-[#071B3D] rounded-full" />
          </div>

        </header>

        {/* ========================================================
             GRILLE DE CARTES (3 colonnes élargies et équilibrées pour étendre le contenu et réduire la hauteur)
             ======================================================== */}
        <ol className="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch p-0 m-0">
          {STEPS.map((stepItem, index) => {
            const isOrangeBadge = stepItem.badgeBg === 'orange';
            const isBlueDecor = stepItem.decorColor === 'blue';

            return (
              <li
                key={stepItem.step}
                data-reveal="up"
                data-reveal-delay={(index + 1) * 150}
                className="bg-white rounded-[22px] shadow-[0_12px_32px_rgba(11,42,91,0.08)] hover:shadow-[0_20px_40px_rgba(11,42,91,0.14)] transition-all duration-250 ease-out hover:-translate-y-1.5 flex flex-col overflow-hidden relative group"
              >
                {/* 1. Zone photo panoramique élégante (hauteur optimisée 165-175px pour élargir visuellement la carte) */}
                <div className="relative w-full h-[165px] sm:h-[175px] bg-[#071B3D] overflow-hidden">
                  <img
                    src={stepItem.image}
                    alt={stepItem.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-400 ease-out group-hover:scale-105"
                    width={600}
                    height={380}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* 2. Pastille d'icône carrée arrondie compacte (66px) */}
                <div
                  className={`absolute left-6 sm:left-7 top-[132px] sm:top-[142px] w-[66px] h-[66px] rounded-[16px] border-4 border-white shadow-[0_8px_20px_rgba(11,42,91,0.18)] flex items-center justify-center z-20 ${
                    isOrangeBadge ? 'bg-[#FF7A1A]' : 'bg-[#0B2A5B]'
                  }`}
                  aria-hidden="true"
                >
                  {renderBadgeIcon(stepItem.step)}
                </div>

                {/* 3. Contenu (padding optimisé pour étendre la largeur et réduire la hauteur globale) */}
                <div className="pt-9 px-6 pb-6 sm:px-7 sm:pt-9 sm:pb-6 flex flex-col flex-grow relative z-10">
                  
                  {/* Rangée métadonnée : étiquette décalée à droite de la pastille */}
                  <div className="flex justify-end items-center min-h-[20px] mb-2">
                    <span className="font-poppins font-semibold text-[12.5px] text-[#E8650A] tracking-[0.15em] uppercase">
                      {stepItem.step}
                    </span>
                  </div>

                  {/* Titre H3 */}
                  <h3 className="font-poppins font-semibold text-lg sm:text-[21px] text-[#071B3D] leading-[1.2] mb-1.5">
                    {stepItem.title}
                  </h3>

                  {/* Description bien étalée sur la largeur */}
                  <p className="font-sans text-[14px] sm:text-[14.5px] text-[#3F5675] leading-relaxed mb-4 flex-grow">
                    {stepItem.description}
                  </p>

                  {/* 4. Bouton flèche circulaire compact fond bleu marine, passe en orange au survol */}
                  <div className="flex justify-end items-center mt-auto">
                    <a
                      href="#contact"
                      className="w-10 h-10 rounded-full bg-[#0B2A5B] group-hover:bg-[#FF7A1A] group-hover:scale-105 text-white inline-flex items-center justify-center transition-all duration-250 cursor-pointer min-h-[40px] min-w-[40px]"
                      aria-label={`Voir le détail de l'${stepItem.step} : ${stepItem.title}`}
                    >
                      <ArrowRight className="w-4 h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </div>

                </div>

                {/* 5. Décor de carte en bas à gauche */}
                <div
                  className={`absolute -bottom-4 -left-4 w-24 h-24 pointer-events-none z-0 rounded-full ${
                    isBlueDecor
                      ? 'bg-radial from-[#0B2A5B]/10 to-transparent'
                      : 'bg-radial from-[#FF7A1A]/12 to-transparent'
                  }`}
                  aria-hidden="true"
                />

              </li>
            );
          })}
        </ol>

      </div>
    </section>
  );
};
