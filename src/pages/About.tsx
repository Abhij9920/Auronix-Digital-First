import { Hero } from '../components/sections/Hero';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { StatsRow } from '../components/sections/StatsRow';
import { CTASection } from '../components/sections/CTASection';

export function About() {
  const values = [
    {
      title: "Results First",
      desc: "Every decision is measured against one question: does this drive growth?"
    },
    {
      title: "Design with Purpose",
      desc: "Beautiful work that also converts. Aesthetics serve strategy."
    },
    {
      title: "Radical Transparency",
      desc: "No black boxes. You see everything — strategy, data, and results."
    }
  ];

  const team = [
    { name: "Alex Mercer", role: "Strategy Director", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" },
    { name: "Jordan Lee", role: "Creative Lead", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" },
    { name: "Samira Patel", role: "Head of Growth", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop" },
    { name: "David Chen", role: "Technical Director", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop" }
  ];

  return (
    <>
      <Hero 
        headline="WE ARE AURONIX DIGITAL"
        subtext="A team obsessed with growth, design, and results."
        minHeight="min-h-[60vh]"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Story Section */}
      <section className="py-32 px-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <ScrollReveal>
            <h2 className="text-[11px] uppercase tracking-[0.2em] font-medium text-charcoal/40 mb-10">OUR STORY</h2>
            <div className="text-[24px] lg:text-[32px] font-light leading-relaxed italic text-gold mb-10">
              "We founded Auronix to bridge the gap between beautiful aesthetics and hard data."
            </div>
            <div className="text-charcoal/70 leading-relaxed space-y-6">
              <p>
                What started as a boutique design studio quickly evolved into a full-service digital growth agency when we realised our clients needed more than just a pretty website—they needed systems that generate revenue.
              </p>
              <p>
                Today, our multidisciplinary team of designers, developers, and marketers work in unison to build digital ecosystems that don't just look incredible, but actively drive business growth month over month.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="aspect-square lg:aspect-[4/5] w-full bg-charcoal/5 rounded overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop" 
                alt="Auronix team collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-10 max-w-[1400px] mx-auto border-t border-charcoal/10">
        <ScrollReveal>
          <h2 className="text-[11px] uppercase tracking-[0.2em] font-medium text-charcoal/40 mb-16">OUR VALUES</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20">
          {values.map((val, idx) => (
            <ScrollReveal key={idx} delay={idx * 150} className="border-t border-gold pt-8">
              <h3 className="font-display text-2xl tracking-wide mb-4">{val.title}</h3>
              <p className="text-charcoal/60 leading-relaxed">{val.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-32 px-10 bg-charcoal/5">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <h2 className="text-[11px] uppercase tracking-[0.2em] font-medium text-charcoal/40 mb-16">THE TEAM BEHIND THE GROWTH</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {team.map((member, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden rounded mb-6 bg-charcoal/10">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
                <h4 className="font-display text-xl tracking-wide">{member.name}</h4>
                <p className="text-xs uppercase tracking-wider text-charcoal/50 mt-1">{member.role}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <StatsRow />
      </div>

      <CTASection />
    </>
  );
}
