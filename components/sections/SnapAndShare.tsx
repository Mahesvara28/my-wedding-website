"use client";
import ScrollReveal from "../animations/ScrollReveal";
import { Camera, Instagram, Share2 } from "lucide-react";

export default function SnapAndShare() {
  return (
    <section className="h-[100dvh] w-full bg-[#FDFCFB] snap-start flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#F5E6D9] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E8D5C9] rounded-full blur-3xl" />
      </div>

      {/* Pampas grass decorations */}
      <div className="pampas-corner pampas-top-left">
        <img src="/images/pampas-grass.png" alt="" className="w-full h-full object-contain opacity-20" />
      </div>
      <div className="pampas-corner pampas-bottom-right">
        <img src="/images/pampas-grass.png" alt="" className="w-full h-full object-contain opacity-20" />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <ScrollReveal>
          <div className="mb-12">
            <span className="text-[10px] uppercase tracking-[0.5em] text-stone-400 block mb-4">Capture the Moment</span>
            <h2 className="text-5xl md:text-7xl font-serif text-stone-800 tracking-tighter mb-6">
              Snap and Share
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex justify-center gap-8 mb-12">
            <Camera className="w-12 h-12 text-stone-400" />
            <Instagram className="w-12 h-12 text-stone-400" />
            <Share2 className="w-12 h-12 text-stone-400" />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-stone-600 text-lg md:text-xl mb-8 font-light">
            Help us capture the moments!<br />
            Share your photos with our hashtag
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="inline-block px-12 py-6 bg-gradient-to-r from-[#F5E6D9] to-[#E8D5C9] rounded-2xl shadow-lg">
            <p className="text-3xl md:text-4xl font-serif text-stone-800 tracking-wide">
              #SinceDeiJuan
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-stone-400 text-sm mt-8 italic">
            Your memories will help us relive this special day forever
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}