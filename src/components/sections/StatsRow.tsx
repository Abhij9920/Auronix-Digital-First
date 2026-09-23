import { ScrollReveal } from '../ui/ScrollReveal';

export function StatsRow() {
  const stats = [
    { value: '120+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Retention Rate' },
    { value: '5+', label: 'Years of Experience' },
    { value: '3x', label: 'Average ROI for Clients' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border-t border-charcoal/10">
      {stats.map((stat, idx) => (
        <ScrollReveal 
          key={idx} 
          delay={idx * 100}
          className="border-b md:border-b-0 md:border-r border-charcoal/10 p-10 last:border-r-0"
        >
          <div className="font-display text-[54px] text-gold leading-none mb-2">
            {stat.value}
          </div>
          <div className="text-xs uppercase tracking-wider text-charcoal/60 font-medium max-w-[120px]">
            {stat.label}
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
