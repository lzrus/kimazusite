import React, { useState } from 'react';

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  vehicleCount: string;
  serviceInterest: string;
  message: string;
  honeypot: string; // Anti-spam hidden field
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  serviceInterest?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    vehicleCount: 'Non précisé',
    serviceInterest: 'Gestion de taxis',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const whatsappDirectUrl =
    'https://wa.me/242065257442?text=Bonjour%20KIMAZU%20Transport%2C%20je%20souhaite%20des%20informations%20sur%20vos%20services.';

  // Validation fonctionnelle stricte
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Nom : au moins 2 caractères
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Le nom complet est obligatoire.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Veuillez saisir au moins 2 caractères.';
    }

    // Téléphone : chiffres, espaces, + ; 8 à 15 chiffres
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Le numéro de téléphone est obligatoire.';
    } else if (cleanPhone.length < 8 || cleanPhone.length > 15) {
      newErrors.phone = 'Numéro invalide (8 à 15 chiffres requis, ex: +242 06 525 7442).';
    }

    // Email : facultatif mais valide si renseigné
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Veuillez saisir une adresse email valide.';
      }
    }

    // Service concerné : obligatoire
    if (!formData.serviceInterest.trim()) {
      newErrors.serviceInterest = 'Veuillez sélectionner un service.';
    }

    // Message : au moins 10 caractères
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est obligatoire.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Veuillez détailler votre demande (au moins 10 caractères).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Effacer l'erreur en direct lors de la saisie
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Protection anti-spam par pot de miel (honeypot)
    if (formData.honeypot) {
      // Un robot a rempli ce champ invisible
      setSubmitStatus('success');
      return;
    }

    // 2. Limitation du débit (au moins 10s entre 2 envois)
    const now = Date.now();
    if (now - lastSubmitTime < 10000 && lastSubmitTime !== 0) {
      alert('Veuillez patienter quelques instants avant de renvoyer une demande.');
      return;
    }

    // 3. Validation
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulation d'envoi vers l'endpoint configuré
    setTimeout(() => {
      setIsSubmitting(false);
      setLastSubmitTime(Date.now());
      setSubmitStatus('success');
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      vehicleCount: 'Non précisé',
      serviceInterest: 'Gestion de taxis',
      message: '',
      honeypot: '',
    });
    setErrors({});
    setSubmitStatus('idle');
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-section-title"
      className="relative bg-[#F7F9FC] py-20 md:py-24 overflow-hidden border-b border-slate-200"
    >
      {/* 1. PHOTO DE FOND : Décor Pointe-Noire très décoloré (voile blanc cassé 90%) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/Blue-and-White Taxi at Sunset.png"
          alt=""
          className="w-full h-full object-cover object-center filter grayscale opacity-20"
          loading="lazy"
          aria-hidden="true"
        />
        {/* Voile blanc cassé 88-92% */}
        <div className="absolute inset-0 bg-[#F7F9FC]/90" aria-hidden="true" />
      </div>

      {/* 2. DÉCORS DANS LES COINS */}
      {/* Coin haut gauche : bloc bleu nuit avec bande diagonale orange */}
      <div
        className="absolute -top-10 -left-12 w-52 h-44 bg-[#071B3D] rounded-[32px] pointer-events-none z-0 overflow-hidden opacity-90 hidden sm:block"
        aria-hidden="true"
      >
        <div
          className="absolute bottom-0 right-0 w-20 h-20"
          style={{
            background: 'linear-gradient(135deg, transparent 50%, #FF6A13 50%)',
          }}
        />
      </div>

      {/* Coin bas droite : même motif inversé */}
      <div
        className="absolute -bottom-10 -right-12 w-52 h-44 bg-[#071B3D] rounded-[32px] pointer-events-none z-0 overflow-hidden opacity-90 hidden sm:block"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 left-0 w-20 h-20"
          style={{
            background: 'linear-gradient(315deg, transparent 50%, #FF6A13 50%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
             EN-TÊTE CENTRÉ
             ======================================================== */}
        <header data-reveal="up" className="max-w-[820px] mx-auto text-center flex flex-col items-center mb-14 md:mb-16">
          {/* 1. Trait orange de 100 px sur 5 px, coins arrondis */}
          <div
            className="w-[100px] h-[5px] bg-[#FF6A13] rounded-full mb-5"
            aria-hidden="true"
          />

          {/* 2. Titre H2 « Parlons de votre projet » Poppins Bold 700 */}
          <h2
            id="contact-section-title"
            className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[52px] text-[#071B3D] leading-[1.15] tracking-tight mb-4"
          >
            Parlons de votre projet
          </h2>

          {/* 3. Sous-titre en Inter Regular 18 px, couleur --text */}
          <p className="font-sans font-normal text-[16px] sm:text-[18px] text-[#3F5675] leading-[1.6] max-w-[680px]">
            Contactez notre équipe pour échanger sur vos besoins et obtenir des informations détaillées.
          </p>
        </header>

        {/* ========================================================
             GRILLE 2 COLONNES (Carte d'informations ~43% / Formulaire ~57%)
             ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-stretch">
          
          {/* --------------------------------------------------------
               BLOC GAUCHE : CARTE D'INFORMATIONS (~43% = 5 cols lg)
               -------------------------------------------------------- */}
          <div data-reveal="left" data-reveal-delay="100" className="lg:col-span-5 bg-[#0B2A5B] rounded-[24px] p-6 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden shadow-[0_20px_48px_rgba(11,42,91,0.12)]">
            
            {/* Motif de route sinueuse en filigrane (courbes avec tirets, opacité 8 à 10 %) en bas à droite */}
            <svg
              className="absolute -bottom-6 -right-6 w-48 h-48 pointer-events-none opacity-[0.09] z-0 fill-none text-white"
              viewBox="0 0 200 200"
              aria-hidden="true"
            >
              <path
                d="M20 180 C80 180, 70 80, 140 80 C180 80, 190 30, 200 10"
                stroke="currentColor"
                strokeWidth="28"
                strokeLinecap="round"
              />
              <path
                d="M20 180 C80 180, 70 80, 140 80 C180 80, 190 30, 200 10"
                stroke="#FF6A13"
                strokeWidth="4"
                strokeDasharray="8 8"
                strokeLinecap="round"
              />
            </svg>

            <div className="relative z-10 flex flex-col">
              
              {/* Logo KIMAZU Transport (version claire) en haut */}
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white px-3 py-1.5 rounded-lg shadow-sm inline-flex items-center">
                  <img
                    src="/logo12.png"
                    alt="KIMAZU Transport"
                    className="h-8 w-auto object-contain"
                  />
                </div>
              </div>

              {/* Slogan en Inter Regular 18 px, blanc */}
              <p className="font-sans font-normal text-base sm:text-[18px] text-white leading-[1.5] max-w-[340px]">
                Votre partenaire pour une mobilité plus rentable et durable.
              </p>

              {/* Trait orange de 60 px sur 4 px */}
              <div className="w-[60px] h-1 bg-[#FF6A13] rounded-full mt-4 mb-8" aria-hidden="true" />

              {/* Trois lignes d'information, espacées de 28 px */}
              <div className="space-y-7">
                
                {/* 1. Téléphone */}
                <div className="flex items-center gap-4 group">
                  <div
                    className="w-[60px] h-[60px] rounded-full border border-white/40 bg-transparent flex items-center justify-center shrink-0 transition-colors group-hover:border-[#FF6A13]"
                    aria-hidden="true"
                  >
                    {/* Icône téléphone orange linéaire de 28 px */}
                    <svg
                      className="w-7 h-7 text-[#FF6A13] stroke-current fill-none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-[14px] text-white/75 leading-tight mb-1">
                      Téléphone
                    </span>
                    <a
                      href="tel:+242065257442"
                      className="font-poppins font-semibold text-lg sm:text-[22px] text-white hover:text-orange-300 transition-colors tracking-tight focus:outline-none focus:underline"
                    >
                      +242 06 525 7442
                    </a>
                  </div>
                </div>

                {/* 2. WhatsApp */}
                <div className="flex items-center gap-4 group">
                  <div
                    className="w-[60px] h-[60px] rounded-full border border-white/40 bg-transparent flex items-center justify-center shrink-0 transition-colors group-hover:border-[#25D366]"
                    aria-hidden="true"
                  >
                    {/* Logo WhatsApp Font Awesome */}
                    <i className="fa-brands fa-whatsapp text-[28px] text-[#25D366] leading-none" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-[14px] text-white/75 leading-tight mb-1">
                      WhatsApp
                    </span>
                    <a
                      href="https://wa.me/242065257442"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-poppins font-semibold text-lg sm:text-[22px] text-[#3DDC84] hover:underline transition-colors tracking-tight focus:outline-none"
                    >
                      Échanger sur WhatsApp
                    </a>
                    <span className="font-sans font-medium text-[16px] sm:text-[18px] text-[#3DDC84] mt-0.5">
                      (+242 06 525 7442)
                    </span>
                  </div>
                </div>

                {/* 3. Zone d'intervention */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-[60px] h-[60px] rounded-full border border-white/40 bg-transparent flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    {/* Icône repère de localisation blanche de 28 px */}
                    <svg
                      className="w-7 h-7 text-white stroke-current fill-none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-[14px] text-white/75 leading-tight mb-1">
                      Zone d'intervention
                    </span>
                    <span className="font-poppins font-semibold text-base sm:text-[18px] text-white tracking-tight">
                      Pointe-Noire et zones desservies
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Bouton principal en bas de carte d'informations : pleine largeur, hauteur 60 px, pilule */}
            <div className="relative z-10 pt-10 mt-auto">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-[60px] rounded-full bg-gradient-to-r from-[#FF6A13] to-[#FF8A2B] hover:from-[#E85D0D] hover:to-[#FF7A1A] text-white font-poppins font-semibold text-[16px] sm:text-[17px] inline-flex items-center justify-center gap-3 px-6 transition-all duration-200 shadow-[0_8px_20px_rgba(255,106,19,0.35)] hover:shadow-[0_12px_28px_rgba(255,106,19,0.45)] hover:-translate-y-0.5 min-h-[44px]"
              >
                {/* Logo WhatsApp Font Awesome */}
                <i className="fa-brands fa-whatsapp text-[22px] text-white shrink-0 leading-none" aria-hidden="true" />
                <span>Nous contacter sur WhatsApp</span>
                <span className="text-xl leading-none font-bold" aria-hidden="true">→</span>
              </a>
            </div>

          </div>

          {/* --------------------------------------------------------
               BLOC DROIT : FORMULAIRE (~57% = 7 cols lg)
               -------------------------------------------------------- */}
          <div data-reveal="right" data-reveal-delay="200" className="lg:col-span-7 bg-white/95 backdrop-blur-xs rounded-[24px] border border-[#E6ECF5] p-6 sm:p-10 shadow-[0_20px_48px_rgba(11,42,91,0.10)] flex flex-col justify-between">
            
            {submitStatus === 'success' ? (
              <div
                className="py-10 px-4 text-center flex flex-col items-center justify-center space-y-5 my-auto"
                role="status"
                aria-live="polite"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <svg className="w-9 h-9 stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-poppins font-bold text-2xl text-[#071B3D]">
                  Merci, votre message a bien été envoyé.
                </h3>
                <p className="font-sans text-[16px] text-[#3F5675] max-w-md leading-relaxed">
                  Nous vous répondrons dans les meilleurs délais. Pour une demande urgente, n'hésitez pas à nous joindre directement sur WhatsApp.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-center">
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-poppins font-semibold text-sm transition-colors shadow-sm min-h-[44px]"
                  >
                    <i className="fa-brands fa-whatsapp text-lg leading-none" aria-hidden="true" />
                    <span>Échanger sur WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-3 rounded-full border border-slate-300 hover:bg-slate-50 text-[#071B3D] font-poppins font-semibold text-sm transition-colors cursor-pointer min-h-[44px]"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Pot de miel anti-spam (invisible aux humains) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website-honeypot">Ne pas remplir ce champ si vous êtes un humain</label>
                  <input
                    type="text"
                    id="website-honeypot"
                    name="honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={handleChange}
                  />
                </div>

                {/* GRILLE INTERNE 2 COLONNES (gap 24px) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* LIGNE 1.1 : Nom complet * */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block font-poppins font-semibold text-[15px] text-[#071B3D] mb-2"
                    >
                      Nom complet <span className="text-[#FF6A13] font-bold" aria-hidden="true">*</span>
                    </label>
                    <div className="relative">
                      {/* Icône personne gris-bleue 22 px à gauche */}
                      <div
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7F90A8] pointer-events-none"
                        aria-hidden="true"
                      >
                        <svg className="w-[22px] h-[22px] stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        autoComplete="name"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Votre nom et prénom"
                        aria-required="true"
                        aria-invalid={errors.fullName ? 'true' : 'false'}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                        className={`w-full h-14 pl-[52px] pr-4 rounded-[12px] bg-[#FBFCFE] font-sans text-[16px] text-[#071B3D] placeholder-[#7F90A8] border transition-all duration-150 focus:outline-none ${
                          errors.fullName
                            ? 'border-[#C62828] focus:border-[#C62828] focus:ring-4 focus:ring-[#C62828]/15'
                            : 'border-[#D9E2EE] focus:border-[#FF6A13] focus:ring-4 focus:ring-[#FF6A13]/15'
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p id="fullName-error" className="mt-1.5 text-xs text-[#C62828] font-sans font-medium">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* LIGNE 1.2 : Téléphone * */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-poppins font-semibold text-[15px] text-[#071B3D] mb-2"
                    >
                      Téléphone <span className="text-[#FF6A13] font-bold" aria-hidden="true">*</span>
                    </label>
                    <div className="relative">
                      {/* Icône téléphone gris-bleue 22 px */}
                      <div
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7F90A8] pointer-events-none"
                        aria-hidden="true"
                      >
                        <svg className="w-[22px] h-[22px] stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <input
                        type="tel"
                        inputMode="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+242 06 525 7442"
                        aria-required="true"
                        aria-invalid={errors.phone ? 'true' : 'false'}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        className={`w-full h-14 pl-[52px] pr-4 rounded-[12px] bg-[#FBFCFE] font-sans text-[16px] text-[#071B3D] placeholder-[#7F90A8] border transition-all duration-150 focus:outline-none ${
                          errors.phone
                            ? 'border-[#C62828] focus:border-[#C62828] focus:ring-4 focus:ring-[#C62828]/15'
                            : 'border-[#D9E2EE] focus:border-[#FF6A13] focus:ring-4 focus:ring-[#FF6A13]/15'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p id="phone-error" className="mt-1.5 text-xs text-[#C62828] font-sans font-medium">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* LIGNE 2.1 : Email (facultatif) */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-poppins font-semibold text-[15px] text-[#071B3D] mb-2"
                    >
                      Email <span className="text-[#3F5675] font-normal text-xs">(facultatif)</span>
                    </label>
                    <div className="relative">
                      {/* Icône enveloppe gris-bleue 22 px */}
                      <div
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7F90A8] pointer-events-none"
                        aria-hidden="true"
                      >
                        <svg className="w-[22px] h-[22px] stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="nom@exemple.com"
                        aria-invalid={errors.email ? 'true' : 'false'}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={`w-full h-14 pl-[52px] pr-4 rounded-[12px] bg-[#FBFCFE] font-sans text-[16px] text-[#071B3D] placeholder-[#7F90A8] border transition-all duration-150 focus:outline-none ${
                          errors.email
                            ? 'border-[#C62828] focus:border-[#C62828] focus:ring-4 focus:ring-[#C62828]/15'
                            : 'border-[#D9E2EE] focus:border-[#FF6A13] focus:ring-4 focus:ring-[#FF6A13]/15'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-[#C62828] font-sans font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* LIGNE 2.2 : Nombre de véhicules (facultatif) */}
                  <div>
                    <label
                      htmlFor="vehicleCount"
                      className="block font-poppins font-semibold text-[15px] text-[#071B3D] mb-2"
                    >
                      Nombre de véhicules <span className="text-[#3F5675] font-normal text-xs">(facultatif)</span>
                    </label>
                    <div className="relative">
                      {/* Icône voiture gris-bleue 22 px */}
                      <div
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7F90A8] pointer-events-none"
                        aria-hidden="true"
                      >
                        <svg className="w-[22px] h-[22px] stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H8c-.7 0-1.3.3-1.8.7C5.3 8.6 4 10 4 10s-2.7.6-4.5 1.1C-.7 11.3 0 12.1 0 13v3c0 .6.4 1 1 1h2" />
                          <circle cx="7" cy="17" r="2" />
                          <circle cx="17" cy="17" r="2" />
                        </svg>
                      </div>
                      <select
                        id="vehicleCount"
                        name="vehicleCount"
                        value={formData.vehicleCount}
                        onChange={handleChange}
                        className="w-full h-14 pl-[52px] pr-10 rounded-[12px] bg-[#FBFCFE] font-sans text-[16px] text-[#071B3D] border border-[#D9E2EE] focus:border-[#FF6A13] focus:ring-4 focus:ring-[#FF6A13]/15 transition-all duration-150 focus:outline-none appearance-none cursor-pointer"
                      >
                        <option value="Non précisé">Non précisé</option>
                        <option value="1">1</option>
                        <option value="2 à 5">2 à 5</option>
                        <option value="6 à 10">6 à 10</option>
                        <option value="Plus de 10">Plus de 10</option>
                      </select>
                      {/* Flèche chevron */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#7F90A8]" aria-hidden="true">
                        <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* LIGNE 3 : Service concerné * (pleine largeur) */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="serviceInterest"
                      className="block font-poppins font-semibold text-[15px] text-[#071B3D] mb-2"
                    >
                      Service concerné <span className="text-[#FF6A13] font-bold" aria-hidden="true">*</span>
                    </label>
                    <div className="relative">
                      {/* Icône document gris-bleue 22 px */}
                      <div
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7F90A8] pointer-events-none"
                        aria-hidden="true"
                      >
                        <svg className="w-[22px] h-[22px] stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10 9 9 9 8 9" />
                        </svg>
                      </div>
                      <select
                        id="serviceInterest"
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={errors.serviceInterest ? 'true' : 'false'}
                        aria-describedby={errors.serviceInterest ? 'serviceInterest-error' : undefined}
                        className={`w-full h-14 pl-[52px] pr-10 rounded-[12px] bg-[#FBFCFE] font-sans text-[16px] text-[#071B3D] border transition-all duration-150 focus:outline-none appearance-none cursor-pointer ${
                          errors.serviceInterest
                            ? 'border-[#C62828] focus:border-[#C62828] focus:ring-4 focus:ring-[#C62828]/15'
                            : 'border-[#D9E2EE] focus:border-[#FF6A13] focus:ring-4 focus:ring-[#FF6A13]/15'
                        }`}
                      >
                        <option value="Gestion de taxis">Gestion de taxis</option>
                        <option value="Accompagnement des propriétaires">Accompagnement des propriétaires</option>
                        <option value="Formation">Formation</option>
                        <option value="Autre demande">Autre demande</option>
                      </select>
                      {/* Flèche chevron */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#7F90A8]" aria-hidden="true">
                        <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                    {errors.serviceInterest && (
                      <p id="serviceInterest-error" className="mt-1.5 text-xs text-[#C62828] font-sans font-medium">
                        {errors.serviceInterest}
                      </p>
                    )}
                  </div>

                  {/* LIGNE 4 : Message * (pleine largeur) */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block font-poppins font-semibold text-[15px] text-[#071B3D] mb-2"
                    >
                      Message <span className="text-[#FF6A13] font-bold" aria-hidden="true">*</span>
                    </label>
                    <div className="relative">
                      {/* Icône bulle gris-bleue 22 px */}
                      <div
                        className="absolute left-4 top-4 text-[#7F90A8] pointer-events-none"
                        aria-hidden="true"
                      >
                        <svg className="w-[22px] h-[22px] stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Précisez votre demande ou vos questions…"
                        aria-required="true"
                        aria-invalid={errors.message ? 'true' : 'false'}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        className={`w-full min-h-[120px] py-3.5 pl-[52px] pr-4 rounded-[12px] bg-[#FBFCFE] font-sans text-[16px] text-[#071B3D] placeholder-[#7F90A8] border transition-all duration-150 focus:outline-none resize-y ${
                          errors.message
                            ? 'border-[#C62828] focus:border-[#C62828] focus:ring-4 focus:ring-[#C62828]/15'
                            : 'border-[#D9E2EE] focus:border-[#FF6A13] focus:ring-4 focus:ring-[#FF6A13]/15'
                        }`}
                      />
                    </div>
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-xs text-[#C62828] font-sans font-medium">
                        {errors.message}
                      </p>
                    )}
                  </div>

                </div>

                {/* Bouton d'envoi : pleine largeur, hauteur 56 px, pilule, fond orange #FF6A13 */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 rounded-full bg-[#FF6A13] hover:bg-[#E85D0D] active:bg-[#CC4F07] text-white font-poppins font-semibold text-[16px] inline-flex items-center justify-center gap-3 px-6 transition-all duration-200 shadow-[0_8px_20px_rgba(255,106,19,0.25)] hover:shadow-[0_12px_24px_rgba(255,106,19,0.35)] hover:-translate-y-0.5 disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer min-h-[44px]"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Envoi en cours…</span>
                      </>
                    ) : (
                      <>
                        {/* Icône avion en papier */}
                        <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                        <span>Envoyer le message</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Mention de confidentialité sous le bouton en Inter 13 px */}
                <p className="font-sans text-[13px] text-[#3F5675] text-center leading-normal pt-1">
                  En envoyant ce formulaire, vous acceptez d'être recontacté(e) par KIMAZU Transport.{' '}
                  <button
                    type="button"
                    onClick={() => setShowPrivacyModal(true)}
                    className="text-[#FF6A13] hover:underline underline-offset-2 font-medium cursor-pointer"
                  >
                    Politique de confidentialité
                  </button>
                </p>

              </form>
            )}

          </div>

        </div>

      </div>

      {/* MODAL POLITIQUE DE CONFIDENTIALITÉ */}
      {showPrivacyModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-modal-title"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <h3 id="privacy-modal-title" className="font-poppins font-bold text-xl text-[#071B3D] mb-4">
              Politique de confidentialité KIMAZU Transport
            </h3>
            <div className="font-sans text-sm text-[#3F5675] space-y-3 leading-relaxed mb-6">
              <p>
                Les informations recueillies via ce formulaire (nom, numéro de téléphone, email, détails de véhicule) sont enregistrées exclusivement pour permettre à l'équipe de KIMAZU Transport de vous contacter et de répondre à votre demande.
              </p>
              <p>
                Vos données sont strictement confidentielles, ne sont jamais cédées ou vendues à des tiers, et sont conservées uniquement pendant la durée nécessaire au traitement de votre dossier à Pointe-Noire.
              </p>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setShowPrivacyModal(false)}
                className="px-5 py-2.5 rounded-xl bg-[#0B2A5B] hover:bg-[#071B3D] text-white font-poppins font-semibold text-sm transition-colors cursor-pointer"
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
