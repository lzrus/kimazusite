/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageTab } from './types';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { MethodSection } from './components/MethodSection';
import { KpiSection } from './components/KpiSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [currentTab, setCurrentTab] = useState<PageTab>('accueil');

  // Activate scroll animations across all sections on the page
  useScrollReveal();

  // Scroll spy to highlight active nav tab while user scrolls
  React.useEffect(() => {
    const sections: PageTab[] = ['accueil', 'a-propos', 'services', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 130;

      if (window.scrollY < 200) {
        setCurrentTab('accueil');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setCurrentTab(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectTab = (tab: PageTab) => {
    setCurrentTab(tab);
    if (tab === 'accueil') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(tab);
    if (el) {
      const headerOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToServices = () => {
    handleSelectTab('services');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 scroll-smooth">
      
      {/* 1. Header fixe avec onglets reliés aux sections */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
      />

      <main className="flex-grow">
        {/* 1. Hero (Accueil) */}
        <Hero
          onSelectTab={handleSelectTab}
          onScrollToServices={scrollToServices}
        />

        {/* 2. À propos (Présentation, 3 valeurs, mission) */}
        <AboutSection />

        {/* 3. Services (3 cartes de prestations) */}
        <ServicesSection />

        {/* 4. Notre méthode (3 étapes avec photos & badges) */}
        <MethodSection />

        {/* 5. Chiffres clés et Témoignages */}
        <KpiSection />
        <TestimonialsSection />

        {/* 6. Contact (« Parlons de votre projet ») */}
        <ContactSection />
      </main>

      {/* 9. Footer avec navigation synchronisée */}
      <Footer onSelectTab={handleSelectTab} />

      {/* Bouton WhatsApp Flottant */}
      <FloatingWhatsApp />

    </div>
  );
}
