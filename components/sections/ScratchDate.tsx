"use client";
import React, { useRef, useEffect, useState } from "react";

export default function ScratchDate() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScratched, setIsScratched] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Fill with a premium "Stone" cover
    ctx.fillStyle = "#44403c"; // Darker stone to contrast with white text
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Instruction text
    ctx.fillStyle = "#a8a29e";
    ctx.font = "bold 14px sans-serif";
    ctx.textAlign = "center";
    ctx.letterSpacing = "2px";
    ctx.fillText("ERASE TO REVEAL DATE", canvas.width / 2, canvas.height / 2 + 5);

    const scratch = (x: number, y: number) => {
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2); // Bigger brush (30)
      ctx.fill();
    };

    const handleMove = (e: any) => {
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX || e.touches?.[0].clientX) - rect.left);
      const y = ((e.clientY || e.touches?.[0].clientY) - rect.top);
      scratch(x, y);
      setIsScratched(true);
    };

    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("touchmove", handleMove);
    return () => {
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("touchmove", handleMove);
    };
  }, []);

  return (
    /* Increased Container Size: w-80 h-20 */
    <div className="relative w-80 h-20 mx-auto mt-8 overflow-hidden rounded-xl cursor-crosshair shadow-2xl">
      
      {/* The Actual Date: text-4xl for big impact */}
     <div className="absolute inset-0 flex items-center justify-center bg-stone-900 text-white text-3xl md:text-4xl tracking-[0.2em] font-serif">
  16 . 02 . 2027
</div>
      {/* The Scratch Layer */}
      <canvas
        ref={canvasRef}
        width={320} // Matches width 80 (80 * 4)
        height={80}  // Matches height 20 (20 * 4)
        className="absolute inset-0 z-10 transition-opacity duration-1000 w-full h-full"
        style={{ opacity: isScratched ? 0.95 : 1 }}
      />
    </div>
  );
}