'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Leaf, Apple, Flower2, Droplet, Flame } from 'lucide-react';

interface NoteItem {
  number: string;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
}

const NOTES: NoteItem[] = [
  {
    number: '01',
    title: 'Aceituna Verde',
    category: 'Frutado Intenso',
    description: 'Aroma vivo a aceituna fresca recolectada en verde al inicio del otoño andino.',
    icon: <Droplet className="w-4 h-4 text-[#C8A96E]" />,
  },
  {
    number: '02',
    title: 'Pasto Cortado',
    category: 'Herbáceo Vivaz',
    description: 'Sensación fresca que evoca el rocío matinal sobre los campos de Pedernal.',
    icon: <Leaf className="w-4 h-4 text-[#6B7B3A]" />,
  },
  {
    number: '03',
    title: 'Tomate Verde',
    category: 'Vegetal de Huerta',
    description: 'Complejidad vegetal que aporta frescura crujiente y vivacidad aromática.',
    icon: <Sparkles className="w-4 h-4 text-[#D4B87A]" />,
  },
  {
    number: '04',
    title: 'Hoja y Espárrago',
    category: 'Amargor Noble',
    description: 'Estructura elegante en boca que delata su altísima concentración de polifenoles naturales.',
    icon: <Leaf className="w-4 h-4 text-[#A9C365]" />,
  },
  {
    number: '05',
    title: 'Manzana & Plátano',
    category: 'Frutal Dulce',
    description: 'Toques sutiles de fruta verde que suavizan la entrada y aportan sedosidad.',
    icon: <Apple className="w-4 h-4 text-[#C8A96E]" />,
  },
  {
    number: '06',
    title: 'Final Especiado',
    category: 'Picor Aterciopelado',
    description: 'Persistencia cálida y limpia en garganta, sello inequívoco de un AOVE de pureza absoluta.',
    icon: <Flame className="w-4 h-4 text-[#E6CA85]" />,
  },
];

export default function TastingNotes() {
  return (
    <section id="perfil" className="py-24 sm:py-32 bg-[#0E0E0E] border-t border-[#C8A96E]/20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#6B7B3A]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#C8A96E] font-semibold block mb-3">
            Perfil Organoléptico • Blend Arbequina & Picual
          </span>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-5xl md:text-6xl text-[#F5F0EB] font-normal tracking-tight mb-5 leading-tight">
            Una Alquimia para los Sentidos
          </h2>
          <p className="text-sm sm:text-base text-[#A39B8B] font-light leading-relaxed">
            Nuestro blend insignia conjuga la sutileza aromática de la Arbequina con el cuerpo, carácter y longevidad
            antioxidante de la variedad Picual.
          </p>
        </div>

        {/* Centerpiece Layout: Real Oil Pouring Photo + Sensory Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left 3 Notes */}
          <div className="lg:col-span-4 space-y-4 order-2 lg:order-1">
            {NOTES.slice(0, 3).map((note) => (
              <div
                key={note.number}
                className="p-5 rounded-2xl bg-[#141414] border border-[#C8A96E]/20 hover:border-[#C8A96E] transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-[#C8A96E] tracking-wider">{note.number}</span>
                  <div className="p-1.5 rounded-lg bg-[#1F1F1F] group-hover:scale-110 transition-transform">
                    {note.icon}
                  </div>
                </div>
                <h3 className="font-['Playfair_Display',serif] text-lg text-[#F5F0EB] font-normal mb-1">
                  {note.title}
                </h3>
                <span className="text-[11px] uppercase tracking-wider text-[#C8A96E] font-medium block mb-2">
                  {note.category}
                </span>
                <p className="text-xs text-[#A39B8B] font-light leading-relaxed">{note.description}</p>
              </div>
            ))}
          </div>

          {/* Center Featured Photo: Pouring Liquid Gold */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex flex-col items-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#C8A96E]/40 shadow-2xl bg-[#0A0A0A] group">
              <Image
                src="/images/bottle_pour_liquid_gold.jpg"
                alt="Vertido de Aceite de Oliva Virgen Extra dorado Familia Saleme"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              <div className="absolute bottom-5 left-5 right-5 text-center">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4B87A] font-semibold block mb-1">
                  Prensado en Frío &lt; 24°C
                </span>
                <div className="font-['Playfair_Display',serif] text-lg text-[#F5F0EB]">
                  Oro Virgen Extra • Valle de Pedernal
                </div>
              </div>
            </div>
          </div>

          {/* Right 3 Notes */}
          <div className="lg:col-span-4 space-y-4 order-3">
            {NOTES.slice(3, 6).map((note) => (
              <div
                key={note.number}
                className="p-5 rounded-2xl bg-[#141414] border border-[#C8A96E]/20 hover:border-[#C8A96E] transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-[#C8A96E] tracking-wider">{note.number}</span>
                  <div className="p-1.5 rounded-lg bg-[#1F1F1F] group-hover:scale-110 transition-transform">
                    {note.icon}
                  </div>
                </div>
                <h3 className="font-['Playfair_Display',serif] text-lg text-[#F5F0EB] font-normal mb-1">
                  {note.title}
                </h3>
                <span className="text-[11px] uppercase tracking-wider text-[#C8A96E] font-medium block mb-2">
                  {note.category}
                </span>
                <p className="text-xs text-[#A39B8B] font-light leading-relaxed">{note.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sensory 3-Phase Strip (Aroma, En Boca, Final) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-[#141414] border border-[#C8A96E]/25">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] uppercase tracking-wider text-[#C8A96E] font-bold">En Nariz (Aroma)</span>
            <p className="text-xs text-[#A39B8B] leading-relaxed font-light">
              Explosión vegetal de pasto fresco recién cortado, higuera temprana y notas florales andinas.
            </p>
          </div>
          <div className="space-y-1 text-center sm:text-left sm:border-l sm:border-white/10 sm:pl-5">
            <span className="text-[10px] uppercase tracking-wider text-[#C8A96E] font-bold">En Boca (Gusto)</span>
            <p className="text-xs text-[#A39B8B] leading-relaxed font-light">
              Entrada sedosa y untuosa, amargor medio muy limpio que evoluciona hacia tomate verde y almendra amarga.
            </p>
          </div>
          <div className="space-y-1 text-center sm:text-left sm:border-l sm:border-white/10 sm:pl-5">
            <span className="text-[10px] uppercase tracking-wider text-[#C8A96E] font-bold">Retrogusto (Final)</span>
            <p className="text-xs text-[#A39B8B] leading-relaxed font-light">
              Picor especiado placentero, elegante y prolongado que limpia el paladar e invita a repetir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
