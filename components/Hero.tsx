'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-primary pt-20 md:pt-0">
      {/* Imagen de fondo con filtro arquitectónico/legal */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" 
          alt="Neuquén Legal Office" 
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        {/* El degradado que permite leer el texto perfectamente */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Sello de ubicación (Sobre-título) */}
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-label text-tertiary-fixed text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold mb-6 block"
          >
            Neuquén, Patagonia
          </motion.span>

          {/* Título Principal (Ajustado para Mobile y Desktop) */}
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl text-on-primary leading-[1.15] md:leading-[1.1] tracking-tight mb-6 md:mb-8">
            ASESORES DE <br className="sm:hidden" /> CONFIANZA. <br /> 
            <span className="italic text-tertiary-fixed">SOLUCIONES INTELIGENTES.</span>
          </h1>

          {/* Subtexto */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-body text-base md:text-xl text-primary-fixed-dim leading-relaxed mb-10 max-w-xl"
          >
            Brindamos asesoramiento legal integral y soluciones estratégicas de alta complejidad, con especialización técnica en el sector de hidrocarburos y derecho empresarial.
          </motion.p>
          
          {/* Botones de acción */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#contact"
              className="w-full sm:w-auto text-center bg-tertiary-fixed text-on-tertiary-fixed px-8 py-4 rounded-sm font-label uppercase tracking-[0.2em] text-[11px] md:text-xs font-bold hover:bg-tertiary transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Iniciar Consulta
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Detalle decorativo: línea sutil inferior */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-tertiary-fixed/20 to-transparent"></div>
    </section>
  );
}