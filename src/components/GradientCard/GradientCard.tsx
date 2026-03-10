import type { CSSProperties, ReactNode } from 'react';
import { GRADIENTS, type GradientVariant } from './gradients';

interface GradientCardProps {
  variant?: GradientVariant;
  title: string;
  description?: string;
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function GradientCard({
  variant = 'original',
  title,
  description,
  footer,
  children,
  className = '',
}: GradientCardProps) {
  const style = { '--gradient': GRADIENTS[variant] } as CSSProperties;

  return (
    <div
      className={`gradient-card relative overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1d] p-8 flex flex-col justify-between min-h-[280px] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 ${className}`}
      style={style}
    >
      <div className="relative z-10 flex flex-col gap-3">
        <h3 className="text-2xl font-semibold">{title}</h3>
        {description && (
          <p className="text-white/70 text-sm leading-relaxed">{description}</p>
        )}
        {children}
      </div>

      {footer && (
        <div className="relative z-10 mt-4 font-mono text-[11px] bg-black/30 px-3 py-2 rounded-md text-white/60 break-all">
          {footer}
        </div>
      )}
    </div>
  );
}
