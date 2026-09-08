'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Trophy, Star, ShieldCheck, Sparkles, CheckCircle, Award } from 'lucide-react';

const OFFICIAL_LAURELS = [
  {
    place: '1° PUESTO',
    title: 'CAMINOS Y SABORES 2026',
    subtitle: 'Mejor AOVE del País • Experiencias del Sabor',
    featured: true,
  },
  {
    place: '1° PUESTO',
    title: 'ARGOLIVA NACIONAL',
    subtitle: 'Categoría Grandes Productores',
    featured: false,
  },
  {
    place: '3° PUESTO',
    title: 'ARGOLIVA INTERNACIONAL',
    subtitle: 'Categoría Grandes Productores',
    featured: false,
  },
  {
    place: '5 ESTRELLAS ★★★★★',
    title: 'LA GUÍA DIGITAL',
    subtitle: 'Argentina Virgen Extra',
    featured: false,
  },
  {
    place: 'MEDALLA DE PLATA',
    title: 'OLIVE JAPAN 2024',
    subtitle: 'International Extra Virgin Olive Oil',
    featured: false,
  },
];

export default function Awards() {
  return (
    <section id="premios" className="py-24 sm:py-32 bg-[#0C0E0A] border-t border-[#C8A96E]/20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#4A582E]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C8A96E]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Brand Mantra Banner: "No todos los aceites de oliva son iguales" */}
        <div className="mb-16 sm:mb-20 text-center">
          <div className="inline-block relative px-8 sm:px-14 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-[#1A2210] via-[#2F3D1C] to-[#1A2210] border border-[#5A6E35]/40 shadow-2xl">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#C8A96E] font-semibold block mb-1">
              La Diferencia del Valle de Pedernal
            </span>
            <p className="font-['Playfair_Display',serif] text-2xl sm:text-4xl text-[#F5F0EB] font-normal tracking-wide">
              No todos los aceites de oliva{' '}
              <span className="italic font-serif text-[#D4B87A]">Son Iguales.</span>
            </p>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#C8A96E] font-semibold block mb-3">
            Palmarés Oficial • Argentina & Japón
          </span>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-5xl md:text-6xl text-[#F5F0EB] font-normal tracking-tight mb-5 leading-tight">
            El Aceite Más Premiado <br />
            <span className="italic bg-gradient-to-r from-[#FFF8EC] via-[#D4B87A] to-[#C8A96E] bg-clip-text text-fill-transparent">
              del Valle de Pedernal
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#DDD6CA] font-light leading-relaxed">
            Consagrado en certámenes nacionales e internacionales mediante rigurosas catas a ciegas de jurados y sommeliers
            expertos en análisis sensorial.
          </p>
        </div>

        {/* Official Laurel Wreaths Ribbon (ArgOliva, Caminos y Sabores, Olive Japan, 5 Estrellas) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-16 sm:mb-20">
          {OFFICIAL_LAURELS.map((laurel, idx) => (
            <div
              key={idx}
              className={`p-4 sm:p-5 rounded-2xl border text-center flex flex-col justify-between transition-all duration-300 ${
                laurel.featured
                  ? 'bg-gradient-to-b from-[#222E14] to-[#12180A] border-[#C8A96E] shadow-xl col-span-2 md:col-span-1'
                  : 'bg-[#12150D]/80 border-white/10 hover:border-[#C8A96E]/50'
              }`}
            >
              <div className="flex justify-center mb-2 text-[#C8A96E]">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
              </div>
              <div>
                <span className={`text-xs sm:text-sm font-bold block tracking-wider ${laurel.featured ? 'text-[#FFDF9E]' : 'text-[#D4B87A]'}`}>
                  {laurel.place}
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-[#F5F0EB] block mt-1">
                  {laurel.title}
                </span>
                <span className="text-[9px] sm:text-[10px] text-[#A39B8B] font-light block mt-1">
                  {laurel.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Two-Column Editorial Layout with the exact requested photos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
          {/* Left Column: Official Award Stage Photography */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Stage Photo: premio.jpeg */}
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-[#C8A96E]/40 shadow-2xl bg-[#141414] group">
              <Image
                src="/images/premio_stage_caminos.jpg"
                alt="Familia Saleme recibiendo el premio al Mejor Aceite de Oliva de Argentina en Caminos y Sabores"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25" />

              {/* Gold Ribbon Badge */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0A0A]/90 backdrop-blur-md border border-[#C8A96E]">
                <Trophy className="w-4 h-4 text-[#C8A96E]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4B87A]">
                  Ganador 2026 • Escenario Mayor
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 text-[#F5F0EB]">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#C8A96E] font-semibold block mb-0.5">
                  Caminos y Sabores • La Rural
                </span>
                <p className="text-xs sm:text-sm font-light text-white/95">
                  Los productores de Familia Saleme con la llave consagratoria como Mejor Aceite de Oliva Virgen Extra del certamen.
                </p>
              </div>
            </div>

            {/* Sub-photo strip with booth photo (premio2.jpeg) & bottle in olive grove */}
            <div className="grid grid-cols-2 gap-4">
              {/* Stand Photo: premio2.jpeg */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 group">
                <Image
                  src="/images/premio_booth_caminos.jpg"
                  alt="Celebración en el stand institucional de San Juan"
                  fill
                  sizes="300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 text-[11px] font-medium text-white/90 leading-tight">
                  Stand San Juan • Festejo Oficial
                </div>
              </div>

              {/* Bottle with olive grove background: bottle_olive_tree_secrets.jpg */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#C8A96E]/30 group">
                <Image
                  src="/images/brand/bottle_olive_tree_secrets.jpg"
                  alt="Blend Picual & Arbequina Familia Saleme al pie del olivo centenario"
                  fill
                  sizes="300px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3">
                  <span className="text-[9px] uppercase tracking-wider text-[#C8A96E] font-semibold block">
                    Varietal Distinguido
                  </span>
                  <span className="text-[11px] font-medium text-white/95">
                    Blend Picual & Arbequina
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Distinction Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C8A96E] font-semibold mb-2">
                <Star className="w-3.5 h-3.5 fill-[#C8A96E]" />
                <span>Orgullo Sanjuanino</span>
              </div>
              <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-4xl text-[#F5F0EB] font-normal leading-tight mb-4">
                El Fruto del Cuidado Artesanal y el Terruño de Altura
              </h3>
              <p className="text-sm sm:text-base text-[#DDD6CA] font-light leading-relaxed">
                Familia Saleme consolida una trayectoria de reconocimientos al más alto nivel: Primer Premio en Caminos y Sabores,
                máxima distinción en ArgOliva, 5 Estrellas de la Guía Digital y Medalla de Plata en Olive Japan.
                Un reconocimiento al fruto cosechado a mano a 1.350 msnm con agua pura de deshielo andino.
              </p>
            </div>

            {/* Tasting Notes Quote */}
            <blockquote className="p-6 rounded-2xl bg-[#141A10] border border-[#5A6E35]/40 text-[#F5F0EB] shadow-xl relative">
              <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#C8A96E] text-[#0A0A0A] text-[10px] font-bold uppercase tracking-wider">
                Dictamen del Jurado
              </div>
              <p className="font-['Playfair_Display',serif] text-base sm:text-lg italic text-[#F5F0EB]/95 leading-relaxed mb-3 mt-1">
                “Frutado verde sobresaliente con notas vivas de hoja de olivo, alcachofa y tomate fresco. Amargo equilibrado
                y un picor persistente y sedoso en garganta que certifica una concentración extraordinaria de polifenoles.”
              </p>
              <div className="text-xs text-[#D4B87A] font-medium">
                — Panel de Sommeliers • Experiencias del Sabor
              </div>
            </blockquote>

            {/* Certifications and seals grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-[#141810]/80 border border-white/10 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-[#C8A96E] mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Sello IG</span>
                </div>
                <span className="text-xs text-[#A39B8B] font-light">Indicación Geográfica San Juan</span>
              </div>

              <div className="p-4 rounded-xl bg-[#141810]/80 border border-white/10 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-[#A9C365] mb-1">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A9C365]">Sin TACC</span>
                </div>
                <span className="text-xs text-[#A39B8B] font-light">Libre de gluten certificado</span>
              </div>

              <div className="p-4 rounded-xl bg-[#141810]/80 border border-white/10 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-[#D4B87A] mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Olive Japan</span>
                </div>
                <span className="text-xs text-[#A39B8B] font-light">Medalla de Plata Internacional</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
