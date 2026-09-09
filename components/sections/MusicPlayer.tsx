"use client";
import { Music, Music2 } from "lucide-react";

export default function MusicPlayer({ isPlaying, setIsPlaying, audioRef }: any) {
  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[150]">
      <button
        onClick={toggleMusic}
        className="bg-warm-cream/90 backdrop-blur-md p-4 rounded-full shadow-xl border border-warm-beige/50 hover:scale-105 transition-all duration-300"
      >
        {isPlaying ? (
          <Music className="w-5 h-5 text-warm-accent animate-pulse" />
        ) : (
          <Music2 className="w-5 h-5 text-warm-dark/60" />
        )}
      </button>
    </div>
  );
}