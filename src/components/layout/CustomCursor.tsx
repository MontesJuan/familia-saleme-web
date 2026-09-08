'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Large outer circle spring (follows with elegant lag)
  const outerSpringConfig = { stiffness: 220, damping: 24, mass: 0.5 };
  const outerX = useSpring(mouseX, outerSpringConfig);
  const outerY = useSpring(mouseY, outerSpringConfig);

  // Small inner dot spring (snappier, less lag)
  const innerSpringConfig = { stiffness: 800, damping: 35, mass: 0.1 };
  const innerX = useSpring(mouseX, innerSpringConfig);
  const innerY = useSpring(mouseY, innerSpringConfig);

  useEffect(() => {
    // Detect touch / mobile devices
    const checkTouch = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };

    if (checkTouch()) {
      setIsTouchDevice(true);
      return;
    }

    setIsTouchDevice(false);

    // Apply cursor: none to body and inject rule to prevent hover cursor fallback
    const styleEl = document.createElement('style');
    styleEl.setAttribute('id', 'familia-saleme-custom-cursor-style');
    styleEl.innerHTML = `
      body, a, button, [role="button"], input, textarea, select {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleEl);
    document.body.style.cursor = 'none';

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        target.closest(
          'a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]'
        )
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.style.cursor = '';
      if (styleEl && styleEl.parentNode) {
        styleEl.parentNode.removeChild(styleEl);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  // Hide completely on mobile/touch screens
  if (isTouchDevice) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Circle (40px) */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-[#C8A96E] pointer-events-none"
        style={{
          x: outerX,
          y: outerY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.6 : 1,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovered ? 'rgba(200, 169, 110, 0.08)' : 'rgba(200, 169, 110, 0)',
          borderColor: isHovered ? '#C8A96E' : 'rgba(200, 169, 110, 0.75)',
        }}
        transition={{
          scale: { type: 'spring', stiffness: 350, damping: 25 },
          opacity: { duration: 0.2 },
          backgroundColor: { duration: 0.2 },
          borderColor: { duration: 0.2 },
        }}
      />

      {/* Inner Dot (8px) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#C8A96E] pointer-events-none shadow-[0_0_8px_rgba(200,169,110,0.5)]"
        style={{
          x: innerX,
          y: innerY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0.3 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { type: 'spring', stiffness: 450, damping: 25 },
          opacity: { duration: 0.15 },
        }}
      />
    </div>
  );
}
