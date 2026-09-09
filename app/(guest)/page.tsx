"use client";
import { useState, useRef } from "react";
import Hero from "@/components/sections/Hero";
import ScratchDate from "@/components/sections/ScratchDate";
import Details from "@/components/sections/Details";
import Countdown from "@/components/sections/Countdown";
import RSVPForm from "@/components/sections/RSVPForm";
import Curtain from "@/components/sections/Curtain";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MusicPlayer from "@/components/sections/MusicPlayer";
import DressCode from "@/components/sections/DressCode";
import OurStory from "@/components/sections/OurStory";
import Sponsors from "@/components/sections/Sponsors";
import SnowEffect from "@/components/effects/SnowEffect";

const Divider = () => (
  <div className="w-full flex justify-center py-4 bg-[#FDFBF7]">
    <div className="w-24 h-[1px] bg-[#D4A574]/30" />
  </div>
);

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const startExperience = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((e) => console.log("Audio play blocked", e));
      setIsPlaying(true);
    }
  };

  return (
    <Curtain onOpen={startExperience}>
      <main className="w-full overflow-x-hidden bg-warm-bg relative font-sans">
        <SnowEffect />
        <audio ref={audioRef} loop src="/music/wedding-song.mp3" />
        <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} />

        <section className="min-h-screen w-full relative"><Hero /></section>
        
        <Divider />
        
        <section className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-4">
          <ScrollReveal variant="scale"><ScratchDate /></ScrollReveal>
        </section>

        <Divider />

        <section className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-20">
          <ScrollReveal variant="fadeUp">
            <p className="text-center uppercase tracking-[0.3em] text-[10px] text-[#A67B5B] mb-12 font-sans">The Celebration Begins In</p>
            <Countdown />
          </ScrollReveal>
        </section>

        <Divider />

        <OurStory />
        
        <Divider />

        <ScrollReveal variant="slideRight"><Sponsors /></ScrollReveal>

        <Divider />

        <ScrollReveal variant="slideLeft"><Details /></ScrollReveal>

        <Divider />

        <ScrollReveal variant="scale"><DressCode /></ScrollReveal>

        <Divider />

        <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden px-4 py-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
            <h2 className="text-[12rem] md:text-[25rem] font-serif uppercase leading-none text-[#2C2420]">RSVP</h2>
          </div>
          <ScrollReveal variant="fadeUp">
            <div className="relative z-10 w-full max-w-2xl"><RSVPForm /></div>
          </ScrollReveal>
        </section>

        <footer className="min-h-[50vh] w-full flex flex-col items-center justify-center px-4 py-20 bg-[#FDFBF7]">
          <ScrollReveal variant="scale">
            <div className="text-center space-y-6">
              <h3 className="text-7xl font-serif text-[#A67B5B] tracking-tighter">P & D</h3>
              <div className="h-16 w-[1px] bg-[#D4A574] mx-auto" />
              <p className="text-[#4A3B32] text-[10px] tracking-[0.5em] uppercase font-sans">See you in Manila &bull; 2027</p>
            </div>
          </ScrollReveal>
        </footer>
      </main>
    </Curtain>
  );
}