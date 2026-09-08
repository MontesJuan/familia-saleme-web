'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Origen', href: '#origen' },
  { name: 'Premios', href: '#premios' },
  { name: 'Sensorial', href: '#perfil' },
  { name: 'Maridajes', href: '#maridajes' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Productos', href: '#productos' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-xl bg-[#0A0A0A]/92 border-b border-[#C8A96E]/20 py-3 shadow-2xl shadow-black/70'
            : 'bg-gradient-to-b from-[#0A0A0A]/95 via-[#0A0A0A]/60 to-transparent py-4 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-10 flex items-center justify-between">
          {/* Complete Official Logo with Transparent Background - No redundant text beside it */}
          <a
            href="#top"
            onClick={(e) => handleScrollTo(e, '#top')}
            className="group cursor-pointer flex items-center py-1"
            aria-label="Familia Saleme - Inicio"
          >
            <div className="relative w-20 h-16 sm:w-24 sm:h-18 md:w-28 md:h-20 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo_familia_saleme_complete_trans.png"
                alt="Familia Saleme"
                fill
                sizes="(max-width: 640px) 96px, 120px"
                className="object-contain object-left filter drop-shadow-[0_2px_12px_rgba(200,169,110,0.45)]"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation - Clean, spacious, perfectly balanced */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="text-xs uppercase tracking-[0.22em] text-[#DDD6CA] hover:text-[#D4B87A] transition-colors duration-200 relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C8A96E] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#F5F0EB] hover:text-[#C8A96E] transition-colors focus:outline-none"
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between pt-24 pb-12 px-8 animate-fadeIn">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="relative w-28 h-24 mb-2">
              <Image
                src="/images/logo_familia_saleme_complete_trans.png"
                alt="Familia Saleme Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-12 h-[1px] bg-[#C8A96E]/40" />

            <div className="flex flex-col space-y-5 pt-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="font-['Playfair_Display',serif] text-xl text-[#F5F0EB] hover:text-[#C8A96E] transition-colors tracking-wide"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 text-center">
            <a
              href="https://www.instagram.com/familia_saleme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest text-[#A39B8B] hover:text-[#C8A96E] py-2 uppercase"
            >
              Instagram: @familia_saleme
            </a>
          </div>
        </div>
      )}
    </>
  );
}
