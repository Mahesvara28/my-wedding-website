"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ScratchCircleProps {
  value: string;
  label: string;
}

function ScratchCircle({ value, label }: ScratchCircleProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Optimize for getImageData
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    // Use a responsive base size, we'll scale it via CSS
    const size = 140; 
    
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    // CSS will handle the actual display size responsively
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    
    ctx.scale(dpr, dpr);

    // Create gradient cover with warm terracotta/beige colors
    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, "#A67B5B"); // warm-accent
    gradient.addColorStop(0.5, "#C49A8A"); // warm-terracotta
    gradient.addColorStop(1, "#DCC8A8"); // warm-beige
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    // Add texture pattern
    ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const radius = Math.random() * 2 + 1;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    // Add instruction text
    ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
    ctx.font = "bold 12px Montserrat, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("SCRATCH", size / 2, size / 2);

    let isDrawing = false;

    const revealCompletely = () => {
      if (isRevealed) return;
      setIsRevealed(true);
      canvas.style.transition = "opacity 0.8s ease-out";
      canvas.style.opacity = "0";
      setTimeout(() => {
        if (canvas) canvas.style.display = "none";
      }, 800);
    };

    const checkScratchProgress = () => {
      if (!canvas || isRevealed) return;
      
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      let transparentPixels = 0;
      
      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) transparentPixels++;
      }
      
      const percentage = (transparentPixels / (pixels.length / 4)) * 100;

      if (percentage >= 45) {
        revealCompletely();
      }
    };

    const scratch = (x: number, y: number) => {
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 25, 0, Math.PI * 2); // Slightly larger brush for easier scratching
      ctx.fill();
    };

    const getPos = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      return {
        x: (clientX - rect.left) * (size / rect.width),
        y: (clientY - rect.top) * (size / rect.height),
      };
    };

    const handleStart = (e: MouseEvent | TouchEvent) => {
      isDrawing = true;
      const pos = getPos(e);
      scratch(pos.x, pos.y);
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDrawing) return;
      e.preventDefault();
      const pos = getPos(e);
      scratch(pos.x, pos.y);
      
      // Check progress periodically to save performance
      if (Math.random() > 0.7) {
        checkScratchProgress();
      }
    };

    const handleEnd = () => {
      isDrawing = false;
      checkScratchProgress(); // Final check on release
    };

    canvas.addEventListener("mousedown", handleStart);
    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("mouseup", handleEnd);
    canvas.addEventListener("mouseleave", handleEnd);
    
    canvas.addEventListener("touchstart", handleStart, { passive: false });
    canvas.addEventListener("touchmove", handleMove, { passive: false });
    canvas.addEventListener("touchend", handleEnd);

    return () => {
      canvas.removeEventListener("mousedown", handleStart);
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("mouseup", handleEnd);
      canvas.removeEventListener("mouseleave", handleEnd);
      canvas.removeEventListener("touchstart", handleStart);
      canvas.removeEventListener("touchmove", handleMove);
      canvas.removeEventListener("touchend", handleEnd);
    };
  }, [isRevealed]);

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div 
        className="relative w-[100px] h-[100px] md:w-[140px] md:h-[140px] rounded-full overflow-hidden shadow-2xl border-4 border-warm-beige bg-warm-dark"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* The Date Value */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl md:text-4xl font-serif font-medium">
          {value}
        </div>
        
        {/* The Scratch Layer */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-10 cursor-crosshair"
          style={{ touchAction: "none" }}
        />
      </motion.div>
      
      {/* Label */}
      <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-warm-dark/60 font-sans">
        {label}
      </span>
    </div>
  );
}

export default function ScratchDate() {
  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-4">
      {/* Main Heading - Updated to match Hero section size */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-serif text-warm-dark tracking-tight mb-12 md:mb-16 text-center"
      >
        Save the Date
      </motion.h2>
      
      {/* Scratch Circles Container - Corrected to Feb 21, 2027 */}
      <div className="flex flex-row gap-8 md:gap-16 items-center justify-center">
        <ScratchCircle value="21" label="Day" />
        <ScratchCircle value="02" label="Month" />
        <ScratchCircle value="2027" label="Year" />
      </div>
    </div>
  );
}