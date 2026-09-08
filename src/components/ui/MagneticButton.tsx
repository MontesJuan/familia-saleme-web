'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  href?: string;
  strength?: number;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  target?: string;
  rel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  href,
  strength = 0.35,
  type = 'button',
  disabled = false,
  target,
  rel,
}) => {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics
  const springConfig = { damping: 18, stiffness: 160, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (clientX - centerX) * strength;
    const deltaY = (clientY - centerY) * strength;

    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses = `relative inline-flex items-center justify-center px-8 py-3.5 
    border border-[#C8A96E] bg-transparent text-[#F5F0EB] 
    hover:bg-[#C8A96E] hover:text-[#0A0A0A] hover:border-[#C8A96E]
    text-xs tracking-[0.22em] uppercase font-light
    transition-colors duration-500 ease-out cursor-pointer select-none
    disabled:opacity-40 disabled:cursor-not-allowed group overflow-hidden ${className}`;

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: smoothX, y: smoothY }}
        className={baseClasses}
      >
        <span className="relative z-10 transition-transform duration-300 group-hover:scale-[1.02]">
          {children}
        </span>
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: smoothX, y: smoothY }}
      className={baseClasses}
    >
      <span className="relative z-10 transition-transform duration-300 group-hover:scale-[1.02]">
        {children}
      </span>
    </motion.button>
  );
};

export default MagneticButton;
