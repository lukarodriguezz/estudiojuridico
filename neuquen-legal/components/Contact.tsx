'use client';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-surface-container-lowest shadow-2xl rounded-sm overflow-hidden flex flex-col lg:flex-row border border-outline-variant/20">
          
          {/* Columna Izquierda: Formulario */}
          <div className="w-full lg:w-1/2 p-12 lg:p-20">
            <h2 className="font-headline text-4xl text-primary mb-2 tracking-tight">Comentanos tu caso</h2>
            <p className="font-body text-secondary mb-12">Un asociado se pondrá en contacto con usted a la brevedad.</p>
            
            <form className="space-y-10">
              <div className="relative border-b border-outline/50 focus-within:border-primary transition-colors py-2">
                <label className="block font-label text-[10px] uppercase tracking-widest text-secondary mb-1">Nombre Completo</label>
                <input 
                  type="text" 
                  placeholder="Juan Pérez"
                  className="w-full bg-transparent border-none p-0 text-primary placeholder:text-outline/30 focus:ring-0 font-body"
                />
              </div>

              <div className="relative border-b border-outline/50 focus-within:border-primary transition-colors py-2">
                <label className="block font-label text-[10px] uppercase tracking-widest text-secondary mb-1">Dirección de Email</label>
                <input 
                  type="email" 
                  placeholder="juanPerez@gmail.com"
                  className="w-full bg-transparent border-none p-0 text-primary placeholder:text-outline/30 focus:ring-0 font-body"
                />
              </div>

              <div className="relative border-b border-outline/50 focus-within:border-primary transition-colors py-2">
                <label className="block font-label text-[10px] uppercase tracking-widest text-secondary mb-1">Naturaleza de la Consulta</label>
                <textarea 
                  rows={3}
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full bg-transparent border-none p-0 text-primary placeholder:text-outline/30 focus:ring-0 font-body resize-none"
                />
              </div>

              <button className="w-full bg-primary text-on-primary py-5 rounded-sm font-label uppercase tracking-[0.2em] text-xs font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]">
                Enviar Consulta
              </button>
            </form>
          </div>

          {/* Columna Derecha: Info de Contacto */}
          <div className="w-full lg:w-1/2 bg-primary text-on-primary p-12 lg:p-20 relative flex flex-col justify-between overflow-hidden">
            {/* Gradiente decorativo de fondo */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-50 z-0"></div>
            
            <div className="relative z-10">
              <h3 className="font-headline text-3xl text-tertiary-fixed mb-12 italic">Comunicate con Nosotros</h3>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 rounded-full border border-tertiary-fixed/30 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-tertiary-fixed" />
                  </div>
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-tertiary-fixed/60 mb-1">Ubicación</p>
                    <p className="font-body text-primary-fixed-dim leading-relaxed">Neuquén Capital, Q8300</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 rounded-full border border-tertiary-fixed/30 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-tertiary-fixed" />
                  </div>
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-tertiary-fixed/60 mb-1">LLamanos</p>
                    <p className="font-body text-primary-fixed-dim leading-relaxed">+54 299 442 0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 rounded-full border border-tertiary-fixed/30 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-tertiary-fixed" />
                  </div>
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-tertiary-fixed/60 mb-1">Email</p>
                    <p className="font-body text-primary-fixed-dim leading-relaxed">chambers@neuquenlegal.com.ar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa Placeholder Decorativo */}
            <div className="relative z-10 mt-16 h-40 w-full bg-white/5 border border-white/10 rounded-sm flex items-center justify-center grayscale opacity-50">
               <span className="font-label text-[10px] uppercase tracking-[0.3em] text-white/40 italic">Geospatial Intelligence</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}