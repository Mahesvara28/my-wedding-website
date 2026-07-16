"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

// Add your image paths here
const photos = [
  "/images/couple-1.jpg",
  "/images/couple-2.jpg",
  "/images/couple-3.jpg",
  "/images/couple-4.jpg",
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % photos.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <section className="h-[100dvh] w-full bg-stone-900 snap-start relative flex items-center justify-center overflow-hidden">
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
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-stone-900" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-12 tracking-tighter text-center">
          Our Journey
        </h2>
        
        {/* Main Image Frame */}
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={photos[currentIndex]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-8 mt-12">
          <button onClick={prev} className="p-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-stone-900 transition-all">
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex gap-2">
            {photos.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-white" : "w-2 bg-white/30"}`} 
              />
            ))}
          </div>

          <button onClick={next} className="p-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-stone-900 transition-all">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}