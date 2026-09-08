'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsapConfig';
import GoldParticles from '@/components/ui/GoldParticles';
import ScrollIndicator from '@/components/ui/ScrollIndicator';

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const locationRef = useRef<HTMLDivElement | null>(null);
  const wordmarkRef = useRef<HTMLHeadingElement | null>(null);
  const dividerLineLeftRef = useRef<HTMLDivElement | null>(null);
  const dividerLineRightRef = useRef<HTMLDivElement | null>(null);
  const dividerDiamondRef = useRef<HTMLDivElement | null>(null);
  const taglineRef = useRef<HTMLParagraphElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const ornamentsRef = useRef<HTMLDivElement | null>(null);
  const auraRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Master sequential reveal timeline
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: 0.2,
      });

      // Initial states
      gsap.set(auraRef.current, { opacity: 0, scale: 0.85 });
      gsap.set(ornamentsRef.current?.querySelectorAll('.ornament-item') || [], {
        opacity: 0,
        scale: 0.95,
      });

      // 1. Aura glow gently breathes in
      tl.to(
        auraRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 2.2,
          ease: 'power2.out',
        },
        0
      );

      // 2. Location: 'San Juan, Argentina' fades & slides in
      tl.fromTo(
        locationRef.current,
        {
          opacity: 0,
          y: 20,
          letterSpacing: '0.35em',
        },
        {
          opacity: 1,
          y: 0,
          letterSpacing: '0.5em',
          duration: 1.2,
          ease: 'power3.out',
        },
        0.3
      );

      // 3. Brand Wordmark: 'FAMILIA' (light) + 'SALEME' (bold) reveal
      const nameParts = wordmarkRef.current?.querySelectorAll('.wordmark-part');
      if (nameParts && nameParts.length > 0) {
        tl.fromTo(
          nameParts,
          {
            opacity: 0,
            y: 48,
            filter: 'blur(10px)',
          },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.5,
            stagger: 0.22,
            ease: 'power3.out',
          },
          0.7
        );
      }

      // 4. Decorative gold line divider expands outwards from center diamond
      tl.fromTo(
        dividerDiamondRef.current,
        {
          scale: 0,
          opacity: 0,
          rotation: 0,
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 45,
          duration: 0.8,
          ease: 'back.out(2)',
        },
        1.5
      );

      tl.fromTo(
        [dividerLineLeftRef.current, dividerLineRightRef.current],
        {
          scaleX: 0,
          opacity: 0,
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.3,
          ease: 'expo.out',
        },
        1.6
      );

      // 5. Tagline: 'Aceite de Oliva Virgen Extra'
      tl.fromTo(
        taglineRef.current,
        {
          opacity: 0,
          y: 18,
          letterSpacing: '0.25em',
        },
        {
          opacity: 1,
          y: 0,
          letterSpacing: '0.4em',
          duration: 1.1,
          ease: 'power2.out',
        },
        1.9
      );

      // 6. Subtitle: 'Tradición familiar · San Juan · Argentina'
      tl.fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 12,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'power2.out',
        },
        2.2
      );

      // 7. Decorative framing ornaments & hairlines fade in
      const ornaments = ornamentsRef.current?.querySelectorAll('.ornament-item');
      if (ornaments && ornaments.length > 0) {
        tl.to(
          ornaments,
          {
            opacity: 1,
            scale: 1,
            duration: 1.6,
            stagger: 0.08,
            ease: 'power2.out',
          },
          1.4
        );
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] select-none pt-16 pb-24 md:py-0"
    >
      {/* 1. Background: Radial Gradient from Center (Subtle gold glow on deep black) */}
      <div
        ref={auraRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
        aria-hidden="true"
      >
        {/* Core luminous gold glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[1000px] h-[70vh] max-h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(200,169,110,0.14)_0%,rgba(212,184,122,0.06)_35%,rgba(20,20,20,0.85)_65%,#0A0A0A_95%)] blur-2xl" />

        {/* Subtle secondary olive-tinted organic depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[100vh] bg-[radial-gradient(ellipse_at_50%_45%,rgba(107,123,58,0.05)_0%,transparent_65%)]" />

        {/* Ambient luxury edge vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(10,10,10,0.95)]" />
      </div>

      {/* 2. Floating Gold Particles Layer */}
      <GoldParticles
        count={55}
        speedMultiplier={0.65}
        minRadius={1}
        maxRadius={2.8}
      />

      {/* 3. Decorative Fine Gold Lines & Geometric Ornaments */}
      <div
        ref={ornamentsRef}
        className="absolute inset-0 pointer-events-none z-10"
        aria-hidden="true"
      >
        {/* Top & Bottom Center Hairline Axis */}
        <div className="ornament-item absolute top-16 md:top-24 left-1/2 -translate-x-1/2 w-[1px] h-16 md:h-24 bg-gradient-to-b from-transparent via-[#C8A96E]/40 to-transparent" />
        <div className="ornament-item absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 w-[1px] h-14 md:h-20 bg-gradient-to-t from-transparent via-[#C8A96E]/30 to-transparent" />

        {/* Horizontal Hairlines with Delicate End Points */}
        <div className="ornament-item hidden lg:block absolute top-1/2 left-10 xl:left-16 -translate-y-1/2 w-24 xl:w-36 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96E]/25 to-[#C8A96E]/60" />
        <div className="ornament-item hidden lg:block absolute top-1/2 right-10 xl:right-16 -translate-y-1/2 w-24 xl:w-36 h-[1px] bg-gradient-to-l from-transparent via-[#C8A96E]/25 to-[#C8A96E]/60" />

        {/* Delicate Luxury Corner Hairline Brackets */}
        <div className="ornament-item hidden md:block absolute top-12 left-12 w-12 h-12 border-t border-l border-[#C8A96E]/20" />
        <div className="ornament-item hidden md:block absolute top-12 right-12 w-12 h-12 border-t border-r border-[#C8A96E]/20" />
        <div className="ornament-item hidden md:block absolute bottom-12 left-12 w-12 h-12 border-b border-l border-[#C8A96E]/20" />
        <div className="ornament-item hidden md:block absolute bottom-12 right-12 w-12 h-12 border-b border-r border-[#C8A96E]/20" />

        {/* Subtle Concentric Rings behind center */}
        <div className="ornament-item absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] md:w-[680px] h-[340px] sm:h-[480px] md:h-[680px] rounded-full border border-[#C8A96E]/[0.04]" />
        <div className="ornament-item absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] sm:w-[640px] md:w-[880px] h-[460px] sm:h-[640px] md:h-[880px] rounded-full border border-[#C8A96E]/[0.02]" />
      </div>

      {/* 4. Central Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center justify-center">
        {/* Location Text */}
        <div
          ref={locationRef}
          className="will-change-transform inline-flex items-center justify-center gap-3 mb-4 sm:mb-6"
        >
          <span className="w-6 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-[#C8A96E]/60" />
          <span className="font-['Inter',sans-serif] text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-[0.5em] text-[#C8A96E]">
            San Juan, Argentina
          </span>
          <span className="w-6 sm:w-10 h-[1px] bg-gradient-to-l from-transparent to-[#C8A96E]/60" />
        </div>

        {/* Brand Wordmark: 'FAMILIA' (light) + 'SALEME' (bold) in Playfair Display */}
        <h1
          ref={wordmarkRef}
          className="font-['Playfair_Display',Georgia,serif] text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.06em] sm:tracking-[0.08em] md:tracking-[0.12em] text-[#F5F0EB] text-center leading-[1.08] sm:leading-[1.02] drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] my-2 sm:my-3"
        >
          <span className="wordmark-part inline-block font-light text-[#F5F0EB] transition-colors duration-500 mr-2 sm:mr-4 md:mr-6">
            FAMILIA
          </span>
          <span className="wordmark-part inline-block font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF9] via-[#D4B87A] to-[#C8A96E]">
            SALEME
          </span>
        </h1>

        {/* Decorative Gold Line Divider (animated width grow) */}
        <div className="w-full max-w-[260px] sm:max-w-xs md:max-w-md mx-auto my-5 sm:my-7 flex items-center justify-center gap-3 sm:gap-4">
          {/* Left expanding line */}
          <div
            ref={dividerLineLeftRef}
            className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C8A96E]/60 to-[#D4B87A] origin-right will-change-transform"
          />

          {/* Central diamond ornament */}
          <div
            ref={dividerDiamondRef}
            className="relative w-2 h-2 sm:w-2.5 sm:h-2.5 rotate-45 border border-[#C8A96E] bg-[#C8A96E]/40 shadow-[0_0_10px_rgba(200,169,110,0.9)] will-change-transform flex items-center justify-center"
          >
            <div className="w-0.5 h-0.5 bg-[#FFFDF9] rounded-full" />
          </div>

          {/* Right expanding line */}
          <div
            ref={dividerLineRightRef}
            className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C8A96E]/60 to-[#D4B87A] origin-left will-change-transform"
          />
        </div>

        {/* Tagline: 'Aceite de Oliva Virgen Extra' */}
        <p
          ref={taglineRef}
          className="font-['Inter',sans-serif] text-xs sm:text-sm md:text-base font-light uppercase tracking-[0.4em] text-[#F5F0EB] max-w-xl mx-auto will-change-transform"
        >
          Aceite de Oliva Virgen Extra
        </p>

        {/* Subtitle: 'Tradición familiar · San Juan · Argentina' */}
        <p
          ref={subtitleRef}
          className="font-['Inter',sans-serif] text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#A39B8B] mt-3 sm:mt-4 will-change-transform"
        >
          Tradición familiar <span className="text-[#C8A96E]/60 mx-1">·</span> San Juan <span className="text-[#C8A96E]/60 mx-1">·</span> Argentina
        </p>
      </div>

      {/* 5. Scroll Indicator at Bottom */}
      <ScrollIndicator
        targetId="premios"
        label="Descubrir"
        className="bottom-6 sm:bottom-8"
      />
    </section>
  );
};

export default Hero;
