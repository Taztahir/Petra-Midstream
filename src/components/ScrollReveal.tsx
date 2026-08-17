import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delayMs?: number;
  durationMs?: number;
  distancePx?: number;
  className?: string; // Added optional className prop
}

/**
 * ScrollReveal component wrapper that adds a premium fade-in-up scroll reveal
 * animation when the children enter the viewport. Respects prefers-reduced-motion.
 */
export default function ScrollReveal({
  children,
  delayMs = 0,
  durationMs = 800,
  distancePx = 30,
  className = '', // Default to empty string
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.05, // Trigger early when 5% of the element is visible
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before it fully enters viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const style: React.CSSProperties = {
    transition: `opacity ${durationMs}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${durationMs}ms cubic-bezier(0.16, 1, 0.3, 1)`,
    transitionDelay: `${delayMs}ms`,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : `translateY(${distancePx}px)`,
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}