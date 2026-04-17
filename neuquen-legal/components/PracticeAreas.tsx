'use client';
import { motion } from 'framer-motion';
import { Gavel, Building2, Briefcase, Users2, ArrowRight, Flame } from 'lucide-react';

const services = [
  {
    title: "Derecho Civil",
    description: "Representación integral en litigios civiles, contratos y reclamaciones de responsabilidad civil,",
    icon: Gavel,
  },
  {
  title: "Hidrocarburos y Energía",
  description: "Asesoramiento integral en contratos, marcos regulatorios y gestión estratégica.",
  icon: Flame, // Puedes usar el icono 'Flame' o 'Droplet' de Lucide
},
  
  {
    title: "Derecho Laboral",
    description: "Especialistas en contratos de trabajo, resolución de conflictos y cumplimiento de la normativa laboral argentina.",
    icon: Briefcase,
  },
  {
    title: "Derecho Familiar",
    description: "Gestión profesional y reservada de asuntos familiares, planificación sucesoria y patrimonial.",
    icon: Users2,
  },
];

export default function PracticeAreas() {
  return (
    <section id="expertise" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header de la sección */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-label text-secondary text-xs uppercase tracking-[0.2em] font-bold block mb-4"
          >
            Especializaciones
          </motion.span>
          <h2 className="font-headline text-4xl md:text-5xl text-primary tracking-tight">
            AREAS DE PRÁCTICA
          </h2>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-surface-container-lowest p-10 border border-outline-variant/30 hover:border-tertiary-fixed transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              {/* Icono con círculo sutil de fondo */}
              <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-tertiary-fixed transition-colors duration-500">
                <service.icon size={28} className="text-primary group-hover:text-on-tertiary-fixed transition-colors" />
              </div>

              <h3 className="font-headline text-2xl text-primary mb-4 italic">
                {service.title}
              </h3>
              
              <p className="font-body text-secondary leading-relaxed mb-8 text-sm">
                {service.description}
              </p>

              {/* Link sutil decorativo */}
              <div className="flex items-center text-xs font-label uppercase tracking-widest text-primary/40 group-hover:text-tertiary font-bold transition-colors">
                Consultanos
              </div>

              {/* Línea decorativa inferior (Invisible details) */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-tertiary-fixed scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}