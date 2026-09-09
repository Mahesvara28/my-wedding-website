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

        {/* Two Side-by-Side Images with Color Palettes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Principal Sponsors Image & Colors */}
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
              
              {/* Hover Overlay with Magnifying Glass */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 p-4 rounded-full shadow-xl transform scale-75 group-hover:scale-100">
                  <ZoomIn className="w-6 h-6 text-warm-dark" />
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none">
                <h3 className="text-3xl font-serif mb-2">Principal Sponsors</h3>
                <p className="text-sm opacity-90">Ninongs & Ninangs</p>
              </div>
            </div>

            {/* Color Palette & Details */}
            <div className="p-8">
              <div className="space-y-6 mb-8">
                <div className="text-center">
                  <p className="text-sm uppercase tracking-widest text-warm-accent mb-3">Ninongs</p>
                  <p className="text-lg text-warm-dark font-serif mb-2">Charcoal Gray Suit</p>
                  <p className="text-warm-dark text-sm">with Black Tie</p>
                </div>
                <div className="w-full h-px bg-warm-beige/50" />
                <div className="text-center">
                  <p className="text-sm uppercase tracking-widest text-warm-accent mb-3">Ninangs</p>
                  <p className="text-lg text-warm-dark font-serif">Long Dark Green Gowns</p>
                </div>
              </div>

              <div className="flex justify-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-[#3D4044] shadow-md border-2 border-white" />
                  <span className="text-xs text-warm-dark font-medium">Charcoal</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-[#2F4F2F] shadow-md border-2 border-white" />
                  <span className="text-xs text-warm-dark font-medium">Dark Green</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-[#1A1A1A] shadow-md border-2 border-white" />
                  <span className="text-xs text-warm-dark font-medium">Black</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Guests Image & Colors */}
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
              onClick={() => setEnlargedImage("/images/dresscode-guests.png")}
            >
              <img 
                src="/images/dresscode-guests.png" 
                alt="Guests Attire Inspiration"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Hover Overlay with Magnifying Glass */}
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

            {/* Color Palette & Details */}
            <div className="p-8">
              <div className="space-y-6 mb-8">
                <div className="text-center">
                  <p className="text-sm uppercase tracking-widest text-warm-accent mb-3">Gentlemen</p>
                  <p className="text-lg text-warm-dark font-serif mb-2">Black Suit</p>
                  <p className="text-warm-dark text-sm">with Black Tie</p>
                </div>
                <div className="w-full h-px bg-warm-beige/50" />
                <div className="text-center">
                  <p className="text-sm uppercase tracking-widest text-warm-accent mb-3">Ladies</p>
                  <p className="text-lg text-warm-dark font-serif">Terracotta Shades</p>
                </div>
              </div>

              <div className="flex justify-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-[#1A1A1A] shadow-md border-2 border-white" />
                  <span className="text-xs text-warm-dark font-medium">Black</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-[#E07A5F] shadow-md border-2 border-white" />
                  <span className="text-xs text-warm-dark font-medium">Terracotta</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-[#C49A8A] shadow-md border-2 border-white" />
                  <span className="text-xs text-warm-dark font-medium">Rust</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Overall Theme Color Palette */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center bg-warm-cream p-8 rounded-lg border border-warm-beige/30"
        >
          <h3 className="text-xl font-serif text-warm-accent mb-6">Wedding Theme Colors</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-[#E07A5F] shadow-lg border-4 border-white" />
              <span className="text-warm-dark text-sm font-medium">Terracotta</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-[#5A6B4A] shadow-lg border-4 border-white" />
              <span className="text-warm-dark text-sm font-medium">Olive Green</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-[#2F4F2F] shadow-lg border-4 border-white" />
              <span className="text-warm-dark text-sm font-medium">Dark Green</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-[#3D4044] shadow-lg border-4 border-white" />
              <span className="text-warm-dark text-sm font-medium">Charcoal</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-[#1A1A1A] shadow-lg border-4 border-white" />
              <span className="text-warm-dark text-sm font-medium">Black</span>
            </div>
          </div>
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
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[101]"
              onClick={() => setEnlargedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>

            {/* Enlarged Image */}
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              src={enlargedImage}
              alt="Enlarged Dress Code"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}