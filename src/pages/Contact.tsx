import { useState } from 'react';
import { Hero } from '../components/sections/Hero';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Button } from '../components/ui/Button';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Hero 
        headline="LET'S TALK GROWTH"
        minHeight="min-h-[50vh]"
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
      />

      <section className="py-32 px-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20">
          
          {/* Left Column: Info */}
          <ScrollReveal>
            <h2 className="text-[11px] uppercase tracking-[0.2em] font-medium text-charcoal/40 mb-10">CONTACT INFORMATION</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="font-display text-2xl tracking-wide mb-2">EMAIL</h3>
                <a href="mailto:hello@auronixdigital.com" className="text-charcoal/80 hover:text-gold transition-colors text-lg">
                  hello@auronixdigital.com
                </a>
              </div>
              
              <div>
                <h3 className="font-display text-2xl tracking-wide mb-4">SOCIAL</h3>
                <div className="flex gap-4">
                  {['FB', 'TW', 'LI', 'IG'].map((social) => (
                    <a key={social} href="#" className="w-12 h-12 border border-charcoal/20 rounded flex items-center justify-center text-xs tracking-wider transition-colors hover:bg-gold hover:border-gold hover:text-white interactive">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="pt-8 border-t border-charcoal/10">
                <p className="text-charcoal/60 leading-relaxed max-w-sm">
                  We respond within 24 hours on business days. Let's discuss how we can help scale your business.
                </p>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Right Column: Form */}
          <ScrollReveal delay={200}>
            {submitted ? (
              <div className="bg-charcoal/5 p-12 rounded flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-display text-3xl tracking-wide mb-4">MESSAGE RECEIVED</h3>
                <p className="text-charcoal/60 max-w-md">
                  Thank you for reaching out. One of our growth strategists will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-wider text-charcoal/60 font-medium">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="bg-transparent border-b border-charcoal/20 py-3 text-charcoal outline-none focus:border-gold transition-colors interactive"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-wider text-charcoal/60 font-medium">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="bg-transparent border-b border-charcoal/20 py-3 text-charcoal outline-none focus:border-gold transition-colors interactive"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs uppercase tracking-wider text-charcoal/60 font-medium">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      className="bg-transparent border-b border-charcoal/20 py-3 text-charcoal outline-none focus:border-gold transition-colors interactive"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="text-xs uppercase tracking-wider text-charcoal/60 font-medium">Service Needed</label>
                    <select 
                      id="service" 
                      required
                      className="bg-transparent border-b border-charcoal/20 py-3 text-charcoal outline-none focus:border-gold transition-colors cursor-pointer appearance-none interactive"
                    >
                      <option value="" disabled selected>Select a service...</option>
                      <option value="Design">Design</option>
                      <option value="Develop">Develop</option>
                      <option value="Market">Market</option>
                      <option value="Scale">Scale</option>
                      <option value="Full Package">Full Package</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="budget" className="text-xs uppercase tracking-wider text-charcoal/60 font-medium">Budget Range</label>
                  <select 
                    id="budget" 
                    required
                    className="bg-transparent border-b border-charcoal/20 py-3 text-charcoal outline-none focus:border-gold transition-colors cursor-pointer appearance-none interactive"
                  >
                    <option value="" disabled selected>Select budget...</option>
                    <option value="< $1K">&lt; $1K</option>
                    <option value="$1K–$5K">$1K – $5K</option>
                    <option value="$5K–$10K">$5K – $10K</option>
                    <option value="$10K+">$10K+</option>
                    <option value="Let's discuss">Let's discuss</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-wider text-charcoal/60 font-medium">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    className="bg-transparent border-b border-charcoal/20 py-3 text-charcoal outline-none focus:border-gold transition-colors resize-none interactive"
                  ></textarea>
                </div>

                <Button type="submit" className="w-full mt-4">
                  + SEND MESSAGE
                </Button>
              </form>
            )}
          </ScrollReveal>

        </div>
      </section>
    </>
  );
}
