import type { ReactNode } from 'react';
import { clsx } from 'clsx';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export function ScrollReveal({ children, className, delay = 0, threshold = 0.15 }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold });

  return (
    <div
      ref={ref as any}
      className={clsx(
        'transition-all duration-[850ms] ease-out-custom',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
