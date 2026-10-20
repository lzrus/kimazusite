import React from 'react';
import { VALIDATED_TESTIMONIALS } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  // Masquer entièrement si aucun témoignage réel autorisé par écrit n'est disponible
  if (!VALIDATED_TESTIMONIALS || VALIDATED_TESTIMONIALS.length === 0) {
    return null;
  }

  return (
    <section id="temoignages" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-reveal="up" className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-900">Témoignages</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALIDATED_TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              data-reveal="up"
              data-reveal-delay={(idx + 1) * 150}
              className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200"
            >
              <p className="text-sm text-slate-700 italic mb-4">
                « {t.quote} »
              </p>
              <p className="font-bold text-sm text-slate-900">{t.name}</p>
              <p className="text-xs text-slate-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
