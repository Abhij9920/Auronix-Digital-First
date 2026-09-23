import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  variant?: 'primary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export function Button({ children, to, variant = 'primary', className, onClick, type = 'button' }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-8 py-3.5 text-[11px] uppercase tracking-[0.12em] font-medium transition-all duration-300 rounded-[3px]";
  
  const variants = {
    primary: "bg-gold text-white hover:bg-[#b07d15]",
    outline: "border border-white/20 text-white hover:bg-gold hover:border-gold"
  };

  const classes = clsx(baseClasses, variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
