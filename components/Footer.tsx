export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-xl font-headline italic tracking-tight">Neuquén Legal</span>
            <p className="text-[10px] font-label uppercase tracking-widest text-primary-fixed-dim/40 mt-2">
              © 2026 Neuquén Legal & Associates. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-8">
            {['Legal Notice', 'Privacy', 'LinkedIn'].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-[10px] font-label uppercase tracking-widest text-primary-fixed-dim hover:text-tertiary-fixed transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}