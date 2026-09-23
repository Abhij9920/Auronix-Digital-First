import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white pt-24 pb-8 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-10 relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between mb-20 gap-10">
          <div className="max-w-xs">
            <h3 className="font-display text-[32px] tracking-[0.04em] mb-2">AURONIX DIGITAL™</h3>
            <p className="text-white/60 text-sm mb-6">Your Digital Growth Partner</p>
            <div className="w-8 h-0.5 bg-gold mb-8"></div>
            
            <div className="flex gap-3">
              {['FB', 'TW', 'LI', 'IG'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 border border-white/10 rounded flex items-center justify-center text-xs tracking-wider transition-colors hover:bg-gold hover:border-gold hover:text-white">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-16 md:gap-24">
            <div>
              <h4 className="font-display text-xl tracking-wider mb-6 text-gold">CONTACT</h4>
              <ul className="space-y-4 text-sm text-white/60">
                <li>hello@auronixdigital.com</li>
                <li>Melbourne, Australia</li>
                <li>+44 20 7946 0958</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display text-xl tracking-wider mb-6 text-gold">EXPLORE</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/services" className="text-white/60 hover:text-gold transition-colors">Services</Link></li>
                <li><Link to="/work" className="text-white/60 hover:text-gold transition-colors">Work</Link></li>
                <li><Link to="/about" className="text-white/60 hover:text-gold transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-white/60 hover:text-gold transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between text-xs text-white/40 tracking-wider">
          <p>© {currentYear} Auronix Digital. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Giant Wordmark Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none overflow-hidden">
        <div className="font-display text-[140px] md:text-[220px] lg:text-[280px] leading-[0.75] tracking-tight text-white opacity-5 whitespace-nowrap">
          AURONIX
        </div>
      </div>
    </footer>
  );
}
