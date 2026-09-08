'use client';

import React, { useEffect, useRef } from 'react';

export interface GoldParticlesProps {
  className?: string;
  count?: number;
  minRadius?: number;
  maxRadius?: number;
  speedMultiplier?: number;
}

interface Particle {
  x: number;
  y: number;
  baseX: number;
  radius: number;
  speedY: number;
  oscillationRadius: number;
  oscillationSpeed: number;
  angle: number;
  opacity: number;
  pulseSpeed: number;
  color: string;
}

const GOLD_PALETTE = ['#C8A96E', '#D4B87A', '#DFBE86', '#B39355'];

export const GoldParticles: React.FC<GoldParticlesProps> = ({
  className = '',
  count = 65,
  minRadius = 1,
  maxRadius = 3,
  speedMultiplier = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Setup high-DPI scaling
    const updateCanvasSize = () => {
      if (!canvas) return;
      const parent = canvas.parentElement;
      const rect = parent ? parent.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight };
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    updateCanvasSize();

    // Generate particles
    const particleCount = Math.max(30, Math.min(count, 120));
    const particles: Particle[] = Array.from({ length: particleCount }, () => {
      const x = Math.random() * width;
      return {
        x,
        baseX: x,
        y: Math.random() * height,
        radius: minRadius + Math.random() * (maxRadius - minRadius),
        speedY: (0.2 + Math.random() * 0.45) * speedMultiplier,
        oscillationRadius: 6 + Math.random() * 18,
        oscillationSpeed: 0.008 + Math.random() * 0.015,
        angle: Math.random() * Math.PI * 2,
        opacity: 0.2 + Math.random() * 0.65,
        pulseSpeed: 0.01 + Math.random() * 0.02,
        color: GOLD_PALETTE[Math.floor(Math.random() * GOLD_PALETTE.length)],
      };
    });

    // Animation loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Drift upward
        p.y -= p.speedY;

        // Oscillate horizontally
        p.angle += p.oscillationSpeed;
        p.x = p.baseX + Math.sin(p.angle) * p.oscillationRadius;

        // Subtle breathing opacity
        const dynamicOpacity = Math.max(
          0.1,
          Math.min(0.9, p.opacity + Math.sin(p.angle * 1.5) * 0.2)
        );

        // Respawn when exiting top
        if (p.y < -10) {
          p.y = height + 10 + Math.random() * 20;
          p.baseX = Math.random() * width;
          p.x = p.baseX;
          p.angle = Math.random() * Math.PI * 2;
        }

        // Draw particle
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        // Luxury soft glow
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.radius > 2 ? 6 : 3;
        ctx.globalAlpha = dynamicOpacity;
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Resize handling with ResizeObserver
    let resizeObserver: ResizeObserver | null = null;
    const parent = canvas.parentElement;

    if (parent && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        updateCanvasSize();
      });
      resizeObserver.observe(parent);
    } else {
      window.addEventListener('resize', updateCanvasSize);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener('resize', updateCanvasSize);
      }
    };
  }, [count, minRadius, maxRadius, speedMultiplier]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 w-full h-full z-10 ${className}`}
      aria-hidden="true"
    />
  );
};

export default GoldParticles;
