'use client';

import React from 'react';
import { Mail, MapPin, createLucideIcon } from 'lucide-react';

const Instagram = createLucideIcon('Instagram', [
  ['rect', { width: '20', height: '20', x: '2', y: '2', rx: '5', ry: '5', key: 'rect' }],
  ['path', { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z', key: 'path' }],
  ['line', { x1: '17.5', x2: '17.51', y1: '6.5', y2: '6.5', key: 'line' }],
]);

interface FooterLink {
  name: string;
  href: string;
}

const FOOTER_LINKS: FooterLink[] = [
  { name: 'Origen', href: '#origen' },
  { name: 'Producto', href: '#producto' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#' || href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#0A0A0A] text-[#A39B8B] relative overflow-hidden">
      {/* Top border with delicate gold gradient */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C8A96E]/40 to-transparent" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Column 1: Brand (5 cols on md) */}
          <div className="md:col-span-5 flex flex-col items-start space-y-4">
            <a
              href="#top"
              onClick={(e) => handleScrollTo(e, '#top')}
              className="inline-block group"
            >
              <span className="font-['Playfair_Display',serif] tracking-[0.3em] text-base md:text-lg text-[#C8A96E] font-medium uppercase select-none transition-opacity duration-300 group-hover:opacity-85">
                FAMILIA SALEME
              </span>
            </a>
            <p className="font-['Inter',sans-serif] text-xs md:text-sm leading-relaxed text-[#A39B8B] max-w-sm font-light">
              Aceite de Oliva Virgen Extra de alta gama, cosechado con dedicación en los valles de San Juan, Argentina. Pureza, origen y maestría en cada gota.
            </p>
            <div className="pt-2">
              <span className="inline-block text-[11px] tracking-[0.25em] uppercase text-[#C8A96E]/80 border border-[#C8A96E]/20 px-3 py-1 rounded-full font-light">
                Olivícola Pedernal S.A.
              </span>
            </div>
          </div>

          {/* Column 2: Navigation (3 cols on md) */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <h3 className="font-['Playfair_Display',serif] text-xs uppercase tracking-[0.25em] text-[#C8A96E] font-medium">
              Navegación
            </h3>
            <ul className="space-y-3 font-['Inter',sans-serif] text-xs uppercase tracking-[0.2em]">
              {FOOTER_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-[#A39B8B] hover:text-[#C8A96E] transition-colors duration-300 inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Social (4 cols on md) */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <h3 className="font-['Playfair_Display',serif] text-xs uppercase tracking-[0.25em] text-[#C8A96E] font-medium">
              Contacto
            </h3>
            <div className="space-y-3 font-['Inter',sans-serif] text-xs text-[#A39B8B]">
              <div className="flex items-start space-x-3">
                <MapPin size={15} className="text-[#C8A96E] mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="leading-relaxed">
                  San Juan, Argentina
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={15} className="text-[#C8A96E] shrink-0" strokeWidth={1.5} />
                <a
                  href="mailto:info@familiasaleme.com"
                  className="hover:text-[#C8A96E] transition-colors duration-300 tracking-wide"
                >
                  info@familiasaleme.com
                </a>
              </div>
            </div>

            {/* Social links row */}
            <div className="pt-4">
              <span className="block font-['Playfair_Display',serif] text-[10px] uppercase tracking-[0.25em] text-[#C8A96E]/70 mb-3 font-medium">
                Síguenos
              </span>
              <div className="flex items-center space-x-3">
                <a
                  href="https://instagram.com/familia_saleme"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Familia Saleme"
                  className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-[#C8A96E]/20 bg-[#C8A96E]/5 hover:bg-[#C8A96E]/15 hover:border-[#C8A96E]/50 text-[#A39B8B] hover:text-[#C8A96E] transition-all duration-300 group"
                >
                  <Instagram
                    size={14}
                    strokeWidth={1.5}
                    className="text-[#C8A96E] transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="font-['Inter',sans-serif] text-[11px] tracking-[0.2em] uppercase font-light">
                    @familia_saleme
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="w-full border-t border-[#C8A96E]/10 py-8 px-6">
        <p className="font-['Inter',sans-serif] text-[11px] tracking-[0.2em] text-[#A39B8B]/70 uppercase text-center font-light">
          © 2026 Familia Saleme — Olivícola Pedernal S.A.
        </p>
      </div>
    </footer>
  );
}
