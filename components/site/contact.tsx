'use client';

import { useState } from 'react';
import { useReveal } from '@/hooks/use-reveal';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
  Map,
} from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Head Office',
    value: '46 Ronsab Drive, Spur Road, Freetown, Sierra Leone',
    href: 'https://maps.google.com/?q=46+Ronsab+Drive,+Spur+Road,+Freetown,+Sierra+Leone',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+232 88 96 96 96',
    href: 'tel:+23288969696',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+232 88 455554',
    href: 'tel:+23288455554',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@slprotec.com',
    href: 'mailto:info@slprotec.com',
  },
  {
    icon: Clock,
    label: 'Availability',
    value: '24/7 — Control room & provincial coverage',
  },
];

const serviceOptions = [
  'ProGuard — Man Guarding',
  'ProTech — Intelligent Security Systems',
  'ProSecure — Special Security Services',
  'ProLogistics',
  'ProTravel',
  'ProData',
  'General Enquiry',
];

export default function Contact() {
  const { ref, isVisible } = useReveal();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full sm:w-1/3 h-full bg-navy-50/50 -z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          ref={ref}
          className={`reveal text-center max-w-2xl mx-auto mb-14 sm:mb-16 ${isVisible ? 'is-visible' : ''}`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="gold-divider-center" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              Contact
            </span>
            <div className="gold-divider-center" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight text-balance">
            Get in Touch with
            <span className="text-gold-600"> Protec</span>
          </h2>
          <p className="mt-6 text-base text-navy-600 leading-relaxed">
            Reach our head office in Freetown or send us a message. Our team
            will respond to your security, logistics or support enquiry
            promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 mb-10 sm:mb-12">
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info) => (
              <div
                key={`${info.label}-${info.value}`}
                className="group flex gap-4 rounded-2xl border border-navy-100 bg-white p-5 sm:p-6 card-hover hover:shadow-navy hover:border-gold-500/30"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-950 group-hover:bg-gold-500 transition-colors duration-300">
                  <info.icon className="h-6 w-6 text-gold-400 group-hover:text-navy-950 transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-navy-400 font-semibold">
                    {info.label}
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="mt-1 block text-sm font-medium text-navy-800 hover:text-gold-600 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="mt-1 text-sm font-medium text-navy-800">
                      {info.value}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-navy-950 p-6 sm:p-8 lg:p-10 shadow-navy relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'linear-gradient(hsl(var(--gold-400)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold-400)) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />

              {status === 'success' ? (
                <div className="relative flex flex-col items-center justify-center text-center py-16 animate-scale-in">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/20 mb-4">
                    <CheckCircle2 className="h-8 w-8 text-gold-400" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Thank You!
                  </h3>
                  <p className="mt-2 text-sm text-white/60 max-w-sm">
                    Your enquiry has been received. A member of our team will
                    contact you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                        Full Name *
                      </label>
                      <input
                        required
                        name="name"
                        type="text"
                        className="w-full rounded-lg border border-navy-700 bg-navy-900/60 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                        Phone Number *
                      </label>
                      <input
                        required
                        name="phone"
                        type="tel"
                        className="w-full rounded-lg border border-navy-700 bg-navy-900/60 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                        placeholder="+232 ..."
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                        Email Address *
                      </label>
                      <input
                        required
                        name="email"
                        type="email"
                        className="w-full rounded-lg border border-navy-700 bg-navy-900/60 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                        Company / Organization
                      </label>
                      <input
                        name="company"
                        type="text"
                        className="w-full rounded-lg border border-navy-700 bg-navy-900/60 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                        placeholder="Your organization"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                      Service Required *
                    </label>
                    <select
                      required
                      name="service"
                      defaultValue=""
                      className="w-full rounded-lg border border-navy-700 bg-navy-900/60 px-4 py-3 text-sm text-white focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors"
                    >
                      <option value="" disabled className="text-navy-950">
                        Select a service
                      </option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="text-navy-950">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full rounded-lg border border-navy-700 bg-navy-900/60 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-400">
                      Something went wrong. Please try again or call us at +232
                      88 96 96 96.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-all hover:bg-gold-400 hover:shadow-gold disabled:opacity-60"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-navy-100 overflow-hidden shadow-navy bg-navy-50">
          <div className="relative h-64 sm:h-80 lg:h-96 bg-navy-100 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-100 via-navy-50 to-gold-500/10" />
            <div className="relative text-center px-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-950 mx-auto mb-4">
                <Map className="h-8 w-8 text-gold-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy-950">
                Find Us in Freetown
              </h3>
              <p className="mt-2 text-sm text-navy-600 max-w-md mx-auto">
                46 Ronsab Drive, Spur Road, Freetown, Sierra Leone
              </p>
              <a
                href="https://maps.google.com/?q=46+Ronsab+Drive,+Spur+Road,+Freetown,+Sierra+Leone"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
              >
                Open in Google Maps
                <MapPin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
