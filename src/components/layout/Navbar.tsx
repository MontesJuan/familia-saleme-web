'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Origen', href: '#origen' },
  { name: 'Producto', href: '#producto' },
  { name: 'Proceso', href: '#proceso' },
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

  // Prevent background scroll when mobile menu is open
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
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'backdrop-blur-xl bg-[#0A0A0A]/80 border-b border-[#C8A96E]/10 py-4 shadow-lg shadow-black/40'
            : 'bg-transparent border-b border-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand logo / Name */}
          <a
            href="#top"
            onClick={(e) => handleScrollTo(e, '#top')}
            className="group inline-flex flex-col items-start transition-opacity duration-300 hover:opacity-85"
          >
            <span className="font-['Playfair_Display',serif] tracking-[0.3em] text-sm text-[#C8A96E] font-medium uppercase select-none">
              FAMILIA SALEME
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="font-['Inter',sans-serif] text-xs uppercase tracking-[0.25em] text-[#A39B8B] hover:text-[#C8A96E] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C8A96E] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden text-[#C8A96E] p-2 -mr-2 transition-colors duration-300 hover:text-[#C8A96E]/80 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <X size={22} strokeWidth={1.5} />
            ) : (
              <Menu size={22} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay & Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 md:hidden"
            />

            {/* Slide-in Drawer */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-[#0A0A0A]/95 backdrop-blur-2xl border-l border-[#C8A96E]/20 z-50 p-8 flex flex-col justify-between md:hidden shadow-2xl shadow-black"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-8 border-b border-[#C8A96E]/10">
                  <span className="font-['Playfair_Display',serif] tracking-[0.25em] text-xs text-[#C8A96E] font-medium uppercase">
                    FAMILIA SALEME
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Cerrar menú"
                    className="text-[#C8A96E] p-1.5 hover:text-[#C8A96E]/80 transition-colors focus:outline-none"
                  >
                    <X size={20} strokeWidth={1.5} />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="mt-12 flex flex-col space-y-6">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleScrollTo(e, item.href)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * (index + 1), duration: 0.4 }}
                      className="font-['Inter',sans-serif] text-sm uppercase tracking-[0.25em] text-[#A39B8B] hover:text-[#C8A96E] transition-colors duration-300 flex items-center justify-between group py-2"
                    >
                      <span>{item.name}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#C8A96E] transition-colors duration-300" />
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Drawer Footer */}
              <div className="pt-8 border-t border-[#C8A96E]/10">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#C8A96E]/70 mb-1">
                  Aceite de Oliva Virgen Extra
                </p>
                <p className="text-[10px] tracking-widest text-[#A39B8B]/60 uppercase">
                  San Juan, Argentina
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
