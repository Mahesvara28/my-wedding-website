"use client";
import { motion } from "framer-motion";
import ScratchDate from "./ScratchDate";

export default function Hero() {
  return (
    <div className="relative h-[100dvh] w-full flex flex-col items-center justify-start pt-20 overflow-hidden snap-start">
      
      {/* Background Image Logic */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.png"
          alt="Dei & Paolo"
          /* 
             object-[50%_70%] tells the browser: 
             "Stay centered horizontally, but focus 70% down from the top."
             This targets your faces specifically.
          */
          className="w-full h-full object-cover object-[50%_70%] brightness-[0.8]" 
        />
        
        {/* We need a stronger dark gradient at the TOP for the text, 
            but keep the BOTTOM clear for your faces. */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Content moved to the very top to stay off your faces */}
      <div className="relative z-10 text-center text-white px-4">
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

        {/* The Scratch-off Date */}
        <ScratchDate />
      </div>
    </div>
  );
}