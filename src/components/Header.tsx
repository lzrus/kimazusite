import React, { useState, useEffect } from 'react';
import { PageTab } from '../types';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentTab: PageTab;
  onSelectTab: (tab: PageTab) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onSelectTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tab: PageTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  const navLinks: { label: string; tab: PageTab }[] = [
    { label: 'Accueil', tab: 'accueil' },
    { label: 'À propos', tab: 'a-propos' },
    { label: 'Nos services', tab: 'services' },
    { label: 'Contact', tab: 'contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 h-[100px] w-full transition-shadow duration-300 ${
        isScrolled
          ? 'bg-[#F7F9FC]/95 shadow-[0_4px_24px_rgba(7,27,61,0.08)] border-b border-[#E2E8F0]'
          : 'bg-[#F7F9FC]/92 border-b border-[#E8EEF5]'
      } backdrop-blur-md`}
    >
      <div className="max-w-[1400px] mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        
        {/* Gauche : Logo KIMAZU Transport (hauteur ~ 60 px) */}
        <button
          onClick={() => handleNavClick('accueil')}
          className="flex items-center shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF6A13] focus:ring-offset-2 rounded-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
          aria-label="KIMAZU Transport - Page d'accueil"
        >
          <img
            src="/logo12.png"
            alt="Logo officiel KIMAZU Transport"
            className="h-[56px] sm:h-[60px] w-auto object-contain"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.includes('logo12.png')) {
                target.src = '/logo12.png';
              }
            }}
          />
        </button>

        {/* Centre : Navigation en Poppins Medium 16 px, bleu nuit, espacement 40 px */}
        <nav
          className="hidden lg:flex items-center gap-10"
          aria-label="Navigation principale"
        >
          {navLinks.map((item) => {
            const isActive = currentTab === item.tab;
            return (
              <button
                key={item.tab}
                onClick={() => handleNavClick(item.tab)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-2 font-['Poppins'] font-medium text-[16px] tracking-normal transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A13] rounded ${
                  isActive
                    ? 'text-[#0B2A5B] font-semibold'
                    : 'text-[#0B2A5B]/80 hover:text-[#0B2A5B]'
                }`}
              >
                <span>{item.label}</span>
                {/* Soulignement orange actif de 3 px avec coins arrondis à 8 px sous le texte */}
                {isActive ? (
                  <span
                    className="absolute -bottom-2 left-0 right-0 h-[3px] bg-[#FF6A13] rounded-full"
                    aria-hidden="true"
                  />
                ) : (
                  <span
                    className="absolute -bottom-2 left-1/2 right-1/2 h-[2px] bg-[#FF6A13]/40 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:left-0 group-hover:right-0"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Droite : Téléphone + Séparateur + Bouton Nous contacter */}
        <div className="hidden lg:flex items-center gap-6 shrink-0">
          
          {/* Numéro avec icône téléphone orange */}
          <a
            href="tel:+242065257442"
            className="group flex items-center gap-2.5 font-['Poppins'] font-medium text-[16px] text-[#0B2A5B] hover:text-[#FF6A13] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A13] rounded-md px-1.5 py-1"
            title="Appeler KIMAZU Transport"
          >
            <span className="w-8 h-8 rounded-full bg-[#FF6A13]/10 flex items-center justify-center text-[#FF6A13] group-hover:bg-[#FF6A13] group-hover:text-white transition-colors duration-200">
              <Phone className="w-4 h-4 text-inherit" />
            </span>
            <span className="tracking-tight">+242 06 525 7442</span>
          </a>

          {/* Séparateur vertical 1 px gris-bleu */}
          <div className="w-[1px] h-8 bg-[#D0D9E5]" aria-hidden="true" />

          {/* Bouton « Nous contacter » : Pilule orange (dégradé #FF6A13 vers #FF8A2B), h=52px, p=0 28px */}
          <button
            onClick={() => handleNavClick('contact')}
            className="group inline-flex items-center justify-center gap-2.5 h-[52px] px-7 rounded-full bg-gradient-to-r from-[#FF6A13] to-[#FF8A2B] hover:from-[#f05e0a] hover:to-[#ff801e] text-white font-['Poppins'] font-semibold text-[16px] shadow-[0_8px_20px_rgba(255,106,19,0.28)] hover:shadow-[0_12px_24px_rgba(255,106,19,0.38)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer focus:outline-none focus:ring-3 focus:ring-[#FF6A13]/40"
          >
            <span>Nous contacter</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Bouton Menu Burger pour Mobile & Tablette (< 1024 px) */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:+242065257442"
            className="p-2.5 rounded-full bg-[#FF6A13]/10 text-[#FF6A13] sm:hidden min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Appeler KIMAZU Transport"
          >
            <Phone className="w-5 h-5" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-[#0B2A5B] hover:bg-[#E8EEF5] transition-colors cursor-pointer min-h-[48px] min-w-[48px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#FF6A13]"
            aria-label={mobileMenuOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

      </div>

      {/* Tiroir Mobile & Tablette coulissant */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[100px] bg-[#F7F9FC] border-b border-[#D0D9E5] shadow-2xl z-50 animate-in slide-in-from-top-4 duration-200">
          <div className="max-w-[1400px] mx-auto px-6 py-6 space-y-4">
            
            {/* Liste des liens de navigation (hauteur tactile >= 48 px) */}
            <nav className="flex flex-col space-y-1" aria-label="Navigation mobile">
              {navLinks.map((item) => {
                const isActive = currentTab === item.tab;
                return (
                  <button
                    key={item.tab}
                    onClick={() => handleNavClick(item.tab)}
                    className={`flex items-center justify-between w-full min-h-[48px] px-4 rounded-xl text-left font-['Poppins'] text-[16px] transition-colors ${
                      isActive
                        ? 'bg-[#0B2A5B] text-white font-semibold shadow-sm'
                        : 'text-[#0B2A5B] hover:bg-[#EAEFF7] font-medium'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF6A13]" aria-hidden="true" />
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-[#D0D9E5] space-y-4">
              {/* Téléphone mobile */}
              <a
                href="tel:+242065257442"
                className="flex items-center gap-3 px-4 py-3 min-h-[48px] rounded-xl bg-white border border-[#D0D9E5] text-[#0B2A5B] font-['Poppins'] font-medium text-[16px]"
              >
                <div className="w-8 h-8 rounded-full bg-[#FF6A13]/10 flex items-center justify-center text-[#FF6A13]">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+242 06 525 7442</span>
              </a>

              {/* Bouton Nous contacter mobile */}
              <button
                onClick={() => handleNavClick('contact')}
                className="flex items-center justify-center gap-2.5 w-full h-[52px] rounded-full bg-gradient-to-r from-[#FF6A13] to-[#FF8A2B] text-white font-['Poppins'] font-semibold text-[16px] shadow-[0_8px_20px_rgba(255,106,19,0.28)]"
              >
                <span>Nous contacter</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
