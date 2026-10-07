'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from '@/components/site/logo';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pro News', href: '#pro-news' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-navy-950/95 backdrop-blur-md shadow-navy py-2.5'
            : 'bg-navy-950/40 backdrop-blur-sm py-4'
        )}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <a href="#home" className="shrink-0">
            <Logo />
          </a>

          <ul className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+23288969696"
              className="hidden xl:flex items-center gap-2 text-sm text-white/70 hover:text-gold-400 transition-colors"
            >
              <Phone className="h-4 w-4 shrink-0" />
              +232 88 96 96 96
            </a>

            <a
              href="#contact"
              className="rounded-md bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-all hover:bg-gold-400 hover:shadow-gold whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>

          <button
            className="lg:hidden text-white p-2 -mr-2 relative z-[60]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </header>

      {open && (
        <div className="lg:hidden fixed inset-0 z-40 bg-navy-950 pt-[80px]">
          <div className="h-full overflow-y-auto px-6 py-6">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-lg font-medium text-white/80 border-b border-navy-700 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-8 space-y-4">
              <a
                href="tel:+23288969696"
                className="flex items-center gap-2 text-sm text-white/60"
              >
                <Phone className="h-4 w-4 text-gold-400" />
                +232 88 96 96 96
              </a>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-gold-500 px-5 py-3.5 text-center text-sm font-semibold text-navy-950"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}