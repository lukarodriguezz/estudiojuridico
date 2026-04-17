'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-on-primary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Logo y Branding */}
          <div className="text-center md:text-left">
            <span className="text-2xl font-headline italic tracking-tight text-on-primary">
              Neuquén <span className="text-tertiary-fixed">Legal</span>
            </span>
            <p className="text-[10px] font-label uppercase tracking-[0.3em] text-primary-fixed-dim/40 mt-3">
              © {currentYear} Neuquén Legal & Asociados. <br className="md:hidden" /> Todos los derechos reservados.
            </p>
          </div>
          
          {/* Links de Navegación / Legales */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
            {[
              { name: 'Aviso Legal', href: '#' },
              { name: 'Privacidad', href: '#' },
              { name: 'LinkedIn', href: '#' }
            ].map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[10px] font-label uppercase tracking-[0.2em] text-primary-fixed-dim hover:text-tertiary-fixed transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

        </div>

        {/* Línea decorativa final muy sutil */}
        <div className="mt-12 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        
        <div className="mt-8 text-center">
          <p className="text-[9px] font-label uppercase tracking-[0.4em] text-white/10">
            Excelencia Jurídica en la Patagonia
          </p>
        </div>

      </div>
    </footer>
  );
}