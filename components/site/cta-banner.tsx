'use client';

import { ArrowRight, Phone } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="relative py-16 sm:py-20 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 bg-navy-radial" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--gold-400)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold-400)) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-balance">
            Ready to Secure Your Operations with{' '}
            <span className="text-gold-gradient">Protec?</span>
          </h2>
          <p className="mt-4 text-base text-white/60 leading-relaxed">
            Contact our team today for a tailored security, logistics or
            professional support solution. We respond promptly to every enquiry.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-all hover:bg-gold-400 hover:shadow-gold w-full sm:w-auto"
            >
              Contact Us Today
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+23288969696"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-gold-500/40 w-full sm:w-auto"
            >
              <Phone className="h-4 w-4 text-gold-400" />
              +232 88 96 96 96
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
