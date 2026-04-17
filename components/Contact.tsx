'use client';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-surface-container-lowest shadow-2xl rounded-sm overflow-hidden flex flex-col lg:flex-row border border-outline-variant/20">
          
          {/* Columna Izquierda: Formulario */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-20">
            <h2 className="font-headline text-3xl md:text-4xl text-primary mb-3 tracking-tight italic">
              Contacto Institucional
            </h2>
            <p className="font-body text-secondary mb-10 text-sm md:text-base leading-relaxed">
              Un socio del estudio analizará su consulta de manera confidencial y se pondrá en contacto a la mayor brevedad.
            </p>
            
            <form className="space-y-8 md:space-y-10">
              <div className="relative border-b border-outline/50 focus-within:border-primary transition-colors py-3 md:py-2">
                <label className="block font-label text-[10px] uppercase tracking-[0.2em] text-secondary mb-1">Nombre o Razón Social</label>
                <input 
                  type="text" 
                  placeholder="Ej: Pérez & Cía."
                  className="w-full bg-transparent border-none p-0 text-primary placeholder:text-outline/30 focus:ring-0 font-body text-base"
                />
              </div>

              <div className="relative border-b border-outline/50 focus-within:border-primary transition-colors py-3 md:py-2">
                <label className="block font-label text-[10px] uppercase tracking-[0.2em] text-secondary mb-1">Correo Electrónico</label>
                <input 
                  type="email" 
                  placeholder="contacto@empresa.com"
                  className="w-full bg-transparent border-none p-0 text-primary placeholder:text-outline/30 focus:ring-0 font-body text-base"
                />
              </div>

              <div className="relative border-b border-outline/50 focus-within:border-primary transition-colors py-3 md:py-2">
                <label className="block font-label text-[10px] uppercase tracking-[0.2em] text-secondary mb-1">Motivo de la Consulta</label>
                <textarea 
                  rows={3}
                  placeholder="¿En qué podemos asesorarlo?"
                  className="w-full bg-transparent border-none p-0 text-primary placeholder:text-outline/30 focus:ring-0 font-body text-base resize-none"
                />
              </div>

              <button 
                type="button"
                className="w-full bg-primary text-on-primary py-5 rounded-sm font-label uppercase tracking-[0.2em] text-xs font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl active:scale-[0.98] mt-4"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Columna Derecha: Info de Contacto & Mapa */}
          <div className="w-full lg:w-1/2 bg-primary text-on-primary p-8 md:p-12 lg:p-20 relative flex flex-col justify-between overflow-hidden">
            {/* Gradiente decorativo de fondo */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-50 z-0"></div>
            
            <div className="relative z-10">
              <h3 className="font-headline text-2xl md:text-3xl text-tertiary-fixed mb-10 md:mb-12 italic">
                Nuestras Oficinas
              </h3>
              
              <div className="space-y-8 md:space-y-10">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-10 h-10 rounded-full border border-tertiary-fixed/30 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-tertiary-fixed" />
                  </div>
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary-fixed/60 mb-1">Ubicación</p>
                    <p className="font-body text-primary-fixed-dim leading-relaxed text-sm md:text-base">
                      Av. Argentina 123, Piso 5<br/>Neuquén Capital, Q8300
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-10 h-10 rounded-full border border-tertiary-fixed/30 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-tertiary-fixed" />
                  </div>
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary-fixed/60 mb-1">Teléfono</p>
                    <p className="font-body text-primary-fixed-dim leading-relaxed text-sm md:text-base">
                      +54 299 442 0000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-10 h-10 rounded-full border border-tertiary-fixed/30 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-tertiary-fixed" />
                  </div>
                  {/* Aquí está el fix: min-w-0 para que el contenedor permita truncar/romper el texto */}
                  <div className="min-w-0">
                    <p className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary-fixed/60 mb-1">Correo</p>
                    {/* break-all fuerza que el mail baje de línea en celulares chicos */}
                    <p className="font-body text-primary-fixed-dim leading-relaxed text-sm md:text-base break-all sm:break-normal">
                      chambers@neuquenlegal.com.ar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa Interactivo de Google Maps */}
            <div className="relative z-10 mt-12 md:mt-16 h-48 w-full bg-primary-container border border-white/10 rounded-sm overflow-hidden group shadow-inner">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000!2d-68.06!3d-38.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a323381e4b9e1%3A0xc4eb7ed1ec9c12b!2sNeuqu%C3%A9n!5e0!3m2!1sen!2sar!4v1690000000000!5m2!1sen!2sar" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 pointer-events-auto"
               ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}