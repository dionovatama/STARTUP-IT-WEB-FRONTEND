/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CarouselItem {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface HeroCarouselProps {
  items: CarouselItem[];
  autoPlayInterval?: number;
}

export default function HeroCarousel({ items, autoPlayInterval = 4500 }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play effect
  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isHovered, autoPlayInterval]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (!items || items.length === 0) return null;

  return (
    <div 
      className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-2xl glass-panel overflow-hidden border border-white/10 shadow-2xl group/carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      id="hero-carousel"
    >
      {/* Ambient background glow matching the active slide */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/12 to-transparent opacity-50 blur-3xl pointer-events-none"></div>

      {/* Slide Images */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={items[currentIndex].src} 
              alt={items[currentIndex].alt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover select-none"
            />
            {/* Soft dark vignette overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Manual Navigation Chevrons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/40 hover:bg-slate-900/70 border border-white/10 text-white backdrop-blur-xs opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 cursor-pointer focus:outline-hidden z-20"
        aria-label="Previous Slide"
        id="carousel-prev"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/40 hover:bg-slate-900/70 border border-white/10 text-white backdrop-blur-xs opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 cursor-pointer focus:outline-hidden z-20"
        aria-label="Next Slide"
        id="carousel-next"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Text Content Overlay */}
      <div className="absolute bottom-12 left-0 right-0 px-6 sm:px-8 text-left z-10 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="space-y-1 select-none"
          >
            {items[currentIndex].title && (
              <span className="font-mono text-[10px] sm:text-xs text-indigo-300 font-bold tracking-wider uppercase block">
                {items[currentIndex].title}
              </span>
            )}
            {items[currentIndex].description && (
              <p className="font-display text-sm sm:text-base md:text-lg font-semibold text-white leading-tight">
                {items[currentIndex].description}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Interactive Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20" id="carousel-dots">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer focus:outline-hidden ${
              currentIndex === index 
                ? 'w-6 bg-white' 
                : 'w-2 bg-white/45 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
