"use client";
import { useState, useEffect } from "react";

const backgroundImages = [
  "/images/hero-bg-1.jpg", // Replace with your actual image paths
  "/images/hero-bg-2.jpg",
  "/images/hero-bg-3.jpg",
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
    <section className="relative h-screen w-full overflow-hidden">
      {backgroundImages.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${src})` }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div>
          <h1 className="text-6xl md:text-8xl font-serif mb-6 drop-shadow-lg">
            Paolo & Daisy
          </h1>
          <p className="text-xl md:text-2xl tracking-[0.2em] font-sans font-light drop-shadow-lg">
            Invite you to celebrate their wedding
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {backgroundImages.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all ${
              index === currentImageIndex ? "w-8 bg-warm-bg" : "w-2 bg-warm-bg/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}