'use client';

import { useReveal } from '@/hooks/use-reveal';
import {
  UserCheck,
  Cctv,
  ShieldAlert,
  Truck,
  Plane,
  Database,
  ArrowUpRight,
} from 'lucide-react';

const services = [
  {
    id: 'proguard',
    icon: UserCheck,
    brand: 'ProGuard',
    title: 'Man Guarding',
    tagline: 'Professional manned security for every environment',
    description:
      'Security for government facilities, businesses, special operations and residences — delivered by carefully recruited and trained guards.',
    features: [
      'Government, business & residential coverage',
      'Fire fighting, first aid & HSE training',
      'Conflict management & physical fitness',
      'Patrol routines & rapid response',
      '24/7 control rooms & provincial coverage',
    ],
  },
  {
    id: 'protech',
    icon: Cctv,
    brand: 'ProTech',
    title: 'Intelligent Security Systems',
    tagline: 'Technology-driven protection and monitoring',
    description:
      'Integrated electronic security solutions designed, installed and maintained for critical infrastructure and commercial facilities.',
    features: [
      'Access control systems',
      'Intrusion control systems',
      'Video surveillance systems',
      'Fire detection & alarm systems',
      'Oil, mining, telecom, ports & government',
    ],
  },
  {
    id: 'prosecure',
    icon: ShieldAlert,
    brand: 'ProSecure',
    title: 'Special Security Services',
    tagline: 'High-risk operations and executive protection',
    description:
      'Specialist security for VIPs, high-value assets, events and emergency situations requiring discretion and precision.',
    features: [
      'VIP chauffeur, guarding & convoy services',
      'Cash and valuables in transit',
      'Event security management',
      'Emergency & medical evacuation support',
      'Security training & inductions',
    ],
  },
  {
    id: 'prologistics',
    icon: Truck,
    brand: 'ProLogistics',
    title: 'Logistics & Support Services',
    tagline: 'End-to-end operational and facility support',
    description:
      'Comprehensive logistics planning and support services to keep your operations running smoothly across Sierra Leone.',
    features: [
      'Operations & logistics planning',
      'Machinery & equipment rental',
      'Warehousing & property rentals',
      'Furniture supply & installation',
      'Power, fuel & cleaning services',
    ],
  },
  {
    id: 'protravel',
    icon: Plane,
    brand: 'ProTravel',
    title: 'Travel & Facilitation',
    tagline: 'Seamless travel and customs support',
    description:
      'Full-service travel facilitation for corporate clients, expatriates and visitors to Sierra Leone.',
    features: [
      'Visa facilitation',
      'Airport meet & greet',
      'Pick-up, drop-off & hotel reservations',
      'Car rental with or without chauffeurs',
      'Air & sea shipment clearing and forwarding',
    ],
  },
  {
    id: 'prodata',
    icon: Database,
    brand: 'ProData',
    title: 'Data & Archiving',
    tagline: 'Secure physical and digital information management',
    description:
      'Professional data collection, storage and archiving with protection from physical and cyber threats.',
    features: [
      'Document pickup & data collection',
      'Physical & digital archiving',
      'Data access systems',
      'Local & offshore server uploads',
      'Protection from physical & cyber threats',
    ],
  },
];

export default function Services() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="services"
      className="relative py-20 sm:py-24 lg:py-32 bg-navy-950 overflow-hidden"
    >
      <div className="absolute inset-0 bg-navy-radial" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--gold-400)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold-400)) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          ref={ref}
          className={`reveal text-center max-w-3xl mx-auto mb-14 sm:mb-16 ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="gold-divider-center" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              Our Services
            </span>
            <div className="gold-divider-center" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
            Six Integrated Divisions for
            <span className="text-gold-gradient"> Complete Protection</span>
          </h2>
          <p className="mt-6 text-base text-white/60 leading-relaxed">
            From frontline guarding to intelligent systems, logistics, travel
            and data — Protec delivers a full spectrum of professional services
            tailored to your organisation&apos;s needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 mb-16 sm:mb-20">
          {services.map((service, i) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="group relative rounded-2xl border border-navy-700 bg-navy-900/60 backdrop-blur-sm p-6 sm:p-8 card-hover hover:border-gold-500/40 hover:bg-navy-900 overflow-hidden"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/0 group-hover:bg-gold-500/5 rounded-full blur-3xl transition-all duration-500" />

              <div className="relative flex items-start justify-between gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-gold shrink-0">
                  <service.icon className="h-7 w-7 text-navy-950" strokeWidth={2} />
                </div>
                <span className="font-display text-xs font-bold uppercase tracking-wider text-gold-400/80">
                  {service.brand}
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl font-bold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed line-clamp-2">
                {service.description}
              </p>

              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400 group-hover:text-gold-300 transition-colors">
                View details
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-500 to-gold-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
          ))}
        </div>

        <div className="space-y-6 sm:space-y-8">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-28 rounded-2xl border border-navy-700 bg-navy-900/40 overflow-hidden"
            >
              <div className="grid lg:grid-cols-12 gap-0">
                <div className="lg:col-span-4 bg-navy-900/80 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-navy-700">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600">
                      <service.icon className="h-6 w-6 text-navy-950" strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-gold-400">
                        {service.brand}
                      </div>
                      <h3 className="font-display text-xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gold-400/80 italic">
                    {service.tagline}
                  </p>
                </div>
                <div className="lg:col-span-8 p-6 sm:p-8">
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-white/80"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    Request this service
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
              {i < services.length - 1 && (
                <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
