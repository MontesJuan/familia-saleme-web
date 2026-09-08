'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import InstagramIcon from '@/components/ui/InstagramIcon';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappDirectUrl =
    'https://wa.me/5492644999862?text=Hola%20Familia%20Saleme!%20Me%20contacto%20desde%20su%20sitio%20web%20para%20hacerles%20una%20consulta.';

  return (
    <section id="contacto" className="py-24 sm:py-32 bg-[#0A0A0A] border-t border-[#C8A96E]/20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C8A96E]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#C8A96E] font-semibold block mb-3">
            Atención Personalizada • San Juan, Argentina
          </span>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-5xl md:text-6xl text-[#F5F0EB] font-normal tracking-tight mb-5 leading-tight">
            Contactate con Nosotros
          </h2>
          <p className="text-sm sm:text-base text-[#A39B8B] font-light leading-relaxed">
            Estamos a tu disposición para pedidos minoristas o mayoristas, cotizaciones para restaurantes y envíos
            especiales a todo el país.
          </p>
        </div>

        {/* Two Columns: Contact Details + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Logo and Brand Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#141414] border border-[#C8A96E]/25 shadow-xl space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-16 sm:w-16 sm:h-20 flex-shrink-0">
                  <Image
                    src="/images/logo_familia_saleme_complete_trans.png"
                    alt="Familia Saleme Logo Oficial"
                    fill
                    className="object-contain filter drop-shadow-[0_2px_10px_rgba(200,169,110,0.3)]"
                  />
                </div>
                <div>
                  <h3 className="font-['Playfair_Display',serif] text-xl text-[#F5F0EB] font-normal">
                    FAMILIA SALEME
                  </h3>
                  <span className="text-xs text-[#C8A96E] tracking-wider uppercase font-medium">
                    Olivícola Pedernal S.A.
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#A39B8B] font-light leading-relaxed">
                Elaboración artesanal de Aceite de Oliva Virgen Extra en el Valle de Pedernal, San Juan. Cosecha
                seleccionada y molienda propia.
              </p>
            </div>

            {/* Direct WhatsApp Action Card */}
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-[#142315] border border-[#25D366]/40 hover:border-[#25D366] transition-all duration-300 block group shadow-lg shadow-black/40"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] uppercase tracking-wider text-[#25D366] font-bold">Canal Directo</span>
                <div className="p-2 rounded-full bg-[#25D366] text-black group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5 fill-black" />
                </div>
              </div>
              <h4 className="font-['Playfair_Display',serif] text-xl text-[#F5F0EB] mb-1">
                Escribinos por WhatsApp
              </h4>
              <p className="text-xs text-[#A39B8B] font-light">
                Respuesta directa de nuestro equipo para coordinar pedidos y consultas en el acto.
              </p>
            </a>

            {/* Contact Info List */}
            <div className="p-6 rounded-3xl bg-[#141414] border border-white/10 space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C8A96E] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F5F0EB] block font-medium">Ubicación de Finca:</strong>
                  <span className="text-[#A39B8B] font-light">Valle de Pedernal, San Juan, Argentina</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <InstagramIcon className="w-4 h-4 text-[#C8A96E] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F5F0EB] block font-medium">Instagram Oficial:</strong>
                  <a
                    href="https://www.instagram.com/familia_saleme"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4B87A] hover:underline"
                  >
                    @familia_saleme
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C8A96E] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F5F0EB] block font-medium">Correo Electrónico:</strong>
                  <span className="text-[#A39B8B] font-light">contacto@familiasaleme.com.ar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-[#141414] border border-[#C8A96E]/25 rounded-3xl p-6 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#1A2510] text-[#A9C365] flex items-center justify-center mx-auto border border-[#6B7B3A]/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-['Playfair_Display',serif] text-2xl text-[#F5F0EB]">
                  ¡Mensaje Enviado con Éxito!
                </h3>
                <p className="text-xs sm:text-sm text-[#A39B8B] font-light max-w-md mx-auto leading-relaxed">
                  Muchas gracias por comunicarte con Familia Saleme. Te responderemos a la brevedad para coordinar tu
                  consulta.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#C8A96E] text-black text-xs font-bold uppercase tracking-wider mt-4"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-['Playfair_Display',serif] text-2xl text-[#F5F0EB] mb-1">
                    Envianos tu Consulta
                  </h3>
                  <p className="text-xs text-[#A39B8B] font-light">
                    Completá el formulario y nos contactaremos a la brevedad.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#A39B8B] block mb-1">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      placeholder="Tu nombre"
                      className="w-full bg-[#0E0E0E] border border-white/15 rounded-xl px-4 py-3 text-xs text-[#F5F0EB] placeholder-[#A39B8B]/40 focus:outline-none focus:border-[#C8A96E]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#A39B8B] block mb-1">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tu@email.com"
                      className="w-full bg-[#0E0E0E] border border-white/15 rounded-xl px-4 py-3 text-xs text-[#F5F0EB] placeholder-[#A39B8B]/40 focus:outline-none focus:border-[#C8A96E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#A39B8B] block mb-1">
                    Teléfono / WhatsApp (Opcional)
                  </label>
                  <input
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    placeholder="+54 9 ..."
                    className="w-full bg-[#0E0E0E] border border-white/15 rounded-xl px-4 py-3 text-xs text-[#F5F0EB] placeholder-[#A39B8B]/40 focus:outline-none focus:border-[#C8A96E]"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#A39B8B] block mb-1">
                    Mensaje o Consulta *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    placeholder="Escribinos sobre pedidos particulares, envíos a tu ciudad o acuerdos comerciales..."
                    className="w-full bg-[#0E0E0E] border border-white/15 rounded-xl p-4 text-xs text-[#F5F0EB] placeholder-[#A39B8B]/40 focus:outline-none focus:border-[#C8A96E] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-[#C8A96E] hover:bg-[#D4B87A] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#C8A96E]/20 hover:scale-[1.01] active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>Enviar Mensaje</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
