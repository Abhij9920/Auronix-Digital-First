import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { ScrollReveal } from '../ui/ScrollReveal';
import { testimonials } from '../../data/testimonials';

export function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeSlide = (newIdx: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Simulate CSS animation timing (0.36s from HTML)
    setTimeout(() => {
      setActiveIdx(newIdx);
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 360);
  };

  const nextSlide = () => {
    changeSlide((activeIdx + 1) % testimonials.length);
  };

  const prevSlide = () => {
    changeSlide((activeIdx - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [activeIdx, isAnimating]);

  const current = testimonials[activeIdx];

  return (
    <section className="py-32 px-10 max-w-[1400px] mx-auto border-t border-charcoal/10 overflow-hidden">
      <ScrollReveal className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
        <h2 className="text-[11px] uppercase tracking-[0.2em] font-medium text-charcoal/40">
          WHAT OUR CLIENTS SAY
        </h2>
        
        <div className="flex gap-4">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center transition-colors hover:border-gold hover:text-gold interactive"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center transition-colors hover:border-gold hover:text-gold interactive"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </ScrollReveal>

      <div className="relative min-h-[300px]">
        <div className={clsx(
          "transition-all duration-300 ease-in-out absolute inset-0 w-full",
          isAnimating ? "opacity-0 -translate-x-4" : "opacity-100 translate-x-0"
        )}>
          <blockquote className="text-[19.5px] lg:text-[28px] font-light leading-relaxed text-charcoal mb-12 max-w-4xl">
            "{current.quote}"
          </blockquote>
          
          <div className="flex justify-between items-center border-t border-charcoal/10 pt-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-charcoal/20"></div>
              <div>
                <div className="font-medium text-sm tracking-wider uppercase">{current.name}</div>
                <div className="text-[11px] uppercase tracking-wider text-charcoal/50 mt-1">{current.role}</div>
              </div>
            </div>
            
            <div className="flex -space-x-3 hidden sm:flex">
              <div className="w-8 h-8 rounded-full border-2 border-ivory bg-charcoal/30 z-[3]"></div>
              <div className="w-8 h-8 rounded-full border-2 border-ivory bg-charcoal/20 z-[2]"></div>
              <div className="w-8 h-8 rounded-full border-2 border-ivory bg-charcoal/10 z-[1]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
