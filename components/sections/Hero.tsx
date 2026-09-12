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
<section className="relative min-h-screen w-full overflow-hidden">
      {backgroundImages.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt={`Hero background ${index + 1}`}
            className="absolute inset-0 w-full h-full object-contain md:object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-script mb-4 md:mb-6 drop-shadow-lg text-warm-cream">
            Pao And Dei
          </h1>

          <p className="text-base md:text-xl lg:text-2xl tracking-[0.2em] font-serif font-light drop-shadow-lg px-2">
            Invite you to celebrate their wedding
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {backgroundImages.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all ${
              index === currentImageIndex
                ? "w-8 bg-warm-bg"
                : "w-2 bg-warm-bg/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}