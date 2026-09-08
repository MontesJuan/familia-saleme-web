'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Wine, Flame, Sparkles } from 'lucide-react';

interface PairingCard {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  recom: string;
  chefNote: string;
}

const PAIRINGS: PairingCard[] = [
  {
    title: 'Panes de Masa Madre & Quesos Maduros',
    subtitle: 'El Ritual de Inicio',
    description:
      'Un hilo de Familia Saleme crudo sobre pan rústico recién horneado con escamas de sal marina, o acompañando quesos semiduros y brie.',
    image: '/images/pairings_pan_queso.jpg',
    recom: 'Queso Gouda añejo, Parmesano Reggiano, Focaccia con romero.',
    chefNote: 'El aceite potencia las notas lácticas y la corteza crocante.',
  },
  {
    title: 'Pastas Frescas & Risottos de Autor',
    subtitle: 'Terminación en Mesa',
    description:
      'Utilizado por prestigiosos restaurantes sanjuaninos como La Vene y Casa Manuel como toque final en caliente, donde el calor libera sus polifenoles.',
    image: '/images/pairings_pastas.jpg',
    recom: 'Ravioles de calabaza y nuez, Spaghetti alla chitarra, Risotto de hongos.',
    chefNote: 'Añadir 5 segundos antes de servir sin sobrecalentar.',
  },
  {
    title: 'Experiencias de Alta Cocina',
    subtitle: 'El Aliado de los Chefs',
    description:
      'Presente en las cartas de los restaurantes más exigentes de San Juan y Cuyo, elevando carnes a punto, carpaccios y emulsiones gourmet.',
    image: '/images/pairings_alta_cocina.jpg',
    recom: 'Carpaccio de lomo, Mollejas crocantes al limón, Pesca andina.',
    chefNote: 'Su amargor equilibrado corta la untuosidad de carnes nobles.',
  },
  {
    title: 'Ensaladas Mediterráneas & Vegetales',
    subtitle: 'Frescura de Huerta',
    description:
      'El compañero perfecto para vegetales de estación, ensalada tabule de Oriente Medio, tomates reliquia y emulsiones vivaces.',
    image: '/images/pairings_ensaladas.jpg',
    recom: 'Ensalada Tabule fresca, Tomates reliquia con albahaca, Vegetales asados.',
    chefNote: 'Resalta el dulzor natural y aporta un brillo esmeralda único.',
  },
];

export default function Pairings() {
  return (
    <section id="maridajes" className="py-24 sm:py-32 bg-[#0A0A0A] border-t border-[#C8A96E]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C8A96E] font-semibold mb-3">
            <UtensilsCrossed className="w-4 h-4 text-[#C8A96E]" />
            <span>Inspiración Culinaria • En las Mejores Mesas</span>
          </div>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-5xl md:text-6xl text-[#F5F0EB] font-normal tracking-tight mb-5 leading-tight">
            Maridajes de Autor
          </h2>
          <p className="text-sm sm:text-base text-[#A39B8B] font-light leading-relaxed">
            Descubrí cómo un aceite de oliva virgen extra de alta gama transforma cada plato cotidiano en una
            experiencia de alta cocina.
          </p>
        </div>

        {/* 4 Cards Grid with Real Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PAIRINGS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl overflow-hidden bg-[#141414] border border-[#C8A96E]/25 shadow-xl hover:border-[#C8A96E] transition-all duration-300 group flex flex-col"
            >
              {/* Photo */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/20" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0A0A0A]/80 backdrop-blur-md border border-white/20 text-[#D4B87A] text-[11px] font-semibold">
                  {item.subtitle}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-['Playfair_Display',serif] text-2xl text-[#F5F0EB] font-normal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A39B8B] font-light leading-relaxed">{item.description}</p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <div className="text-xs">
                    <strong className="text-[#D4B87A] font-semibold">Maridaje recomendado: </strong>
                    <span className="text-[#F5F0EB]/90 font-light">{item.recom}</span>
                  </div>
                  <div className="text-xs">
                    <strong className="text-[#6B7B3A] font-semibold">Consejo de Cata: </strong>
                    <span className="text-[#A39B8B] font-light">{item.chefNote}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
