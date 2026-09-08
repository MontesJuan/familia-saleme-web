'use client';

import React, { useRef, useState, useEffect } from 'react';
import { gsap } from '@/lib/gsapConfig';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Sparkles, Award, ShieldCheck, Droplet } from 'lucide-react';

interface ProductData {
  id: string;
  name: string;
  subtitle: string;
  volume: string;
  description: string;
  profile: {
    label: string;
    value: string;
  }[];
  badges: string[];
  silhouette: React.ReactNode;
}

const products: ProductData[] = [
  {
    id: 'blend-500ml',
    name: 'AOVE Blend Arbequina & Picual',
    subtitle: 'Edición Limitada · Cosecha Temprana',
    volume: '500 ml',
    description:
      'Frutado medio verde con delicadas notas a hoja de olivo, hierba fresca, alcachofa y tomate verde. En boca presenta una entrada fluida y dulce, seguida de un amargor elegante y un picante persistente en perfecta armonía.',
    profile: [
      { label: 'Variedad', value: 'Arbequina (60%) & Picual (40%)' },
      { label: 'Acidez Libre', value: '< 0.18%' },
      { label: 'Envase', value: 'Vidrio Oscuro UV Filter' },
    ],
    badges: ['Sin TACC', 'Indicación Geográfica', 'Virgen Extra'],
    silhouette: (
      <svg
        viewBox="0 0 160 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-64 sm:h-72 md:h-80 w-auto text-[#C8A96E] drop-shadow-[0_10px_25px_rgba(200,169,110,0.2)] transition-transform duration-700 group-hover:scale-105"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="goldSheen500" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF8EC" stopOpacity="0.8" />
            <stop offset="35%" stopColor="#D4B87A" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#C8A96E" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#99793D" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="liquidGrad500" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#C8A96E" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#6B7B3A" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {/* Outer Glow Halo */}
        <ellipse cx="80" cy="200" rx="48" ry="120" fill="url(#goldSheen500)" opacity="0.15" />

        {/* Bottle Body Fill */}
        <path
          d="M62 48H98V72L118 106V326C118 335 110 342 100 342H60C50 342 42 335 42 326V106L62 72V48Z"
          fill="#121212"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        {/* Liquid level inside bottle */}
        <path
          d="M44 140L116 140V324C116 333 108 340 100 340H60C52 340 44 333 44 324V140Z"
          fill="url(#liquidGrad500)"
        />

        {/* Bottle reflections & specular highlights */}
        <path
          d="M50 115V320"
          stroke="#FFF8EC"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeOpacity="0.35"
        />
        <path
          d="M56 110V330"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeOpacity="0.2"
        />
        <path
          d="M110 115V320"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.25"
        />

        {/* Wooden/Wax Cap & Dropper Neck */}
        <rect x="68" y="24" width="24" height="24" rx="2" fill="#1B1A17" stroke="currentColor" strokeWidth="1.6" />
        <rect x="70" y="16" width="20" height="8" rx="1.5" fill="currentColor" fillOpacity="0.6" />
        <line x1="72" y1="36" x2="88" y2="36" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />

        {/* Luxury Label Outline */}
        <rect
          x="54"
          y="160"
          width="52"
          height="115"
          rx="3"
          fill="#0D0D0D"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="3 1.5"
        />

        {/* Saleme Crest / Monogram on Bottle */}
        <circle cx="80" cy="188" r="10" stroke="currentColor" strokeWidth="1" />
        <path d="M80 181V195M74 188H86" stroke="currentColor" strokeWidth="0.8" />
        <text x="80" y="214" fill="#F5F0EB" fontSize="6.5" fontFamily="Georgia" textAnchor="middle" letterSpacing="1.8">
          SALEME
        </text>
        <text x="80" y="224" fill="#C8A96E" fontSize="4.5" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1.2">
          PEDERNAL
        </text>
        <line x1="62" y1="234" x2="98" y2="234" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.4" />
        <text x="80" y="246" fill="#A39B8B" fontSize="4.2" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">
          EXTRA VIRGEN
        </text>
        <text x="80" y="258" fill="#D4B87A" fontSize="5.5" fontFamily="Georgia" textAnchor="middle" fontWeight="bold">
          500 ML
        </text>
      </svg>
    ),
  },
  {
    id: 'blend-3l',
    name: 'AOVE Blend Arbequina & Picual',
    subtitle: 'Formato Gastronómico & Familiar',
    volume: '3 Litros',
    description:
      'La misma pureza y excelencia de nuestra primera extracción en frío, presentada en un envase hermético con protección total contra los rayos ultravioleta y el contacto con el aire. Ideal para los apasionados de la cocina de autor.',
    profile: [
      { label: 'Variedad', value: 'Arbequina & Picual Seleccionadas' },
      { label: 'Acidez Libre', value: '< 0.18%' },
      { label: 'Conservación', value: 'Barrera Total UV y Oxígeno' },
    ],
    badges: ['Sin TACC', 'Indicación Geográfica', 'Virgen Extra'],
    silhouette: (
      <svg
        viewBox="0 0 220 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-64 sm:h-72 md:h-80 w-auto text-[#C8A96E] drop-shadow-[0_10px_25px_rgba(200,169,110,0.2)] transition-transform duration-700 group-hover:scale-105"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="goldSheen3L" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF8EC" stopOpacity="0.8" />
            <stop offset="35%" stopColor="#D4B87A" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#C8A96E" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#99793D" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="tinGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#121212" />
            <stop offset="25%" stopColor="#1A1A1A" />
            <stop offset="50%" stopColor="#141414" />
            <stop offset="80%" stopColor="#1F1E1B" />
            <stop offset="100%" stopColor="#0F0F0F" />
          </linearGradient>
          <linearGradient id="liquidGrad3L" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#C8A96E" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#6B7B3A" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Ambient Glow */}
        <ellipse cx="110" cy="205" rx="64" ry="110" fill="url(#goldSheen3L)" opacity="0.15" />

        {/* Sturdy Canister Top Handle */}
        <path
          d="M85 46C85 30 135 30 135 46"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Spout on Top Left */}
        <rect x="52" y="44" width="18" height="18" rx="2" fill="#1A1A1A" stroke="currentColor" strokeWidth="1.6" />
        <rect x="54" y="38" width="14" height="6" rx="1" fill="currentColor" fillOpacity="0.8" />
        <ellipse cx="61" cy="44" rx="5" ry="1.5" stroke="currentColor" strokeWidth="0.8" />

        {/* Canister Body */}
        <rect
          x="40"
          y="62"
          width="140"
          height="280"
          rx="12"
          fill="url(#tinGradient)"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        {/* Inner Liquid Indicator Fill */}
        <rect
          x="43"
          y="150"
          width="134"
          height="190"
          rx="10"
          fill="url(#liquidGrad3L)"
        />

        {/* Specular vertical reflections */}
        <line x1="52" y1="74" x2="52" y2="330" stroke="#FFF8EC" strokeWidth="1.4" strokeOpacity="0.35" strokeLinecap="round" />
        <line x1="60" y1="70" x2="60" y2="334" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.2" />
        <line x1="168" y1="74" x2="168" y2="330" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.25" strokeLinecap="round" />

        {/* Metallic Bevel Borders */}
        <line x1="42" y1="78" x2="178" y2="78" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" />
        <line x1="42" y1="328" x2="178" y2="328" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" />

        {/* Center Golden Plaque / Frame */}
        <rect
          x="58"
          y="115"
          width="104"
          height="175"
          rx="4"
          fill="#0D0D0D"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="4 2"
        />

        {/* Saleme Heritage Crest */}
        <circle cx="110" cy="155" r="16" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="110" cy="155" r="13" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 2" />
        <path d="M110 144V166M101 155H119" stroke="currentColor" strokeWidth="0.8" />
        <text x="110" y="190" fill="#F5F0EB" fontSize="9" fontFamily="Georgia" textAnchor="middle" letterSpacing="2.5" fontWeight="bold">
          SALEME
        </text>
        <text x="110" y="204" fill="#C8A96E" fontSize="6.5" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1.8">
          PEDERNAL · SAN JUAN
        </text>
        <line x1="72" y1="216" x2="148" y2="216" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" />
        <text x="110" y="232" fill="#A39B8B" fontSize="5.5" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1.2">
          ACEITE DE OLIVA VIRGEN EXTRA
        </text>
        <text x="110" y="246" fill="#D4B87A" fontSize="5.2" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1.4">
          PRIMERA PRENSADA EN FRÍO
        </text>
        <rect x="86" y="258" width="48" height="18" rx="2" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="0.8" />
        <text x="110" y="271" fill="#FFF8EC" fontSize="8" fontFamily="Georgia" textAnchor="middle" fontWeight="bold">
          3 LITROS
        </text>
      </svg>
    ),
  },
];

// Interactive Card with 3D Mouse Tilt & Dynamic Light
interface ProductCardProps {
  product: ProductData;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({
    rotateX: 0,
    rotateY: 0,
    spotlightX: 50,
    spotlightY: 50,
    isHovered: false,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt: max 6 degrees
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    const spotlightX = (x / rect.width) * 100;
    const spotlightY = (y / rect.height) * 100;

    setTilt({
      rotateX,
      rotateY,
      spotlightX,
      spotlightY,
      isHovered: true,
    });
  };

  const handleMouseLeave = () => {
    setTilt((prev) => ({
      ...prev,
      rotateX: 0,
      rotateY: 0,
      isHovered: false,
    }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX.toFixed(2)}deg) rotateY(${tilt.rotateY.toFixed(2)}deg) translateY(${
          tilt.isHovered ? '-6px' : '0px'
        })`,
        transition: tilt.isHovered
          ? 'transform 0.12s ease-out'
          : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className="group relative flex flex-col justify-between rounded-2xl p-8 sm:p-10 lg:p-12 
        bg-gradient-to-b from-[#171717]/85 via-[#121212]/90 to-[#0A0A0A]/95 
        backdrop-blur-xl border border-[#C8A96E]/20 
        hover:border-[#C8A96E]/55 
        shadow-[0_20px_50px_rgba(0,0,0,0.6)] 
        hover:shadow-[0_25px_60px_-15px_rgba(200,169,110,0.22)]
        overflow-hidden transition-all duration-500"
    >
      {/* Dynamic Cursor Spotlight Effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: tilt.isHovered ? 1 : 0,
          background: `radial-gradient(circle 320px at ${tilt.spotlightX}% ${tilt.spotlightY}%, rgba(200, 169, 110, 0.14), transparent 80%)`,
        }}
      />

      {/* Decorative Gold Corner Accents */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#C8A96E]/30 pointer-events-none" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[#C8A96E]/30 pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[#C8A96E]/30 pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#C8A96E]/30 pointer-events-none" />

      {/* Top Header: Volume & Badges */}
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C8A96E]/30 bg-[#C8A96E]/[0.06]">
            <Droplet className="w-3.5 h-3.5 text-[#C8A96E]" />
            <span className="text-[11px] font-inter uppercase tracking-[0.2em] text-[#D4B87A] font-medium">
              Cosecha 2024
            </span>
          </div>

          <span className="font-playfair text-2xl sm:text-3xl text-[#D4B87A] font-medium tracking-wide">
            {product.volume}
          </span>
        </div>

        {/* Product Silhouette Showcase */}
        <div className="relative flex justify-center items-center py-6 sm:py-8 my-2">
          {/* Ambient Silhouette Backdrop Disc */}
          <div className="absolute w-44 h-44 rounded-full bg-[#C8A96E]/[0.07] blur-2xl pointer-events-none" />
          {product.silhouette}
        </div>

        {/* Product Title & Subtitle */}
        <div className="text-center mt-4 mb-6">
          <h3 className="font-playfair text-2xl sm:text-3xl md:text-4xl text-[#F5F0EB] tracking-tight font-normal mb-2 leading-tight">
            {product.name}
          </h3>
          <p className="font-inter text-xs sm:text-sm tracking-[0.18em] uppercase text-[#C8A96E] font-medium">
            {product.subtitle}
          </p>
        </div>

        {/* Badges pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {product.badges.map((badge) => (
            <span
              key={badge}
              className="px-3 py-1 rounded-full border border-[#C8A96E]/40 text-[#D4B87A] text-[11px] tracking-wider uppercase font-inter font-medium bg-[#C8A96E]/[0.06] backdrop-blur-sm"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Sensory Description */}
        <p className="font-inter text-xs sm:text-sm text-[#A39B8B] font-light leading-relaxed text-center mb-8 max-w-lg mx-auto">
          {product.description}
        </p>

        {/* Technical Specs List */}
        <div className="border-t border-b border-white/[0.08] py-4 my-6 space-y-2">
          {product.profile.map((item) => (
            <div
              key={item.label}
              className="flex justify-between items-center text-xs font-inter"
            >
              <span className="text-[#A39B8B] tracking-wide font-light">{item.label}</span>
              <span className="text-[#F5F0EB] font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button with Magnetic hover */}
      <div className="relative z-10 pt-4 flex justify-center">
        <MagneticButton
          href="#contacto"
          strength={0.4}
          className="w-full sm:w-auto px-10 py-4 text-xs tracking-[0.25em] font-medium"
        >
          Consultar
        </MagneticButton>
      </div>
    </div>
  );
};

export const Products: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const cardsContainer = cardsRef.current;
    if (!cardsContainer) return;

    const ctx = gsap.context(() => {
      gsap.from(Array.from(cardsContainer.children), {
        scrollTrigger: {
          trigger: cardsContainer,
          start: 'top 82%',
          once: true,
        },
        y: 60,
        opacity: 0,
        duration: 1.1,
        stagger: 0.25,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="productos"
      ref={sectionRef}
      className="relative w-full py-28 md:py-36 bg-[#0A0A0A] text-[#F5F0EB] overflow-hidden"
    >
      {/* Background Subtle Ambient Lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#C8A96E]/[0.05] rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C8A96E]" />
            <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#C8A96E] font-medium font-inter">
              Colección Exclusiva
            </span>
            <span className="w-8 h-[1px] bg-[#C8A96E]" />
          </div>

          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F5F0EB] tracking-tight font-normal mb-4">
            Nuestros Productos
          </h2>

          <p className="font-inter text-sm sm:text-base text-[#A39B8B] font-light leading-relaxed max-w-lg">
            El balance sublime entre la delicadeza frutal de la Arbequina y la fuerza estructurada del Picual. Nacidos bajo el sol sanjuanino.
          </p>
        </div>

        {/* 2 Product Cards Side by Side (Stacked on Mobile) */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-stretch"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Quality Guarantee Ribbon */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-white/[0.08] flex flex-wrap justify-center items-center gap-8 sm:gap-16 text-[#A39B8B] text-xs font-inter tracking-widest uppercase">
          <div className="flex items-center gap-2.5">
            <Award className="w-4 h-4 text-[#C8A96E]" />
            <span>Prensada en Frío &lt; 24°C</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#C8A96E]" />
            <span>Certificación Libre de Gluten</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-[#C8A96E]" />
            <span>Valle de Pedernal, San Juan</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
