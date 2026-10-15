'use client';

import { ShieldCheck, ArrowRight, Phone } from 'lucide-react';

const stats = [
  { value: '24/7', label: 'Control Rooms' },
  { value: '6', label: 'Service Divisions' },
  { value: '100%', label: 'Trained Staff' },
  { value: 'Nationwide', label: 'Coverage' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 protec-network-bg overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 protec-network-grid" />

        <div className="absolute -top-20 -right-32 w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full bg-blue-500/10 blur-3xl protec-network-glow" />

        <div className="absolute bottom-0 -left-24 w-[280px] h-[280px] md:w-[500px] md:h-[500px] rounded-full bg-gold-500/10 blur-3xl protec-network-glow" />

        <svg
          className="absolute inset-0 w-full h-full opacity-70"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#D4A83F" strokeWidth="1" opacity="0.35">
            <path
              className="protec-network-line"
              d="M100 180 L340 260 L580 130 L860 280"
            />
            <path
              className="protec-network-line"
              d="M80 520 L300 400 L550 560 L900 420"
            />
            <path
              className="protec-network-line"
              d="M130 830 L380 720 L650 850 L920 680"
            />
            <path
              className="protec-network-line"
              d="M340 260 L300 400 L380 720"
            />
            <path
              className="protec-network-line"
              d="M580 130 L550 560 L650 850"
            />
            <path
              className="protec-network-line"
              d="M860 280 L900 420 L920 680"
            />
          </g>

          <g fill="#E5B84B">
            {[
              [100, 180],
              [340, 260],
              [580, 130],
              [860, 280],
              [80, 520],
              [300, 400],
              [550, 560],
              [900, 420],
              [130, 830],
              [380, 720],
              [650, 850],
              [920, 680],
            ].map(([cx, cy], index) => (
              <g key={index}>
                <circle
                  cx={cx}
                  cy={cy}
                  r="12"
                  fill="#D4A83F"
                  opacity="0.12"
                  className="protec-network-node"
                  style={{ animationDelay: `${index * 0.3}s` }}
                />
                <circle
                  cx={cx}
                  cy={cy}
                  r="3.5"
                  className="protec-network-node"
                  style={{ animationDelay: `${index * 0.3}s` }}
                />
              </g>
            ))}
          </g>
        </svg>

        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/75 via-navy-950/40 to-transparent" />
      </div>

      <div className="absolute top-28 right-4 sm:right-8 z-10 hidden md:flex flex-col items-end gap-3">
        <div className="flex items-center gap-2 rounded-full border border-gold-500/40 bg-navy-950/60 backdrop-blur-sm px-4 py-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75 animate-pulse-ring" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold-500" />
          </span>
          <span className="text-xs font-medium uppercase tracking-wider text-white/90">
            Operations Active Nationwide
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-20 sm:pt-32">
        <div className="max-w-3xl">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-navy-950/40 backdrop-blur-sm px-4 py-2 mb-6">
            <ShieldCheck className="h-4 w-4 text-gold-400" />
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/80">
              Protec Security, Logistics & Services — Sierra Leone
            </span>
          </div>

          <h1 className="animate-fade-up delay-100 font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] text-white text-balance">
            Security, Logistics and Professional Support{' '}
            <span className="text-gold-gradient">You Can Trust</span>
          </h1>

          <p className="animate-fade-up delay-200 mt-6 text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed">
            From manned guarding and intelligent security systems to logistics,
            travel and data services — Protec delivers tailored solutions built
            on trained personnel, modern equipment, and rigorous control
            mechanisms across Sierra Leone.
          </p>

          <div className="animate-fade-up delay-300 mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-all hover:bg-gold-400 hover:shadow-gold"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-gold-500/50"
            >
              Explore Our Services
            </a>
          </div>

          <div className="animate-fade-up delay-500 mt-14 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-l-2 border-gold-500/50 pl-3 sm:pl-4"
              >
                <div className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="bg-navy-950/80 backdrop-blur-sm border-t border-navy-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs uppercase tracking-[0.15em] text-white/40">
              <span className="flex items-center gap-2">
                <Phone className="h-3 w-3 text-gold-400" />
                +232 88 96 96 96
              </span>
              <span className="hidden sm:inline text-navy-600">|</span>
              <span>24/7 Control Room & Provincial Coverage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}