import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="a-propos"
      className="relative bg-[#F7F9FC] py-20 md:py-24 overflow-hidden border-b border-slate-200"
      aria-labelledby="about-main-title"
    >
      {/* Filigrane diagonal subtil en arrière-plan (opacité 3 à 5%) */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, rgba(11, 42, 91, 0.035), rgba(11, 42, 91, 0.035) 1px, transparent 1px, transparent 28px)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
             PARTIE 1 : INTRODUCTION (Grille 2 colonnes ~55% / 45%)
             ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start mb-16">
          
          {/* Colonne gauche (~55%) */}
          <div data-reveal="left" className="lg:col-span-7 flex flex-col">
            
            {/* 1. Sur-titre */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-[60px] h-[3px] bg-[#FF7A1A] rounded-full shrink-0" aria-hidden="true" />
              <span className="font-sans font-semibold text-xs sm:text-[14px] text-[#0B2A5B] tracking-[0.05em] uppercase">
                À PROPOS DE KIMAZU TRANSPORT
              </span>
            </div>

            {/* 2. Titre H2 Poppins Bold 700 */}
            <h2
              id="about-main-title"
              className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[46px] text-[#071B3D] leading-[1.15] tracking-tight mb-6"
            >
              Une expertise locale,<br />
              au service de <span className="text-[#FF7A1A]">votre mobilité.</span>
            </h2>

            {/* 3. Paragraphe descriptif */}
            <p className="font-sans font-normal text-[16px] sm:text-[17px] text-[#3F5675] leading-[1.65] max-w-[560px] mb-8">
              Basée à Pointe-Noire, KIMAZU Transport est une entreprise spécialisée dans la gestion de taxis et l'accompagnement des propriétaires de véhicules de transport. Nous proposons un cadre de travail structuré pour assurer le suivi technique et financier de votre activité.
            </p>

            {/* 4. Encadré de mission (citation) */}
            <div
              className="relative bg-[#EEF3FA] rounded-[14px] p-6 sm:p-7 sm:pl-8 flex gap-4 sm:gap-5 items-start overflow-hidden"
              role="region"
              aria-label="Notre mission"
            >
              {/* Barre verticale orange de 6px sur le bord gauche */}
              <div
                className="absolute top-0 bottom-0 left-0 w-[6px] bg-[#FF7A1A] rounded-l-[14px]"
                aria-hidden="true"
              />

              {/* Grand guillemet orange */}
              <span
                className="font-poppins font-bold text-4xl sm:text-[48px] text-[#FF7A1A] leading-none select-none mt-1 shrink-0"
                aria-hidden="true"
              >
                “
              </span>

              <div className="flex flex-col gap-1.5">
                <blockquote className="font-sans italic font-medium text-base sm:text-[18px] text-[#071B3D] leading-[1.45]">
                  Faire de chaque véhicule une source de revenus stable et durable.
                </blockquote>
                <span className="font-sans font-normal text-xs sm:text-[15px] text-[#3F5675]">
                  Notre mission
                </span>
              </div>
            </div>

          </div>

          {/* Colonne droite (~45%) : Photo & Forme décorative */}
          <div data-reveal="right" data-reveal-delay="200" className="lg:col-span-5 relative w-full pt-4 sm:pt-6">
            
            {/* Forme décorative bleu nuit derrière la photo */}
            <div
              className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 w-full h-full bg-[#071B3D] rounded-[24px] pointer-events-none z-0 overflow-hidden hidden sm:block"
              aria-hidden="true"
            >
              <div
                className="absolute bottom-0 right-0 w-20 h-20"
                style={{
                  background: 'linear-gradient(135deg, transparent 50%, #FF7A1A 50%)',
                }}
              />
            </div>

            {/* Photo coins arrondis 24px, ratio 16:10 */}
            <div className="relative z-10 rounded-[24px] overflow-hidden shadow-[0_20px_48px_rgba(11,42,91,0.15)] aspect-[16/10] bg-[#071B3D]">
              <img
                src="/Blue-and-White Taxi at Sunset.png"
                alt="Taxi bleu et blanc au coucher du soleil à Pointe-Noire - KIMAZU Transport"
                className="w-full h-full object-cover"
                width={640}
                height={400}
                loading="lazy"
              />
            </div>

          </div>

        </div>

        {/* ========================================================
             PARTIE 2 : NOS VALEURS (Marge haute 64px)
             ======================================================== */}
        <div className="mt-14 sm:mt-16">
          
          {/* Titre de sous-section */}
          <div data-reveal="up" className="flex items-center gap-3 mb-8">
            <div className="w-7 h-[3px] bg-[#FF7A1A] rounded-full shrink-0" aria-hidden="true" />
            <h3 className="font-poppins font-bold text-2xl sm:text-[32px] text-[#071B3D] leading-tight">
              Nos valeurs
            </h3>
          </div>

          {/* Grille de 3 cartes égales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            
            {/* CARTE 01 : Fiabilité (Mise en avant - Fond Bleu Marine) */}
            <article
              data-reveal="up"
              data-reveal-delay="100"
              className="relative rounded-[20px] p-7 sm:p-8 min-h-[250px] flex flex-col overflow-hidden bg-[#0B2A5B] text-white shadow-[0_10px_28px_rgba(11,42,91,0.06)] hover:shadow-[0_18px_36px_rgba(11,42,91,0.12)] transition-all duration-250 ease-out hover:-translate-y-1 group"
              aria-labelledby="val-title-01"
            >
              {/* Numéro décoratif 64px Poppins Bold très pâle */}
              <span
                className="absolute top-4 right-6 font-poppins font-bold text-[64px] text-white/10 leading-none select-none pointer-events-none"
                aria-hidden="true"
              >
                01
              </span>

              {/* Motif de route / courbe en filigrane en bas à droite */}
              <svg
                className="absolute -bottom-2 -right-2 w-32 h-32 opacity-8 pointer-events-none text-white fill-none"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                <path d="M10 90 Q 50 20, 90 90" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                <path d="M25 90 Q 50 35, 75 90" stroke="currentColor" strokeWidth="4" strokeDasharray="6 6" />
              </svg>

              {/* Pastille icône carrée arrondie 60px fond orange */}
              <div
                className="w-[60px] h-[60px] rounded-[14px] bg-[#FF7A1A] flex items-center justify-center mb-5 shrink-0 relative z-10"
                aria-hidden="true"
              >
                {/* Icône Bouclier avec coche */}
                <svg className="w-[30px] h-[30px] text-white stroke-current fill-none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>

              {/* Contenu */}
              <div className="relative z-10 flex flex-col flex-grow">
                <h4 id="val-title-01" className="font-poppins font-semibold text-[22px] sm:text-[24px] text-white leading-snug mb-2.5">
                  Fiabilité
                </h4>
                <p className="font-sans text-[15px] sm:text-[16px] text-white/90 leading-[1.55] mb-6">
                  Une gestion rigoureuse et des points réguliers pour sécuriser votre activité.
                </p>
                <div className="mt-auto w-12 h-[3px] bg-[#FF7A1A] rounded-full" aria-hidden="true" />
              </div>
            </article>

            {/* CARTE 02 : Expertise (Fond Blanc) */}
            <article
              data-reveal="up"
              data-reveal-delay="200"
              className="relative rounded-[20px] p-7 sm:p-8 min-h-[250px] flex flex-col overflow-hidden bg-white text-[#3F5675] border border-[#E6ECF5] shadow-[0_10px_28px_rgba(11,42,91,0.06)] hover:shadow-[0_18px_36px_rgba(11,42,91,0.12)] transition-all duration-250 ease-out hover:-translate-y-1 group"
              aria-labelledby="val-title-02"
            >
              {/* Numéro décoratif 64px */}
              <span
                className="absolute top-4 right-6 font-poppins font-bold text-[64px] text-[#0B2A5B]/8 leading-none select-none pointer-events-none"
                aria-hidden="true"
              >
                02
              </span>

              {/* Pastille icône carrée arrondie 60px fond orange */}
              <div
                className="w-[60px] h-[60px] rounded-[14px] bg-[#FF7A1A] flex items-center justify-center mb-5 shrink-0 relative z-10"
                aria-hidden="true"
              >
                {/* Icône Compteur / Boussole */}
                <svg className="w-[30px] h-[30px] text-white stroke-current fill-none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
              </div>

              {/* Contenu */}
              <div className="relative z-10 flex flex-col flex-grow">
                <h4 id="val-title-02" className="font-poppins font-semibold text-[22px] sm:text-[24px] text-[#071B3D] leading-snug mb-2.5">
                  Expertise
                </h4>
                <p className="font-sans text-[15px] sm:text-[16px] text-[#3F5675] leading-[1.55] mb-6">
                  Une connaissance pratique des réalités de circulation et d'entretien à Pointe-Noire.
                </p>
                <div className="mt-auto w-12 h-[3px] bg-[#FF7A1A] rounded-full" aria-hidden="true" />
              </div>
            </article>

            {/* CARTE 03 : Proximité (Fond Blanc) */}
            <article
              data-reveal="up"
              data-reveal-delay="300"
              className="relative rounded-[20px] p-7 sm:p-8 min-h-[250px] flex flex-col overflow-hidden bg-white text-[#3F5675] border border-[#E6ECF5] shadow-[0_10px_28px_rgba(11,42,91,0.06)] hover:shadow-[0_18px_36px_rgba(11,42,91,0.12)] transition-all duration-250 ease-out hover:-translate-y-1 group"
              aria-labelledby="val-title-03"
            >
              {/* Numéro décoratif 64px */}
              <span
                className="absolute top-4 right-6 font-poppins font-bold text-[64px] text-[#0B2A5B]/8 leading-none select-none pointer-events-none"
                aria-hidden="true"
              >
                03
              </span>

              {/* Pastille icône carrée arrondie 60px fond orange */}
              <div
                className="w-[60px] h-[60px] rounded-[14px] bg-[#FF7A1A] flex items-center justify-center mb-5 shrink-0 relative z-10"
                aria-hidden="true"
              >
                {/* Icône Deux personnes */}
                <svg className="w-[30px] h-[30px] text-white stroke-current fill-none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>

              {/* Contenu */}
              <div className="relative z-10 flex flex-col flex-grow">
                <h4 id="val-title-03" className="font-poppins font-semibold text-[22px] sm:text-[24px] text-[#071B3D] leading-snug mb-2.5">
                  Proximité
                </h4>
                <p className="font-sans text-[15px] sm:text-[16px] text-[#3F5675] leading-[1.55] mb-6">
                  Une équipe accessible directement à Pointe-Noire pour répondre à vos questions.
                </p>
                <div className="mt-auto w-12 h-[3px] bg-[#FF7A1A] rounded-full" aria-hidden="true" />
              </div>
            </article>

          </div>

        </div>

      </div>
    </section>
  );
};
