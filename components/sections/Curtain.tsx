"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Curtain({ children, onOpen }: { children: React.ReactNode, onOpen: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    onOpen();
  };

  // This CSS creates the "Fabric Fold" effect
  const fabricStyle = {
    background: `repeating-linear-gradient(
      90deg, 
      #C17F59 0px, 
      #D4A574 15px, 
      #A66040 30px, 
      #D4A574 45px
    )`,
    boxShadow: "inset 0 0 50px rgba(0,0,0,0.5)" // Adds depth to the folds
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#1c1917] cursor-pointer overflow-hidden"
            onClick={handleOpen}
          >
            {/* LEFT CURTAIN */}
            <motion.div
              exit={{ x: "-100%", skewY: 5 }}
              transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1] }}
              className="absolute left-0 top-0 h-full w-1/2 z-10"
              style={fabricStyle}
            />
            
            {/* RIGHT CURTAIN */}
            <motion.div
              exit={{ x: "100%", skewY: -5 }}
              transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1] }}
              className="absolute right-0 top-0 h-full w-1/2 z-10"
              style={fabricStyle}
            />

            {/* THE LOGO (Centered) */}
            <motion.div
              exit={{ scale: 0, opacity: 0, rotate: 180 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative z-20 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
            >
              {/* If you use Option B (Code fix), keep 'rounded-full overflow-hidden border-4 border-[#D4A574]' */}
              {/* If you use Option A (Transparent image), remove 'rounded-full overflow-hidden' */}
              <img 
                src="/images/logo.png" 
                alt="Dei & Paolo Logo" 
                className="w-full h-full object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-500 rounded-full overflow-hidden border-4 border-[#D4A574]" 
              />
            </motion.div>

            {/* Click Hint */}
            <motion.p 
              exit={{ opacity: 0 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative z-20 mt-8 text-[#D4A574] text-sm tracking-[0.3em] uppercase font-light drop-shadow-md"
            >
              Click to Open
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}