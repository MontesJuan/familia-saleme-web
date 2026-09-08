'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, ShieldCheck, Sparkles, CheckCircle } from 'lucide-react';

export default function Awards() {
  return (
    <section id="premios" className="py-24 sm:py-32 bg-[#0E0E0E] border-t border-[#C8A96E]/20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#C8A96E]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6B7B3A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#C8A96E] font-semibold block mb-3">
            Reconocimiento a la Excelencia • La Rural, Buenos Aires
          </span>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-5xl md:text-6xl text-[#F5F0EB] font-normal tracking-tight mb-5 leading-tight">
            Mejor Aceite de Oliva <br />
            <span className="italic bg-gradient-to-r from-[#FFF8EC] via-[#D4B87A] to-[#C8A96E] bg-clip-text text-fill-transparent">
              Virgen Extra de Argentina 2026
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#A39B8B] font-light leading-relaxed">
            Elegido por el panel de expertos en cata a ciegas del certamen más prestigioso de la gastronomía nacional:
            <strong className="text-[#F5F0EB] font-medium"> Experiencias del Sabor</strong> en Caminos y Sabores.
          </p>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          {/* Left Column: Real Photography Card */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden border border-[#C8A96E]/30 shadow-2xl bg-[#141414] group">
              <Image
                src="/images/awards_showcase.jpg"
                alt="Familia Saleme galardonado en Caminos y Sabores"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Gold Ribbon Badge on image */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0A0A]/90 backdrop-blur-md border border-[#C8A96E]">
                <Trophy className="w-4 h-4 text-[#C8A96E]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4B87A]">
                  Primer Premio Nacional
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-[#F5F0EB]">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#C8A96E] font-semibold block mb-1">
                  Cata a Ciegas • Jurado Profesional
                </span>
                <p className="text-sm sm:text-base font-light text-white/90">
                  “Armonía perfecta entre aromas verdes de huerta andina, amargo tenue y un picor persistente y sedoso.”
                </p>
              </div>
            </div>

            {/* Sub-photo strip with institutional certificate */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 group">
                <Image
                  src="/images/event_recognition.jpg"
                  alt="Reconocimiento institucional San Juan"
                  fill
                  sizes="300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-2.5 left-3 text-[11px] font-medium text-white/90">
                  Orgullo Productivo Sanjuanino
                </div>
              </div>

              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 group">
                <Image
                  src="/images/product_white_picual_arbequina.jpg"
                  alt="Botella multipremiada Familia Saleme"
                  fill
                  sizes="300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-2.5 left-3 text-[11px] font-medium text-white/90">
                  Blend Picual & Arbequina
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Distinction Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C8A96E] font-semibold mb-2">
                <Star className="w-3.5 h-3.5 fill-[#C8A96E]" />
                <span>La Consagración de San Juan</span>
              </div>
              <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-4xl text-[#F5F0EB] font-normal leading-tight mb-4">
                El Triunfo del Esfuerzo Familiar en el Certamen Mayor
              </h3>
              <p className="text-sm sm:text-base text-[#A39B8B] font-light leading-relaxed">
                En julio de 2026, en el marco de la 18ª edición de Caminos y Sabores en Buenos Aires, Familia Saleme fue
                consagrada con el máximo galardón en la categoría Aceite de Oliva Virgen Extra. Competidores de las
                principales cuencas olivícolas del país fueron evaluados a ciegas por técnicos y sommeliers de renombre.
              </p>
            </div>

            {/* Quote card */}
            <blockquote className="p-6 rounded-2xl bg-[#141414] border border-[#C8A96E]/25 text-[#F5F0EB] shadow-xl relative">
              <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#C8A96E] text-[#0A0A0A] text-[10px] font-bold uppercase tracking-wider">
                Dictamen del Jurado
              </div>
              <p className="font-['Playfair_Display',serif] text-base sm:text-lg italic text-[#F5F0EB]/90 leading-relaxed mb-3 mt-1">
                “Frutado de intensidad media-alta, con notas inequívocas de hoja de olivo, pasto recién cortado y tomate
                verde. Entrada suave en boca, evolucionando con un amargor muy noble y un picor balsámico que demuestra
                la altísima frescura y concentración de antioxidantes.”
              </p>
              <div className="text-xs text-[#C8A96E] font-medium">
                — Certamen Experiencias del Sabor • Caminos y Sabores
              </div>
            </blockquote>

            {/* Certifications and seals grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-[#141414]/70 border border-white/10 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-[#C8A96E] mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Sello IG</span>
                </div>
                <span className="text-xs text-[#A39B8B] font-light">Indicación Geográfica San Juan</span>
              </div>

              <div className="p-4 rounded-xl bg-[#141414]/70 border border-white/10 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-[#6B7B3A] mb-1">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A9C365]">Sin TACC</span>
                </div>
                <span className="text-xs text-[#A39B8B] font-light">Libre de gluten certificado</span>
              </div>

              <div className="p-4 rounded-xl bg-[#141414]/70 border border-white/10 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-[#D4B87A] mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">ArgOliva</span>
                </div>
                <span className="text-xs text-[#A39B8B] font-light">Distinción Internacional</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
