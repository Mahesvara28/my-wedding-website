"use client";
import { useState, useEffect } from "react";

const backgroundImages = [
  "/images/hero-bg-1.webp?v=3",
  "/images/hero-bg-2.webp?v=3",
  "/images/hero-bg-3.webp?v=3",
  "/images/hero-bg-4.webp?v=3",
  "/images/hero-bg-5.webp?v=3",
  "/images/hero-bg-6.webp?v=3",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#2C2420]">
      {backgroundImages.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Blurred background to fill space */}
          <img
            src={src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-60"
          />
          
          {/* Main image */}
          <img
            src={src}
            alt={`Hero background ${index + 1}`}
            className="absolute inset-0 w-full h-full object-contain object-center"
          />
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Pagination dots only */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 sm:gap-2">
        {backgroundImages.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentImageIndex
                ? "w-7 sm:w-8 bg-warm-bg"
                : "w-1.5 sm:w-2 bg-warm-bg/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}