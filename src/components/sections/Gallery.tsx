'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Heart, Sparkles } from 'lucide-react';
import InstagramIcon from '@/components/ui/InstagramIcon';

interface GalleryItem {
  id: string;
  caption: string;
  tag: string;
  image: string;
}

const GALLERY_PHOTOS: GalleryItem[] = [
  {
    id: '1',
    tag: 'Finca Pedernal',
    caption: 'Nuestras botellas en el olivar de altura a 1.350 msnm con la cordillera de fondo.',
    image: '/images/hero_bottle_olivegrove.jpg',
  },
  {
    id: '2',
    tag: 'Oro Líquido',
    caption: 'Extracción en frío inmediata: color verde esmeralda y aromas de pasto fresco.',
    image: '/images/bottle_pour_liquid_gold.jpg',
  },
  {
    id: '3',
    tag: 'Premio Nacional',
    caption: 'Consagración como Mejor AOVE en Caminos y Sabores 2026 en La Rural.',
    image: '/images/awards_showcase.jpg',
  },
  {
    id: '4',
    tag: 'Casa Manuel',
    caption: 'Experiencias de alta cocina junto a grandes referentes gastronómicos de San Juan.',
    image: '/images/gastronomy_experience.jpg',
  },
  {
    id: '5',
    tag: 'El Ritual del Pan',
    caption: 'Pan de masa madre, quesos de campo y Familia Saleme en su estado más puro.',
    image: '/images/culinary_bread_table.jpg',
  },
  {
    id: '6',
    tag: 'Pastas de Autor',
    caption: 'Terminación con un hilo de AOVE sobre platos de La Vene San Juan.',
    image: '/images/culinary_pairing_pasta.jpg',
  },
  {
    id: '7',
    tag: 'Tradición Viva',
    caption: 'Todo empieza en el olivo: paciencia, respeto y cuidado diario del fruto.',
    image: '/images/olive_tree_origin.jpg',
  },
  {
    id: '8',
    tag: 'Identidad Olivo',
    caption: 'Compartiendo nuestro aceite virgen extra con la comunidad sanjuanina.',
    image: '/images/community_fair.jpg',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 sm:py-32 bg-[#0E0E0E] border-t border-[#C8A96E]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-18 gap-6">
          <div>
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#C8A96E] font-semibold block mb-3">
              Comunidad & Terruño • @familia_saleme
            </span>
            <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-5xl md:text-6xl text-[#F5F0EB] font-normal tracking-tight leading-tight">
              Momentos de Nuestra Finca
            </h2>
          </div>

          <a
            href="https://www.instagram.com/familia_saleme"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#C8A96E]/40 hover:border-[#C8A96E] bg-[#141414] text-xs font-semibold uppercase tracking-wider text-[#D4B87A] hover:text-[#F5F0EB] transition-all self-start md:self-auto group shadow-md"
          >
            <InstagramIcon className="w-4 h-4 text-[#C8A96E]" />
            <span>Seguinos en Instagram (5.6K)</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C8A96E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* 8 Real Photos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {GALLERY_PHOTOS.map((photo) => (
            <a
              key={photo.id}
              href="https://www.instagram.com/familia_saleme"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#141414] border border-white/10 group cursor-pointer shadow-lg"
            >
              <Image
                src={photo.image}
                alt={photo.caption}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Tag pill */}
              <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#0A0A0A]/70 backdrop-blur-sm border border-white/10 text-[10px] text-[#D4B87A] font-medium">
                {photo.tag}
              </div>

              {/* Instagram icon hover */}
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-[#C8A96E] opacity-0 group-hover:opacity-100 transition-opacity">
                <InstagramIcon className="w-3.5 h-3.5" />
              </div>

              {/* Caption on hover / bottom */}
              <div className="absolute bottom-3 left-3 right-3 text-[#F5F0EB]">
                <p className="text-[11px] sm:text-xs font-light text-white/90 line-clamp-2 leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
