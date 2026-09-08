'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface ScrollIndicatorProps {
  targetId?: string;
  label?: string;
  className?: string;
  onClick?: () => void;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  targetId,
  label = 'Descubre',
  className = '',
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }

    if (targetId) {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // Default: scroll down one viewport height
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
      aria-label={`${label} - Desplazarse hacia abajo`}
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer z-20 bg-transparent border-none p-2 outline-none group select-none ${className}`}
    >
      {/* Small-caps text */}
      <span className="text-[10px] tracking-[0.35em] uppercase font-light text-[#C8A96E]/80 transition-colors duration-500 group-hover:text-[#F5F0EB]">
        {label}
      </span>

      {/* Pulsing indicator track with moving gold pulse */}
      <div className="relative w-5 h-12 flex flex-col items-center justify-start">
        {/* Subtle background rail line */}
        <div className="w-[1px] h-full bg-gradient-to-b from-[#C8A96E]/20 via-[#C8A96E]/40 to-transparent" />

        {/* Animated moving bead / line */}
        <motion.div
          className="absolute top-0 w-[1.5px] h-4 bg-gradient-to-b from-[#D4B87A] to-[#C8A96E] rounded-full shadow-[0_0_8px_rgba(200,169,110,0.8)]"
          animate={{
            y: [0, 24, 0],
            opacity: [0.4, 1, 0.4],
            scaleY: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: [0.65, 0, 0.35, 1],
          }}
        />

        {/* Minimal chevron at bottom tip */}
        <motion.svg
          className="absolute -bottom-1 w-3 h-3 text-[#C8A96E] drop-shadow-[0_0_4px_rgba(200,169,110,0.7)]"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          animate={{
            y: [0, 3, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <path d="M2.5 4.5L6 8L9.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </div>
    </motion.button>
  );
};

export default ScrollIndicator;
