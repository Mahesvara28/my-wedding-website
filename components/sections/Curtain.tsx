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

  const handleLogoClick = () => {
    setIsAnimating(true);
    
    if (onOpen) {
      onOpen();
    }
    
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoEnd = () => {
    setIsComplete(true);
  };

  return (
    <>
      {/* Curtain Layer */}
      <div 
        className={`fixed inset-0 z-[200] bg-[#2C2420] transition-opacity duration-500 ${
          isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          playsInline
          muted
          preload="auto"
          poster="/images/logo.png" 
          onEnded={handleVideoEnd}
        >
          <source src="/videos/curtain.mp4" type="video/mp4" />
        </video>

        {!isAnimating && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
            <div 
              className="w-64 h-64 md:w-80 md:h-80 cursor-pointer transition-transform hover:scale-110"
              onClick={handleLogoClick}
            >
              <img 
                src="/images/logo.png" 
                alt="Daisy & Paolo Logo" 
                className="w-full h-full object-contain drop-shadow-2xl" 
              />
            </div>
            <p className="mt-6 text-[#D4A574] text-xs tracking-[0.4em] uppercase">
              Click to Enter
            </p>
          </div>
        )}
      </div>

      {/* Children */}
      <div className={isComplete ? 'block' : 'hidden'}>
        {children}
      </div>
    </>
  );
}