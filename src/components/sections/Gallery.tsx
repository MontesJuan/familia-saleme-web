'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from '@/lib/gsapConfig';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Compass, Sun, Mountain, Sparkles, HeartHandshake, History, createLucideIcon } from 'lucide-react';

const Instagram = createLucideIcon('Instagram', [
  ['rect', { width: '20', height: '20', x: '2', y: '2', rx: '5', ry: '5', key: 'rect' }],
  ['path', { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z', key: 'path' }],
  ['line', { x1: '17.5', x2: '17.51', y1: '6.5', y2: '6.5', key: 'line' }],
]);

interface GalleryItem {
  id: string;
  keyword: string;
  subtitle: string;
  tag: string;
  aspect: string;
  icon: React.ReactNode;
  motif: React.ReactNode;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'olivares',
    keyword: 'Olivares',
    subtitle: 'Nuestros árboles al pie de la majestuosa Cordillera de los Andes',
    tag: 'VALLE DE PEDERNAL',
    aspect: 'aspect-[4/3]',
    icon: <Mountain className="w-5 h-5 text-[#C8A96E]" />,
    motif: (
      <svg viewBox="0 0 300 200" fill="none" className="w-full h-full text-[#C8A96E] opacity-20 group-hover:opacity-35 transition-opacity duration-700" aria-hidden="true">
        {/* Mountain contours */}
        <path d="M0 160L60 110L140 145L220 85L300 135V200H0V160Z" fill="currentColor" fillOpacity="0.1" />
        <path d="M0 160L60 110L140 145L220 85L300 135" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M30 180L90 130L170 160L250 110L300 140" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" />
        {/* Sun elevation */}
        <circle cx="220" cy="55" r="18" stroke="currentColor" strokeWidth="1" />
        <circle cx="220" cy="55" r="26" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 4" />
        {/* Rhythmic orchard rows */}
        <line x1="30" y1="185" x2="270" y2="185" stroke="currentColor" strokeWidth="1" strokeDasharray="6 8" />
        <line x1="50" y1="175" x2="250" y2="175" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 6" />
      </svg>
    ),
  },
  {
    id: 'cosecha',
    keyword: 'Cosecha',
    subtitle: 'La precisión manual de recoger el fruto en su punto exacto',
    tag: 'AL ALBA · ENVERO',
    aspect: 'aspect-[4/3]',
    icon: <Sun className="w-5 h-5 text-[#C8A96E]" />,
    motif: (
      <svg viewBox="0 0 300 200" fill="none" className="w-full h-full text-[#C8A96E] opacity-20 group-hover:opacity-35 transition-opacity duration-700" aria-hidden="true">
        {/* Sunburst radial arcs */}
        <circle cx="150" cy="100" r="30" stroke="currentColor" strokeWidth="1" />
        <circle cx="150" cy="100" r="55" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" />
        <circle cx="150" cy="100" r="80" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 6" />
        <line x1="150" y1="20" x2="150" y2="40" stroke="currentColor" strokeWidth="1.2" />
        <line x1="150" y1="160" x2="150" y2="180" stroke="currentColor" strokeWidth="1.2" />
        <line x1="70" y1="100" x2="90" y2="100" stroke="currentColor" strokeWidth="1.2" />
        <line x1="210" y1="100" x2="230" y2="100" stroke="currentColor" strokeWidth="1.2" />
        {/* Olive cluster outline */}
        <ellipse cx="142" cy="95" rx="7" ry="11" transform="rotate(-15 142 95)" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.15" />
        <ellipse cx="158" cy="98" rx="7" ry="11" transform="rotate(20 158 98)" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.15" />
      </svg>
    ),
  },
  {
    id: 'tradicion',
    keyword: 'Tradición',
    subtitle: 'El legado y respeto por el fruto transmitido de padres a hijos',
    tag: 'HERENCIA SALEME',
    aspect: 'aspect-[4/3]',
    icon: <History className="w-5 h-5 text-[#C8A96E]" />,
    motif: (
      <svg viewBox="0 0 300 200" fill="none" className="w-full h-full text-[#C8A96E] opacity-20 group-hover:opacity-35 transition-opacity duration-700" aria-hidden="true">
        {/* Heritage Diamond & Rings */}
        <rect x="105" y="55" width="90" height="90" rx="4" transform="rotate(45 150 100)" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        <circle cx="150" cy="100" r="42" stroke="currentColor" strokeWidth="1" />
        <path d="M150 72V128M122 100H178" stroke="currentColor" strokeWidth="0.8" />
        {/* Roman numerals / seal accent */}
        <circle cx="150" cy="100" r="58" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 5" />
      </svg>
    ),
  },
  {
    id: 'proceso',
    keyword: 'Proceso',
    subtitle: 'Molienda continua en frío dentro de las primeras horas',
    tag: 'PRENSADO < 24°C',
    aspect: 'aspect-[4/3]',
    icon: <Sparkles className="w-5 h-5 text-[#C8A96E]" />,
    motif: (
      <svg viewBox="0 0 300 200" fill="none" className="w-full h-full text-[#C8A96E] opacity-20 group-hover:opacity-35 transition-opacity duration-700" aria-hidden="true">
        {/* Concentric millstone vortex & droplet ripples */}
        <circle cx="150" cy="100" r="18" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="150" cy="100" r="38" stroke="currentColor" strokeWidth="1" strokeDasharray="6 3" />
        <circle cx="150" cy="100" r="62" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" />
        <circle cx="150" cy="100" r="88" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" />
        {/* Pure drop at center */}
        <path d="M150 86C150 86 142 98 142 104C142 108.4 145.6 112 150 112C154.4 112 158 108.4 158 104C158 98 150 86 150 86Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    id: 'terroir',
    keyword: 'Terroir',
    subtitle: 'Suelos calcáreos, amplitud térmica extrema y aire de altura',
    tag: '1.400 METROS SNM',
    aspect: 'aspect-[4/3]',
    icon: <Compass className="w-5 h-5 text-[#C8A96E]" />,
    motif: (
      <svg viewBox="0 0 300 200" fill="none" className="w-full h-full text-[#C8A96E] opacity-20 group-hover:opacity-35 transition-opacity duration-700" aria-hidden="true">
        {/* Topographic elevation strata */}
        <path d="M20 120C70 80 140 140 210 100C250 75 280 90 280 90" stroke="currentColor" strokeWidth="1" />
        <path d="M20 140C80 100 150 160 220 120C260 95 280 110 280 110" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 2" />
        <path d="M20 160C90 120 160 180 230 140C270 115 280 130 280 130" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 4" />
        {/* GPS coordinates & altitude indicator */}
        <circle cx="150" cy="65" r="4" fill="currentColor" />
        <line x1="150" y1="52" x2="150" y2="78" stroke="currentColor" strokeWidth="0.8" />
        <line x1="137" y1="65" x2="163" y2="65" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    id: 'familia',
    keyword: 'Familia',
    subtitle: 'Pasión y compromiso incondicional en cada botella',
    tag: 'GENERACIONES',
    aspect: 'aspect-[4/3]',
    icon: <HeartHandshake className="w-5 h-5 text-[#C8A96E]" />,
    motif: (
      <svg viewBox="0 0 300 200" fill="none" className="w-full h-full text-[#C8A96E] opacity-20 group-hover:opacity-35 transition-opacity duration-700" aria-hidden="true">
        {/* Two interlocking generational rings */}
        <circle cx="130" cy="100" r="45" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="170" cy="100" r="45" stroke="currentColor" strokeWidth="1.2" />
        {/* Olive wreath framing */}
        <path d="M80 140C65 110 65 80 85 55" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M220 140C235 110 235 80 215 55" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
    ),
  },
];

export const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const grid = gridRef.current;
    if (!grid) return;

    const ctx = gsap.context(() => {
      gsap.from(Array.from(grid.children), {
        scrollTrigger: {
          trigger: grid,
          start: 'top 82%',
          once: true,
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="galeria"
      ref={sectionRef}
      className="relative w-full py-28 md:py-36 bg-[#0A0A0A] text-[#F5F0EB] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#6B7B3A]/[0.06] rounded-full blur-[150px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C8A96E]" />
            <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#C8A96E] font-medium font-inter">
              Testimonio Visual
            </span>
            <span className="w-8 h-[1px] bg-[#C8A96E]" />
          </div>

          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F5F0EB] tracking-tight font-normal mb-3">
            Galería
          </h2>

          <p className="font-playfair italic text-lg sm:text-xl text-[#A39B8B] font-light">
            Momentos de nuestra tierra
          </p>
        </div>

        {/* 6 Grid Items */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
        >
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative ${item.aspect} rounded-2xl overflow-hidden 
                bg-gradient-to-br from-[#181818] via-[#121212] to-[#0A0A0A] 
                border border-white/[0.08] hover:border-[#C8A96E]/70 
                shadow-[0_15px_35px_rgba(0,0,0,0.5)] 
                hover:shadow-[0_20px_45px_rgba(200,169,110,0.18)]
                transition-all duration-700 ease-out cursor-pointer flex flex-col justify-between p-6 sm:p-8`}
            >
              {/* Internal SVG vector motif background */}
              <div className="absolute inset-0 p-4 pointer-events-none flex items-center justify-center">
                {item.motif}
              </div>

              {/* Radial golden glow on hover */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              />

              {/* Decorative Corner marks */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/20 group-hover:border-[#C8A96E]/80 transition-colors duration-500" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-white/20 group-hover:border-[#C8A96E]/80 transition-colors duration-500" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-white/20 group-hover:border-[#C8A96E]/80 transition-colors duration-500" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/20 group-hover:border-[#C8A96E]/80 transition-colors duration-500" />

              {/* Top Bar: Tag & Number */}
              <div className="relative z-10 flex justify-between items-center">
                <span className="text-[10px] tracking-[0.22em] uppercase font-inter text-[#C8A96E] font-medium bg-[#C8A96E]/[0.08] px-2.5 py-1 rounded-full border border-[#C8A96E]/20">
                  {item.tag}
                </span>
                <span className="font-playfair text-sm text-[#A39B8B]/60 group-hover:text-[#D4B87A] transition-colors duration-500">
                  0{index + 1}
                </span>
              </div>

              {/* Bottom Content: Keyword & Subtitle that animates up on hover */}
              <div className="relative z-10 transform transition-transform duration-500 ease-out group-hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <h3 className="font-playfair text-2xl sm:text-3xl text-[#F5F0EB] group-hover:text-[#D4B87A] transition-colors duration-500 font-normal">
                    {item.keyword}
                  </h3>
                </div>

                <p className="font-inter text-xs sm:text-sm text-[#A39B8B] font-light leading-relaxed line-clamp-2 max-w-sm group-hover:text-[#F5F0EB]/90 transition-colors duration-500">
                  {item.subtitle}
                </p>

                {/* Subtle reveal line */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-inter uppercase tracking-widest text-[#C8A96E] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span>Explorar detalle</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Link at Bottom */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-center text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-[#A39B8B] font-inter mb-4">
            Seguí nuestro día a día entre olivares
          </p>

          <a
            href="https://instagram.com/familia_saleme"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#C8A96E]/40 bg-[#141414]/70 hover:bg-[#C8A96E] text-[#F5F0EB] hover:text-[#0A0A0A] transition-all duration-500 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          >
            <Instagram className="w-4 h-4 text-[#C8A96E] group-hover:text-[#0A0A0A] transition-colors duration-500" />
            <span className="font-inter text-xs sm:text-sm tracking-[0.18em] font-medium">
              @familia_saleme
            </span>
            <ArrowUpRight className="w-4 h-4 text-[#C8A96E] group-hover:text-[#0A0A0A] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
