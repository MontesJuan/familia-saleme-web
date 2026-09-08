'use client';

import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsapConfig';
import { Award, ShieldCheck, Sparkles, WheatOff } from 'lucide-react';

export const Awards: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const wreathContainerRef = useRef<HTMLDivElement | null>(null);
  const yearRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const sourceRef = useRef<HTMLDivElement | null>(null);
  const dividerTopRef = useRef<HTMLDivElement | null>(null);
  const dividerBottomRef = useRef<HTMLDivElement | null>(null);
  const certsTextRef = useRef<HTMLDivElement | null>(null);
  const certsGridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // 1. Prepare SVG path lengths for smooth stroke drawing
      const stemPaths = wreathContainerRef.current?.querySelectorAll<SVGPathElement>('.wreath-stem');
      const leafPaths = wreathContainerRef.current?.querySelectorAll<SVGPathElement>('.wreath-leaf');
      const berryCircles = wreathContainerRef.current?.querySelectorAll<SVGCircleElement>('.wreath-berry');
      const ribbonPaths = wreathContainerRef.current?.querySelectorAll<SVGPathElement>('.wreath-ribbon');

      stemPaths?.forEach((path) => {
        const length = typeof path.getTotalLength === 'function' ? path.getTotalLength() : 500;
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      ribbonPaths?.forEach((path) => {
        const length = typeof path.getTotalLength === 'function' ? path.getTotalLength() : 150;
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      leafPaths?.forEach((path) => {
        const length = typeof path.getTotalLength === 'function' ? path.getTotalLength() : 180;
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          fillOpacity: 0,
        });
      });

      if (berryCircles && berryCircles.length > 0) {
        gsap.set(berryCircles, { scale: 0, transformOrigin: 'center center' });
      }

      // 2. Create ScrollTrigger Timeline for the entire Awards section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        defaults: { ease: 'power3.out' },
      });

      // Ribbon at base draws
      if (ribbonPaths && ribbonPaths.length > 0) {
        tl.to(ribbonPaths, {
          strokeDashoffset: 0,
          duration: 0.9,
          ease: 'power2.out',
        });
      }

      // Laurel stems draw outward and upward
      if (stemPaths && stemPaths.length > 0) {
        tl.to(
          stemPaths,
          {
            strokeDashoffset: 0,
            duration: 1.6,
            ease: 'power2.inOut',
          },
          '-=0.5'
        );
      }

      // Leaves draw strokes and bloom fills
      if (leafPaths && leafPaths.length > 0) {
        tl.to(
          leafPaths,
          {
            strokeDashoffset: 0,
            fillOpacity: 0.14,
            duration: 1.2,
            stagger: 0.03,
            ease: 'power2.out',
          },
          '-=1.2'
        );
      }

      // Olive berries pop in
      if (berryCircles && berryCircles.length > 0) {
        tl.to(
          berryCircles,
          {
            scale: 1,
            duration: 0.6,
            stagger: 0.04,
            ease: 'back.out(2)',
          },
          '-=0.8'
        );
      }

      // Year '2026' scales, sharpens and reveals
      tl.fromTo(
        yearRef.current,
        {
          opacity: 0,
          scale: 0.82,
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power3.out',
        },
        '-=1.0'
      );

      // Top divider line grows
      tl.fromTo(
        dividerTopRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 1.1, ease: 'expo.out' },
        '-=0.7'
      );

      // Award Title clips in from below
      const titleLines = titleRef.current?.querySelectorAll('.clip-inner');
      if (titleLines && titleLines.length > 0) {
        tl.fromTo(
          titleLines,
          {
            y: '120%',
            opacity: 0,
          },
          {
            y: '0%',
            opacity: 1,
            duration: 1.1,
            stagger: 0.12,
            ease: 'power3.out',
          },
          '-=0.7'
        );
      }

      // Source text clips in from below
      const sourceInner = sourceRef.current?.querySelector('.clip-inner');
      if (sourceInner) {
        tl.fromTo(
          sourceInner,
          {
            y: '120%',
            opacity: 0,
          },
          {
            y: '0%',
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
          },
          '-=0.7'
        );
      }

      // Bottom divider line grows
      tl.fromTo(
        dividerBottomRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 1.0, ease: 'expo.out' },
        '-=0.5'
      );

      // Certification headline clips in
      const certsHeadline = certsTextRef.current?.querySelector('.clip-inner');
      if (certsHeadline) {
        tl.fromTo(
          certsHeadline,
          {
            y: '120%',
            opacity: 0,
          },
          {
            y: '0%',
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
          },
          '-=0.6'
        );
      }

      // Certification badge cards stagger in with upward float
      const badges = certsGridRef.current?.querySelectorAll('.cert-card');
      if (badges && badges.length > 0) {
        tl.fromTo(
          badges,
          {
            opacity: 0,
            y: 24,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
          },
          '-=0.5'
        );
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="premios"
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] py-24 md:py-32 px-6 sm:px-8 select-none"
    >
      {/* 1. Subtle Radial Background Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Very subtle gold radial glow centered behind content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[850px] h-[65vh] max-h-[650px] bg-[radial-gradient(ellipse_at_center,rgba(200,169,110,0.08)_0%,rgba(212,184,122,0.03)_40%,rgba(20,20,20,0.7)_65%,#0A0A0A_95%)] blur-3xl" />

        {/* Subtle secondary ambient olive depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[90vh] bg-[radial-gradient(ellipse_at_50%_55%,rgba(107,123,58,0.04)_0%,transparent_60%)]" />

        {/* Ambient edge vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_160px_rgba(10,10,10,0.92)]" />
      </div>

      {/* 2. Main Centered Awards Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Top Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C8A96E]/20 bg-[#141414]/60 backdrop-blur-md mb-6 sm:mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#C8A96E]" />
          <span className="font-['Inter',sans-serif] text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#D4B87A] font-medium">
            Reconocimiento a la Excelencia
          </span>
        </div>

        {/* Large Decorative Laurel Wreath with '2026' in Center */}
        <div
          ref={wreathContainerRef}
          className="relative w-[280px] sm:w-[340px] md:w-[420px] h-[220px] sm:h-[260px] md:h-[310px] mx-auto flex items-center justify-center"
        >
          {/* Subtle halo glow behind wreath */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#C8A96E]/10 rounded-full blur-2xl pointer-events-none" />

          {/* Handcrafted Symmetrical Laurel Wreath SVG */}
          <svg
            viewBox="0 0 440 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-[0_4px_16px_rgba(200,169,110,0.25)]"
          >
            {/* Center Base Ribbon Knot & Tails */}
            <path
              className="wreath-ribbon"
              d="M 206 312 C 215 324, 225 324, 234 312"
              stroke="#C8A96E"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              className="wreath-ribbon"
              d="M 210 316 C 202 332, 192 344, 186 350"
              stroke="#C8A96E"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              className="wreath-ribbon"
              d="M 230 316 C 238 332, 248 344, 254 350"
              stroke="#C8A96E"
              strokeWidth="1.8"
              strokeLinecap="round"
            />

            {/* LEFT BRANCH */}
            <g id="left-wreath">
              {/* Main Stem Curve */}
              <path
                className="wreath-stem"
                d="M 215 310 C 145 305, 65 245, 65 165 C 65 95, 125 45, 175 35"
                stroke="#C8A96E"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Pair 1 Leaves (Lower) */}
              <path
                className="wreath-leaf"
                d="M 188 300 C 170 312, 148 310, 144 295 C 158 286, 178 288, 188 300 Z"
                stroke="#C8A96E"
                strokeWidth="1.5"
                fill="#C8A96E"
              />
              <path
                className="wreath-leaf"
                d="M 185 292 C 175 280, 172 260, 186 254 C 193 268, 192 284, 185 292 Z"
                stroke="#C8A96E"
                strokeWidth="1.5"
                fill="#C8A96E"
              />

              {/* Pair 2 Leaves */}
              <path
                className="wreath-leaf"
                d="M 145 272 C 124 280, 104 272, 102 258 C 118 250, 138 256, 145 272 Z"
                stroke="#C8A96E"
                strokeWidth="1.5"
                fill="#C8A96E"
              />
              <path
                className="wreath-leaf"
                d="M 146 262 C 140 244, 142 225, 156 220 C 162 235, 158 253, 146 262 Z"
                stroke="#C8A96E"
                strokeWidth="1.5"
                fill="#C8A96E"
              />

              {/* Pair 3 Leaves */}
              <path
                className="wreath-leaf"
                d="M 104 230 C 82 232, 66 220, 68 206 C 85 202, 102 212, 104 230 Z"
                stroke="#C8A96E"
                strokeWidth="1.5"
                fill="#C8A96E"
              />
              <path
                className="wreath-leaf"
                d="M 110 218 C 110 198, 118 180, 132 178 C 134 195, 126 212, 110 218 Z"
                stroke="#C8A96E"
                strokeWidth="1.5"
                fill="#C8A96E"
              />

              {/* Pair 4 Leaves (Middle arc) */}
              <path
                className="wreath-leaf"
                d="M 72 178 C 52 174, 40 158, 46 144 C 62 144, 76 158, 72 178 Z"
                stroke="#C8A96E"
                strokeWidth="1.5"
                fill="#C8A96E"
              />
              <path
                className="wreath-leaf"
                d="M 82 165 C 88 145, 102 130, 115 132 C 112 150, 100 164, 82 165 Z"
                stroke="#C8A96E"
                strokeWidth="1.5"
                fill="#C8A96E"
              />

              {/* Pair 5 Leaves */}
              <path
                className="wreath-leaf"
                d="M 68 126 C 52 116, 46 98, 56 86 C 71 90, 80 106, 68 126 Z"
                stroke="#C8A96E"
                strokeWidth="1.5"
                fill="#C8A96E"
              />
              <path
                className="wreath-leaf"
                d="M 82 118 C 94 100, 112 88, 124 94 C 117 110, 102 122, 82 118 Z"
                stroke="#C8A96E"
                strokeWidth="1.5"
                fill="#C8A96E"
              />

              {/* Pair 6 Leaves */}
              <path
                className="wreath-leaf"
                d="M 94 76 C 84 60, 84 42, 98 34 C 109 44, 112 62, 94 76 Z"
                stroke="#C8A96E"
                strokeWidth="1.5"
                fill="#C8A96E"
              />
              <path
                className="wreath-leaf"
                d="M 112 72 C 130 58, 150 50, 160 58 C 150 72, 132 80, 112 72 Z"
                stroke="#C8A96E"
                strokeWidth="1.5"
                fill="#C8A96E"
              />

              {/* Tip Leaf */}
              <path
                className="wreath-leaf"
                d="M 152 42 C 158 25, 172 16, 184 20 C 185 35, 174 48, 152 42 Z"
                stroke="#C8A96E"
                strokeWidth="1.5"
                fill="#C8A96E"
              />

              {/* Olive Berries */}
              <circle className="wreath-berry" cx="162" cy="285" r="3.5" fill="#D4B87A" />
              <circle className="wreath-berry" cx="120" cy="245" r="3.5" fill="#D4B87A" />
              <circle className="wreath-berry" cx="84" cy="195" r="3.5" fill="#D4B87A" />
              <circle className="wreath-berry" cx="74" cy="145" r="3.5" fill="#D4B87A" />
              <circle className="wreath-berry" cx="90" cy="95" r="3.5" fill="#D4B87A" />
              <circle className="wreath-berry" cx="130" cy="62" r="3.5" fill="#D4B87A" />
            </g>

            {/* RIGHT BRANCH (Precisely Mirrored for Symmetrical Elegance) */}
            <g id="right-wreath" transform="translate(440, 0) scale(-1, 1)">
              {/* Main Stem Curve */}
              <path
                className="wreath-stem"
                d="M 215 310 C 145 305, 65 245, 65 165 C 65 95, 125 45, 175 35"
                stroke="#C8A96E"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Pair 1 Leaves (Lower) */}
              <path
                className="wreath-leaf"
                d="M 188 300 C 170 312, 148 310, 144 295 C 158 286, 178 288, 188 300 Z"
                stroke="#C8A96E"
                strokeWidth="1.5"
                fill="#C8A96E"
              />
              <path
                className="wreath-leaf"
                d="M 185 292 C 175 280, 172 260, 186 254 C 193 268, 192 284, 185 292 Z"
                stroke="#C8A96E"
                strokeWidth="1.5"
                fill="#C8A96E"
              />

              {/* Pair 2 Leaves */}
              <path
                className="wreath-leaf"
                d="M 145 272 C 124 280, 104 272, 102 258 C 118 250, 138 256, 145 272 Z"
                stroke="#C8A96E"
                strokeWidth="1.5"
                fill="#C8A96E"
              />
              <path
                className="wreath-leaf"
                d="M 146 262 C 140 244, 142 225, 156 220 C 162 235, 158 253, 146 262 Z"
                stroke="#C8A96E"
                strokeWidth="1.5"
                fill="#C8A96E"
              />

              {/* Pair 3 Leaves */}
              <path
                className="wreath-leaf"
                d="M 104 230 C 82 232, 66 220, 68 206 C 85 202, 102 212, 104 230 Z"
                stroke="#C8A96E"
                strokeWidth="1.5"
                fill="#C8A96E"
              />
              <path
                className="wreath-leaf"
                d="M 110 218 C 110 198, 118 180, 132 178 C 134 195, 126 212, 110 218 Z"
                stroke="#C8A96E"
                strokeWidth="1.5"
                fill="#C8A96E"
              />

              {/* Pair 4 Leaves (Middle arc) */}
              <path
                className="wreath-leaf"
                d="M 72 178 C 52 174, 40 158, 46 144 C 62 144, 76 158, 72 178 Z"
                stroke="#C8A96E"
                strokeWidth="1.5"
                fill="#C8A96E"
              />
              <path
                className="wreath-leaf"
                d="M 82 165 C 88 145, 102 130, 115 132 C 112 150, 100 164, 82 165 Z"
                stroke="#C8A96E"
                strokeWidth="1.5"
                fill="#C8A96E"
              />

              {/* Pair 5 Leaves */}
              <path
                className="wreath-leaf"
                d="M 68 126 C 52 116, 46 98, 56 86 C 71 90, 80 106, 68 126 Z"
                stroke="#C8A96E"
                strokeWidth="1.5"
                fill="#C8A96E"
              />
              <path
                className="wreath-leaf"
                d="M 82 118 C 94 100, 112 88, 124 94 C 117 110, 102 122, 82 118 Z"
                stroke="#C8A96E"
                strokeWidth="1.5"
                fill="#C8A96E"
              />

              {/* Pair 6 Leaves */}
              <path
                className="wreath-leaf"
                d="M 94 76 C 84 60, 84 42, 98 34 C 109 44, 112 62, 94 76 Z"
                stroke="#C8A96E"
                strokeWidth="1.5"
                fill="#C8A96E"
              />
              <path
                className="wreath-leaf"
                d="M 112 72 C 130 58, 150 50, 160 58 C 150 72, 132 80, 112 72 Z"
                stroke="#C8A96E"
                strokeWidth="1.5"
                fill="#C8A96E"
              />

              {/* Tip Leaf */}
              <path
                className="wreath-leaf"
                d="M 152 42 C 158 25, 172 16, 184 20 C 185 35, 174 48, 152 42 Z"
                stroke="#C8A96E"
                strokeWidth="1.5"
                fill="#C8A96E"
              />

              {/* Olive Berries */}
              <circle className="wreath-berry" cx="162" cy="285" r="3.5" fill="#D4B87A" />
              <circle className="wreath-berry" cx="120" cy="245" r="3.5" fill="#D4B87A" />
              <circle className="wreath-berry" cx="84" cy="195" r="3.5" fill="#D4B87A" />
              <circle className="wreath-berry" cx="74" cy="145" r="3.5" fill="#D4B87A" />
              <circle className="wreath-berry" cx="90" cy="95" r="3.5" fill="#D4B87A" />
              <circle className="wreath-berry" cx="130" cy="62" r="3.5" fill="#D4B87A" />
            </g>
          </svg>

          {/* INSIDE WREATH: '2026' Large Number */}
          <div
            ref={yearRef}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none will-change-transform"
          >
            <span className="font-['Inter',sans-serif] text-[10px] sm:text-xs uppercase tracking-[0.4em] text-[#C8A96E]/80 mb-0.5 font-light">
              Primer Premio
            </span>
            <span className="font-['Playfair_Display',Georgia,serif] text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF9] via-[#D4B87A] to-[#C8A96E] drop-shadow-[0_8px_20px_rgba(200,169,110,0.4)]">
              2026
            </span>
            <div className="w-8 h-[1px] bg-[#C8A96E]/40 mt-1" />
          </div>
        </div>

        {/* Subtle Gold Gradient Divider Above Title */}
        <div
          ref={dividerTopRef}
          className="h-[1px] w-48 sm:w-64 md:w-80 mx-auto my-6 sm:my-8 bg-gradient-to-r from-transparent via-[#C8A96E]/50 to-transparent origin-center will-change-transform"
        />

        {/* Award Title: 'Mejor Aceite de Oliva Virgen Extra' (Playfair Display, 4xl to 6xl) */}
        <h2
          ref={titleRef}
          className="font-['Playfair_Display',Georgia,serif] text-3xl sm:text-5xl md:text-6xl text-[#F5F0EB] font-normal leading-[1.18] sm:leading-[1.12] max-w-4xl mx-auto tracking-wide mb-4 sm:mb-5"
        >
          <span className="block overflow-hidden">
            <span className="clip-inner block will-change-transform">
              Mejor Aceite de Oliva
            </span>
          </span>
          <span className="block overflow-hidden mt-1 sm:mt-2">
            <span className="clip-inner block will-change-transform font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDF9] via-[#D4B87A] to-[#C8A96E]">
              Virgen Extra
            </span>
          </span>
        </h2>

        {/* Award Source: 'Experiencias del Sabor — Caminos y Sabores' */}
        <div
          ref={sourceRef}
          className="overflow-hidden mb-6 sm:mb-8"
        >
          <p className="clip-inner font-['Inter',sans-serif] text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] text-[#A39B8B] font-light will-change-transform">
            Experiencias del Sabor <span className="text-[#C8A96E]/70 mx-1.5">—</span> Caminos y Sabores
          </p>
        </div>

        {/* Subtle Gold Gradient Divider Below Source */}
        <div
          ref={dividerBottomRef}
          className="h-[1px] w-36 sm:w-48 md:w-64 mx-auto mb-6 sm:mb-8 bg-gradient-to-r from-transparent via-[#C8A96E]/40 to-transparent origin-center will-change-transform"
        />

        {/* List of Certifications: 'Indicación Geográfica · Sin TACC · Certificado' */}
        <div
          ref={certsTextRef}
          className="overflow-hidden mb-6"
        >
          <p className="clip-inner font-['Inter',sans-serif] text-xs sm:text-sm uppercase tracking-[0.3em] text-[#C8A96E] font-medium will-change-transform">
            Indicación Geográfica <span className="text-[#A39B8B]/60 mx-2">·</span> Sin TACC <span className="text-[#A39B8B]/60 mx-2">·</span> Certificado
          </p>
        </div>

        {/* Certification Feature Badges */}
        <div
          ref={certsGridRef}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto mt-2"
        >
          {/* Badge 1: Indicación Geográfica */}
          <div className="cert-card flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#C8A96E]/20 bg-[#141414]/80 backdrop-blur-md transition-all duration-300 hover:border-[#C8A96E]/50 hover:bg-[#1A1A1A]">
            <Award className="w-3.5 h-3.5 text-[#C8A96E]" strokeWidth={1.75} />
            <span className="font-['Inter',sans-serif] text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#F5F0EB]/90">
              Indicación Geográfica San Juan
            </span>
          </div>

          {/* Badge 2: Sin TACC */}
          <div className="cert-card flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#C8A96E]/20 bg-[#141414]/80 backdrop-blur-md transition-all duration-300 hover:border-[#C8A96E]/50 hover:bg-[#1A1A1A]">
            <WheatOff className="w-3.5 h-3.5 text-[#C8A96E]" strokeWidth={1.75} />
            <span className="font-['Inter',sans-serif] text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#F5F0EB]/90">
              Sin TACC · Libre de Gluten
            </span>
          </div>

          {/* Badge 3: Certificado de Calidad */}
          <div className="cert-card flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#C8A96E]/20 bg-[#141414]/80 backdrop-blur-md transition-all duration-300 hover:border-[#C8A96E]/50 hover:bg-[#1A1A1A]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C8A96E]" strokeWidth={1.75} />
            <span className="font-['Inter',sans-serif] text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#F5F0EB]/90">
              Calidad Certificada
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
