'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from '@/lib/gsapConfig';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, Clock, createLucideIcon } from 'lucide-react';

const Instagram = createLucideIcon('Instagram', [
  ['rect', { width: '20', height: '20', x: '2', y: '2', rx: '5', ry: '5', key: 'rect' }],
  ['path', { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z', key: 'path' }],
  ['line', { x1: '17.5', x2: '17.51', y1: '6.5', y2: '6.5', key: 'line' }],
]);

interface ContactFormData {
  nombre: string;
  email: string;
  mensaje: string;
}

export const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const leftCol = leftColRef.current;
    const rightCol = rightColRef.current;
    if (!leftCol || !rightCol) return;

    const ctx = gsap.context(() => {
      gsap.from(leftCol, {
        scrollTrigger: {
          trigger: leftCol,
          start: 'top 82%',
          once: true,
        },
        x: -40,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
      });

      gsap.from(rightCol, {
        scrollTrigger: {
          trigger: rightCol,
          start: 'top 82%',
          once: true,
        },
        x: 40,
        opacity: 0,
        duration: 1.1,
        delay: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.mensaje) return;

    setIsSubmitting(true);

    // Simulate luxury API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ nombre: '', email: '', mensaje: '' });
    }, 1200);
  };

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="relative w-full py-28 md:py-36 bg-[#0A0A0A] text-[#F5F0EB] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#C8A96E]/[0.05] rounded-full blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#6B7B3A]/[0.05] rounded-full blur-[130px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C8A96E]" />
            <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#C8A96E] font-medium font-inter">
              Estemos en Contacto
            </span>
            <span className="w-8 h-[1px] bg-[#C8A96E]" />
          </div>

          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F5F0EB] tracking-tight font-normal mb-3">
            Contacto
          </h2>

          <p className="font-playfair italic text-lg sm:text-xl text-[#A39B8B] font-light">
            Descubrí el sabor de San Juan
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Information */}
          <div ref={leftColRef} className="lg:col-span-5 flex flex-col space-y-8">
            <div>
              <h3 className="font-playfair text-2xl sm:text-3xl text-[#F5F0EB] font-normal mb-4">
                Atención Directa
              </h3>
              <p className="font-inter text-sm sm:text-base text-[#A39B8B] font-light leading-relaxed">
                Para consultas corporativas, distribución en tiendas gourmet, partidas personalizadas o visitas a nuestros olivares en Pedernal, nuestro equipo responderá con la celeridad que merecés.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-6 pt-2">
              {/* Email */}
              <a
                href="mailto:contacto@familiasaleme.com.ar"
                className="group flex items-start gap-4 p-4 rounded-xl border border-white/[0.05] hover:border-[#C8A96E]/40 bg-[#121212]/60 hover:bg-[#161616] transition-all duration-300 backdrop-blur-sm"
              >
                <div className="w-11 h-11 rounded-lg border border-[#C8A96E]/30 bg-[#C8A96E]/[0.08] flex items-center justify-center text-[#C8A96E] group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] tracking-[0.2em] uppercase font-inter text-[#A39B8B] mb-1">
                    Correo Electrónico
                  </span>
                  <span className="font-inter text-sm sm:text-base text-[#F5F0EB] group-hover:text-[#D4B87A] transition-colors duration-300 font-medium break-all">
                    contacto@familiasaleme.com.ar
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+5492644123456"
                className="group flex items-start gap-4 p-4 rounded-xl border border-white/[0.05] hover:border-[#C8A96E]/40 bg-[#121212]/60 hover:bg-[#161616] transition-all duration-300 backdrop-blur-sm"
              >
                <div className="w-11 h-11 rounded-lg border border-[#C8A96E]/30 bg-[#C8A96E]/[0.08] flex items-center justify-center text-[#C8A96E] group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] tracking-[0.2em] uppercase font-inter text-[#A39B8B] mb-1">
                    Atención Telefónica & WhatsApp
                  </span>
                  <span className="font-inter text-sm sm:text-base text-[#F5F0EB] group-hover:text-[#D4B87A] transition-colors duration-300 font-medium">
                    +54 9 264 412-3456
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="group flex items-start gap-4 p-4 rounded-xl border border-white/[0.05] bg-[#121212]/60 transition-all duration-300 backdrop-blur-sm">
                <div className="w-11 h-11 rounded-lg border border-[#C8A96E]/30 bg-[#C8A96E]/[0.08] flex items-center justify-center text-[#C8A96E] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] tracking-[0.2em] uppercase font-inter text-[#A39B8B] mb-1">
                    Origen & Terroir
                  </span>
                  <span className="font-inter text-sm sm:text-base text-[#F5F0EB] font-medium block">
                    Valle de Pedernal, San Juan, Argentina
                  </span>
                  <span className="text-xs text-[#C8A96E] font-inter font-light">
                    1.400 msnm · Cordillera de los Andes
                  </span>
                </div>
              </div>

              {/* Instagram */}
              <a
                href="https://instagram.com/familia_saleme"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 rounded-xl border border-white/[0.05] hover:border-[#C8A96E]/40 bg-[#121212]/60 hover:bg-[#161616] transition-all duration-300 backdrop-blur-sm"
              >
                <div className="w-11 h-11 rounded-lg border border-[#C8A96E]/30 bg-[#C8A96E]/[0.08] flex items-center justify-center text-[#C8A96E] group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] tracking-[0.2em] uppercase font-inter text-[#A39B8B] mb-1">
                    Instagram Oficial
                  </span>
                  <span className="font-inter text-sm sm:text-base text-[#F5F0EB] group-hover:text-[#D4B87A] transition-colors duration-300 font-medium">
                    @familia_saleme
                  </span>
                </div>
              </a>
            </div>

            {/* Extra note */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center gap-3 text-xs text-[#A39B8B] font-inter font-light">
              <Clock className="w-4 h-4 text-[#C8A96E]" />
              <span>Horario: Lunes a Viernes de 09:00 a 18:00 hs (ART)</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            ref={rightColRef}
            className="lg:col-span-7 rounded-2xl p-8 sm:p-10 lg:p-12 
              bg-gradient-to-b from-[#161616]/90 via-[#121212]/90 to-[#0A0A0A]/95 
              border border-[#C8A96E]/25 backdrop-blur-xl 
              shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative"
          >
            {/* Subtle decorative gold corner frames */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#C8A96E]/40 pointer-events-none" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[#C8A96E]/40 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[#C8A96E]/40 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#C8A96E]/40 pointer-events-none" />

            <div className="mb-8">
              <h3 className="font-playfair text-2xl sm:text-3xl text-[#F5F0EB] font-normal mb-2">
                Envianos tu Mensaje
              </h3>
              <p className="font-inter text-xs sm:text-sm text-[#A39B8B] font-light">
                Completá el formulario a continuación y nos contactaremos personalmente.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="py-12 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full border border-[#C8A96E] bg-[#C8A96E]/10 flex items-center justify-center text-[#D4B87A] shadow-[0_0_30px_rgba(200,169,110,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-playfair text-2xl sm:text-3xl text-[#F5F0EB] font-normal">
                  Mensaje Enviado
                </h4>
                <p className="font-inter text-sm text-[#A39B8B] max-w-md font-light leading-relaxed">
                  Muchas gracias por comunicarte con Familia Saleme. Hemos recibido tus datos y te responderemos a la mayor brevedad.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-xs uppercase tracking-[0.2em] font-inter text-[#C8A96E] hover:text-[#FFF8EC] underline underline-offset-8 transition-colors cursor-pointer"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Nombre Field */}
                <div className="relative">
                  <label
                    htmlFor="nombre"
                    className="block text-[11px] font-inter uppercase tracking-[0.2em] text-[#C8A96E] mb-2 font-medium"
                  >
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ej. María González"
                    className="w-full bg-transparent border-0 border-b border-white/20 pb-3 pt-1 text-base sm:text-lg text-[#F5F0EB] font-inter font-light placeholder:text-[#A39B8B]/40 focus:border-[#C8A96E] focus:outline-none focus:ring-0 transition-colors duration-300"
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-[11px] font-inter uppercase tracking-[0.2em] text-[#C8A96E] mb-2 font-medium"
                  >
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ej. maria@ejemplo.com"
                    className="w-full bg-transparent border-0 border-b border-white/20 pb-3 pt-1 text-base sm:text-lg text-[#F5F0EB] font-inter font-light placeholder:text-[#A39B8B]/40 focus:border-[#C8A96E] focus:outline-none focus:ring-0 transition-colors duration-300"
                  />
                </div>

                {/* Mensaje Field */}
                <div className="relative">
                  <label
                    htmlFor="mensaje"
                    className="block text-[11px] font-inter uppercase tracking-[0.2em] text-[#C8A96E] mb-2 font-medium"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Contanos tu inquietud o pedido..."
                    className="w-full bg-transparent border-0 border-b border-white/20 pb-3 pt-1 text-base sm:text-lg text-[#F5F0EB] font-inter font-light placeholder:text-[#A39B8B]/40 focus:border-[#C8A96E] focus:outline-none focus:ring-0 transition-colors duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4 flex items-center justify-between">
                  <span className="text-[11px] text-[#A39B8B]/70 font-inter font-light">
                    * Campos obligatorios
                  </span>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-none
                      border border-[#C8A96E] bg-transparent text-[#F5F0EB] 
                      hover:bg-[#C8A96E] hover:text-[#0A0A0A] hover:border-[#C8A96E]
                      text-xs tracking-[0.24em] uppercase font-inter font-medium
                      transition-colors duration-500 ease-out cursor-pointer select-none
                      disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Enviando...
                      </span>
                    ) : (
                      <>
                        <span>Enviar Consulta</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
