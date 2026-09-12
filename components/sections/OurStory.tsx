"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";

const storySections = [
  {
    title: "Where It All Began",
    text: "It all kicked off in 2017 when a workplace intro revealed the ultimate plot twist: we’d actually been running in the exact same neighborhood crew all along! What started as casual work banter quickly turned into late-night talks, endless laughter, and realizing we were standard-issue best friends meant for each other.",
    photos: ["/images/story1-photo1.webp", "/images/story1-photo2.webp", "/images/story1-photo3.webp", "/images/story1-photo4.webp", "/images/story1-photo5.webp", "/images/story1-photo6.webp"]
  },
  {
    title: "Our Favorite Adventure",
    text: "Fast forward through years of adventures, favorite memories, and building our life together, which naturally led to our engagement on December 2, 2025 in Japan—our all-time favorite destination!",
    photos: ["/images/story2-photo1.webp", "/images/story2-photo2.webp", "/images/story2-photo3.webp", "/images/story2-photo4.webp", "/images/story2-photo5.webp", "/images/story2-photo6.webp"]
  },
  {
    title: "Divine Redirection",
    text: "When our original plan at Minoh Falls was unexpectedly closed, we pivoted to Umeda Sky Tower. But after checking out the crowded top deck, Pao knew we needed something far more personal. We headed down, found a quiet set of bleachers, and shared a peaceful, unscripted moment just for the two of us. He asked, she said yes, and right as we turned around, we saw a small church sitting right beside us—a serene, divine redirection truly designed by God's plan.",
    photos: ["/images/story3-photo1.webp", "/images/story3-photo2.webp", "/images/story3-photo3.webp", "/images/story3-photo4.webp", "/images/story3-photo5.webp", "/images/story3-photo6.webp"]
  },
  {
    title: "The Celebration Begins",
    text: "Now, with hearts full of gratitude for how every step of our journey has unfolded, we feel this is the most beautiful timing to bring all our favorite people together under one roof. On February 21, 2027, we warmly invite you to join us as we celebrate our marriage—a day to share our joy, give thanks for love, family, and faith, and party with the ones who mean the world to us!",
    photos: ["/images/story4-photo1.webp", "/images/story4-photo2.webp", "/images/story4-photo3.webp", "/images/story4-photo4.webp", "/images/story4-photo5.webp", "/images/story4-photo6.webp"]
  }
];

function ElegantSlideshow({ photos }: { photos: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [loadedImages, setLoadedImages] = useState<boolean[]>(new Array(photos.length).fill(false));

  // Preload all images in the background
  useEffect(() => {
    photos.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoadedImages(prev => {
          const newLoaded = [...prev];
          newLoaded[index] = true;
          return newLoaded;
        });
      };
    });
  }, [photos]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, photos.length]);

  const nextPhoto = () => { setDirection(1); setCurrentIndex((prev) => (prev + 1) % photos.length); };
  const prevPhoto = () => { setDirection(-1); setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length); };

  const getPhotoIndex = (offset: number) => (currentIndex + offset + photos.length) % photos.length;

  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden bg-warm-cream rounded-xl">
      
      {/* Side Images - Hidden on mobile */}
      <div 
        className="absolute left-[2%] w-[25%] h-[70%] z-10 opacity-30 overflow-hidden rounded-lg cursor-pointer hidden lg:block"
        onClick={prevPhoto}
      >
        <img src={photos[getPhotoIndex(-1)]} alt="prev" className="w-full h-full object-cover" loading="lazy" />
      </div>

      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          initial={{ x: direction > 0 ? 80 : -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? -80 : 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-full md:w-[85%] lg:w-[60%] h-full z-20 shadow-lg overflow-hidden rounded-lg cursor-pointer will-change-transform"
          onClick={nextPhoto}
        >
          <img 
            src={photos[currentIndex]} 
            alt="current" 
            className="absolute inset-0 w-full h-full object-contain md:object-cover"
            loading={currentIndex === 0 ? "eager" : "lazy"}
            fetchPriority={currentIndex === 0 ? "high" : "auto"}
          />
          {/* Loading Placeholder */}
          {!loadedImages[currentIndex] && (
            <div className="absolute inset-0 bg-warm-cream animate-pulse" />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Right Side Image - Hidden on mobile */}
      <div 
        className="absolute right-[2%] w-[25%] h-[70%] z-10 opacity-30 overflow-hidden rounded-lg cursor-pointer hidden lg:block"
        onClick={nextPhoto}
      >
        <img src={photos[getPhotoIndex(1)]} alt="next" className="w-full h-full object-cover" loading="lazy" />
      </div>
      
      <div className="absolute bottom-6 flex gap-2 z-30">
        {photos.map((_, i) => (
          <div key={i} className={`h-1.5 rounded-full transition-all ${i === currentIndex ? 'w-8 bg-warm-accent' : 'w-1.5 bg-gray-400'}`} />
        ))}
      </div>
    </div>
  );
}

export default function OurStory() {
  return (
    <section className="w-full bg-warm-bg py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal variant="fadeUp">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.5em] text-warm-accent block mb-4 font-sans">Our Journey</span>
            {/* Changed to font-script for elegant calligraphic look, removed tracking-tighter so letters don't overlap */}
            <h2 className="text-7xl md:text-9xl font-script text-warm-dark mb-6">Our Story</h2>
            <div className="w-16 h-[1px] bg-warm-beige mx-auto" />
          </div>
        </ScrollReveal>

        <div className="space-y-32">
          {storySections.map((section, i) => (
            <ScrollReveal key={i} variant={i % 2 === 0 ? "slideRight" : "slideLeft"} delay={0.2}>
              <div className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2">
                  <ElegantSlideshow photos={section.photos} />
                </div>
                <div className={`w-full md:w-1/2 text-center md:text-left ${i % 2 !== 0 ? 'md:text-right' : ''}`}>
                  {/* Changed to font-script for section titles to make them focal points */}
                  <h3 className="text-4xl md:text-5xl font-script text-warm-accent mb-6">
                    {section.title}
                  </h3>
                  {/* Changed to font-serif for timeless, high-end editorial readability */}
                  <p className="text-warm-dark/80 text-lg md:text-xl font-serif leading-relaxed">
                    {section.text}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}