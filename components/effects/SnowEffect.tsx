"use client";
import { useEffect, useState } from "react";

export default function SnowEffect() {
  const [snowflakes, setSnowflakes] = useState<Array<{
    id: number;
    left: string;
    animationDuration: string;
    size: string;
    opacity: string;
  }>>([]);

  useEffect(() => {
    const flakes = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 3 + 2}s`,
      size: `${Math.random() * 4 + 2}px`,
      opacity: `${Math.random() * 0.6 + 0.2}`,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    // 'fixed inset-0' ensures this takes up NO space and floats over everything
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute top-[-10px] bg-white/80 rounded-full"
          style={{
            left: flake.left,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            animation: `fall ${flake.animationDuration} linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}