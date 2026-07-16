"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { src: "/images/Couple2.jpg", alt: "Dei & Paolo - Photo 1" },
  { src: "/images/dnp1.jpg", alt: "Dei & Paolo - Photo 2" },
  { src: "/images/dnp2.jpg", alt: "Dei & Paolo - Photo 3" },
  { src: "/images/dnp3.jpg", alt: "Dei & Paolo - Photo 4" },
  { src: "/images/dnp4.jpg", alt: "Dei & Paolo - Photo 5" },
];

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextPhoto = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="h-screen w-full bg-stone-900 snap-start relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-10" />

      {/* Title */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 text-center">
        <span className="text-[10px] uppercase tracking-[0.5em] text-stone-300 block mb-2">
          Our Journey
        </span>
        <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tighter">
          Together in Love
        </h2>
      </div>

      {/* Main Photo Container */}
      <div className="relative h-full w-full flex items-center justify-center p-4 md:p-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative max-w-5xl w-full aspect-[4/3] md:aspect-[16/9]"
          >
            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevPhoto}
          className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 p-3 rounded-full transition-all group"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextPhoto}
          className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 p-3 rounded-full transition-all group"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-12 h-3 bg-white"
                  : "w-3 h-3 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}