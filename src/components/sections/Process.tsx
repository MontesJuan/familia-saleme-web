'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsapConfig';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Stage {
  number: string;
  phase: string;
  title: string;
  description: string;
  subtitle: string;
  tags: string[];
  icon: React.ReactNode;
}

const stages: Stage[] = [
  {
    number: '01',
    phase: 'FASE I · ORIGEN & TERROIR',
    title: 'Cultivo',
    subtitle: 'Olivares propios en el corazón de Pedernal',
    description:
      'A más de 1.400 metros sobre el nivel del mar, en un microclima único con notable amplitud térmica y agua pura de deshielo andino, nuestros olivos Arbequina y Picual crecen con un perfil sensorial inigualable.',
    tags: ['Valle de Pedernal', '1.400 msnm', 'Riego por goteo andino', 'Suelo calcáreo'],
    icon: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-14 h-14 md:w-16 md:h-16 text-[#C8A96E]"
        aria-hidden="true"
      >
        <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
        {/* Tree trunk & roots */}
        <path
          d="M40 64V38M40 64C36 64 32 66 30 68M40 64C44 64 48 66 50 68"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Main branches */}
        <path
          d="M40 44C34 40 28 42 24 38M40 48C46 44 52 46 56 42M40 38C38 32 34 28 32 26M40 38C42 32 46 28 48 26"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Stylized olive leaves */}
        <ellipse cx="22" cy="36" rx="6" ry="3" transform="rotate(-25 22 36)" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
        <ellipse cx="58" cy="40" rx="6" ry="3" transform="rotate(25 58 40)" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
        <ellipse cx="30" cy="24" rx="5" ry="2.5" transform="rotate(-40 30 24)" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
        <ellipse cx="50" cy="24" rx="5" ry="2.5" transform="rotate(40 50 24)" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
        <ellipse cx="40" cy="18" rx="5" ry="2.5" transform="rotate(90 40 18)" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
        {/* Hanging olives */}
        <circle cx="28" cy="42" r="2.5" fill="currentColor" />
        <circle cx="52" cy="48" r="2.5" fill="currentColor" />
        <circle cx="44" cy="30" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: '02',
    phase: 'FASE II · RECOLECCIÓN ARTESANAL',
    title: 'Cosecha',
    subtitle: 'Recolección en el momento óptimo de maduración',
    description:
      'Cosecha manual temprana durante el alba, envero temprano, cuando la aceituna alcanza su pico máximo de antioxidantes y polifenoles. El fruto nunca toca el suelo y es transportado de inmediato para evitar la oxidación.',
    tags: ['Cosecha manual', 'Envero temprano', 'Selección racimo a racimo', 'Sin impacto mecánico'],
    icon: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-14 h-14 md:w-16 md:h-16 text-[#C8A96E]"
        aria-hidden="true"
      >
        <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
        {/* Olive branch */}
        <path
          d="M20 28C28 26 44 28 60 22"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Leaves */}
        <ellipse cx="32" cy="24" rx="6" ry="2.5" transform="rotate(-20 32 24)" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
        <ellipse cx="48" cy="22" rx="6" ry="2.5" transform="rotate(-10 48 22)" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.15" />
        <circle cx="38" cy="32" r="3.5" fill="currentColor" />
        <circle cx="52" cy="30" r="3.5" fill="currentColor" />
        {/* Hand reaching out gently */}
        <path
          d="M18 64C26 62 34 58 40 52L46 44C47.5 42 49 40 52 41C54 41.5 54 43.5 51 46L45 52C48 50 51 49 53 50.5C54.5 51.5 54 53.5 51 55L43 60M36 55L24 68"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: '03',
    phase: 'FASE III · MOLIENDA & EXTRACCIÓN',
    title: 'Extracción',
    subtitle: 'Prensado en frío en nuestra propia planta',
    description:
      'Procesamos la oliva dentro de las primeras horas tras la cosecha en nuestra almazara propia. Primera extracción exclusivamente en frío, a temperatura inferior a 24°C, reteniendo los aromas herbáceos y propiedades nutricionales intactas.',
    tags: ['Primera extracción en frío', 'Temperatura < 24°C', 'Planta propia en origen', 'Acidez < 0.2%'],
    icon: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-14 h-14 md:w-16 md:h-16 text-[#C8A96E]"
        aria-hidden="true"
      >
        <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
        {/* Cold press mill discs / geometry */}
        <circle cx="40" cy="30" r="14" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
        <circle cx="40" cy="30" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M26 30H18M54 30H62M40 16V8M40 52V44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Falling golden droplet */}
        <path
          d="M40 46C40 46 33 54 33 59C33 63 36.1 66 40 66C43.9 66 47 63 47 59C47 54 40 46 40 46Z"
          fill="currentColor"
          fillOpacity="0.25"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        {/* Concentric gentle ripple at bottom */}
        <ellipse cx="40" cy="71" rx="14" ry="2.5" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
      </svg>
    ),
  },
  {
    number: '04',
    phase: 'FASE IV · GUARDA & EMBOTELLADO',
    title: 'Embotellado',
    subtitle: 'Envasado con el máximo cuidado artesanal',
    description:
      'Decantación natural y envasado en botellas de vidrio oscuro de alta densidad que protegen el aceite de la radiación UV y del oxígeno. Cada botella es sellada a mano, preservando la frescura del campo sanjuanino hasta tu mesa.',
    tags: ['Vidrio oscuro filtro UV', 'Sellado hermético', 'Partidas numeradas', 'Trazabilidad total'],
    icon: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-14 h-14 md:w-16 md:h-16 text-[#C8A96E]"
        aria-hidden="true"
      >
        <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
        {/* Bottle silhouette */}
        <path
          d="M36 16H44V24C44 26 48 30 48 35V65C48 67 46.5 68 44 68H36C33.5 68 32 67 32 65V35C32 30 36 26 36 24V16Z"
          stroke="currentColor"
          strokeWidth="1.8"
          fill="currentColor"
          fillOpacity="0.1"
          strokeLinejoin="round"
        />
        {/* Cork / cap */}
        <rect x="37" y="12" width="6" height="4" rx="1" fill="currentColor" />
        {/* Label frame */}
        <rect x="35" y="40" width="10" height="18" rx="1" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" strokeDasharray="2 2" />
        <circle cx="40" cy="48" r="2" fill="currentColor" />
        {/* Subtle sparkle accents */}
        <path d="M56 22L57 26L61 27L57 28L56 32L55 28L51 27L55 26L56 22Z" fill="currentColor" />
        <path d="M22 46L23 48L25 49L23 50L22 52L21 50L19 49L21 48L22 46Z" fill="currentColor" />
      </svg>
    ),
  },
];

export const Process: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const container = containerRef.current;
    const progressFill = progressFillRef.current;

    if (!section || !container) return;

    const ctx = gsap.context(() => {
      // Calculate total horizontal scroll distance
      const getScrollAmount = () => container.scrollWidth - window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${getScrollAmount()}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (progressTextRef.current) {
              const currentStep = Math.min(
                4,
                Math.max(1, Math.floor(self.progress * 4) + 1)
              );
              progressTextRef.current.textContent = `0${currentStep} / 04`;
            }
          },
        },
      });

      tl.to(container, {
        x: () => -getScrollAmount(),
        ease: 'none',
      });

      if (progressFill) {
        tl.to(
          progressFill,
          {
            scaleX: 1,
            ease: 'none',
          },
          0
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="proceso"
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-[#0A0A0A] text-[#F5F0EB]"
    >
      {/* Pinned Top Bar / Section Identity */}
      <div className="absolute top-8 md:top-12 left-6 md:left-16 lg:left-24 z-30 pointer-events-none">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-6 h-[1px] bg-[#C8A96E]" />
          <span className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-[#C8A96E] font-medium font-inter">
            Meticulosa Dedicación
          </span>
        </div>
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F5F0EB] tracking-tight font-normal">
          Nuestro Proceso
        </h2>
      </div>

      {/* Top right stage counter */}
      <div className="absolute top-8 md:top-12 right-6 md:right-16 lg:right-24 z-30 pointer-events-none hidden sm:flex items-center gap-3">
        <span
          ref={progressTextRef}
          className="font-playfair text-xl md:text-2xl text-[#C8A96E] tracking-widest"
        >
          01 / 04
        </span>
      </div>

      {/* Horizontal Scroll Track: 400vw width, 4 panels of 100vw */}
      <div
        ref={containerRef}
        className="flex flex-row w-[400vw] h-screen will-change-transform"
      >
        {stages.map((stage, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={stage.number}
              className={`w-screen h-screen flex-shrink-0 flex items-center justify-center relative px-6 sm:px-12 md:px-20 lg:px-32 transition-colors duration-700 ${
                isEven ? 'bg-[#0D0D0D]' : 'bg-[#0A0A0A]'
              }`}
            >
              {/* Subtle ambient light glow */}
              <div
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] md:w-[680px] h-[480px] md:h-[680px] rounded-full pointer-events-none blur-[120px] opacity-25"
                style={{
                  background:
                    index % 2 === 0
                      ? 'radial-gradient(circle, rgba(200, 169, 110, 0.18) 0%, transparent 70%)'
                      : 'radial-gradient(circle, rgba(107, 123, 58, 0.16) 0%, transparent 70%)',
                }}
              />

              {/* Giant watermark number */}
              <div
                aria-hidden="true"
                className="absolute right-4 sm:right-12 md:right-24 bottom-6 sm:bottom-12 md:bottom-20 select-none pointer-events-none leading-none font-playfair font-bold text-[28vw] md:text-[22vw] text-[#C8A96E]/[0.035]"
              >
                {stage.number}
              </div>

              {/* Content Panel */}
              <div className="relative z-10 max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center pt-24 md:pt-16 pb-28 md:pb-24">
                {/* Left: Icon & Stage Badge */}
                <div className="lg:col-span-5 flex flex-col items-start">
                  <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#C8A96E]/30 bg-[#C8A96E]/[0.06] mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E] animate-pulse" />
                    <span className="text-[11px] tracking-[0.22em] uppercase text-[#D4B87A] font-medium font-inter">
                      {stage.phase}
                    </span>
                  </div>

                  {/* Icon Card */}
                  <div className="relative group mb-6">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border border-[#C8A96E]/25 bg-[#141414]/80 backdrop-blur-xl flex items-center justify-center shadow-[0_0_40px_-10px_rgba(200,169,110,0.18)] transition-all duration-500 group-hover:border-[#C8A96E]/60 group-hover:shadow-[0_0_50px_rgba(200,169,110,0.25)]">
                      {stage.icon}
                    </div>
                    {/* Subtle corner golden bracket */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#C8A96E]/60" />
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#C8A96E]/60" />
                  </div>

                  {/* Stage Number Headline */}
                  <div className="text-sm tracking-[0.25em] uppercase text-[#A39B8B] font-inter font-light">
                    Etapa {stage.number} de 04
                  </div>
                </div>

                {/* Right: Stage Details */}
                <div className="lg:col-span-7 flex flex-col items-start space-y-5">
                  <h3 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-[#F5F0EB] font-normal tracking-tight">
                    {stage.title}
                  </h3>

                  <p className="font-playfair text-lg sm:text-xl md:text-2xl text-[#C8A96E] italic font-light leading-snug">
                    {stage.subtitle}
                  </p>

                  <p className="font-inter text-sm sm:text-base md:text-lg text-[#A39B8B] font-light leading-relaxed max-w-xl">
                    {stage.description}
                  </p>

                  {/* Spec Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {stage.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs tracking-wider uppercase font-inter text-[#D4B87A] border border-[#C8A96E]/20 bg-[#141414]/60 rounded-full backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pinned Bottom Progress Section */}
      <div className="absolute bottom-6 md:bottom-10 left-6 sm:left-12 md:left-20 lg:left-28 right-6 sm:right-12 md:right-20 lg:right-28 z-30 pointer-events-none">
        {/* Step labels */}
        <div className="flex justify-between items-center text-[10px] md:text-xs tracking-[0.22em] uppercase text-[#A39B8B] mb-3 font-inter">
          <span className="hidden sm:inline">01 · CULTIVO</span>
          <span className="hidden sm:inline">02 · COSECHA</span>
          <span className="hidden sm:inline">03 · EXTRACCIÓN</span>
          <span className="hidden sm:inline">04 · EMBOTELLADO</span>
          <span className="sm:hidden text-[#C8A96E]">DESLIZÁ PARA EXPLORAR</span>
        </div>

        {/* Progress Track */}
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <div
            ref={progressFillRef}
            className="h-full bg-gradient-to-r from-[#C8A96E] via-[#D4B87A] to-[#FFF8EC] origin-left scale-x-0 will-change-transform shadow-[0_0_12px_rgba(200,169,110,0.8)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Process;
