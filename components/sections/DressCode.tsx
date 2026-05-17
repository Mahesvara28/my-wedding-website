"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";

const colors = [
  { name: "Terracotta", hex: "#A34C32" },
  { name: "Copper", hex: "#B56F4A" },
  { name: "Sage", hex: "#8C9C7B" },
  { name: "Olive", hex: "#6B705C" },
  { name: "Champagne", hex: "#D8C1A0" },
  { name: "Forest", hex: "#1B3022" },
  { name: "Charcoal", hex: "#333333" },
];

export default function DressCode() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="h-screen w-full bg-[#F9F6F2] snap-start flex flex-col justify-center overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-6 w-full">
        
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.5em] text-stone-400 block mb-2">Attire</span>
            <h2 className="text-4xl md:text-6xl font-serif text-stone-800 tracking-tighter">Dress Code</h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Color Palette */}
          <ScrollReveal>
            <div className="space-y-6">
              <h3 className="text-[10px] uppercase tracking-widest text-stone-900 font-bold">Our Color Motif</h3>
              <div className="grid grid-cols-4 gap-3">
                {colors.map((color) => (
                  <div key={color.name} className="flex flex-col items-center">
                    <div 
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full shadow-inner"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-[8px] uppercase tracking-tighter mt-2 text-stone-400">{color.name}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-stone-400 italic pt-4 border-t border-stone-200">
                * Champagne motif or accents are highly encouraged.
              </p>
            </div>
          </ScrollReveal>

          {/* Right: The Clickable Image */}
          <ScrollReveal>
            <div 
              className="relative group cursor-pointer"
              onClick={() => setIsExpanded(true)}
            >
              <div className="relative p-2 bg-white rounded-xl shadow-xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/images/DressCode.png" 
                  alt="Dress Code Guide" 
                  className="w-full h-auto rounded-lg"
                />
                
                {/* Overlay Hint */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center rounded-lg">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 p-2 rounded-full shadow-lg">
                    <ZoomIn className="w-5 h-5 text-stone-800" />
                  </div>
                </div>
              </div>
              <p className="text-center mt-6 text-[9px] uppercase tracking-widest text-stone-400">Click to expand guide</p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* EXPANDED VIEW (MODAL) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-stone-900/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
            onClick={() => setIsExpanded(false)}
          >
            {/* Close Button */}
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
              <X size={32} />
            </button>

            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="max-w-4xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the image itself
            >
              <img 
                src="/images/DressCode.png" 
                alt="Full Dress Code Guide" 
                className="max-h-full max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}