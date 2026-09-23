import { useEffect, useRef } from 'react';
import { Hero } from '../components/sections/Hero';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Button } from '../components/ui/Button';
import { StatsRow } from '../components/sections/StatsRow';
import { ServicesAccordion } from '../components/sections/ServicesAccordion';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { CTASection } from '../components/sections/CTASection';

export function Home() {
  const bar75Ref = useRef<HTMLDivElement>(null);
  const bar25Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (bar75Ref.current) bar75Ref.current.style.width = '75%';
            if (bar25Ref.current) bar25Ref.current.style.width = '25%';
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (bar75Ref.current) observer.observe(bar75Ref.current);

    return () => observer.disconnect();
  }, []);

  const headline = (
    <>
      <div className="block">WE ARE YOUR</div>
      <div className="block mt-[-2%]">
        <span 
          className="inline-block w-[12vw] max-w-[185px] h-[7vw] max-h-[105px] bg-cover bg-center mr-[3vw] rounded-[3px] opacity-72 grayscale-[15%]"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&auto=format&q=80')" }}
        ></span>
        DIGITAL
      </div>
      <div className="block mt-[-2%] text-gold">GROWTH PARTNER</div>
    </>
  );

  return (
    <>
      <Hero 
        headline={headline}
        subtext="We design, develop, market, and scale digital ecosystems that transform businesses and drive measurable results."
        tags={['Digital Marketing', 'Web Development']}
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
        bottomContent={
          <Button to="/contact" variant="primary">
            + Let's Talk
          </Button>
        }
      />

      <section className="py-32 px-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <ScrollReveal>
            <div className="text-[21px] font-semibold leading-relaxed max-w-lg">
              Our passion is building digital ecosystems that drive real business growth — <span className="text-gold">combining strategy, creativity, and technology</span> to deliver results that matter.
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200} className="flex flex-col justify-center gap-10">
            <div>
              <div className="flex justify-between text-xs tracking-wider uppercase font-medium mb-4">
                <span className="text-charcoal/60">Successful Campaigns</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-charcoal/5 h-[3px] rounded-full overflow-hidden">
                <div 
                  ref={bar75Ref}
                  className="bg-gold h-full w-0 transition-[width] duration-[1400ms] ease-out-custom"
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-xs tracking-wider uppercase font-medium mb-4">
                <span className="text-charcoal/60">Digital Transformations</span>
                <span>25%</span>
              </div>
              <div className="w-full bg-charcoal/5 h-[3px] rounded-full overflow-hidden">
                <div 
                  ref={bar25Ref}
                  className="bg-charcoal/40 h-full w-0 transition-[width] duration-[1400ms] ease-out-custom delay-200"
                ></div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <StatsRow />
      </section>

      <ServicesAccordion />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
