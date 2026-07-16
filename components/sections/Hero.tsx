"use client";
import { motion } from "framer-motion";
import ScratchDate from "./ScratchDate";
import HeroSlideshow from "./HeroSlideshow";

export default function Hero() {
  return (
    <div className="relative h-[100dvh] w-full flex flex-col items-center justify-start pt-20 overflow-hidden snap-start">
      {/* Slideshow Background */}
      <HeroSlideshow />

      {/* Content moved to the very top */}
      <div className="relative z-10 text-center text-white px-4 mt-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="uppercase tracking-[0.5em] text-[10px] mb-4 opacity-70"
        >
          Save the Date
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-6xl md:text-[8rem] font-serif mb-4 tracking-tighter leading-none"
        >
          Dei & Paolo
        </motion.h1>
        <div className="h-10 w-[1px] bg-white/20 mx-auto mb-6" />
      </div>

      {/* Scratch-off Date - Moved below the image */}
      <div className="relative z-10 mt-auto mb-12">
        <ScratchDate />
      </div>
    </div>
  );
}