"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";

const storySections = [
  {
    title: "Our first photoshoot together",
    text: "It all kicked off in 2017 when a workplace intro revealed the ultimate plot twist: we'd actually been running in the exact same neighborhood crew all along!",
    photos: ["/images/story1-photo1.jpg", "/images/story1-photo2.jpg", "/images/story1-photo3.jpg"]
  },
  {
    title: "Laughing together",
    text: "What started as casual work banter quickly turned into late-night talks, endless laughter, and realizing we were standard-issue best friends meant for each other.",
    photos: ["/images/story2-photo1.jpg", "/images/story2-photo2.jpg", "/images/story2-photo3.jpg"]
  },
  {
    title: "Our joy",
    text: "Fast forward through years of adventures, favorite memories, and building our life together, which naturally led to our engagement on December 2, 2025 in Japan.",
    photos: ["/images/story3-photo1.jpg", "/images/story3-photo2.jpg", "/images/story3-photo3.jpg"]
  },
  {
    title: "Forever begins",
    text: "When our original plan at Minoh Falls was unexpectedly closed, we pivoted to Umeda Sky Tower. He asked, she said yes, and right as we turned around, we saw a small church sitting right beside us.",
    photos: ["/images/story4-photo1.jpg", "/images/story4-photo2.jpg", "/images/story4-photo3.jpg"]
  }
];

function ElegantSlideshow({ photos }: { photos: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden bg-warm-cream rounded-xl">
      <div 
        className="absolute left-[5%] w-[30%] h-[80%] z-10 opacity-40 blur-[2px] overflow-hidden rounded-lg cursor-pointer"
        onClick={prevPhoto}
      >
        <img src={photos[getPhotoIndex(-1)]} className="w-full h-full object-cover" alt="prev" />
      </div>

      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          initial={{ x: direction > 0 ? 200 : -200, opacity: 0, scale: 0.9 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: direction > 0 ? -200 : 200, opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative w-[60%] h-[90%] z-20 shadow-2xl overflow-hidden rounded-lg cursor-pointer"
          onClick={nextPhoto}
        >
          <img src={photos[currentIndex]} className="w-full h-full object-cover" alt="current" />
        </motion.div>
      </AnimatePresence>

      <div 
        className="absolute right-[5%] w-[30%] h-[80%] z-10 opacity-40 blur-[2px] overflow-hidden rounded-lg cursor-pointer"
        onClick={nextPhoto}
      >
        <img src={photos[getPhotoIndex(1)]} className="w-full h-full object-cover" alt="next" />
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
            
            {/* UPDATED: Increased font size to match the Hero section */}
            <h2 className="text-6xl md:text-8xl font-serif text-warm-dark tracking-tighter">Our Story</h2>
            
            <div className="w-16 h-[1px] bg-warm-beige mx-auto mt-6" />
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
                  <h3 className="text-4xl font-serif text-warm-dark italic mb-6">"{section.title}"</h3>
                  <p className="text-[#6B705C] text-lg font-sans leading-relaxed">{section.text}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}