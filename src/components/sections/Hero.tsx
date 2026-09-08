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
    <section id="inicio" className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-[#0A0A0A]">
      {/* FULL BACKGROUND: Olivares.jpeg from IMAGENES/OK */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_olivares_bg.jpg"
          alt="Olivares centenarios de Familia Saleme en el Valle de Pedernal"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Cinematic dark luxury overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/85 via-[#0A0A0A]/70 to-[#0A0A0A] backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-radial-at-center from-transparent via-[#0A0A0A]/40 to-[#0A0A0A]/90" />
      </div>

      {/* Floating gold dust particles */}
      <GoldParticles count={35} />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 my-auto text-center">
        {/* Big Golden Brand Droplet Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-16 h-20 sm:w-20 sm:h-24 mx-auto mb-6 flex-shrink-0"
        >
          <div className="absolute inset-0 bg-[#C8A96E]/20 rounded-full blur-2xl -z-10" />
          <Image
            src="/images/logo_emblem_trans.png"
            alt="Emblema Oficial Familia Saleme"
            fill
            sizes="96px"
            className="object-contain filter drop-shadow-[0_4px_16px_rgba(200,169,110,0.45)]"
            priority
          />
        </motion.div>

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414]/90 backdrop-blur-md border border-[#C8A96E]/50 text-[#D4B87A] text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase mb-6 shadow-xl"
        >
          <span>Valle de Pedernal • San Juan, Argentina</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E] animate-ping" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-['Playfair_Display',serif] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#F5F0EB] leading-[1.08] tracking-tight mb-6 max-w-5xl mx-auto"
        >
          Aceite de Oliva Virgen Extra <br />
          <span className="italic font-normal bg-gradient-to-r from-[#FFF8EC] via-[#D4B87A] to-[#C8A96E] bg-clip-text text-fill-transparent drop-shadow-sm">
            Oro Líquido de la Precordillera
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-base sm:text-xl text-[#DDD6CA] font-light max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow-md"
        >
          Nacido en olivares de altura a 1.350 msnm con agua pura de deshielo andino. Dos generaciones dedicadas al
          cuidado del fruto y extracción en frío inmediata en nuestra propia almazara en San Juan.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-16"
        >
          <a
            href="#productos"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#C8A96E] hover:bg-[#D4B87A] text-[#0A0A0A] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#C8A96E]/25 hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <span>Explorar Selección</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-[#C8A96E]/60 hover:border-[#C8A96E] text-[#F5F0EB] hover:text-[#D4B87A] text-xs sm:text-sm font-medium uppercase tracking-wider bg-[#0A0A0A]/80 backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Pedir por WhatsApp</span>
          </a>
        </motion.div>

        {/* Trust Badges Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-xs text-[#EAE4D9]"
        >
          <div className="p-3.5 rounded-2xl bg-[#0A0A0A]/85 backdrop-blur-md border border-[#C8A96E]/30 flex items-center gap-2.5 justify-center shadow-lg">
            <Award className="w-4 h-4 text-[#C8A96E] flex-shrink-0" />
            <span className="font-medium text-[11px] sm:text-xs">Mejor AOVE 2026</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#0A0A0A]/85 backdrop-blur-md border border-[#C8A96E]/30 flex items-center gap-2.5 justify-center shadow-lg">
            <CheckCircle2 className="w-4 h-4 text-[#6B7B3A] flex-shrink-0" />
            <span className="font-medium text-[11px] sm:text-xs">Indicación Geográfica</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#0A0A0A]/85 backdrop-blur-md border border-[#C8A96E]/30 flex items-center gap-2.5 justify-center shadow-lg">
            <ShieldCheck className="w-4 h-4 text-[#D4B87A] flex-shrink-0" />
            <span className="font-medium text-[11px] sm:text-xs">Certificado Sin TACC</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#0A0A0A]/85 backdrop-blur-md border border-[#C8A96E]/30 flex items-center gap-2.5 justify-center shadow-lg">
            <Sparkles className="w-4 h-4 text-[#C8A96E] flex-shrink-0" />
            <span className="font-medium text-[11px] sm:text-xs">Acidez &lt; 0.20%</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade transition into next section */}
      <div className="h-16 bg-gradient-to-t from-[#0E0E0E] to-transparent relative z-10" />
    </section>
  );
}
