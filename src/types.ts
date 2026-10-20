export type PageTab = 'accueil' | 'a-propos' | 'services' | 'conseils' | 'contact';

export type ServiceId = 'gestion-de-taxis' | 'accompagnement-proprietaires' | 'formation' | 'conseil-et-rentabilite';

export interface ServiceItem {
  id: ServiceId;
  title: string;
  shortDesc: string;
  fullDesc: string;
  bullets: string[];
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  serviceInterest: string;
  message: string;
  email?: string;
  vehicleCount?: string;
  honeypot?: string;
}

export interface KpiMetric {
  value: string;
  label: string;
  detail: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  date?: string;
}
