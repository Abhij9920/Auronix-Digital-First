import { Hero } from '../components/sections/Hero';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { CTASection } from '../components/sections/CTASection';
import { services } from '../data/services';
import { clsx } from 'clsx';

export function Services() {
  const process = [
    { title: "Discovery", desc: "Audit your business, competitors, and goals." },
    { title: "Strategy", desc: "Build a tailored growth roadmap." },
    { title: "Execution", desc: "Design, build, and launch with precision." },
    { title: "Growth", desc: "Optimise, scale, and compound results." }
  ];

  return (
    <>
      <Hero 
        headline="WHAT WE DO"
        minHeight="min-h-[60vh]"
        backgroundImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Service Detail Blocks */}
      {services.map((service, idx) => (
        <section 
          key={service.id} 
          className={clsx(
            "py-32 px-10 overflow-hidden",
            idx % 2 === 1 ? "bg-charcoal/5" : ""
          )}
        >
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <ScrollReveal className={idx % 2 === 1 ? "lg:order-2" : ""}>
              <div className="text-[14px] text-gold font-medium mb-4">{service.number}</div>
              <h2 className="font-display text-[42px] lg:text-[64px] tracking-wide mb-8">{service.name}</h2>
              <p className="text-charcoal/70 leading-relaxed text-lg mb-12">
                {service.description}
              </p>
              
              <div>
                <h4 className="text-[11px] uppercase tracking-[0.2em] font-medium text-charcoal/40 mb-6">WHAT'S INCLUDED</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-charcoal/80">
                      <span className="text-gold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200} className={clsx("grid grid-cols-2 gap-4 lg:gap-8", idx % 2 === 1 ? "lg:order-1" : "")}>
              {service.projects.map((project, pIdx) => (
                <div key={project.id} className={clsx("aspect-[4/5] rounded overflow-hidden", pIdx === 1 ? "translate-y-12" : "")}>
                  <img 
                    src={project.imageUrl} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              ))}
            </ScrollReveal>

          </div>
        </section>
      ))}

      {/* Process Timeline */}
      <section className="bg-charcoal text-white py-32 px-10">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <h2 className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40 mb-20 text-center">OUR PROCESS</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-white/10 z-0"></div>
            
            {process.map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 150} className="relative z-10 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-charcoal border-2 border-gold text-gold font-display text-xl flex items-center justify-center mb-6">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-2xl tracking-wide mb-4">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-[240px]">{step.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
