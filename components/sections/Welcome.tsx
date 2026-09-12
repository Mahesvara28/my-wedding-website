"use client";
import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <section className="relative h-[100svh] w-full flex items-center justify-center bg-warm-bg overflow-hidden">
      {/* Removed the decorative circles */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center px-6 z-10"
      >
        {/* Decorative line above */}
        <div className="w-16 h-[1px] bg-warm-accent mx-auto mb-8" />
        
        <h1 className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-warm-dark mb-4 sm:mb-6 drop-shadow-sm">
          Pao And Dei
        </h1>
        
        <p className="font-serif font-light text-sm sm:text-base md:text-xl lg:text-2xl text-warm-dark/80 tracking-[0.2em] sm:tracking-[0.3em] px-4">
          Invite you to celebrate their wedding
        </p>
        
        {/* Decorative line below */}
        <div className="w-16 h-[1px] bg-warm-accent mx-auto mt-8" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-warm-accent/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-warm-accent rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}