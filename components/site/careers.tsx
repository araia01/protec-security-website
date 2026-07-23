'use client';

import { useState } from 'react';
import { useReveal } from '@/hooks/use-reveal';
import {
  Briefcase,
  GraduationCap,
  Shield,
  CheckCircle2,
  Upload,
  Loader2,
  Mail,
} from 'lucide-react';

const benefits = [
  {
    icon: GraduationCap,
    title: 'Professional Training',
    description:
      'Fire fighting, first aid, physical fitness, conflict management and HSE standards.',
  },
  {
    icon: Shield,
    title: 'Career Progression',
    description:
      'Clear advancement paths from officer to supervisor and management roles.',
  },
  {
    icon: Briefcase,
    title: 'Nationwide Opportunities',
    description:
      'Roles across Freetown and provincial locations with 24/7 operations.',
  },
];

export default function Careers() {
  const { ref, isVisible } = useReveal();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [fileName, setFileName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFileName('');
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section
      id="careers"
      className="relative py-20 sm:py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-full sm:w-1/2 h-2/3 bg-navy-50/60 -z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-divider" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                Careers
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight text-balance">
              Join the Protec
              <span className="text-gold-600"> Team</span>
            </h2>
            <p className="mt-6 text-base text-navy-600 leading-relaxed">
              Protec invests in its people. We recruit carefully, train
              rigorously, and offer career paths across our six service
              divisions. If you are committed, disciplined and professional, we
              want to hear from you.
            </p>

            <div className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex gap-4 rounded-xl border border-navy-100 bg-white p-5 card-hover hover:shadow-navy hover:border-gold-500/30"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-500/10">
                    <benefit.icon className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-navy-950">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-sm text-navy-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-xl border border-gold-500/20 bg-gold-500/5 p-5">
              <Mail className="h-5 w-5 text-gold-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-navy-950">
                  Send your CV to{' '}
                  <a
                    href="mailto:jobs@slprotec.com"
                    className="text-gold-600 hover:text-gold-700 underline underline-offset-2"
                  >
                    jobs@slprotec.com
                  </a>
                </p>
                <p className="mt-1 text-xs text-navy-500">
                  Or complete the application form alongside this page.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-navy-950 p-6 sm:p-8 lg:p-10 shadow-navy relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'linear-gradient(hsl(var(--gold-400)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold-400)) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            <div className="relative">
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="h-6 w-6 text-gold-400" />
                <h3 className="font-display text-xl font-bold text-white">
                  Job Application
                </h3>
              </div>
              <p className="text-sm text-white/60 mb-6">
                Complete the form below and attach your CV. Our HR team will
                review your application.
              </p>

              {status === 'success' ? (
                <div className="flex flex-col items-center text-center py-10 animate-scale-in">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/20 mb-4">
                    <CheckCircle2 className="h-8 w-8 text-gold-400" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-white">
                    Application Submitted
                  </h4>
                  <p className="mt-2 text-sm text-white/60 max-w-sm">
                    Thank you for your interest in joining Protec. Please also
                    send your CV to{' '}
                    <a
                      href="mailto:jobs@slprotec.com"
                      className="text-gold-400 hover:underline"
                    >
                      jobs@slprotec.com
                    </a>{' '}
                    for faster processing.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        required
                        name="name"
                        type="text"
                        className="w-full rounded-lg border border-navy-700 bg-navy-900/60 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5">
                        Age *
                      </label>
                      <input
                        required
                        name="age"
                        type="number"
                        min={18}
                        max={65}
                        className="w-full rounded-lg border border-navy-700 bg-navy-900/60 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                        placeholder="Age"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5">
                        City *
                      </label>
                      <input
                        required
                        name="city"
                        type="text"
                        className="w-full rounded-lg border border-navy-700 bg-navy-900/60 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5">
                        Nationality *
                      </label>
                      <input
                        required
                        name="nationality"
                        type="text"
                        className="w-full rounded-lg border border-navy-700 bg-navy-900/60 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                        placeholder="Nationality"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5">
                        Phone *
                      </label>
                      <input
                        required
                        name="phone"
                        type="tel"
                        className="w-full rounded-lg border border-navy-700 bg-navy-900/60 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                        placeholder="+232 ..."
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5">
                        Email *
                      </label>
                      <input
                        required
                        name="email"
                        type="email"
                        className="w-full rounded-lg border border-navy-700 bg-navy-900/60 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5">
                      Career Experience *
                    </label>
                    <textarea
                      required
                      name="experience"
                      rows={4}
                      className="w-full rounded-lg border border-navy-700 bg-navy-900/60 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 resize-none"
                      placeholder="Describe your work experience and relevant skills..."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5">
                      CV Upload *
                    </label>
                    <label className="flex items-center gap-3 w-full rounded-lg border border-dashed border-navy-600 bg-navy-900/40 px-4 py-4 cursor-pointer hover:border-gold-500/50 transition-colors">
                      <Upload className="h-5 w-5 text-gold-400 shrink-0" />
                      <span className="text-sm text-white/60 truncate">
                        {fileName || 'Choose PDF or Word document'}
                      </span>
                      <input
                        required
                        name="cv"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="sr-only"
                        onChange={(e) =>
                          setFileName(e.target.files?.[0]?.name || '')
                        }
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-all hover:bg-gold-400 hover:shadow-gold disabled:opacity-60"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
