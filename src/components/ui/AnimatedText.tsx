'use client';

import React, { useEffect, useRef } from 'react';
import gsap from '@/lib/gsapConfig';

export interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  delay?: number;
  splitBy?: 'chars' | 'words' | 'lines';
  stagger?: number;
  duration?: number;
  once?: boolean;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  as: Component = 'p',
  delay = 0,
  splitBy = 'words',
  stagger,
  duration = 1.1,
  once = true,
}) => {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const defaultStagger =
      stagger ?? (splitBy === 'chars' ? 0.02 : splitBy === 'words' ? 0.05 : 0.12);

    const ctx = gsap.context(() => {
      const tokens = containerRef.current?.querySelectorAll('.animated-token');
      if (!tokens || tokens.length === 0) return;

      gsap.fromTo(
        tokens,
        {
          y: '115%',
          opacity: 0,
        },
        {
          y: '0%',
          opacity: 1,
          duration,
          ease: 'power3.out',
          stagger: defaultStagger,
          delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 88%',
            toggleActions: once ? 'play none none none' : 'play reverse play reverse',
          },
        }
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [text, delay, splitBy, stagger, duration, once]);

  // Render tokens based on splitBy mode
  const renderContent = () => {
    if (splitBy === 'lines') {
      const lines = text.split('\n');
      return lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block overflow-hidden">
          <span className="animated-token block will-change-transform">
            {line}
          </span>
        </span>
      ));
    }

    const words = text.split(' ');

    if (splitBy === 'chars') {
      return words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block whitespace-nowrap overflow-hidden align-top mr-[0.28em] last:mr-0"
        >
          {word.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              className="animated-token inline-block will-change-transform"
            >
              {char}
            </span>
          ))}
        </span>
      ));
    }

    // Default: 'words'
    return words.map((word, wordIndex) => (
      <span
        key={wordIndex}
        className="inline-block overflow-hidden align-top mr-[0.28em] last:mr-0"
      >
        <span className="animated-token inline-block will-change-transform">
          {word}
        </span>
      </span>
    ));
  };

  return (
    <Component
      ref={containerRef as unknown as React.Ref<never>}
      className={className}
      aria-label={text}
    >
      {renderContent()}
    </Component>
  );
};

export default AnimatedText;
