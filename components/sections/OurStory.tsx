"use client";
import { useState, useEffect } from "react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const storySections = [
  {
    title: "Where It All Began",
    text: "It all kicked off in 2017 when a workplace intro revealed the ultimate plot twist: we’d actually been running in the exact same neighborhood crew all along! What started as casual work banter quickly turned into late-night talks, endless laughter, and realizing we were standard-issue best friends meant for each other.",
    photos: ["/images/story1-photo1.webp", "/images/story1-photo2.webp", "/images/story1-photo3.webp",]
  },
  {
    title: "Our Favorite Adventure",
    text: "Fast forward through years of adventures, favorite memories, and building our life together, which naturally led to our engagement on December 2, 2025 in Japan—our all-time favorite destination!",
    photos: ["/images/story2-photo1.webp", "/images/story2-photo2.webp", "/images/story2-photo3.webp",]
  },
  {
    title: "Divine Redirection",
    text: "When our original plan at Minoh Falls was unexpectedly closed, we pivoted to Umeda Sky Tower. But after checking out the crowded top deck, Pao knew we needed something far more personal. We headed down, found a quiet set of bleachers, and shared a peaceful, unscripted moment just for the two of us. He asked, she said yes, and right as we turned around, we saw a small church sitting right beside us—a serene, divine redirection truly designed by God's plan.",
    photos: ["/images/story3-photo1.webp", "/images/story3-photo2.webp", "/images/story3-photo3.webp",]
  },
  {
    title: "The Celebration Begins",
    text: "Now, with hearts full of gratitude for how every step of our journey has unfolded, we feel this is the most beautiful timing to bring all our favorite people together under one roof. On February 21, 2027, we warmly invite you to join us as we celebrate our marriage—a day to share our joy, give thanks for love, family, and faith, and party with the ones who mean the world to us!",
    photos: ["/images/story4-photo1.webp", "/images/story4-photo2.webp", "/images/story4-photo3.webp",]
  }
];

// --- THE NEW LIGHTWEIGHT SLIDESHOW ---
function LightSlideshow({ photos }: { photos: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [photos.length]);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-warm-cream rounded-xl shadow-lg">
      {/* Images - Simple CSS Fade (Much lighter than Framer Motion) */}
      {photos.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`Story photo ${index + 1}`}
          loading="lazy" // CRITICAL: Only loads when scrolled into view
          className={`absolute inset-0 w-full h-full object-contain md:object-cover transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentIndex ? "w-6 bg-warm-accent" : "w-1.5 bg-warm-dark/30"
            }`}
          />
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
            <h2 className="text-7xl md:text-9xl font-script text-warm-dark mb-6">Our Story</h2>
            <div className="w-16 h-[1px] bg-warm-beige mx-auto" />
          </div>
        </ScrollReveal>

        <div className="space-y-32">
          {storySections.map((section, i) => (
            <ScrollReveal key={i} variant={i % 2 === 0 ? "slideRight" : "slideLeft"} delay={0.2}>
              <div className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2">
                  <LightSlideshow photos={section.photos} />
                </div>
                <div className={`w-full md:w-1/2 text-center md:text-left ${i % 2 !== 0 ? 'md:text-right' : ''}`}>
                  <h3 className="text-4xl md:text-5xl font-script text-warm-accent mb-6">
                    {section.title}
                  </h3>
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