'use client';

import Image from 'next/image';
import { useReveal } from '@/hooks/use-reveal';
import {
  ShieldCheck,
  Clock,
  Users,
  Radio,
  MapPin,
  BadgeCheck,
} from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: 'Best Recruited & Trained Staff',
    description:
      'Every guard and officer is carefully selected and trained in fire fighting, first aid, physical fitness, conflict management and HSE standards.',
  },
  {
    icon: BadgeCheck,
    title: 'Modern Tools & Equipment',
    description:
      'We deploy state-of-the-art security systems, logistics infrastructure and operational technology for reliable, professional service.',
  },
  {
    icon: ShieldCheck,
    title: 'Tailored Solutions',
    description:
      'Custom-designed packages for government, oil & mining, telecom, ports, NGOs, commercial institutions and residences.',
  },
  {
    icon: Clock,
    title: '24/7 Control Rooms',
    description:
      'Round-the-clock monitoring, patrol routines and rapid response with full provincial coverage across Sierra Leone.',
  },
  {
    icon: Radio,
    title: 'Rigorous Control Mechanisms',
    description:
      'Vigilant professional staff backed by structured reporting, supervision and accountability at every level.',
  },
  {
    icon: MapPin,
    title: 'Proven Market Leadership',
    description:
      'Trusted by leading organisations including Bolloré, IBM, Lukoil, InterGroup Telecom and Sierra Leone Bottling Company.',
  },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="why-choose-us"
      className="relative py-20 sm:py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div
            ref={ref}
            className={`reveal lg:sticky lg:top-28 ${isVisible ? 'is-visible' : ''}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-divider" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                Why Choose Protec
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight text-balance">
              Built on Three Pillars of
              <span className="text-gold-600"> Excellence</span>
            </h2>
            <p className="mt-6 text-base text-navy-600 leading-relaxed">
              Protec&apos;s market leadership in Sierra Leone is founded on
              recruiting and training the best staff, using modern tools and
              equipment, and designing tailored solutions — ensuring the safety
              of personnel, valuables and operations for every client.
            </p>

            <div className="mt-10 relative rounded-2xl overflow-hidden shadow-navy">
              <Image
                src="/slideshow/5.jpg"
                alt="Protec security operations"
                width={600}
                height={288}
                className="w-full h-56 sm:h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-8 w-8 text-gold-400 shrink-0" />
                  <div>
                    <div className="font-display text-lg font-bold text-white">
                      Trusted Protection
                    </div>
                    <div className="text-sm text-white/70">
                      Vigilant staff. Rigorous controls. Proven results.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="group flex gap-4 sm:gap-5 rounded-2xl border border-navy-100 bg-white p-5 sm:p-6 card-hover hover:shadow-navy hover:border-gold-500/30"
              >
                <div className="shrink-0">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-navy-950 group-hover:bg-gold-500 transition-colors duration-300">
                    <reason.icon className="h-6 w-6 sm:h-7 sm:w-7 text-gold-400 group-hover:text-navy-950 transition-colors duration-300" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-navy-950">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm text-navy-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
