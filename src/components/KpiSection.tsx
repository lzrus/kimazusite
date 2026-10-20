import React from 'react';
import { VALIDATED_KPIS } from '../data/mockData';

export const KpiSection: React.FC = () => {
  // Masquer entièrement si aucune donnée réelle validée n'est fournie par l'entreprise
  if (!VALIDATED_KPIS || VALIDATED_KPIS.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-[#0B132B] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-reveal="up" className="text-center mb-10">
          <h2 className="text-2xl font-bold text-white">Chiffres clés</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALIDATED_KPIS.map((kpi, idx) => (
            <div
              key={idx}
              data-reveal="up"
              data-reveal-delay={(idx + 1) * 120}
              className="bg-[#0F172A] p-6 rounded-2xl border border-slate-800 text-center"
            >
              <div className="text-3xl font-extrabold text-orange-500 font-mono tabular-nums mb-2">
                {kpi.value}
              </div>
              <h3 className="text-sm font-bold text-white mb-1">
                {kpi.label}
              </h3>
              <p className="text-xs text-slate-300">
                {kpi.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
