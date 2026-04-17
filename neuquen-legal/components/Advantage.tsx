'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Map, Zap, Lock } from 'lucide-react';

export default function Advantage() {
  return (
    <section className="py-32 bg-primary text-on-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Columna de Texto - El Gancho */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 flex flex-col justify-center"
          >
            <span className="font-label text-tertiary-fixed text-xs uppercase tracking-[0.2em] font-bold block mb-4">
              especialistas
            </span>
            <h2 className="font-headline text-4xl md:text-5xl mb-8 tracking-tight leading-tight">
              Por Qué Elegir<br/>
              <span className="italic">Neuquén Legal</span>
            </h2>
            <p className="font-body text-primary-fixed-dim leading-relaxed text-lg">
              Combinamos la sofisticación de una firma de alto nivel con la inteligencia local necesaria para triunfar en la Patagonia.
            </p>
          </motion.div>

          {/* Grid de Bloques (Bento Style) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Bloque 1 - Local Intelligence */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-primary-container/50 p-8 border border-outline-variant/10 rounded-sm"
            >
              <Map className="text-tertiary-fixed mb-6" size={32} />
              <h3 className="font-headline text-2xl text-tertiary-fixed mb-4 italic">01. Especialistas en la zona</h3>
              <p className="font-body text-primary-fixed-dim text-sm leading-relaxed">
                Décadas navegando el entorno judicial y regulatorio específico de Neuquén nos dan una ventaja táctica inigualable.
              </p>
            </motion.div>

            {/* Bloque 2 - Tailored Strategy */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-primary-container/50 p-8 border border-outline-variant/10 rounded-sm"
            >
              <Zap className="text-tertiary-fixed mb-6" size={32} />
              <h3 className="font-headline text-2xl text-tertiary-fixed mb-4 italic">02. Estrategia Personalizada</h3>
              <p className="font-body text-primary-fixed-dim text-sm leading-relaxed">
                No ofrecemos soluciones genéricas. Cada caso es abordado con una estrategia bespoke diseñada para el resultado deseado.
              </p>
            </motion.div>

            {/* Bloque 3 - Gran Bloque Horizontal: Discreción */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-primary-container p-8 border border-tertiary-fixed/20 rounded-sm flex flex-col md:flex-row items-center gap-8"
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <Lock className="text-tertiary-fixed" size={24} />
                  <h3 className="font-headline text-2xl text-tertiary-fixed italic">03. Compromiso y Confidencialidad</h3>
                </div>
                <p className="font-body text-primary-fixed-dim text-sm leading-relaxed">
                  La confidencialidad es la base de nuestra práctica. Sus asuntos son tratados con la máxima privacidad e integridad profesional bajo los más estrictos estándares éticos.
                </p>
              </div>
              {/* Elemento decorativo: Círculo de prestigio */}
              <div className="hidden md:flex w-24 h-24 rounded-full border border-tertiary-fixed/30 items-center justify-center flex-shrink-0">
                <ShieldCheck className="text-tertiary-fixed/50" size={40} />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}