'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface TastingNote {
  id: string;
  name: string;
  category: string;
  description: string;
  intensity: number; // 1 to 5
  position: 'left' | 'right';
  pathIndex: number;
  icon: React.ReactNode;
}

const TASTING_NOTES: TastingNote[] = [
  // Left Column (1 to 3)
  {
    id: 'aceituna-verde',
    name: 'Aceituna Verde',
    category: 'Frutado Intenso · Cosecha Temprana',
    description:
      'Frescura viva de fruto en envero recolectado a mano. Entrada franca con marcado carácter de clorofila pura y vigor andino.',
    intensity: 5,
    position: 'left',
    pathIndex: 0,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M4 3C8 6 12 7 20 7" strokeLinecap="round" />
        <path d="M12 7C14 4 18 3 20 3C20 6 18 8 15 8" strokeLinecap="round" strokeLinejoin="round" />
        <ellipse cx="9" cy="15" rx="5" ry="6" transform="rotate(-15 9 15)" strokeLinecap="round" />
        <path d="M8 9C8.5 10 9 11 9 11.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'pasto-cortado',
    name: 'Pasto Cortado',
    category: 'Herbáceo Vivaz · Frescor de Pedernal',
    description:
      'Aroma penetrante a césped recién segado bajo el rocío matinal. Aporta una vibrante sensación balsámica y vivaz en nariz.',
    intensity: 4,
    position: 'left',
    pathIndex: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M4 21C6 14 10 9 13 4" strokeLinecap="round" />
        <path d="M10 21C12 15 15 11 19 6" strokeLinecap="round" />
        <path d="M7 21C8 17 9 14 10 10" strokeLinecap="round" />
        <path d="M2 21H22" strokeLinecap="round" strokeOpacity="0.4" />
      </svg>
    ),
  },
  {
    id: 'tomate-verde',
    name: 'Tomate Verde',
    category: 'Complejidad Vegetal · Huerta Andina',
    description:
      'Evocación nítida a tomatera tradicional y tallos de follaje verde. Otorga una dimensión aromática profunda y refrescante.',
    intensity: 4,
    position: 'left',
    pathIndex: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="14" r="7.5" strokeLinecap="round" />
        <path d="M12 3V6.5" strokeLinecap="round" />
        <path d="M12 6.5C10 5.5 8 5.5 7 6" strokeLinecap="round" />
        <path d="M12 6.5C14 5.5 16 5.5 17 6" strokeLinecap="round" />
        <path d="M12 6.5L9.5 8.5" strokeLinecap="round" />
        <path d="M12 6.5L14.5 8.5" strokeLinecap="round" />
      </svg>
    ),
  },
  // Right Column (4 to 6)
  {
    id: 'hoja-esparrago',
    name: 'Hoja y Espárrago',
    category: 'Elegancia Silvestre · Amargor Noble',
    description:
      'Matices de hoja de olivo y brote tierno de espárrago silvestre. Manifiesta el amargor fino y equilibrado que define a los grandes aceites.',
    intensity: 4,
    position: 'right',
    pathIndex: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M4 20C4 14 8 9 14 6C14 12 10 17 4 20Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 20L11 11" strokeLinecap="round" />
        <path d="M18 21V10C18 7 19 4 20 3C19 6 17 7 17 10V21" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 12L19 14" strokeLinecap="round" />
        <path d="M17 16L19 18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'manzana',
    name: 'Manzana Verde',
    category: 'Frutal Delicado · Acidez Crujiente',
    description:
      'Luminosos ecos de manzana Granny Smith en mitad de paladar. Aporta un equilibrio exacto de frescura, limpieza y vivacidad frutal.',
    intensity: 3,
    position: 'right',
    pathIndex: 4,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 5C11 3 12 2 13 2C15 2 16 3.5 15.5 5" strokeLinecap="round" />
        <path
          d="M12 5C10 5 8 4 6 5.5C3.5 7.5 3 13 5.5 17.5C7 20 9 21.5 11 21C11.6 20.8 12.4 20.8 13 21C15 21.5 17 20 18.5 17.5C21 13 20.5 7.5 18 5.5C16 4 14 5 12 5Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'banana-floral',
    name: 'Banana y Floral',
    category: 'Persistencia Aromática · Final Sedoso',
    description:
      'Cierre aterciopelado con toques de cáscara de plátano verde y tenues flores blancas de precordillera. Persistencia armoniosa y dulce.',
    intensity: 4,
    position: 'right',
    pathIndex: 5,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="12" r="2.5" />
        <path d="M12 3.5C13.5 6 13.5 8 12 9.5C10.5 8 10.5 6 12 3.5Z" />
        <path d="M12 20.5C13.5 18 13.5 16 12 14.5C10.5 16 10.5 18 12 20.5Z" />
        <path d="M3.5 12C6 10.5 8 10.5 9.5 12C8 13.5 6 13.5 3.5 12Z" />
        <path d="M20.5 12C18 10.5 16 10.5 14.5 12C16 13.5 18 13.5 20.5 12Z" />
        <path d="M17 6C18 8 19 12 18 15" strokeDasharray="1.5 2" strokeLinecap="round" />
      </svg>
    ),
  },
];

// SVG connecting path definitions for Desktop (viewBox: 0 0 400 680)
// Center drop is at (200, 340)
const CONNECTOR_PATHS = [
  // Left 0 (Aceituna Verde, y ≈ 85) -> Ring (130, 291)
  { id: 0, d: 'M 0,85 C 75,85 85,291 130,291', start: [0, 85], end: [130, 291] },
  // Left 1 (Pasto Cortado, y ≈ 340) -> Ring (115, 340)
  { id: 1, d: 'M 0,340 L 115,340', start: [0, 340], end: [115, 340] },
  // Left 2 (Tomate Verde, y ≈ 595) -> Ring (130, 389)
  { id: 2, d: 'M 0,595 C 75,595 85,389 130,389', start: [0, 595], end: [130, 389] },
  // Right 3 (Hoja y Espárrago, y ≈ 85) -> Ring (270, 291)
  { id: 3, d: 'M 400,85 C 325,85 315,291 270,291', start: [400, 85], end: [270, 291] },
  // Right 4 (Manzana Verde, y ≈ 340) -> Ring (285, 340)
  { id: 4, d: 'M 400,340 L 285,340', start: [400, 340], end: [285, 340] },
  // Right 5 (Banana y Floral, y ≈ 595) -> Ring (270, 389)
  { id: 5, d: 'M 400,595 C 325,595 315,389 270,389', start: [400, 595], end: [270, 389] },
];

export default function TastingNotes() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const centerVisualRef = useRef<HTMLDivElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const rightColRef = useRef<HTMLDivElement | null>(null);
  const svgLinesRef = useRef<SVGSVGElement | null>(null);

  const [activeNoteId, setActiveNoteId] = useState<string | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Header reveal
      if (headerRef.current) {
        const headerElems = headerRef.current.querySelectorAll('.header-reveal');
        gsap.fromTo(
          headerElems,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      // 2. Center visual expansion & pulse
      if (centerVisualRef.current) {
        gsap.fromTo(
          centerVisualRef.current,
          { opacity: 0, scale: 0.82 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: centerVisualRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // 3. SVG connecting lines stroke-dasharray animation
      if (svgLinesRef.current) {
        const paths = svgLinesRef.current.querySelectorAll<SVGPathElement>('.svg-connector-path');
        paths.forEach((path, index) => {
          const length = path.getTotalLength();
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });

          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 1.3,
            delay: 0.15 + index * 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: svgLinesRef.current,
              start: 'top 75%',
            },
          });
        });

        // Connector endpoint nodes fade & scale in
        const nodes = svgLinesRef.current.querySelectorAll('.svg-connector-node');
        gsap.fromTo(
          nodes,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            delay: 0.6,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: svgLinesRef.current,
              start: 'top 75%',
            },
          }
        );
      }

      // 4. Staggered reveal for Left Column notes
      if (leftColRef.current) {
        const leftCards = leftColRef.current.querySelectorAll('.tasting-note-card');
        gsap.fromTo(
          leftCards,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.95,
            stagger: 0.18,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: leftColRef.current,
              start: 'top 78%',
            },
          }
        );
      }

      // 5. Staggered reveal for Right Column notes
      if (rightColRef.current) {
        const rightCards = rightColRef.current.querySelectorAll('.tasting-note-card');
        gsap.fromTo(
          rightCards,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.95,
            stagger: 0.18,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: rightColRef.current,
              start: 'top 78%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const leftNotes = TASTING_NOTES.filter((n) => n.position === 'left');
  const rightNotes = TASTING_NOTES.filter((n) => n.position === 'right');
  const activeNote = TASTING_NOTES.find((n) => n.id === activeNoteId);

  return (
    <section
      id="perfil"
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#0A0A0A] text-[#F5F0EB] py-28 md:py-36 px-6 sm:px-10 lg:px-16 overflow-hidden select-none"
    >
      {/* Subtle Background: Radial gradient from olive green very faded */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep Faded Olive & Gold Radial Lighting */}
        <div
          className="absolute inset-0 opacity-100"
          style={{
            background:
              'radial-gradient(ellipse 75% 65% at 50% 50%, rgba(107, 123, 58, 0.13) 0%, rgba(20, 20, 20, 0.45) 45%, #0A0A0A 80%)',
          }}
        />

        {/* Delicate golden accent glow at center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full bg-[#C8A96E]/[0.035] blur-[100px]" />

        {/* Fine concentric circular grid lines */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-[#C8A96E]/[0.04] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full border border-[#C8A96E]/[0.025] pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <div className="header-reveal inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#C8A96E]/20 bg-[#141414]/70 backdrop-blur-md mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E] animate-pulse" />
            <span className="font-['Inter',sans-serif] text-[11px] tracking-[0.28em] uppercase text-[#C8A96E] font-medium">
              Análisis Organoléptico
            </span>
          </div>

          <h2 className="header-reveal font-['Playfair_Display',serif] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#F5F0EB] leading-[1.1]">
            Perfil <span className="italic font-serif text-[#C8A96E]">Sensorial</span>
          </h2>

          <p className="header-reveal mt-4 font-['Playfair_Display',serif] italic text-lg sm:text-2xl text-[#C8A96E]/90 font-light tracking-wide">
            Un viaje para los sentidos
          </p>

          <p className="header-reveal mt-4 font-['Inter',sans-serif] text-sm sm:text-base text-[#A39B8B] font-light max-w-xl mx-auto leading-relaxed">
            Cosecha temprana de varietales seleccionados. La altitud extrema de Pedernal confiere un perfil aromático de extraordinaria viveza, armonía y persistencia.
          </p>

          <div className="header-reveal mt-8 h-[1px] w-28 mx-auto bg-gradient-to-r from-transparent via-[#C8A96E]/60 to-transparent" />
        </div>

        {/* DESKTOP LAYOUT (3 Columns: Left Notes | Center SVG Dial & Drop | Right Notes) */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-6 items-center min-h-[680px]">
          {/* Left Column: 3 Notes (Right Aligned towards center) */}
          <div
            ref={leftColRef}
            className="lg:col-span-4 flex flex-col justify-between h-[680px] py-3 pr-2"
          >
            {leftNotes.map((note) => {
              const isHovered = activeNoteId === note.id;
              return (
                <div
                  key={note.id}
                  onMouseEnter={() => setActiveNoteId(note.id)}
                  onMouseLeave={() => setActiveNoteId(null)}
                  className={`tasting-note-card group relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer text-right ${
                    isHovered
                      ? 'border-[#D4B87A] bg-[#141414]/90 shadow-[0_10px_35px_rgba(200,169,110,0.15)] -translate-x-1.5'
                      : 'border-[#C8A96E]/20 bg-[#141414]/60 hover:border-[#C8A96E]/50 hover:bg-[#141414]/80'
                  } backdrop-blur-md`}
                >
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-l from-[#C8A96E]/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Right connector anchor dot */}
                  <div
                    className={`absolute -right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 border-[#0A0A0A] transition-all duration-300 ${
                      isHovered
                        ? 'bg-[#D4B87A] scale-125 shadow-[0_0_12px_#D4B87A]'
                        : 'bg-[#C8A96E] shadow-[0_0_6px_rgba(200,169,110,0.5)]'
                    }`}
                  />

                  {/* Header Row: Category & Icon */}
                  <div className="flex items-center justify-end gap-3 mb-2.5">
                    <span className="font-['Inter',sans-serif] text-[10px] uppercase tracking-[0.22em] text-[#C8A96E] font-medium">
                      {note.category}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-300 ${
                        isHovered
                          ? 'bg-[#C8A96E] text-[#0A0A0A] border-[#C8A96E]'
                          : 'bg-[#C8A96E]/10 text-[#C8A96E] border-[#C8A96E]/20 group-hover:border-[#C8A96E]/50'
                      }`}
                    >
                      {note.icon}
                    </div>
                  </div>

                  {/* Title in Playfair */}
                  <h3 className="font-['Playfair_Display',serif] text-xl sm:text-2xl font-light text-[#F5F0EB] tracking-tight group-hover:text-[#D4B87A] transition-colors">
                    {note.name}
                  </h3>

                  {/* Description in Inter Muted */}
                  <p className="mt-2 font-['Inter',sans-serif] text-xs text-[#A39B8B] leading-relaxed font-light">
                    {note.description}
                  </p>

                  {/* Intensity dots */}
                  <div className="mt-3.5 flex items-center justify-end gap-1">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#A39B8B]/70 mr-2">Intensidad</span>
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${
                          i < note.intensity ? 'bg-[#C8A96E]' : 'bg-white/10'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Column: Abstract Gold SVG Ring & Oil Drop (Desktop) */}
          <div ref={centerVisualRef} className="lg:col-span-4 relative h-[680px] flex items-center justify-center">
            {/* SVG Connecting Lines & Celestial Drop Dial */}
            <svg
              ref={svgLinesRef}
              viewBox="0 0 400 680"
              className="w-full h-full overflow-visible pointer-events-none"
            >
              <defs>
                {/* Gold linear gradient for paths */}
                <linearGradient id="goldLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C8A96E" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#D4B87A" stopOpacity="1" />
                  <stop offset="100%" stopColor="#C8A96E" stopOpacity="0.8" />
                </linearGradient>

                {/* Drop Liquid Gradient */}
                <linearGradient id="oilDropGrad" x1="20%" y1="0%" x2="80%" y2="100%">
                  <stop offset="0%" stopColor="#F5E8C7" />
                  <stop offset="35%" stopColor="#D4B87A" />
                  <stop offset="70%" stopColor="#C8A96E" />
                  <stop offset="100%" stopColor="#6B7B3A" />
                </linearGradient>

                {/* Core Halo Filter */}
                <filter id="goldGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Connecting Lines from Cards to Central Ring */}
              {CONNECTOR_PATHS.map((line) => {
                const note = TASTING_NOTES[line.id];
                const isHovered = activeNoteId === note.id;

                return (
                  <g key={line.id}>
                    {/* Background faint guide track */}
                    <path
                      d={line.d}
                      fill="none"
                      stroke="#C8A96E"
                      strokeWidth="1"
                      strokeOpacity="0.12"
                      strokeDasharray="2 4"
                    />

                    {/* Animated Solid Drawing Path */}
                    <path
                      d={line.d}
                      fill="none"
                      stroke={isHovered ? '#F5E8C7' : 'url(#goldLineGrad)'}
                      strokeWidth={isHovered ? 2.5 : 1.3}
                      strokeLinecap="round"
                      className="svg-connector-path transition-all duration-300"
                      style={{
                        filter: isHovered ? 'drop-shadow(0 0 6px #D4B87A)' : 'none',
                      }}
                    />

                    {/* Outer Card Anchor Node */}
                    <circle
                      cx={line.start[0]}
                      cy={line.start[1]}
                      r={isHovered ? 4.5 : 3}
                      fill={isHovered ? '#F5E8C7' : '#D4B87A'}
                      className="svg-connector-node transition-all duration-300"
                    />

                    {/* Ring Connection Node */}
                    <circle
                      cx={line.end[0]}
                      cy={line.end[1]}
                      r={isHovered ? 5 : 3.5}
                      fill={isHovered ? '#D4B87A' : '#C8A96E'}
                      className="svg-connector-node transition-all duration-300"
                    />
                  </g>
                );
              })}

              {/* Central Abstract Ring Visual (Center: 200, 340) */}
              <g transform="translate(200, 340)">
                {/* Ambient breathing halo */}
                <circle
                  cx="0"
                  cy="0"
                  r="135"
                  fill="none"
                  stroke="#C8A96E"
                  strokeOpacity="0.08"
                  strokeWidth="1"
                />

                {/* Outer Celestial Degree Ring */}
                <circle
                  cx="0"
                  cy="0"
                  r="115"
                  fill="none"
                  stroke="#C8A96E"
                  strokeOpacity="0.25"
                  strokeWidth="1"
                  strokeDasharray="2 6"
                />

                {/* Dial Ticks (every 30 degrees) */}
                {[...Array(12)].map((_, idx) => (
                  <line
                    key={idx}
                    x1="0"
                    y1="-115"
                    x2="0"
                    y2="-107"
                    stroke="#C8A96E"
                    strokeWidth={idx % 3 === 0 ? 1.8 : 0.8}
                    strokeOpacity={idx % 3 === 0 ? 0.7 : 0.3}
                    transform={`rotate(${idx * 30})`}
                  />
                ))}

                {/* Middle Rotating Orbit Ring */}
                <circle
                  cx="0"
                  cy="0"
                  r="95"
                  fill="none"
                  stroke="#D4B87A"
                  strokeOpacity="0.35"
                  strokeWidth="1.2"
                />

                {/* Inner Glow Orbit */}
                <circle
                  cx="0"
                  cy="0"
                  r="78"
                  fill="#141414"
                  stroke="#C8A96E"
                  strokeOpacity="0.3"
                  strokeWidth="1"
                  filter="url(#goldGlow)"
                />

                {/* Central Stylized Golden Oil Drop SVG */}
                <g className="transition-transform duration-500 hover:scale-105">
                  {/* Subtle drop shadow glow */}
                  <path
                    d="M 0,-42 C 0,-42 32,8 32,32 C 32,50 18,64 0,64 C -18,64 -32,50 -32,32 C -32,8 0,-42 0,-42 Z"
                    fill="url(#oilDropGrad)"
                    filter="url(#goldGlow)"
                    opacity="0.85"
                  />

                  {/* Core Oil Drop Silhouette */}
                  <path
                    d="M 0,-42 C 0,-42 32,8 32,32 C 32,50 18,64 0,64 C -18,64 -32,50 -32,32 C -32,8 0,-42 0,-42 Z"
                    fill="url(#oilDropGrad)"
                    stroke="#F5E8C7"
                    strokeWidth="1.2"
                    strokeOpacity="0.6"
                  />

                  {/* Specular Liquid Reflection Highlight */}
                  <path
                    d="M -6,-15 C -3,-28 -2,-32 0,-36 C -12,-15 -22,10 -22,28 C -22,38 -16,48 -8,52 C -15,46 -18,36 -18,26 C -18,8 -10,-4 -6,-15 Z"
                    fill="#FFFFFF"
                    opacity="0.35"
                  />

                  {/* Tiny secondary sparkle dot */}
                  <circle cx="12" cy="38" r="2" fill="#FFFFFF" opacity="0.4" />
                </g>

                {/* Central Labels around ring */}
                <text
                  x="0"
                  y="88"
                  textAnchor="middle"
                  className="font-['Inter',sans-serif] text-[9px] uppercase tracking-[0.3em] fill-[#C8A96E] font-medium"
                >
                  {activeNote ? activeNote.name : 'EXTRA VIRGEN'}
                </text>
                <text
                  x="0"
                  y="102"
                  textAnchor="middle"
                  className="font-['Inter',sans-serif] text-[7.5px] uppercase tracking-[0.25em] fill-[#A39B8B]"
                >
                  {activeNote ? activeNote.category : 'SAN JUAN · COSECHA 2026'}
                </text>
              </g>
            </svg>
          </div>

          {/* Right Column: 3 Notes (Left Aligned towards center) */}
          <div
            ref={rightColRef}
            className="lg:col-span-4 flex flex-col justify-between h-[680px] py-3 pl-2"
          >
            {rightNotes.map((note) => {
              const isHovered = activeNoteId === note.id;
              return (
                <div
                  key={note.id}
                  onMouseEnter={() => setActiveNoteId(note.id)}
                  onMouseLeave={() => setActiveNoteId(null)}
                  className={`tasting-note-card group relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer text-left ${
                    isHovered
                      ? 'border-[#D4B87A] bg-[#141414]/90 shadow-[0_10px_35px_rgba(200,169,110,0.15)] translate-x-1.5'
                      : 'border-[#C8A96E]/20 bg-[#141414]/60 hover:border-[#C8A96E]/50 hover:bg-[#141414]/80'
                  } backdrop-blur-md`}
                >
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#C8A96E]/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Left connector anchor dot */}
                  <div
                    className={`absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 border-[#0A0A0A] transition-all duration-300 ${
                      isHovered
                        ? 'bg-[#D4B87A] scale-125 shadow-[0_0_12px_#D4B87A]'
                        : 'bg-[#C8A96E] shadow-[0_0_6px_rgba(200,169,110,0.5)]'
                    }`}
                  />

                  {/* Header Row: Category & Icon */}
                  <div className="flex items-center justify-start gap-3 mb-2.5">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-300 ${
                        isHovered
                          ? 'bg-[#C8A96E] text-[#0A0A0A] border-[#C8A96E]'
                          : 'bg-[#C8A96E]/10 text-[#C8A96E] border-[#C8A96E]/20 group-hover:border-[#C8A96E]/50'
                      }`}
                    >
                      {note.icon}
                    </div>
                    <span className="font-['Inter',sans-serif] text-[10px] uppercase tracking-[0.22em] text-[#C8A96E] font-medium">
                      {note.category}
                    </span>
                  </div>

                  {/* Title in Playfair */}
                  <h3 className="font-['Playfair_Display',serif] text-xl sm:text-2xl font-light text-[#F5F0EB] tracking-tight group-hover:text-[#D4B87A] transition-colors">
                    {note.name}
                  </h3>

                  {/* Description in Inter Muted */}
                  <p className="mt-2 font-['Inter',sans-serif] text-xs text-[#A39B8B] leading-relaxed font-light">
                    {note.description}
                  </p>

                  {/* Intensity dots */}
                  <div className="mt-3.5 flex items-center justify-start gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${
                          i < note.intensity ? 'bg-[#C8A96E]' : 'bg-white/10'
                        }`}
                      />
                    ))}
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#A39B8B]/70 ml-2">Intensidad</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE & TABLET LAYOUT (< lg) */}
        <div className="lg:hidden space-y-12">
          {/* Central Visual Showcase on Mobile */}
          <div className="flex flex-col items-center justify-center py-6">
            <div className="relative w-64 h-64 flex items-center justify-center">
              {/* Outer glowing rings */}
              <div className="absolute inset-0 rounded-full border border-[#C8A96E]/20 border-dashed animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-[#C8A96E]/30" />
              <div className="absolute inset-10 rounded-full bg-[#141414] border border-[#C8A96E]/20 flex items-center justify-center shadow-2xl">
                {/* SVG Oil Drop */}
                <svg viewBox="0 0 100 120" className="w-20 h-24">
                  <defs>
                    <linearGradient id="mobileOilDropGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F5E8C7" />
                      <stop offset="40%" stopColor="#D4B87A" />
                      <stop offset="70%" stopColor="#C8A96E" />
                      <stop offset="100%" stopColor="#6B7B3A" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 50,15 C 50,15 80,55 80,75 C 80,92 66,105 50,105 C 34,105 20,92 20,75 C 20,55 50,15 50,15 Z"
                    fill="url(#mobileOilDropGrad)"
                    stroke="#F5E8C7"
                    strokeWidth="1"
                  />
                  <path
                    d="M 44,35 C 47,24 49,20 50,18 C 40,32 32,52 32,68 C 32,77 37,85 43,88 C 37,83 35,75 35,68 C 35,53 41,44 44,35 Z"
                    fill="#FFFFFF"
                    opacity="0.35"
                  />
                </svg>
              </div>
            </div>

            <span className="mt-4 font-['Inter',sans-serif] text-xs uppercase tracking-[0.3em] text-[#C8A96E] font-medium">
              Gota de Oro Virgen Extra
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#A39B8B]">
              Pedernal · San Juan
            </span>
          </div>

          {/* 6 Notes in 1 or 2 Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {TASTING_NOTES.map((note) => (
              <div
                key={note.id}
                className="relative p-6 rounded-2xl border border-[#C8A96E]/20 bg-[#141414]/70 backdrop-blur-md shadow-lg"
              >
                {/* Left accent hairline */}
                <div className="absolute top-6 bottom-6 left-0 w-[2px] bg-gradient-to-b from-[#C8A96E] to-transparent" />

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#C8A96E]/10 border border-[#C8A96E]/20 flex items-center justify-center text-[#C8A96E]">
                    {note.icon}
                  </div>
                  <span className="font-['Inter',sans-serif] text-[10px] uppercase tracking-[0.2em] text-[#C8A96E] font-medium">
                    {note.category}
                  </span>
                </div>

                <h3 className="font-['Playfair_Display',serif] text-xl font-light text-[#F5F0EB]">
                  {note.name}
                </h3>

                <p className="mt-2 font-['Inter',sans-serif] text-xs text-[#A39B8B] leading-relaxed font-light">
                  {note.description}
                </p>

                <div className="mt-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full ${
                        i < note.intensity ? 'bg-[#C8A96E]' : 'bg-white/10'
                      }`}
                    />
                  ))}
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#A39B8B]/70 ml-2">Intensidad</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sensory Footer Note / Acidity Badge */}
        <div className="mt-20 pt-10 border-t border-[#C8A96E]/15 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[#C8A96E]/30 bg-[#141414] flex items-center justify-center text-[#D4B87A] font-serif text-sm font-semibold shadow-inner">
              0.18
            </div>
            <div>
              <span className="block font-['Playfair_Display',serif] text-sm text-[#F5F0EB]">
                Acidez Libre Certificada &lt; 0.18%
              </span>
              <span className="font-['Inter',sans-serif] text-xs text-[#A39B8B] font-light">
                Categoría Premium Extra Virgen internacional
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 font-['Inter',sans-serif] text-xs text-[#C8A96E] tracking-[0.2em] uppercase">
            <span>Prensado en Frío</span>
            <span className="w-1 h-1 rounded-full bg-[#C8A96E]/40" />
            <span>Sin Filtrar</span>
            <span className="w-1 h-1 rounded-full bg-[#C8A96E]/40" />
            <span>Edición Limitada</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export { TastingNotes };
