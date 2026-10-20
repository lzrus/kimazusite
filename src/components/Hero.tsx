import React from 'react';
import { PageTab } from '../types';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onSelectTab: (tab: PageTab) => void;
  onScrollToServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectTab, onScrollToServices }) => {
  return (
    <section id="accueil" className="relative w-full min-h-[calc(100vh-100px)] lg:min-h-[680px] bg-[#071B3D] text-white overflow-hidden flex flex-col justify-center">
      
      {/* 1. PHOTO DE FOND : Blue-and-White Taxi at Sunset */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Blue-and-White Taxi at Sunset.png"
          alt="Taxi bleu et blanc au coucher du soleil à Pointe-Noire"
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
          loading="eager"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.includes('Blue-and-White')) {
              target.src = '/src/assets/images/Blue-and-White Taxi at Sunset.png';
            }
          }}
        />

        {/* 2. VOILE BLEU NUIT (--night: #071B3D) avec dégradé progressif */}
        {/* Assure une lisibilité WCAG AAA à gauche tout en révélant le taxi et le coucher de soleil à droite */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071B3D]/95 via-[#071B3D]/80 to-[#071B3D]/35" />
        
        {/* Voile vertical subtil pour équilibrer le haut et le bas de la bannière */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071B3D] via-transparent to-[#071B3D]/40" />

        {/* Décor d'angle géométrique subtil en haut à gauche (rappel de la charte KIMAZU) */}
        <div className="absolute top-0 left-0 w-36 h-36 bg-[#FF6A13]/10 rounded-br-[60px] pointer-events-none" />
      </div>

      {/* 3. CONTENU CENTRAL (Aligné à gauche, conteneur max 1400 px) */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 flex items-center">
        <div className="max-w-[720px] space-y-6 sm:space-y-8">

          {/* Grand titre H1 */}
          <h1
            data-reveal="up"
            data-reveal-delay="200"
            className="font-['Poppins'] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-white leading-[1.15] tracking-tight"
          >
            Bâtir avec sagesse,{' '}
            <span className="text-[#FF6A13] relative inline-block">
              construire avec intelligence.
            </span>
          </h1>

          {/* Paragraphe descriptif mesuré */}
          <p
            data-reveal="up"
            data-reveal-delay="300"
            className="font-['Inter'] font-normal text-base sm:text-lg md:text-[18px] text-[#E2E8F0] leading-[1.65] max-w-[620px]"
          >
            Basée à Pointe-Noire, KIMAZU Transport accompagne les propriétaires de taxis dans la gestion opérationnelle de leurs véhicules pour assurer des rentrées régulières et pérenniser leur investissement.
          </p>

          {/* Deux boutons d'action */}
          <div
            data-reveal="up"
            data-reveal-delay="400"
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            
            {/* Bouton principal : Nous contacter */}
            <button
              onClick={() => onSelectTab('contact')}
              className="group inline-flex items-center justify-center gap-2.5 h-[52px] px-8 rounded-full bg-gradient-to-r from-[#FF6A13] to-[#FF8A2B] hover:from-[#f05e0a] hover:to-[#ff801e] text-white font-['Poppins'] font-semibold text-[16px] shadow-[0_8px_24px_rgba(255,106,19,0.32)] hover:shadow-[0_12px_28px_rgba(255,106,19,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-3 focus:ring-[#FF6A13]/40"
            >
              <span>Nous contacter</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Bouton secondaire : Découvrir nos services */}
            <button
              onClick={onScrollToServices}
              className="inline-flex items-center justify-center gap-2.5 h-[52px] px-7 rounded-full border border-white/30 hover:border-white bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-['Poppins'] font-semibold text-[16px] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Découvrir nos services</span>
              <ArrowRight className="w-4 h-4 text-[#FF6A13]" />
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};
