"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
 "/images/dnp6.jpg",
  "/images/dnp7.jpg",
  "/images/dnp8.jpg",
  "/images/dnp9.jpg",
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % photos.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <section className="min-h-[100dvh] w-full bg-stone-900 snap-start relative flex flex-col items-center justify-center py-16 px-6">
      {/* Background Image with Fade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={photos[currentIndex]}
            alt="Gallery"
            className="w-full h-full object-cover opacity-30 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/60 to-stone-900/80" />
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">
        {/* Title - Always Visible */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif text-white mb-8 tracking-tighter text-center"
        >
          Our Journey
        </motion.h2>
        
        {/* Main Image Frame */}
        <div className="relative w-full flex items-center justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={photos[currentIndex]}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="max-h-[60vh] w-auto object-contain rounded-lg shadow-2xl"
            />
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-8">
          <button 
            onClick={prev} 
            className="p-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-stone-900 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex gap-2">
            {photos.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-8 bg-white" : "w-2 bg-white/30"
                }`} 
              />
            ))}
          </div>

          <button 
            onClick={next} 
            className="p-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-stone-900 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}