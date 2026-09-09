"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const heroImages = [
  "/images/FirstSlide1.jpg",
  "/images/FirstSlide2.jpg",
  "/images/FirstSlide3.jpg",
  "/images/FirstSlide4.jpg"
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

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
          <Image
            src={heroImages[currentIndex]}
            alt="Daisy & Paolo Wedding"
            fill
            priority={currentIndex === 0} // Only first image loads immediately
            className="object-cover object-[50%_70%]"
            sizes="100vw"
            quality={90} // High quality for hero images
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}