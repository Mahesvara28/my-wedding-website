"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  "/images/hero-bg.png",
  "/images/dnp1.jpg", // Add your additional images here
  "/images/dnp2.jpg",
  "/images/dnp3.jpg",
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={heroImages[currentIndex]}
            alt="Dei & Paolo"
            className="w-full h-full object-cover object-[50%_70%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}