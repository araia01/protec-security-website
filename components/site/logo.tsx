import Image from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = {
  variant?: 'light' | 'dark';
  className?: string;
};

export default function Logo({ variant = 'light', className }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <Image
        src="/images/protec-logo.png"
        alt="Protec Security, Logistics & Services"
        width={140}
        height={48}
        className="h-10 w-auto object-contain sm:h-12"
        priority
      />
      {variant === 'dark' && (
        <div className="hidden sm:flex flex-col leading-none border-l border-navy-700 pl-3">
          <span className="font-display text-sm font-semibold text-white">
            Security, Logistics & Services
          </span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-gold-400">
            Sierra Leone
          </span>
        </div>
      )}
    </div>
  );
}