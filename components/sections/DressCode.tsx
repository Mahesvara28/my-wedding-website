"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X } from "lucide-react";

export default function DressCode() {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  return (
    <section className="w-full bg-warm-bg py-24 px-4 font-sans">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-warm-accent block mb-4">Attire</span>
          <h2 className="text-5xl md:text-6xl font-serif text-warm-dark tracking-tighter mb-6">Dress Code</h2>
          <div className="w-16 h-[1px] bg-warm-beige mx-auto mb-8" />
          
          <p className="text-2xl font-serif italic text-warm-accent mb-4">
            Rustic Autumnal & Earthy Elegance
          </p>
          <p className="text-lg text-warm-dark">
            Color Motif: <span className="font-semibold">Terracotta & Olive Green</span> (Formal)
          </p>
        </motion.div>

        {/* Two Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* PRINCIPAL SPONSORS CARD */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-warm-cream rounded-lg overflow-hidden shadow-lg border border-warm-beige/30"
          >
            {/* Clickable Image Container */}
            <div 
              className="relative h-[400px] md:h-[500px] group cursor-pointer overflow-hidden"
              onClick={() => setEnlargedImage("/images/dresscode-sponsors.png")}
            >
              <img 
                src="/images/dresscode-sponsors.png" 
                alt="Principal Sponsors Attire Inspiration"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 p-4 rounded-full shadow-xl transform scale-75 group-hover:scale-100">
                  <ZoomIn className="w-6 h-6 text-warm-dark" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none">
                <h3 className="text-3xl font-serif mb-2">Principal Sponsors</h3>
                <p className="text-sm opacity-90">Gentlemen & Ladies</p>
              </div>
            </div>

            {/* Role-Specific Details & Palettes */}
            <div className="p-8 space-y-8">
              
              {/* Ninongs */}
              <div className="text-center">
                <p className="text-sm uppercase tracking-widest text-warm-accent mb-2">Gentlemen</p>
                <p className="text-lg text-warm-dark font-serif mb-4">Charcoal Gray Suit with Black Tie</p>
                <div className="flex justify-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#3D4044] shadow-md border-2 border-white" />
                    <span className="text-[10px] uppercase tracking-wide text-warm-dark font-medium">Charcoal</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#1A1A1A] shadow-md border-2 border-white" />
                    <span className="text-[10px] uppercase tracking-wide text-warm-dark font-medium">Black</span>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-warm-beige/50" />

              {/* Ladies */}
              <div className="text-center">
                <p className="text-sm uppercase tracking-widest text-warm-accent mb-2">Ladies</p>
                <p className="text-lg text-warm-dark font-serif mb-4">Long Dark Green or Olive Gowns</p>
                <div className="flex justify-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#2F4F2F] shadow-md border-2 border-white" />
                    <span className="text-[10px] uppercase tracking-wide text-warm-dark font-medium">Dark Green</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#5A6B4A] shadow-md border-2 border-white" />
                    <span className="text-[10px] uppercase tracking-wide text-warm-dark font-medium">Olive</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* GUESTS CARD */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg border border-warm-beige/30"
          >
            {/* Clickable Image Container */}
            <div 
              className="relative h-[400px] md:h-[500px] group cursor-pointer overflow-hidden"
              onClick={() => setEnlargedImage("/images/dresscode-guests.webp")}
            >
              <img 
                src="/images/dresscode-guests.webp" 
                alt="Guests Attire Inspiration"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 p-4 rounded-full shadow-xl transform scale-75 group-hover:scale-100">
                  <ZoomIn className="w-6 h-6 text-warm-dark" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none">
                <h3 className="text-3xl font-serif mb-2">Guests</h3>
                <p className="text-sm opacity-90">Gentlemen & Ladies</p>
              </div>
            </div>

            {/* Role-Specific Details & Palettes */}
            <div className="p-8 space-y-8">
              
              {/* Gentlemen */}
              <div className="text-center">
                <p className="text-sm uppercase tracking-widest text-warm-accent mb-2">Gentlemen</p>
                <p className="text-lg text-warm-dark font-serif mb-4">Black Suit with Black Tie</p>
                <div className="flex justify-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#1A1A1A] shadow-md border-2 border-white" />
                    <span className="text-[10px] uppercase tracking-wide text-warm-dark font-medium">Black</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-warm-beige/50" />

              {/* Ladies */}
              <div className="text-center">
                <p className="text-sm uppercase tracking-widest text-warm-accent mb-2">Ladies</p>
                <p className="text-lg text-warm-dark font-serif mb-4">Terracotta, Rust, or Earthy Shades</p>
                <div className="flex justify-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#E07A5F] shadow-md border-2 border-white" />
                    <span className="text-[10px] uppercase tracking-wide text-warm-dark font-medium">Terracotta</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#C49A8A] shadow-md border-2 border-white" />
                    <span className="text-[10px] uppercase tracking-wide text-warm-dark font-medium">Rust</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Note at the bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center bg-warm-cream p-8 rounded-lg border border-warm-beige/30"
        >
          <p className="text-warm-dark/80 text-sm md:text-base font-sans leading-relaxed max-w-2xl mx-auto italic">
            We kindly request that our guests avoid wearing pure white to allow our bride to shine on her special day.
          </p>
        </motion.div>
      </div>

      {/* Full Screen Image Modal / Lightbox */}
      <AnimatePresence>
        {enlargedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setEnlargedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-zoom-out"
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[101]"
              onClick={() => setEnlargedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>

            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              src={enlargedImage}
              alt="Enlarged Dress Code"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}