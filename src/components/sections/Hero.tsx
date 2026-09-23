import type { ReactNode } from 'react';

interface HeroProps {
  headline: ReactNode;
  subtext?: string;
  tags?: string[];
  bottomContent?: ReactNode;
  minHeight?: string;
  backgroundImage?: string;
}

export function Hero({ headline, subtext, tags, bottomContent, minHeight = "min-h-[87vh]", backgroundImage }: HeroProps) {
  return (
    <section 
      className={`bg-charcoal text-white relative flex flex-col pt-10 pb-16 px-10 overflow-hidden ${minHeight} ${backgroundImage ? 'bg-cover bg-center' : ''}`}
      style={backgroundImage ? { backgroundImage: `url('${backgroundImage}')` } : {}}
    >
      {backgroundImage && <div className="absolute inset-0 bg-charcoal/80 z-0"></div>}
      
      <div className="max-w-[1400px] mx-auto w-full flex-grow flex flex-col justify-between relative z-20">
        
        {/* Top Tags */}
        <div className="flex justify-end gap-10 mb-20">
          {tags?.map((tag, idx) => (
            <div key={idx} className="text-white/40 text-[11px] tracking-[0.1em] uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
              {tag}
            </div>
          ))}
        </div>

        {/* Main Headline */}
        <div className="animate-fade-up">
          <h1 className="font-display text-[clamp(76px,11.8vw,172px)] leading-[0.87] tracking-tight">
            {headline}
          </h1>
        </div>

        {/* Bottom Content */}
        <div className="mt-16 animate-fade-up-delay border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          {subtext && (
            <div className="max-w-md text-white/60 font-light text-[17px] leading-relaxed">
              {subtext}
            </div>
          )}
          {bottomContent}
        </div>

      </div>
    </section>
  );
}
