'use client';
import { motion } from 'framer-motion';
import { Gavel, Building2, Briefcase, Users2, ArrowRight, Flame } from 'lucide-react';

const services = [
  {
    title: "Hidrocarburos y Energía",
    description: "Asesoramiento especializado en contratos de Oil & Gas, marcos regulatorios y gestión de proyectos en la Cuenca Neuquina.",
    icon: Flame,
  },
  {
    title: "Derecho Corporativo",
    description: "Ingeniería jurídica para empresas, desde la constitución de sociedades hasta contratos comerciales de alta complejidad.",
    icon: Building2,
  },
  {
    title: "Derecho Laboral",
    description: "Gestión de relaciones laborales, cumplimiento normativo y defensa estratégica en litigios del trabajo para empresas.",
    icon: Briefcase,
  },
  {
    title: "Derecho Civil",
    description: "Representación integral en disputas civiles, contratos y responsabilidad civil con una planificación estratégica rigurosa.",
    icon: Gavel,
  },
];

export default function PracticeAreas() {
  return (
    <section id="expertise" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header de la sección */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-label text-secondary text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold block mb-4"
          >
            Especialidades
          </motion.span>
          <h2 className="font-headline text-4xl md:text-5xl text-primary tracking-tight italic">
            Áreas de Práctica
          </h2>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-surface-container-lowest p-8 md:p-10 border border-outline-variant/30 hover:border-tertiary-fixed transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col items-center text-center"
            >
              {/* Icono centrado con círculo */}
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-tertiary-fixed transition-colors duration-500">
                <service.icon size={28} className="text-primary group-hover:text-on-tertiary-fixed transition-colors" />
              </div>

              <h3 className="font-headline text-2xl text-primary mb-4 italic">
                {service.title}
              </h3>
              
              <p className="font-body text-secondary leading-relaxed mb-8 text-sm md:text-base">
                {service.description}
              </p>

              {/* Link sutil decorativo */}
              <div className="mt-auto flex items-center text-[10px] font-label uppercase tracking-[0.2em] text-primary/40 group-hover:text-tertiary font-bold transition-colors">
                Ver más <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Línea decorativa inferior (Desktop) */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-tertiary-fixed scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}