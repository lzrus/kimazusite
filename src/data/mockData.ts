import { ServiceItem, KpiMetric, TestimonialItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'gestion-de-taxis',
    title: 'Gestion de taxis',
    shortDesc: 'Prise en charge de l’exploitation quotidienne de votre véhicule pour assurer des rentrées régulières.',
    fullDesc: 'Nous assurons la gestion opérationnelle de votre taxi à Pointe-Noire : coordination du versement journalier, suivi technique courant et tenue à jour des obligations administratives.',
    bullets: [
      'Coordination et suivi régulier des versements',
      'Suivi de l’entretien mécanique périodique',
      'Tenue du carnet de bord et des documents de bord'
    ]
  },
  {
    id: 'accompagnement-proprietaires',
    title: 'Accompagnement des propriétaires',
    shortDesc: 'Conseils pratiques et outils de suivi pour les propriétaires qui gèrent directement leur véhicule.',
    fullDesc: 'Vous conservez la gestion directe de votre véhicule tout en profitant de conseils méthodologiques pour cadrer l’activité et prévenir les litiges opérationnels.',
    bullets: [
      'Conseils pour structurer la relation avec le chauffeur',
      'Mise en place d’outils simples de suivi des recettes',
      'Recommandations pour la maintenance préventive'
    ]
  },
  {
    id: 'formation',
    title: 'Formation',
    shortDesc: 'Formation pratique des propriétaires à la gestion de taxis et à la rentabilité du business de transport.',
    fullDesc: 'Nous transmettons aux propriétaires et investisseurs les méthodes clés pour piloter leur flotte, cadrer leurs chauffeurs, maîtriser les dépenses et pérenniser leur business de transport.',
    bullets: [
      'Gestion financière et suivi des versements journaliers',
      'Sélection, encadrement et contrats des chauffeurs',
      'Anticipation de la maintenance et maîtrise des coûts'
    ]
  }
];

export const METHOD_STEPS = [
  {
    step: '01',
    title: 'Diagnostic du véhicule',
    description: 'Évaluation technique et administrative de l’état du véhicule avant toute mise en circulation.'
  },
  {
    step: '02',
    title: 'Accord clair sur les engagements',
    description: 'Définition concertée des modalités de versement, des charges et des règles d’exploitation.'
  },
  {
    step: '03',
    title: 'Suivi régulier',
    description: 'Contrôle périodique de l’état mécanique et point d’étape régulier avec le propriétaire.'
  }
];

export const VALUES_DATA = [
  {
    title: 'Fiabilité',
    description: 'Une gestion rigoureuse et des points réguliers pour sécuriser votre activité.'
  },
  {
    title: 'Expertise',
    description: 'Une connaissance pratique des réalités de circulation et d’entretien à Pointe-Noire.'
  },
  {
    title: 'Proximité',
    description: 'Une équipe accessible directement à Pointe-Noire pour répondre à vos questions.'
  }
];

/**
 * Données réelles validées uniquement.
 * Laissées vides tant que l'entreprise n'a pas validé les chiffres et recueilli les autorisations écrites.
 * Le composant public ne s'affiche que si le tableau contient des données validées.
 */
export const VALIDATED_KPIS: KpiMetric[] = [];

export const VALIDATED_TESTIMONIALS: TestimonialItem[] = [];
