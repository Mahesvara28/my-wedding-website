"use client";
import { useState, useRef } from "react";

interface CurtainProps {
  children: React.ReactNode;
  onOpen?: () => void;
}

export default function Curtain({ children, onOpen }: CurtainProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleLogoClick = async () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    if (onOpen) {
      onOpen();
    }

    const video = videoRef.current;
    if (!video) {
      setIsComplete(true);
      return;
    }

    try {
      video.currentTime = 0;
      await video.play();
    } catch (error) {
      console.log("Video playback failed:", error);
      setIsComplete(true);
    }
  };

  const handleVideoEnd = () => {
    setIsComplete(true);
  };

  const handleVideoError = () => {
    console.error("Curtain video failed to load");
    setIsComplete(true);
  };

  return (
    <>
      <div 
        className={`fixed inset-0 z-[200] bg-[#2C2420] transition-opacity duration-500 ${
          isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Video with aggressive preload */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          playsInline
          muted
          preload="auto"
          poster="/images/logo.png"
          onEnded={handleVideoEnd}
          onError={handleVideoError}
        >
          <source src="/videos/curtain.mp4" type="video/mp4" />
        </video>

        {/* Logo Overlay - shown until user clicks */}
        {!isAnimating && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
            <div 
              className="w-64 h-64 md:w-80 md:h-80 cursor-pointer transition-transform hover:scale-110 active:scale-105"
              onClick={handleLogoClick}
            >
              <img 
                src="/images/logo.png" 
                alt="Pao & Dei Logo" 
                className="w-full h-full object-contain drop-shadow-2xl" 
              />
            </div>
            <p className="mt-6 text-[#D4A574] text-xs tracking-[0.4em] uppercase animate-pulse">
              Click to Enter
            </p>
          </div>
        )}
      </div>

      {/* Main Content - shown after video ends */}
      <div className={isComplete ? "block" : "hidden"}>
        {children}
      </div>
    </>
  );
}