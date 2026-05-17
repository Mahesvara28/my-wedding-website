"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Curtain({ children, onOpen }: { children: React.ReactNode, onOpen: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    onOpen(); 
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="fixed inset-0 z-[200] flex cursor-pointer"
            onClick={handleOpen}
          >
            <motion.div
              exit={{ x: "-100%" }}
              transition={{ duration: 1.4, ease: [0.45, 0, 0.55, 1] }}
              className="h-full w-1/2 bg-stone-900 border-r border-stone-800/50"
            />
            <motion.div
              exit={{ x: "100%" }}
              transition={{ duration: 1.4, ease: [0.45, 0, 0.55, 1] }}
              className="h-full w-1/2 bg-stone-900"
            />
            <motion.div 
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#C5A059] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(197,160,89,0.3)] border border-white/10"
            >
              <span className="text-white font-serif text-3xl tracking-tighter">D&P</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}