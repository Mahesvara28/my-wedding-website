"use client";
import { useState, useEffect, useRef } from "react";

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
  const touchStartX = useRef<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoRotation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoRotation();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    
    // Swipe threshold: 50px
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left - next image
        setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
      } else {
        // Swipe right - previous image
        setCurrentImageIndex((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
      }
      // Reset timer after manual swipe
      startAutoRotation();
    }
    
    touchStartX.current = null;
  };

  return (
    <section 
      className="relative h-[100svh] w-full overflow-hidden bg-[#2C2420]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {backgroundImages.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-60"
          />
          <img
            src={src}
            alt={`Hero background ${index + 1}`}
            className="absolute inset-0 w-full h-full object-contain object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 sm:gap-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentImageIndex(index);
              startAutoRotation();
            }}
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