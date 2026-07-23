'use client';

import Image from 'next/image';
import { useReveal } from '@/hooks/use-reveal';
import { Target, Users, Wrench, CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    icon: Users,
    title: 'Recruit & Train the Best',
    text: 'Carefully selected personnel trained in fire fighting, first aid, physical fitness, conflict management and HSE standards.',
  },
  {
    icon: Wrench,
    title: 'Modern Tools & Equipment',
    text: 'State-of-the-art security systems, logistics infrastructure and operational technology for reliable service delivery.',
  },
  {
    icon: Target,
    title: 'Tailored Solutions',
    text: 'Custom-designed security and logistics packages that meet the specific needs of every customer and sector.',
  },
];

const highlights = [
  'Market leader in professional security across Sierra Leone',
  '24/7 control rooms with provincial coverage',
  'Government, corporate, NGO and residential clients',
  'Integrated security, logistics, travel and data services',
];

export default function About() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-full sm:w-1/3 h-full bg-navy-50/50 -z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-divider" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                About Us
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight text-balance">
              A Market Leader in
              <span className="text-gold-600"> Security & Logistics</span>
            </h2>
            <p className="mt-6 text-base text-navy-600 leading-relaxed">
              Protec specialises in providing professional security and logistics
              services. Protec established itself as a market leader in Sierra
              Leone through a rigorous and innovative strategy based on three
              pillars: recruiting and training the best staff, using modern tools
              and equipment, and designing tailored solutions that meet each
              customer&apos;s needs.
            </p>

            <div className="mt-8 rounded-2xl border border-gold-500/20 bg-navy-950 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <Target className="h-5 w-5 text-gold-400" />
                <h3 className="font-display text-lg font-bold text-white">
                  Our Goal
                </h3>
              </div>
              <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                Our aim is to create a secure environment in which organisations
                can operate and deliver. Through vigilant professional staff and
                rigorous control mechanisms, Protec works to ensure the safety of
                personnel, valuables and operations.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-navy-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-navy group">
              <Image
                src="/slideshow/3.jpg"
                alt="Protec security personnel"
                width={800}
                height={520}
                className="w-full h-64 sm:h-[420px] lg:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8">
              <div className="rounded-xl bg-navy-950 px-6 sm:px-8 py-5 sm:py-6 shadow-navy border border-gold-500/20">
                <div className="font-display text-3xl sm:text-4xl font-bold text-gold-400">
                  Protec
                </div>
                <div className="text-sm text-white/70 mt-1">
                  Security, Logistics
                  <br />
                  & Services
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 sm:mt-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 card-hover hover:shadow-navy hover:border-gold-500/30"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-950 group-hover:bg-gold-500 transition-colors duration-300">
                <pillar.icon className="h-7 w-7 text-gold-400 group-hover:text-navy-950 transition-colors duration-300" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-navy-950">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm text-navy-600 leading-relaxed">
                {pillar.text}
              </p>
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
