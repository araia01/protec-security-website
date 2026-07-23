'use client';

import { MapPin, Phone, Mail, Facebook, Twitter } from 'lucide-react';
import Logo from '@/components/site/logo';

const footerLinks = {
  Services: [
    { label: 'ProGuard — Man Guarding', href: '#proguard' },
    { label: 'ProTech — Security Systems', href: '#protech' },
    { label: 'ProSecure — Special Services', href: '#prosecure' },
    { label: 'ProLogistics', href: '#prologistics' },
    { label: 'ProTravel', href: '#protravel' },
    { label: 'ProData', href: '#prodata' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Why Choose Protec', href: '#why-choose-us' },
    { label: 'Industries', href: '#industries' },
    { label: 'Pro News', href: '#pro-news' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' },
  ],
  Contact: [
    { label: 'info@slprotec.com', href: 'mailto:info@slprotec.com' },
    { label: '+232 88 96 96 96', href: 'tel:+23288969696' },
    { label: '+232 88 455554', href: 'tel:+23288455554' },
    { label: 'jobs@slprotec.com', href: 'mailto:jobs@slprotec.com' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 border-t border-navy-800 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--gold-400)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold-400)) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-14 sm:py-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          <div className="sm:col-span-2">
            <a href="#home" className="inline-block mb-6">
              <Logo />
            </a>
            <p className="text-sm text-white/50 leading-relaxed max-w-sm">
              Protec Security, Logistics & Services is Sierra Leone&apos;s
              trusted provider of professional security, logistics, travel and
              data solutions — delivering tailored support you can trust.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="h-4 w-4 text-gold-400 shrink-0 mt-0.5" />
                46 Ronsab Drive, Spur Road, Freetown, Sierra Leone
              </div>
              <a
                href="tel:+23288969696"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-gold-400 transition-colors"
              >
                <Phone className="h-4 w-4 text-gold-400 shrink-0" />
                +232 88 96 96 96
              </a>
              <a
                href="tel:+23288455554"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-gold-400 transition-colors"
              >
                <Phone className="h-4 w-4 text-gold-400 shrink-0" />
                +232 88 455554
              </a>
              <a
                href="mailto:info@slprotec.com"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-gold-400 transition-colors"
              >
                <Mail className="h-4 w-4 text-gold-400 shrink-0" />
                info@slprotec.com
              </a>
            </div>

            <div className="mt-6 flex gap-3">
              {[Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy-700 bg-navy-900 text-white/60 hover:text-gold-400 hover:border-gold-500/40 transition-all"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 hover:text-gold-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-6 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Protec Security, Logistics &
            Services. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Sierra Leone
          </p>
        </div>
      </div>
    </footer>
  );
}
