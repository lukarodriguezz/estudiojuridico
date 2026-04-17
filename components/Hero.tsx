'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Imagen de fondo con filtro profesional */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" 
          alt="Neuquén Legal Office" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        {/* El degradado que da el look premium */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="font-label text-tertiary-fixed text-sm uppercase tracking-[0.2em] font-bold mb-6 block">
            Neuquén, Patagonia
          </span>
          <h1 className="font-headline text-4xl md:text-7xl text-on-primary leading-tight tracking-tight mb-6">
              ASESORES DE <br className="md:hidden"/> CONFIANZA. <br/>
               <span className="italic text-tertiary-fixed">SOLUCIONES INTELIGENTES.</span>
            </h1>
          <p className="font-body text-xl text-primary-fixed-dim leading-relaxed mb-10 max-w-xl">
Brindamos asesoramiento legal integral y soluciones estratégicas de alta complejidad, con especialización técnica en el sector de hidrocarburos y derecho empresarial.          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="w-full md:w-auto bg-tertiary-fixed text-on-tertiary-fixed px-8 py-4 rounded-sm font-label uppercase tracking-widest text-xs font-bold shadow-lg">
              Iniciar Consulta
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Detalle decorativo: línea sutil inferior */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent"></div>
    </section>
  );
}