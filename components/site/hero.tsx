'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, ArrowRight, Phone } from 'lucide-react';

const slides = [
  { src: '/slideshow/1.jpg', alt: 'Protec security and logistics operations' },
  { src: '/slideshow/2.jpg', alt: 'Protec professional security services' },
  { src: '/slideshow/3.jpg', alt: 'Protec guarding and protection' },
  { src: '/slideshow/4.jpg', alt: 'Protec logistics and support' },
  { src: '/slideshow/5.jpg', alt: 'Protec security personnel on duty' },
  { src: '/slideshow/6.jpg', alt: 'Protec operations in Sierra Leone' },
];

const stats = [
  { value: '24/7', label: 'Control Rooms' },
  { value: '6', label: 'Service Divisions' },
  { value: '100%', label: 'Trained Staff' },
  { value: 'Nationwide', label: 'Coverage' },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              className="object-cover scale-105 animate-ken-burns"
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 hero-overlay-left" />
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

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeSlide
                ? 'w-8 bg-gold-500'
                : 'w-3 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
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
