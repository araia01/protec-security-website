'use client';

import { useReveal } from '@/hooks/use-reveal';
import {
  Fuel,
  Factory,
  Radio,
  Anchor,
  Building2,
  HeartHandshake,
  Briefcase,
  Home,
} from 'lucide-react';

const industries = [
  {
    icon: Fuel,
    name: 'Oil & Mining',
    description:
      'Asset protection, access control and specialist security for oil, gas and mining operations.',
  },
  {
    icon: Radio,
    name: 'Telecom',
    description:
      'Site security and infrastructure protection for telecom providers and network operators.',
  },
  {
    icon: Anchor,
    name: 'Ports & Maritime',
    description:
      'Terminal security, cargo protection and logistics support for port and shipping operations.',
  },
  {
    icon: Building2,
    name: 'Government',
    description:
      'Manned guarding and intelligent systems for government facilities and special operations.',
  },
  {
    icon: HeartHandshake,
    name: 'NGOs & Development',
    description:
      'Professional security and logistics for humanitarian and development organisations.',
  },
  {
    icon: Briefcase,
    name: 'Commercial Institutions',
    description:
      'Integrated security and support services for banks, hotels, factories and corporate offices.',
  },
  {
    icon: Factory,
    name: 'Industrial & Manufacturing',
    description:
      'Perimeter protection, patrol routines and HSE-compliant security for industrial sites.',
  },
  {
    icon: Home,
    name: 'Residences & Estates',
    description:
      'Residential guarding, estate security and VIP protection for private clients.',
  },
];

export default function Industries() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="industries"
      className="relative py-20 sm:py-24 lg:py-32 bg-navy-50 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal text-center max-w-2xl mx-auto mb-14 sm:mb-16 ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="gold-divider-center" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              Industries We Serve
            </span>
            <div className="gold-divider-center" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight text-balance">
            Sector Expertise Across
            <span className="text-gold-600"> Sierra Leone</span>
          </h2>
          <p className="mt-6 text-base text-navy-600 leading-relaxed">
            Protec delivers tailored security and logistics solutions for oil,
            mining, telecom, ports, government, NGOs, commercial institutions
            and private residences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group relative rounded-2xl border border-navy-100 bg-white p-6 sm:p-7 card-hover hover:shadow-navy hover:border-gold-500/30 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 to-gold-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 group-hover:bg-gold-500 transition-colors duration-300">
                <industry.icon className="h-6 w-6 text-gold-400 group-hover:text-navy-950 transition-colors duration-300" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-navy-950">
                {industry.name}
              </h3>
              <p className="mt-2 text-sm text-navy-600 leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
