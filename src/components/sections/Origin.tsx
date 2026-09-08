'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Compass, Factory, Droplets, ArrowUpRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface StatItem {
  id: string;
  metric: string;
  numberValue?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  detail: string;
  icon: React.ElementType;
}

const STATS_DATA: StatItem[] = [
  {
    id: 'generaciones',
    metric: '2',
    numberValue: 2,
    suffix: '',
    label: 'Generaciones',
    detail: 'Tradición familiar ininterrumpida y pasión transmitida de padres a hijos.',
    icon: Award,
  },
  {
    id: 'terroir',
    metric: '1.350',
    numberValue: 1350,
    suffix: ' m',
    label: 'Pedernal, San Juan',
    detail: 'Valle de altura al pie de los Andes con agua pura de deshielo y clima privilegiado.',
    icon: Compass,
  },
  {
    id: 'control',
    metric: '< 3',
    numberValue: 3,
    prefix: '< ',
    suffix: ' h',
    label: 'Control Total',
    detail: 'Molienda en planta propia a pie de finca dentro de las 3 horas de cosechado.',
    icon: Factory,
  },
  {
    id: 'cosecha',
    metric: '100%',
    numberValue: 100,
    suffix: '%',
    label: 'Cosecha Propia',
    detail: 'Prensado en frío de aceitunas seleccionadas a mano en su punto óptimo de envero.',
    icon: Droplets,
  },
];

export default function Origin() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgLinesRef = useRef<SVGSVGElement | null>(null);
  const titleContainerRef = useRef<HTMLDivElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const rightColRef = useRef<HTMLDivElement | null>(null);
  const statsRowRef = useRef<HTMLDivElement | null>(null);
  const largeTwoRef = useRef<HTMLDivElement | null>(null);
  
  // State for animated counter values
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({
    generaciones: 0,
    terroir: 0,
    control: 0,
    cosecha: 0,
  });

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Subtle parallax on background topographic lines
      if (bgLinesRef.current) {
        gsap.to(bgLinesRef.current, {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }

      // 2. Title and subtitle reveal
      if (titleContainerRef.current) {
        const titleElements = titleContainerRef.current.querySelectorAll('.reveal-elem');
        gsap.fromTo(
          titleElements,
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: titleContainerRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      // 3. Left column paragraphs staggered reveal
      if (leftColRef.current) {
        const paragraphs = leftColRef.current.querySelectorAll('.story-p');
        gsap.fromTo(
          paragraphs,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: leftColRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // 4. Right column large number "2" and card reveal
      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          {
            opacity: 0,
            scale: 0.94,
            y: 40,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: rightColRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // Float effect on the decorative number "2"
      if (largeTwoRef.current) {
        gsap.to(largeTwoRef.current, {
          y: -12,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      // 5. Stats row staggered reveal + counter animation
      if (statsRowRef.current) {
        const cards = statsRowRef.current.querySelectorAll('.stat-card');

        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.14,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: statsRowRef.current,
              start: 'top 88%',
              onEnter: () => {
                // Animate counters
                const counterTargets = {
                  generaciones: 2,
                  terroir: 1350,
                  control: 3,
                  cosecha: 100,
                };
                
                const currentVals = { generaciones: 0, terroir: 0, control: 0, cosecha: 0 };
                
                gsap.to(currentVals, {
                  generaciones: counterTargets.generaciones,
                  terroir: counterTargets.terroir,
                  control: counterTargets.control,
                  cosecha: counterTargets.cosecha,
                  duration: 2.2,
                  ease: 'power2.out',
                  onUpdate: () => {
                    setAnimatedValues({
                      generaciones: Math.round(currentVals.generaciones),
                      terroir: Math.round(currentVals.terroir),
                      control: Math.round(currentVals.control),
                      cosecha: Math.round(currentVals.cosecha),
                    });
                  },
                });
              },
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="origen"
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#0A0A0A] text-[#F5F0EB] py-28 md:py-36 px-6 sm:px-10 lg:px-16 overflow-hidden select-none"
    >
      {/* Dynamic Background: Topographic contour lines & diagonal texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Olive & Gold ambient glows */}
        <div className="absolute top-1/4 -left-32 w-[550px] h-[550px] rounded-full bg-[#6B7B3A]/[0.07] blur-[120px]" />
        <div className="absolute bottom-1/3 -right-24 w-[600px] h-[600px] rounded-full bg-[#C8A96E]/[0.05] blur-[140px]" />

        {/* Diagonal micro-lines overlay */}
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              #C8A96E 0,
              #C8A96E 1px,
              transparent 1px,
              transparent 32px
            )`,
          }}
        />

        {/* Topographic Curvature Lines (SVG Parallax) */}
        <svg
          ref={bgLinesRef}
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1600px] h-[1600px] opacity-[0.06] text-[#C8A96E] pointer-events-none"
          viewBox="0 0 1000 1000"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path d="M 0,200 C 300,120 400,320 700,220 C 850,170 950,260 1000,240" />
          <path d="M 0,280 C 250,220 450,400 750,310 C 900,260 980,340 1000,330" />
          <path d="M 0,360 C 220,310 500,480 800,390 C 920,350 970,430 1000,420" />
          <path d="M 0,460 C 180,410 480,580 780,500 C 900,470 960,540 1000,530" />
          <path d="M 0,570 C 280,510 430,680 730,610 C 880,570 950,650 1000,640" />
          <path d="M 0,690 C 260,630 460,800 760,730 C 890,690 960,770 1000,760" />
          <path d="M 0,810 C 320,760 520,910 820,850 C 920,820 980,880 1000,870" />
          {/* Concentric mountain contours */}
          <ellipse cx="620" cy="460" rx="280" ry="160" strokeDasharray="3 7" strokeWidth="0.8" />
          <ellipse cx="620" cy="460" rx="190" ry="105" strokeWidth="0.7" />
          <ellipse cx="620" cy="460" rx="100" ry="55" strokeWidth="0.6" />
        </svg>

        {/* Subtle vignette boundary */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] opacity-80" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={titleContainerRef} className="mb-16 md:mb-24">
          <div className="reveal-elem inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#C8A96E]/20 bg-[#141414]/60 backdrop-blur-md mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E] animate-pulse" />
            <span className="font-['Inter',sans-serif] text-[11px] tracking-[0.28em] uppercase text-[#C8A96E] font-medium">
              Herencia & Terroir
            </span>
          </div>

          <h2 className="reveal-elem font-['Playfair_Display',serif] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#F5F0EB] leading-[1.1]">
            Nuestro <span className="italic font-serif text-[#C8A96E]">Origen</span>
          </h2>

          <p className="reveal-elem mt-4 font-['Inter',sans-serif] text-lg sm:text-xl text-[#A39B8B] font-light max-w-2xl">
            Dos generaciones de pasión olivícola en las alturas de San Juan.
          </p>

          <div className="reveal-elem mt-8 h-[1px] w-24 bg-gradient-to-r from-[#C8A96E] to-transparent" />
        </div>

        {/* Main Content Layout: Two Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 md:mb-32">
          {/* Left Column: Rich Storytelling Text */}
          <div ref={leftColRef} className="lg:col-span-7 space-y-6 text-[#A39B8B] font-['Inter',sans-serif]">
            <p className="story-p text-lg sm:text-xl leading-relaxed text-[#F5F0EB]/90 font-light first-letter:text-5xl first-letter:font-serif first-letter:text-[#C8A96E] first-letter:mr-3 first-letter:float-left first-letter:leading-none">
              En el recóndito Valle de Pedernal, a más de 1.350 metros de altitud en la provincia de San Juan, la imponente Cordillera de los Andes resguarda un microclima de pureza inaudita. Un santuario natural donde la extraordinaria radiación solar del día, las noches glaciares y el agua cristalina de deshielo mineralizada confieren a nuestros frutos una concentración polifenólica sin igual en el continente.
            </p>

            <p className="story-p text-base sm:text-lg leading-relaxed text-[#A39B8B] font-light">
              Nuestra historia no nació en despachos ni laboratorios: nació de la devoción por la tierra y el respeto reverencial hacia el olivo. Dos generaciones consagradas a cultivar la paciencia, transmitiendo de padres a hijos un saber hacer que honra el ritmo silencioso de cada estación y rechaza cualquier compromiso que amenace la pureza del resultado.
            </p>

            <p className="story-p text-base sm:text-lg leading-relaxed text-[#A39B8B] font-light">
              A diferencia de las producciones industriales, en Familia Saleme controlamos cada milímetro del camino. Nuestros propios olivares circundan nuestra planta de extracción de vanguardia, ubicada en el epicentro de la finca. Esto nos permite cosechar cada aceituna en su momento exacto de envero y molerla en frío en menos de tres horas, capturando viva el alma del valle en cada gota.
            </p>

            <div className="story-p pt-4 flex items-center gap-4 text-xs tracking-[0.25em] uppercase text-[#C8A96E]/90 font-medium">
              <span className="w-8 h-[1px] bg-[#C8A96E]" />
              <span>Valle de Pedernal · San Juan, Argentina</span>
            </div>
          </div>

          {/* Right Column: Large Decorative '2' & Heritage Card */}
          <div ref={rightColRef} className="lg:col-span-5 relative">
            <div className="relative p-8 sm:p-12 rounded-3xl border border-[#C8A96E]/20 bg-gradient-to-b from-[#141414]/90 via-[#141414]/50 to-[#0A0A0A]/80 backdrop-blur-xl shadow-2xl overflow-hidden group">
              {/* Subtle inner gold rim */}
              <div className="absolute inset-0 rounded-3xl border border-[#C8A96E]/10 pointer-events-none group-hover:border-[#C8A96E]/30 transition-colors duration-700" />
              
              {/* Radial ambient glow inside card */}
              <div className="absolute top-0 right-0 w-56 h-56 bg-[#C8A96E]/[0.08] rounded-full blur-3xl pointer-events-none" />

              {/* Decorative Large Number 2 Visual */}
              <div className="flex flex-col items-center text-center">
                <div 
                  ref={largeTwoRef}
                  className="relative select-none"
                >
                  {/* Backdrop golden orbit ring */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-[#C8A96E]/15 border-dashed animate-spin-slow pointer-events-none" />
                  
                  {/* Large Stylized Number '2' */}
                  <span className="font-['Playfair_Display',serif] text-8xl sm:text-9xl md:text-[11rem] font-bold leading-none bg-gradient-to-b from-[#F5F0EB] via-[#D4B87A] to-[#8C733E] bg-clip-text text-transparent drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] inline-block">
                    2
                  </span>
                </div>

                <div className="mt-2 space-y-2">
                  <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-light tracking-wide text-[#F5F0EB]">
                    Generaciones
                  </h3>
                  <p className="font-['Inter',sans-serif] text-xs sm:text-sm tracking-[0.3em] uppercase text-[#C8A96E] font-medium">
                    Legado & Vocación Familiar
                  </p>
                </div>

                <div className="w-16 h-[1px] bg-[#C8A96E]/30 my-6" />

                <p className="font-['Inter',sans-serif] text-xs sm:text-sm text-[#A39B8B] leading-relaxed max-w-xs font-light">
                  &ldquo;La tierra no miente cuando se le entrega la vida entera. Cada botella resume nuestra promesa familiar con la verdad.&rdquo;
                </p>

                {/* Key attributes pill grid */}
                <div className="mt-6 grid grid-cols-2 gap-2.5 w-full pt-4 border-t border-[#C8A96E]/15">
                  <div className="p-2.5 rounded-lg bg-[#0A0A0A]/60 border border-[#C8A96E]/10 text-left">
                    <span className="block text-[10px] tracking-[0.2em] text-[#A39B8B] uppercase">Finca Propia</span>
                    <span className="text-xs text-[#F5F0EB] font-medium">Pedernal Alto</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#0A0A0A]/60 border border-[#C8A96E]/10 text-left">
                    <span className="block text-[10px] tracking-[0.2em] text-[#A39B8B] uppercase">Extracción</span>
                    <span className="text-xs text-[#F5F0EB] font-medium">In Situ &lt; 27°C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row at Bottom: 4 Key Metrics in Gold Cards with Glass Effect */}
        <div ref={statsRowRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((item) => {
            const IconComponent = item.icon;
            const displayValue = 
              item.numberValue !== undefined
                ? `${item.prefix || ''}${animatedValues[item.id] || 0}${item.suffix || ''}`
                : item.metric;

            return (
              <div
                key={item.id}
                className="stat-card group relative p-7 rounded-2xl border border-[#C8A96E]/20 bg-[#141414]/70 hover:bg-[#141414]/95 backdrop-blur-md transition-all duration-500 hover:border-[#C8A96E]/50 hover:-translate-y-1 shadow-lg hover:shadow-[0_10px_30px_rgba(200,169,110,0.08)]"
              >
                {/* Top Corner Gold Accent */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#C8A96E]/40 group-hover:bg-[#C8A96E] transition-colors" />
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C8A96E]/10 border border-[#C8A96E]/20 flex items-center justify-center text-[#C8A96E] group-hover:scale-110 group-hover:bg-[#C8A96E]/20 transition-all duration-300">
                    <IconComponent size={18} strokeWidth={1.5} />
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-[#C8A96E]/30 group-hover:text-[#C8A96E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </div>

                <div className="space-y-1">
                  <span className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-light text-[#D4B87A] block tracking-tight">
                    {displayValue}
                  </span>
                  <h4 className="font-['Playfair_Display',serif] text-base font-medium text-[#F5F0EB] tracking-wide pt-1">
                    {item.label}
                  </h4>
                </div>

                <p className="mt-3 font-['Inter',sans-serif] text-xs text-[#A39B8B] leading-relaxed font-light">
                  {item.detail}
                </p>

                {/* Bottom line glow on hover */}
                <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96E]/0 to-transparent group-hover:via-[#C8A96E]/40 transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { Origin };
