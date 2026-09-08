'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mountain, Droplets, Sun, Compass, HeartHandshake, History } from 'lucide-react';

export default function Origin() {
  return (
    <section id="origen" className="py-24 sm:py-32 bg-[#0A0A0A] relative overflow-hidden border-t border-[#C8A96E]/15">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#6B7B3A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Tagline & Title */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#C8A96E] font-semibold block mb-3">
            El Terruño • Valle de Pedernal, San Juan
          </span>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-5xl md:text-6xl text-[#F5F0EB] font-normal tracking-tight leading-tight">
            Dos Generaciones de Pasión <br />
            <span className="italic bg-gradient-to-r from-[#FFF8EC] via-[#D4B87A] to-[#C8A96E] bg-clip-text text-fill-transparent">
              Al Pie de la Cordillera de los Andes
            </span>
          </h2>
        </div>

        {/* Top Story & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Storytelling */}
          <div className="lg:col-span-6 space-y-6 text-[#A39B8B] text-base sm:text-lg font-light leading-relaxed">
            <p>
              <strong className="text-[#F5F0EB] font-medium">Familia Saleme</strong> nació en el corazón olivícola de
              San Juan con una convicción clara: elaborar un aceite de oliva virgen extra sin concesiones industriales,
              donde el olivo sea respetado en su ciclo natural.
            </p>

            <p>
              Nuestra plantación en el <strong className="text-[#F5F0EB] font-medium">Valle de Pedernal</strong>, a
              1.350 metros de altitud, goza de una de las amplitudes térmicas más marcadas del mundo. Días de sol
              cuyano radiante y noches gélidas de montaña permiten que las aceitunas concentren una cantidad
              excepcional de polifenoles y aromas vivaces.
            </p>

            {/* Quote */}
            <blockquote className="p-6 rounded-2xl bg-[#141414] border-l-4 border-[#C8A96E] text-[#F5F0EB] shadow-lg font-['Playfair_Display',serif] text-lg sm:text-xl italic">
              “El aceite de oliva no se fabrica: se acompaña. Cada gota refleja el sol sanjuanino, el deshielo andino y
              la paciencia de dos generaciones en el campo.”
            </blockquote>

            <p className="text-sm sm:text-base text-[#A39B8B]">
              Con planta de extracción propia dentro del mismo predio, el fruto es cosechado a mano y procesado en menos
              de tres horas, garantizando una acidez ultrabaja (&lt; 0.20%) y frescura irrepetible.
            </p>
          </div>

          {/* Right Column: Real Photos Collage */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-[#C8A96E]/20 group">
              <Image
                src="/images/olive_tree_origin.jpg"
                alt="Olivares centenarios de Familia Saleme en Pedernal"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-xs font-medium text-white/90">
                Olivares en Finca Pedernal • San Juan, Argentina
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 group">
                <Image
                  src="/images/pedernal_valley.jpg"
                  alt="El Valle de Pedernal y la cordillera"
                  fill
                  sizes="300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-2.5 left-3 text-[11px] font-medium text-white/90">
                  1.350 msnm • Precordillera
                </div>
              </div>

              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 group">
                <Image
                  src="/images/harvest_field.jpg"
                  alt="Cosecha manual de aceitunas seleccionadas"
                  fill
                  sizes="300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-2.5 left-3 text-[11px] font-medium text-white/90">
                  Cosecha Manual Seleccionada
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Terroir & Quality Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-6 rounded-2xl bg-[#141414] border border-[#C8A96E]/20 hover:border-[#C8A96E] transition-all duration-300 group">
            <div className="w-11 h-11 rounded-xl bg-[#1D1D1D] flex items-center justify-center text-[#C8A96E] mb-4 group-hover:scale-110 transition-transform">
              <Mountain className="w-5 h-5" />
            </div>
            <h3 className="font-['Playfair_Display',serif] text-xl text-[#F5F0EB] font-normal mb-2">
              1.350 msnm de Altitud
            </h3>
            <p className="text-xs sm:text-sm text-[#A39B8B] font-light leading-relaxed">
              El Valle de Pedernal ofrece noches frías y suelos pedregosos calcáreos que le confieren al aceite un
              amargor noble y frescura balsámica.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141414] border border-[#C8A96E]/20 hover:border-[#C8A96E] transition-all duration-300 group">
            <div className="w-11 h-11 rounded-xl bg-[#1D1D1D] flex items-center justify-center text-[#6B7B3A] mb-4 group-hover:scale-110 transition-transform">
              <Sun className="w-5 h-5" />
            </div>
            <h3 className="font-['Playfair_Display',serif] text-xl text-[#F5F0EB] font-normal mb-2">
              300+ Días de Sol Andino
            </h3>
            <p className="text-xs sm:text-sm text-[#A39B8B] font-light leading-relaxed">
              La extrema luminosidad de San Juan estimula la fotosíntesis y la concentración natural de polifenoles
              antioxidantes de primera calidad.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141414] border border-[#C8A96E]/20 hover:border-[#C8A96E] transition-all duration-300 group">
            <div className="w-11 h-11 rounded-xl bg-[#1D1D1D] flex items-center justify-center text-[#D4B87A] mb-4 group-hover:scale-110 transition-transform">
              <Droplets className="w-5 h-5" />
            </div>
            <h3 className="font-['Playfair_Display',serif] text-xl text-[#F5F0EB] font-normal mb-2">
              Extracción en &lt; 3 Horas
            </h3>
            <p className="text-xs sm:text-sm text-[#A39B8B] font-light leading-relaxed">
              Molturación mecánica inmediata en nuestra propia planta in-situ a menos de 24°C, evitando cualquier inicio
              de fermentación u oxidación.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141414] border border-[#C8A96E]/20 hover:border-[#C8A96E] transition-all duration-300 group">
            <div className="w-11 h-11 rounded-xl bg-[#1D1D1D] flex items-center justify-center text-[#C8A96E] mb-4 group-hover:scale-110 transition-transform">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-['Playfair_Display',serif] text-xl text-[#F5F0EB] font-normal mb-2">
              2 Generaciones Familiares
            </h3>
            <p className="text-xs sm:text-sm text-[#A39B8B] font-light leading-relaxed">
              Cada botella lleva el apellido Saleme como sello de compromiso innegociable con el terruño, la honestidad
              y el arte culinario.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
