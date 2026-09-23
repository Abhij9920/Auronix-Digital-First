import { ScrollReveal } from '../ui/ScrollReveal';
import { Button } from '../ui/Button';

export function CTASection() {
  return (
    <section className="bg-charcoal text-white px-10 py-32 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-20">
        <ScrollReveal className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16">
          <div className="max-w-3xl">
            <h2 className="font-display text-[clamp(60px,8vw,100px)] leading-[0.85] tracking-tight mb-6">
              READY TO GROW<br />YOUR BUSINESS?
            </h2>
            <p className="text-gold text-2xl font-light tracking-wide">
              Let's build something remarkable together.
            </p>
          </div>
          
          <div className="flex flex-col items-start gap-8">
            <div 
              className="w-[190px] h-[122px] bg-cover bg-center rounded opacity-80"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&auto=format&q=80')" }}
            ></div>
            <Button to="/contact" variant="primary">
              + Let's Talk
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
