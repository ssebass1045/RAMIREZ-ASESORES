'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out' | 'flip';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.15,
  once = true,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, once]);

  const getInitialStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      opacity: 0,
      transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
    };

    switch (animation) {
      case 'fade-up':
        return { ...base, transform: 'translateY(40px)' };
      case 'fade-down':
        return { ...base, transform: 'translateY(-40px)' };
      case 'fade-left':
        return { ...base, transform: 'translateX(-60px)' };
      case 'fade-right':
        return { ...base, transform: 'translateX(60px)' };
      case 'zoom-in':
        return { ...base, transform: 'scale(0.85)' };
      case 'zoom-out':
        return { ...base, transform: 'scale(1.15)' };
      case 'flip':
        return { ...base, transform: 'perspective(600px) rotateX(15deg)' };
      default:
        return base;
    }
  };

  const getVisibleStyles = (): React.CSSProperties => ({
    opacity: 1,
    transform: 'translateY(0) translateX(0) scale(1) rotateX(0)',
    transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
  });

  return (
    <div
      ref={ref}
      className={className}
      style={isVisible ? getVisibleStyles() : getInitialStyles()}
    >
      {children}
    </div>
  );
}
