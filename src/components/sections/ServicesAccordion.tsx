import { useState } from 'react';
import { clsx } from 'clsx';
import { ScrollReveal } from '../ui/ScrollReveal';
import { services } from '../../data/services';

export function ServicesAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-32 px-10 max-w-[1400px] mx-auto border-t border-charcoal/10">
      <ScrollReveal>
        <h2 className="text-[11px] uppercase tracking-[0.2em] font-medium text-charcoal/40 mb-16">
          OUR SERVICES & WORKS
        </h2>
      </ScrollReveal>

      <div className="flex flex-col">
        {services.map((service, idx) => {
          const isOpen = openId === service.id;

          return (
            <ScrollReveal key={service.id} delay={idx * 100}>
              <div className="border-b border-charcoal/10">
                {/* Header Row */}
                <button 
                  onClick={() => toggle(service.id)}
                  className="w-full text-left py-10 flex items-center justify-between group interactive"
                >
                  <div className="flex items-center gap-6 lg:gap-12 w-full pr-6">
                    <div className="text-[14px] text-charcoal/40 font-medium flex-shrink-0">
                      {service.number}
                    </div>
                    <div className="font-display text-[31px] tracking-wide flex-shrink-0">
                      {service.name}
                    </div>
                    <div className="hidden lg:block text-[14px] text-charcoal/60 font-medium flex-1 line-clamp-1">
                      {service.description}
                    </div>
                  </div>
                  
                  <div className={clsx(
                    "w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 flex-shrink-0",
                    isOpen ? "bg-gold border-gold text-white rotate-45" : "border-charcoal/20 text-charcoal group-hover:border-charcoal"
                  )}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0V14M0 7H14" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </button>

                {/* Expanding Content */}
                <div className={clsx(
                  "grid transition-[grid-template-rows] duration-500 ease-out-custom",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}>
                  <div className="overflow-hidden">
                    <div className="pb-16 pt-4">

                      {/* TOP: What's Included */}
                      <div className="mb-12">
                        <h3 className="text-[11px] uppercase tracking-[0.2em] font-medium text-gold mb-6">
                          What's Included
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                          {service.included.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 text-[14px] text-charcoal/70">
                              <span className="text-gold font-medium flex-shrink-0">→</span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* BOTTOM: Project Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {service.projects.map((project) => (
                          <div key={project.id} className="group interactive cursor-pointer">
                            <div className="overflow-hidden rounded-[4px] bg-charcoal/5 mb-4 max-h-[200px] aspect-[3/2] relative">
                              <img 
                                src={project.imageUrl} 
                                alt={project.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 border border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 m-3 pointer-events-none"></div>
                            </div>
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-sm tracking-wider uppercase">{project.name}</h4>
                              <div className="flex gap-2">
                                {project.tags.map(tag => (
                                  <span key={tag} className="text-[10px] uppercase tracking-wider text-charcoal/60 border border-charcoal/10 px-2 py-1 rounded">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
