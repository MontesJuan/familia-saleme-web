'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, ArrowRight, MessageCircle, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import GoldParticles from '@/components/ui/GoldParticles';

export default function Hero() {
  const whatsappUrl =
    'https://wa.me/5492644999862?text=Hola%20Familia%20Saleme!%20Quisiera%20consultar%20por%20sus%20aceites%20de%20oliva%20virgen%20extra.';

  return (
    <section id="inicio" className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden bg-[#0A0A0A]">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[400px] bg-[#C8A96E]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#6B7B3A]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#C8A96E]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating subtle gold particle canvas */}
      <GoldParticles count={40} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Main Text Content */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow badge with official logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181818] border border-[#C8A96E]/40 text-[#D4B87A] text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase mb-6 shadow-lg shadow-black/40"
          >
            <div className="relative w-4 h-4 rounded-full overflow-hidden">
              <Image src="/images/logo_original.jpg" alt="Logo" fill className="object-cover" />
            </div>
            <span>San Juan, Argentina • Valle de Pedernal</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E] animate-pulse" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-['Playfair_Display',serif] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#F5F0EB] leading-[1.08] tracking-tight mb-6"
          >
            Aceite de Oliva Virgen Extra <br />
            <span className="italic font-normal bg-gradient-to-r from-[#FFF8EC] via-[#D4B87A] to-[#C8A96E] bg-clip-text text-fill-transparent">
              Oro Líquido de la Precordillera
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-xl text-[#A39B8B] font-light max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10"
          >
            Nacido en olivares de altura a 1.350 msnm con agua pura de deshielo andino. Dos generaciones dedicadas al
            cuidado del fruto y extracción en frío inmediata en nuestra propia almazara en San Juan.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-5"
          >
            <a
              href="#productos"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#C8A96E] hover:bg-[#D4B87A] text-[#0A0A0A] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#C8A96E]/20 hover:shadow-xl hover:scale-[1.02] active:scale-95"
            >
              <span>Explorar Productos</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-[#C8A96E]/50 hover:border-[#C8A96E] text-[#F5F0EB] hover:text-[#D4B87A] text-xs sm:text-sm font-medium uppercase tracking-wider bg-[#141414]/80 backdrop-blur-md transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Pedir por WhatsApp</span>
            </a>
          </motion.div>
        </div>

        {/* FEATURED CINEMATIC PHOTOGRAPH CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="relative mx-auto max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-[#C8A96E]/30 bg-[#121212] group"
        >
          {/* Main Photo */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#0A0A0A]">
            <Image
              src="/images/hero_bottle_olivegrove.jpg"
              alt="Botella de Aceite de Oliva Virgen Extra Familia Saleme en los olivares de San Juan"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            {/* Subtle dark vignette overlay for typography readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/30 pointer-events-none" />

            {/* Overlaid Badges */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-wrap gap-2.5 z-10">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0A0A0A]/85 backdrop-blur-md border border-[#C8A96E]/60 text-[#D4B87A] text-[11px] sm:text-xs font-semibold shadow-md">
                <Award className="w-3.5 h-3.5 text-[#C8A96E]" />
                <span>Mejor AOVE 2026 • Caminos y Sabores</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#0A0A0A]/75 backdrop-blur-md border border-white/20 text-[#F5F0EB] text-xs font-medium">
                <Sparkles className="w-3 h-3 text-[#D4B87A]" />
                <span>Acidez &lt; 0.20%</span>
              </span>
            </div>

            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1A2510]/85 backdrop-blur-md border border-[#6B7B3A]/60 text-[#A9C365] text-[11px] sm:text-xs font-semibold">
                <span>Indicación Geográfica San Juan</span>
              </span>
            </div>
          </div>

          {/* Subcard bottom info bar */}
          <div className="p-5 sm:p-7 bg-[#141414] border-t border-[#C8A96E]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative z-10">
            <div>
              <h2 className="font-['Playfair_Display',serif] text-xl sm:text-2xl text-[#F5F0EB] font-normal flex items-center justify-center sm:justify-start gap-2">
                <span>De nuestros olivares a tu mesa</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#A39B8B] font-light mt-1 max-w-xl">
                Cosecha manual en su punto óptimo de envero y molienda en frío antes de las 3 horas para asegurar aromas
                herbáceos y polifenoles intactos.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 sm:gap-6 text-xs text-[#D4B87A] font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#6B7B3A]" />
                100% Virgen Extra
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C8A96E]" />
                Certificado Sin TACC
              </span>
              <span className="flex items-center gap-1.5 text-[#F5F0EB]">
                <span className="w-2 h-2 rounded-full bg-[#C8A96E]" />
                Valle de Pedernal, Cuyo
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
