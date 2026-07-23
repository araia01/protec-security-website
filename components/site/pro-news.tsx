'use client';

import { useReveal } from '@/hooks/use-reveal';
import { Building2 } from 'lucide-react';

const clients = [
  {
    name: 'Bolloré',
    project: 'Sierra Leone Port Terminal',
    sector: 'Ports & Maritime',
  },
  {
    name: 'InterGroup Telecom',
    project: 'Smart Mobile',
    sector: 'Telecom',
  },
  {
    name: 'IBM',
    project: 'Corporate Security & Support',
    sector: 'Technology',
  },
  {
    name: 'Solar Hotel',
    project: 'Hospitality Security',
    sector: 'Hospitality',
  },
  {
    name: 'Afrigas',
    project: 'Industrial & Logistics Support',
    sector: 'Energy',
  },
  {
    name: 'Lukoil Overseas',
    project: 'Oil & Gas Security',
    sector: 'Oil & Gas',
  },
  {
    name: 'Sierra Leone Bottling Company',
    project: 'Manufacturing Security',
    sector: 'Manufacturing',
  },
  {
    name: 'AusAid',
    project: 'Development Programme Support',
    sector: 'NGO & Development',
  },
];

export default function ProNews() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="pro-news"
      className="relative py-20 sm:py-24 lg:py-32 bg-navy-950 overflow-hidden"
    >
      <div className="absolute inset-0 bg-navy-radial" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          ref={ref}
          className={`reveal text-center max-w-2xl mx-auto mb-14 sm:mb-16 ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="gold-divider-center" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              Pro News
            </span>
            <div className="gold-divider-center" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
            Clients & Projects We
            <span className="text-gold-gradient"> Proudly Serve</span>
          </h2>
          <p className="mt-6 text-base text-white/60 leading-relaxed">
            Protec has built lasting partnerships with leading organisations
            across Sierra Leone — delivering security, logistics and
            professional support they can trust.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group relative rounded-2xl border border-navy-700 bg-navy-900/60 backdrop-blur-sm p-6 card-hover hover:border-gold-500/40 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/0 group-hover:bg-gold-500/5 rounded-full blur-2xl transition-all duration-500" />

              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-500/10 border border-gold-500/20">
                <Building2 className="h-5 w-5 text-gold-400" />
              </div>

              <h3 className="mt-5 font-display text-lg font-bold text-white leading-snug">
                {client.name}
              </h3>
              <p className="mt-2 text-sm text-gold-400/90 font-medium">
                {client.project}
              </p>
              <p className="mt-3 text-xs uppercase tracking-wider text-white/40">
                {client.sector}
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-500 to-gold-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        <div className="mt-14 sm:mt-16 pt-10 border-t border-navy-700">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-white/40 mb-6">
            Trusted by leading organisations across Sierra Leone
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10">
            {clients.map((client) => (
              <span
                key={`marquee-${client.name}`}
                className="font-display text-sm sm:text-base font-semibold text-white/25 hover:text-gold-400 transition-colors"
              >
                {client.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
