import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { Button } from '../ui/Button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    clsx(
      "text-[11px] uppercase tracking-[0.1em] font-medium transition-colors hover:text-gold",
      isActive ? "text-gold" : "text-white/80"
    );

  return (
    <nav className={clsx(
      "sticky top-0 z-40 bg-charcoal border-b border-white/5 transition-all duration-300",
      scrolled ? "py-3" : "py-[18px]"
    )}>
      <div className="max-w-[1400px] mx-auto px-10 flex items-center justify-between">
        
        {/* Left Links */}
        <div className="flex gap-10 flex-1">
          <NavLink to="/services" className={navLinkClasses}>Services</NavLink>
          <NavLink to="/work" className={navLinkClasses}>Work</NavLink>
        </div>

        {/* Center Brand */}
        <div className="flex-1 text-center">
          <Link to="/" className="inline-block group">
            <div className="text-[26px] font-display text-white tracking-[0.06em] leading-none transition-colors group-hover:text-gold">
              AURONIX DIGITAL<span className="text-[12px] align-top ml-1 opacity-50">™</span>
            </div>
            <div className="text-[10px] text-white/40 tracking-[0.2em] uppercase mt-1">
              Your Digital Growth Partner
            </div>
          </Link>
        </div>

        {/* Right Links & CTA */}
        <div className="flex items-center justify-end gap-10 flex-1">
          <NavLink to="/about" className={navLinkClasses}>About</NavLink>
          <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
          <Button to="/contact" variant="outline" className="ml-4">
            + Let's Talk
          </Button>
        </div>

      </div>
    </nav>
  );
}
