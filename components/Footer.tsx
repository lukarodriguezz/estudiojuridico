'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-on-primary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8">
          
          {/* Bloque de Identidad */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-2xl md:text-3xl font-headline italic tracking-tight">
              Neuquén <span className="text-tertiary-fixed">Legal</span>
            </span>
            <p className="text-[10px] font-label uppercase tracking-[0.3em] text-primary-fixed-dim/50 mt-4 leading-relaxed">
              © {currentYear} Neuquén Legal & Asociados. <br className="md:hidden" /> 
              Excelencia Jurídica y Compromiso Ético.
            </p>
          </div>
          
          {/* Bloque de Navegación Legal */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
              {[
                { name: 'Aviso Legal', href: '#' },
                { name: 'Privacidad', href: '#' },
                { name: 'Contacto', href: '#contact' }
              ].map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-[10px] font-label uppercase tracking-[0.2em] text-primary-fixed-dim hover:text-tertiary-fixed transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* Redes o Social (Opcional - LinkedIn es clave en derecho) */}
            <a 
              href="#" 
              target="_blank" 
              className="text-[10px] font-label uppercase tracking-[0.2em] text-tertiary-fixed/80 hover:text-tertiary-fixed flex items-center gap-2 transition-colors"
            >
              <span className="w-4 h-px bg-tertiary-fixed/30"></span>
              LinkedIn
            </a>
          </div>

        </div>

        {/* Separador decorativo minimalista */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] font-label uppercase tracking-[0.4em] text-white/10">
            Patagonia Argentina
          </p>
          <p className="text-[9px] font-label uppercase tracking-[0.4em] text-white/10">
            Design by Studio
          </p>
        </div>

      </div>
    </footer>
  );
}