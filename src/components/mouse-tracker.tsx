
'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function MouseTracker() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    // Clean up event listeners
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <div className={cn(
      'pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 hidden md:block',
      isVisible ? 'opacity-100' : 'opacity-0'
    )}>
      <div
        className="absolute h-full w-[1px] bg-foreground/10"
        style={{ transform: `translateX(${position.x}px)` }}
      />
      <div
        className="absolute w-full h-[1px] bg-foreground/10"
        style={{ transform: `translateY(${position.y}px)` }}
      />
    </div>
  );
}
