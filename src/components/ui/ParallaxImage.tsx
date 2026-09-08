'use client';

import React, { useEffect, useRef } from 'react';
import gsap from '@/lib/gsapConfig';

export interface ParallaxImageProps {
  children?: React.ReactNode;
  speed?: number; // Parallax intensity (typically 0.1 to 0.5, default 0.25)
  className?: string;
  innerClassName?: string;
  scale?: number; // Slight scale boost to prevent empty space during translation
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  children,
  speed = 0.25,
  className = '',
  innerClassName = '',
  scale,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

  // Auto calculate scale if not explicitly provided
  const targetScale = scale ?? 1 + Math.abs(speed) * 0.4;

  useEffect(() => {
    if (!containerRef.current || !targetRef.current) return;

    const ctx = gsap.context(() => {
      const yDistancePercent = speed * 100;

      gsap.fromTo(
        targetRef.current,
        {
          yPercent: -yDistancePercent,
        },
        {
          yPercent: yDistancePercent,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        ref={targetRef}
        style={{
          transform: `scale(${targetScale})`,
          willChange: 'transform',
        }}
        className={`w-full h-full origin-center transform-gpu ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxImage;
