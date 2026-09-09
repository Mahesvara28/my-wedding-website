"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  variant?: "fadeUp" | "scale" | "slideLeft" | "slideRight";
}

const variants = {
  fadeUp: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
  scale: { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 } },
  slideLeft: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
  slideRight: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
};

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  variant = "fadeUp" 
}: ScrollRevealProps) {
  const v = variants[variant];
  return (
    <motion.div
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}