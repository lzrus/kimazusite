import React from 'react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = "https://wa.me/242065257442?text=Bonjour%20KIMAZU%20Transport,%20je%20souhaite%20des%20informations%20sur%20vos%20services.";

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white flex items-center justify-center shadow-lg shadow-emerald-950/20 transition-transform cursor-pointer min-h-[44px] min-w-[44px]"
        aria-label="Contacter KIMAZU Transport sur WhatsApp"
        title="WhatsApp +242 06 525 7442"
      >
        <i className="fa-brands fa-whatsapp text-2xl text-white leading-none" aria-hidden="true" />
      </a>
    </div>
  );
};
