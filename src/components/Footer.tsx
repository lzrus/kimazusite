import React, { useState } from 'react';
import { PageTab } from '../types';
import {
  Phone,
  MapPin,
  ArrowUp,
  X,
  ChevronRight
} from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: PageTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (tab: PageTab) => {
    onSelectTab(tab);
  };

  const whatsappUrl =
    'https://wa.me/242065257442?text=Bonjour%20KIMAZU%20Transport%2C%20je%20souhaite%20des%20informations%20sur%20vos%20services.';

  return (
    <footer className="relative bg-[#061A3D] text-white pt-[72px] pb-0 overflow-hidden font-sans border-t border-white/10">
      
      {/* 1. Bande diagonale orange en haut à gauche qui chevauche la section précédente (accent de marque) */}
      <div
        className="absolute -top-6 -left-12 w-48 h-16 bg-[#FF6A13] -rotate-12 transform-gpu pointer-events-none z-10 shadow-[0_4px_20px_rgba(255,106,19,0.35)]"
        aria-hidden="true"
      />

      {/* 2. Courbes de route sinueuses très discrètes (bleu #0B2A5B, opacité 30 %, tirets) en bas à droite */}
      <svg
        className="absolute -bottom-10 -right-10 w-[420px] h-[420px] pointer-events-none opacity-30 z-0 fill-none text-[#0B2A5B]"
        viewBox="0 0 400 400"
        aria-hidden="true"
      >
        <path
          d="M30 380 C120 380, 160 220, 260 200 C340 180, 360 80, 390 20"
          stroke="currentColor"
          strokeWidth="36"
          strokeLinecap="round"
        />
        <path
          d="M30 380 C120 380, 160 220, 260 200 C340 180, 360 80, 390 20"
          stroke="#FF6A13"
          strokeWidth="5"
          strokeDasharray="14 14"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>

      {/* Conteneur max 1280 px, padding latéral 24 px */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        
        {/* GRILLE PRINCIPALE (4 colonnes ~ 34% / 20% / 25% / 21%, gap 48px sur desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16">
          
          {/* ========================================================
              COLONNE 1 : MARQUE
              ======================================================== */}
          <div data-reveal="up" data-reveal-delay="100" className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* 1. Logo KIMAZU Transport (version claire), largeur ~ 320 px, lien vers / */}
              <button
                onClick={() => handleNavClick('accueil')}
                className="inline-block cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF6A13] rounded-lg transition-transform hover:scale-[1.01] active:scale-[0.99] text-left"
                aria-label="KIMAZU Transport - Page d'accueil"
              >
                <div className="bg-white px-3.5 py-2 rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.2)] inline-flex items-center">
                  <img
                    src="/logo12.png"
                    alt="Logo KIMAZU Transport"
                    className="h-10 sm:h-11 w-auto max-w-[280px] sm:max-w-[320px] object-contain"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('logo12.png')) {
                        target.src = '/logo12.png';
                      }
                    }}
                  />
                </div>
              </button>

              {/* 2. Slogan en Poppins SemiBold 26 px, blanc, interligne 1.2 */}
              <h3 className="font-poppins font-semibold text-[22px] sm:text-[26px] text-white leading-[1.2] mt-6 tracking-tight">
                Bâtir avec sagesse, <br />
                <span className="text-[#FF6A13]">construire avec intelligence.</span>
              </h3>

              {/* 3. Description en Inter Regular 17 px, interligne 1.6, --muted */}
              <p className="font-sans font-normal text-[16px] sm:text-[17px] text-white/75 leading-[1.6] mt-4 max-w-[420px]">
                Entreprise spécialisée dans la gestion de taxis et l'accompagnement des propriétaires de véhicules à Pointe-Noire.
              </p>
            </div>
          </div>

          {/* ========================================================
              COLONNE 2 : NAVIGATION
              ======================================================== */}
          <div data-reveal="up" data-reveal-delay="200" className="lg:col-span-3 lg:border-l lg:border-white/12 lg:pl-10">
            {/* Titre « NAVIGATION » en Poppins SemiBold 22 px, majuscules */}
            <h4 className="font-poppins font-semibold text-[20px] sm:text-[22px] tracking-[0.04em] uppercase text-white">
              Navigation
            </h4>
            {/* Trait orange de 52 px sur 4 px dessous */}
            <div className="w-[52px] h-1 bg-[#FF6A13] rounded-full mt-3 mb-6" aria-hidden="true" />

            {/* 5 liens en lignes pleine largeur */}
            <nav className="flex flex-col" aria-label="Navigation pied de page">
              {[
                { label: 'Accueil', tab: 'accueil' as PageTab },
                { label: 'À propos', tab: 'a-propos' as PageTab },
                { label: 'Nos services', tab: 'services' as PageTab },
                { label: 'Contact', tab: 'contact' as PageTab }
              ].map((item) => (
                <button
                  key={item.tab}
                  onClick={() => handleNavClick(item.tab)}
                  className="group flex items-center justify-between h-[52px] border-b border-white/12 text-left font-sans font-normal text-[17px] text-white hover:text-[#FF6A13] transition-colors cursor-pointer focus:outline-none focus:text-[#FF6A13]"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-[#FF6A13] group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </nav>
          </div>

          {/* ========================================================
              COLONNE 3 : COORDONNÉES
              ======================================================== */}
          <div data-reveal="up" data-reveal-delay="300" className="lg:col-span-4 lg:border-l lg:border-white/12 lg:pl-10 flex flex-col justify-between">
            <div>
              {/* Titre « COORDONNÉES » avec trait orange */}
              <h4 className="font-poppins font-semibold text-[20px] sm:text-[22px] tracking-[0.04em] uppercase text-white">
                Coordonnées
              </h4>
              <div className="w-[52px] h-1 bg-[#FF6A13] rounded-full mt-3 mb-6" aria-hidden="true" />

              {/* 3 blocs coordonnées */}
              <div className="space-y-5">
                {/* 1. Téléphone */}
                <div className="flex items-center gap-3.5 group">
                  <div className="w-[54px] h-[54px] rounded-full bg-[#0B2A5B] border border-white/15 flex items-center justify-center shrink-0 group-hover:border-[#FF6A13] transition-colors">
                    <Phone className="w-6 h-6 text-[#FF6A13]" />
                  </div>
                  <div>
                    <span className="block font-sans text-[13px] text-white/70">Téléphone</span>
                    <a
                      href="tel:+242065257442"
                      className="font-poppins font-semibold text-[18px] text-white hover:text-[#FF6A13] transition-colors tabular-nums"
                    >
                      +242 06 525 7442
                    </a>
                  </div>
                </div>

                {/* 2. WhatsApp */}
                <div className="flex items-center gap-3.5 group">
                  <div className="w-[54px] h-[54px] rounded-full bg-[#0B2A5B] border border-white/15 flex items-center justify-center shrink-0 group-hover:border-[#3DDC84] transition-colors">
                    <i className="fa-brands fa-whatsapp text-[26px] text-[#3DDC84] leading-none" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block font-sans text-[13px] text-white/70">WhatsApp</span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-poppins font-semibold text-[17px] text-[#3DDC84] hover:underline"
                    >
                      (+242 06 525 7442)
                    </a>
                  </div>
                </div>

                {/* 3. Zone d'intervention */}
                <div className="flex items-center gap-3.5 group">
                  <div className="w-[54px] h-[54px] rounded-full bg-[#0B2A5B] border border-white/15 flex items-center justify-center shrink-0 group-hover:border-[#FF6A13] transition-colors">
                    <MapPin className="w-6 h-6 text-[#FF6A13]" />
                  </div>
                  <div>
                    <span className="block font-sans text-[13px] text-white/70">Zone d'intervention</span>
                    <span className="font-poppins font-semibold text-[16px] text-white leading-snug">
                      Pointe-Noire et zones desservies
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bouton WhatsApp en bas de colonne 4 */}
            <div className="mt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 h-[52px] px-6 rounded-full bg-gradient-to-r from-[#FF6A13] to-[#FF8A2B] hover:from-[#E85D0D] hover:to-[#FF6A13] text-white font-poppins font-semibold text-[15px] shadow-[0_8px_20px_rgba(255,106,19,0.35)] transition-all transform-gpu hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-[20px] text-white leading-none" aria-hidden="true" />
                <span>Nous contacter sur WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* ========================================================
            BARRE INFÉRIEURE : Mentions légales & Retour en haut
            ======================================================== */}
        <div className="border-t border-white/12 py-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/75 font-sans text-[14px]">
          
          {/* Copyright */}
          <p>© {new Date().getFullYear()} KIMAZU Transport. Tous droits réservés.</p>

          {/* Liens légaux & Bouton Retour en haut */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModalOpen(true)}
              className="hover:text-white transition-colors cursor-pointer py-1 focus:outline-none focus:underline"
            >
              Mentions légales
            </button>
            <span className="text-white/30" aria-hidden="true">·</span>
            <button
              onClick={() => setPrivacyModalOpen(true)}
              className="hover:text-white transition-colors cursor-pointer py-1 focus:outline-none focus:underline"
            >
              Politique de confidentialité
            </button>
            <span className="text-white/30" aria-hidden="true">·</span>
            
            {/* Bouton Retour en haut */}
            <button
              onClick={scrollToTop}
              className="w-[46px] h-[46px] rounded-xl bg-[#0B2A5B] hover:bg-[#FF6A13] text-white border border-white/15 flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF6A13]"
              aria-label="Retour en haut de page"
              title="Retour en haut"
            >
              <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>

        </div>

      </div>

      {/* Modal Mentions légales */}
      {legalModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200"
        >
          <div className="bg-white text-[#3F5675] rounded-[24px] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto border border-[#E6ECF5]">
            <button
              onClick={() => setLegalModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-[#7F90A8] hover:text-[#0B2A5B] rounded-full hover:bg-slate-100 transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 id="legal-modal-title" className="font-poppins font-bold text-2xl text-[#071B3D] mb-4">
              Mentions légales
            </h3>
            <div className="space-y-4 font-sans text-[15px] leading-relaxed text-[#3F5675]">
              <p>
                <strong className="text-[#071B3D]">Éditeur du site :</strong> KIMAZU Transport<br />
                <strong className="text-[#071B3D]">Siège social :</strong> Pointe-Noire, République du Congo<br />
                <strong className="text-[#071B3D]">Contact téléphonique :</strong> +242 06 525 7442<br />
                <strong className="text-[#071B3D]">Activité :</strong> Gestion de flottes de taxis, accompagnement des investisseurs et propriétaires de véhicules de transport à Pointe-Noire.
              </p>
              <p>
                <strong className="text-[#071B3D]">Propriété intellectuelle :</strong> L’ensemble des éléments visuels, textuels, graphismes et logotypes figurant sur ce site sont la propriété exclusive de KIMAZU Transport. Toute reproduction est interdite sans autorisation préalable.
              </p>
              <p>
                <strong className="text-[#071B3D]">Hébergement :</strong> Infrastructure Cloud hautement sécurisée conforme aux normes de disponibilité et de confidentialité.
              </p>
            </div>
            <div className="mt-8 text-right">
              <button
                onClick={() => setLegalModalOpen(false)}
                className="px-6 py-2.5 bg-[#0B2A5B] hover:bg-[#071B3D] text-white rounded-full font-poppins font-semibold text-sm transition-colors cursor-pointer min-h-[44px]"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Politique de confidentialité */}
      {privacyModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200"
        >
          <div className="bg-white text-[#3F5675] rounded-[24px] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto border border-[#E6ECF5]">
            <button
              onClick={() => setPrivacyModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-[#7F90A8] hover:text-[#0B2A5B] rounded-full hover:bg-slate-100 transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 id="privacy-modal-title" className="font-poppins font-bold text-2xl text-[#071B3D] mb-4">
              Politique de confidentialité
            </h3>
            <div className="space-y-4 font-sans text-[15px] leading-relaxed text-[#3F5675]">
              <p>
                Les données transmises lors de vos échanges (téléphone, WhatsApp ou formulaires) sont exclusivement utilisées pour répondre à votre demande et faciliter nos échanges professionnels avec KIMAZU Transport.
              </p>
              <p>
                Vos informations ne sont en aucun cas vendues, cédées ou transmises à des tiers sans votre accord explicite. Conformément aux bonnes pratiques, vous pouvez demander la mise à jour ou suppression de vos données en contactant notre service client au +242 06 525 7442.
              </p>
            </div>
            <div className="mt-8 text-right">
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="px-6 py-2.5 bg-[#0B2A5B] hover:bg-[#071B3D] text-white rounded-full font-poppins font-semibold text-sm transition-colors cursor-pointer min-h-[44px]"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
};
