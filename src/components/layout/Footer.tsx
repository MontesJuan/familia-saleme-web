'use client';

import React from 'react';
import Image from 'next/image';
import { MessageCircle, MapPin, Heart, ArrowUp } from 'lucide-react';
import InstagramIcon from '@/components/ui/InstagramIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl =
    'https://wa.me/5492644999862?text=Hola%20Familia%20Saleme!%20Quisiera%20hacer%20un%20pedido%20de%20Aceite%20de%20Oliva%20Virgen%20Extra.';

  return (
    <footer className="bg-[#070707] text-[#A39B8B] border-t border-[#C8A96E]/20 relative overflow-hidden">
      {/* Top subtle golden gradient line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C8A96E]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-14 sm:w-14 sm:h-16 flex-shrink-0">
                <Image
                  src="/images/logo_emblem_trans.png"
                  alt="Familia Saleme Logo Oficial"
                  fill
                  className="object-contain filter drop-shadow-[0_2px_8px_rgba(200,169,110,0.3)]"
                />
              </div>
              <div>
                <span className="font-['Playfair_Display',serif] tracking-[0.25em] text-lg text-[#F5F0EB] block">
                  FAMILIA SALEME
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A96E] font-medium block -mt-0.5">
                  San Juan • Argentina
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A39B8B] font-light leading-relaxed max-w-sm">
              Aceite de Oliva Virgen Extra de alta montaña. Galardonado como el Mejor AOVE de Argentina en Caminos y
              Sabores 2026. Finca y almazara propia en el Valle de Pedernal.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/familia_saleme"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center text-[#F5F0EB] hover:text-[#C8A96E] hover:border-[#C8A96E] transition-all"
                aria-label="Instagram Familia Saleme"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center text-[#25D366] hover:border-[#25D366] transition-all"
                aria-label="WhatsApp Familia Saleme"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-[0.22em] text-[#C8A96E] font-semibold block mb-2 font-mono">
              Navegación
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-[#F5F0EB] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#origen" className="hover:text-[#F5F0EB] transition-colors">
                  Nuestro Origen
                </a>
              </li>
              <li>
                <a href="#premios" className="hover:text-[#F5F0EB] transition-colors">
                  Premios 2026
                </a>
              </li>
              <li>
                <a href="#perfil" className="hover:text-[#F5F0EB] transition-colors">
                  Perfil Sensorial
                </a>
              </li>
              <li>
                <a href="#maridajes" className="hover:text-[#F5F0EB] transition-colors">
                  Maridajes de Autor
                </a>
              </li>
              <li>
                <a href="#proceso" className="hover:text-[#F5F0EB] transition-colors">
                  Proceso Productivo
                </a>
              </li>
              <li>
                <a href="#productos" className="hover:text-[#F5F0EB] transition-colors">
                  Nuestros Productos
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[#F5F0EB] transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#F5F0EB] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Origin & Legal Information */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs uppercase tracking-[0.22em] text-[#C8A96E] font-semibold block mb-2 font-mono">
              Procedencia & Calidad
            </span>
            <div className="space-y-2 text-xs text-[#A39B8B] font-light">
              <p>
                <strong className="text-[#F5F0EB] font-medium">Finca & Almazara:</strong> Valle de Pedernal,
                Departamento Sarmiento, San Juan, Argentina.
              </p>
              <p>
                <strong className="text-[#F5F0EB] font-medium">Razón Social:</strong> Olivícola Pedernal S.A.
              </p>
              <p>
                <strong className="text-[#F5F0EB] font-medium">Certificaciones:</strong> Indicación Geográfica (IG) San
                Juan • Libre de Gluten Sin TACC • ArgOliva.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs text-[#D4B87A] hover:text-[#FFF8EC] transition-colors cursor-pointer"
              >
                <span>Volver al inicio</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A39B8B]/70 font-light">
          <p>© 2026 Familia Saleme — Olivícola Pedernal S.A. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1.5">
            <span>Hecho con devoción en San Juan, Argentina</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
