"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScratchDate() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchProgress, setScratchProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle high DPI displays
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Create gradient cover with shimmer effect
    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, "#57534e");
    gradient.addColorStop(0.5, "#78716c");
    gradient.addColorStop(1, "#57534e");
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Add elegant texture pattern
    ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * rect.width;
      const y = Math.random() * rect.height;
      const radius = Math.random() * 2 + 1;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    // Add "SCRATCH HERE" text
    ctx.fillStyle = "#a8a29e";
    ctx.font = "bold 11px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("✦ SCRATCH TO REVEAL ✦", rect.width / 2, rect.height / 2 + 4);

    let isDrawing = false;
    let scratchPercentage = 0;

    const checkScratchProgress = () => {
      if (!canvas || isRevealed) return;
      
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      let transparentPixels = 0;
      
      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) transparentPixels++;
      }
      
      scratchPercentage = (transparentPixels / (pixels.length / 4)) * 100;
      setScratchProgress(scratchPercentage);

      if (scratchPercentage > 45) {
        // Auto-reveal when 45% scratched
        revealCompletely();
      }
    };

    const revealCompletely = () => {
      if (isRevealed) return;
      setIsRevealed(true);
      canvas.style.transition = "opacity 1s ease-out";
      canvas.style.opacity = "0";
      setTimeout(() => {
        if (canvas) canvas.style.display = "none";
      }, 1000);
    };

    const scratch = (x: number, y: number) => {
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 35, 0, Math.PI * 2); // Larger brush for better UX
      ctx.fill();
      
      // Check progress every few scratches
      if (Math.random() > 0.85) {
        checkScratchProgress();
      }
    };

    const getPos = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      return {
        x: (clientX - rect.left),
        y: (clientY - rect.top)
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
    };

    const handleEnd = () => {
      isDrawing = false;
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
    <motion.div 
      className="relative w-72 h-20 mx-auto overflow-hidden rounded-2xl cursor-crosshair shadow-2xl border border-white/10"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      {/* The Actual Date */}
      <div className="absolute inset-0 flex items-center justify-center bg-stone-900 text-white text-2xl md:text-3xl tracking-[0.3em] font-serif">
        02.21.2027
      </div>
      
      {/* The Scratch Layer */}
      <canvas
        ref={canvasRef}
        width={288}
        height={80}
        className="absolute inset-0 z-10 w-full h-full"
        style={{ touchAction: "none" }}
      />
      
      {/* Progress indicator (optional) */}
      {!isRevealed && scratchProgress > 0 && scratchProgress < 45 && (
        <motion.div 
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-white/60 tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {Math.round(scratchProgress)}% revealed
        </motion.div>
      )}
    </motion.div>
  );
}