'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Droplet, ShieldCheck, ArrowRight } from 'lucide-react';

interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  detail: string;
  image: string;
}

const STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Terruño de Altura',
    subtitle: 'El Valle de Pedernal a 1.350 msnm',
    description:
      'Nuestros olivares crecen en un microclima de gran altitud, regados con agua pura de deshielo andino y acariciados por más de 300 días de sol al año.',
    detail: 'Suelos pedregosos calcáreos que obligan a las raíces a profundizar.',
    image: '/images/pedernal_valley.jpg',
  },
  {
    step: '02',
    title: 'Cosecha Manual Temprana',
    subtitle: 'Selección en Envero',
    description:
      'Recolectamos a mano en el punto justo de maduración cuando las aceitunas Arbequina y Picual viran de verde a morado, maximizando la carga de antioxidantes.',
    detail: 'Evitamos que el fruto toque el suelo para prevenir magulladuras.',
    image: '/images/harvest_field.jpg',
  },
  {
    step: '03',
    title: 'Extracción en Frío In-Situ',
    subtitle: 'Molturación en Menos de 3 Horas',
    description:
      'Nuestra propia planta en la finca permite moler las aceitunas de inmediato a temperaturas inferiores a 24°C, asegurando una acidez virgen extra menor a 0.20%.',
    detail: 'Extracción exclusivamente por procedimientos mecánicos centrífugos.',
    image: '/images/bottle_pour_liquid_gold.jpg',
  },
  {
    step: '04',
    title: 'Guarda & Embotellado Artesanal',
    subtitle: 'Protección Total del Oro Líquido',
    description:
      'El aceite descansa en tanques de acero inoxidable antes de ser embotellado en vidrio oscuro con protección UV y vertedor de precisión para la mesa.',
    detail: 'Control riguroso lote por lote con certificación Sin TACC.',
    image: '/images/bottle_branch_close.jpg',
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 sm:py-32 bg-[#0E0E0E] border-t border-[#C8A96E]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#C8A96E] font-semibold block mb-3">
            Del Árbol a la Botella • Trazabilidad Total
          </span>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-5xl md:text-6xl text-[#F5F0EB] font-normal tracking-tight mb-5 leading-tight">
            Cuatro Pasos de Maestría Olivícola
          </h2>
          <p className="text-sm sm:text-base text-[#A39B8B] font-light leading-relaxed">
            Un proceso artesanal perfeccionado a lo largo de dos generaciones que garantiza la máxima pureza en cada
            gota que llega a tu hogar.
          </p>
        </div>

        {/* 4 Process Cards Grid with Real Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, idx) => (
            <div
              key={idx}
              className="rounded-3xl overflow-hidden bg-[#141414] border border-[#C8A96E]/20 hover:border-[#C8A96E] transition-all duration-300 group flex flex-col justify-between shadow-xl"
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30" />

                {/* Step badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0A0A0A]/85 backdrop-blur-md border border-[#C8A96E]/40 text-[#D4B87A] text-xs font-mono font-bold">
                  FASE {s.step}
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#C8A96E] font-semibold block mb-1">
                    {s.subtitle}
                  </span>
                  <h3 className="font-['Playfair_Display',serif] text-xl text-[#F5F0EB] font-normal mb-2.5">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#A39B8B] font-light leading-relaxed mb-3">{s.description}</p>
                </div>

                <div className="pt-3 border-t border-white/10 text-[11px] text-[#D4B87A] font-light">
                  ✦ {s.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
