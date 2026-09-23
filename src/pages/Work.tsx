import { useState } from 'react';
import { clsx } from 'clsx';
import { Hero } from '../components/sections/Hero';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { CTASection } from '../components/sections/CTASection';
import { projects } from '../data/projects';

const CATEGORIES = ['All', 'Design', 'Develop', 'Market', 'Scale'];

export function Work() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <Hero 
        headline="OUR WORK"
        minHeight="min-h-[60vh]"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
      />

      <section className="py-20 px-10 max-w-[1400px] mx-auto">
        
        {/* Filter Bar */}
        <ScrollReveal className="flex flex-wrap gap-4 justify-center md:justify-start mb-16">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={clsx(
                "px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300",
                activeCategory === category 
                  ? "bg-gold text-white shadow-lg" 
                  : "border border-charcoal/20 text-charcoal/70 hover:border-charcoal hover:text-charcoal"
              )}
            >
              {category}
            </button>
          ))}
        </ScrollReveal>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 min-h-[60vh]">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={(idx % 3) * 100} className="group interactive cursor-pointer flex flex-col h-full">
              <div className="overflow-hidden rounded bg-charcoal/5 mb-6 aspect-[4/3] relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 border border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 m-3 pointer-events-none"></div>
              </div>
              
              <div className="flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-2xl tracking-wide">{project.name}</h3>
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider text-charcoal/60 border border-charcoal/10 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
          
          {filteredProjects.length === 0 && (
            <div className="col-span-full py-20 text-center text-charcoal/50">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
