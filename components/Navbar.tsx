'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detectar scroll para cambiar el color del Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Especialidades', href: '#expertise' },
    { name: 'El Estudio', href: '#' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-surface/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className={`font-headline text-2xl tracking-tight italic transition-colors duration-500 ${
            isScrolled ? 'text-primary' : 'text-on-primary'
          }`}>
            Neuquén <span className="text-tertiary-fixed">Legal</span>
          </a>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`font-label text-[10px] uppercase tracking-[0.2em] font-bold transition-colors hover:text-tertiary-fixed ${
                  isScrolled ? 'text-secondary' : 'text-on-primary/80'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className={`px-6 py-3 rounded-sm font-label uppercase tracking-[0.2em] text-[10px] font-bold transition-all shadow-lg hover:-translate-y-0.5 ${
                isScrolled 
                  ? 'bg-primary text-on-primary hover:bg-primary/90' 
                  : 'bg-tertiary-fixed text-on-tertiary-fixed hover:bg-tertiary'
              }`}
            >
              Iniciar Consulta
            </a>
          </nav>

          {/* Botón Menú Mobile */}
          <button 
            className={`md:hidden p-2 transition-colors duration-500 ${
              isScrolled ? 'text-primary' : 'text-on-primary'
            }`}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Menú Mobile a Pantalla Completa (Overlay) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-surface flex flex-col px-6 py-6"
          >
            {/* Cabecera del menú Mobile */}
            <div className="flex justify-between items-center">
              <span className="font-headline text-2xl text-primary tracking-tight italic">
                Neuquén <span className="text-tertiary-fixed">Legal</span>
              </span>
              <button 
                className="text-primary p-2 bg-primary/5 rounded-full hover:bg-primary/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <X size={28} />
              </button>
            </div>

            {/* Links del menú Mobile */}
            <nav className="flex flex-col gap-8 items-center justify-center flex-1 text-center mt-10">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-headline text-4xl text-primary hover:text-tertiary-fixed transition-colors italic"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="w-16 h-px bg-outline-variant/50 my-4"></div>

              <a 
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-primary text-on-primary py-5 rounded-sm font-label uppercase tracking-[0.2em] text-xs font-bold hover:bg-primary/90 transition-all shadow-lg text-center mt-4"
              >
                Iniciar Consulta
              </a>
            </nav>
            
            {/* Pie del menú Mobile */}
            <div className="mt-auto text-center pb-8">
               <p className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary">
                 Neuquén, Patagonia
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}