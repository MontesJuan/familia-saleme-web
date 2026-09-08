'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, ArrowRight } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Origen', href: '#origen' },
  { name: 'Premios', href: '#premios' },
  { name: 'Perfil Sensorial', href: '#perfil' },
  { name: 'Maridajes', href: '#maridajes' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Productos', href: '#productos' },
  { name: 'Galería', href: '#galeria' },
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

  const whatsappUrl =
    'https://wa.me/5492644999862?text=Hola%20Familia%20Saleme!%20Visité%20su%20web%20y%20quisiera%20hacer%20un%20pedido%20de%20Aceite%20de%20Oliva%20Virgen%20Extra.';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-md bg-[#0A0A0A]/90 border-b border-[#C8A96E]/20 py-3.5 shadow-xl shadow-black/50'
            : 'bg-gradient-to-b from-[#0A0A0A]/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Official Logo and Brand Identity */}
          <a
            href="#top"
            onClick={(e) => handleScrollTo(e, '#top')}
            className="flex items-center gap-3.5 group cursor-pointer"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#C8A96E]/60 p-0.5 bg-black/60 shadow-md group-hover:border-[#D4B87A] transition-colors flex-shrink-0">
              <Image
                src="/images/logo_original.jpg"
                alt="Familia Saleme — Logo Oficial"
                fill
                sizes="48px"
                className="object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-['Playfair_Display',serif] text-base sm:text-lg tracking-[0.22em] text-[#F5F0EB] font-medium uppercase group-hover:text-[#C8A96E] transition-colors">
                FAMILIA SALEME
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-[#C8A96E] font-medium -mt-0.5">
                Aceite de Oliva • San Juan
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-7">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="text-xs uppercase tracking-[0.18em] text-[#A39B8B] hover:text-[#C8A96E] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C8A96E] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3.5">
            <a
              href="#productos"
              onClick={(e) => handleScrollTo(e, '#productos')}
              className="text-xs uppercase tracking-[0.16em] text-[#D4B87A] hover:text-[#FFF8EC] font-medium px-3.5 py-2 transition-colors"
            >
              Catálogo
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-[#C8A96E] hover:bg-[#D4B87A] text-[#0A0A0A] text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-[#0A0A0A]" />
              <span>Pedir por WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 text-[#F5F0EB] hover:text-[#C8A96E] transition-colors focus:outline-none"
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-2xl xl:hidden flex flex-col justify-between pt-24 pb-12 px-8"
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#C8A96E] mb-2 p-0.5">
                <Image
                  src="/images/logo_original.jpg"
                  alt="Familia Saleme Logo"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <span className="font-['Playfair_Display',serif] tracking-[0.3em] text-lg text-[#C8A96E] uppercase">
                FAMILIA SALEME
              </span>
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

            <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-full bg-[#C8A96E] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pedir por WhatsApp</span>
              </a>
              <a
                href="https://www.instagram.com/familia_saleme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-xs tracking-widest text-[#A39B8B] hover:text-[#C8A96E] py-2 uppercase"
              >
                Instagram: @familia_saleme
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
