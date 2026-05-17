"use client";

import { useState, useRef } from "react";
import Hero from "@/components/sections/Hero";
import Details from "@/components/sections/Details";
import Countdown from "@/components/sections/Countdown";
import RSVPForm from "@/components/sections/RSVPForm";
import Curtain from "@/components/sections/Curtain";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MusicPlayer from "@/components/sections/MusicPlayer";
import DressCode from "@/components/sections/DressCode";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Triggered when the Wax Seal on the Curtain is clicked
  const startExperience = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play blocked", e));
      setIsPlaying(true);
    }
  };

  return (
    <Curtain onOpen={startExperience}>
      {/* 
         The main container handles the Scroll Snapping.
         Every direct <section> inside with 'snap-start' will act as a slide.
      */}
      <main className="h-[100dvh] overflow-y-scroll snap-y snap-mandatory bg-stone-900 selection:bg-stone-200 overflow-x-hidden">
        
        {/* Audio Engine & Floating Controls */}
        <audio ref={audioRef} loop src="/music/wedding-song.mp3" />
        <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} />

        {/* SECTION 1: HERO (The Ring/Hands Photo) */}
        <section className="h-screen w-full snap-start">
          <Hero />
        </section>

        {/* SECTION 2: COUNTDOWN (Ticking to Feb 16, 2027) */}
        <section className="h-screen w-full flex flex-col items-center justify-center bg-white snap-start px-4">
          <ScrollReveal>
            <p className="text-center uppercase tracking-[0.3em] text-[10px] text-stone-400 mb-12">The Celebration Begins In</p>
            <Countdown />
          </ScrollReveal>
        </section>

        {/* SECTION 3 & 4: VENUES (Church & Reception slides) */}
        <Details />

        {/* SECTION 5: DRESS CODE (The Mood Board) */}
        <section className="h-screen w-full snap-start">
          <DressCode />
        </section>

        {/* SECTION 6: RSVP (The Petal Animation Trigger) */}
        <section className="h-screen w-full flex items-center justify-center bg-stone-100 snap-start relative overflow-hidden px-4">
           {/* Faded Background Decoration */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
            <h2 className="text-[12rem] md:text-[25rem] font-serif uppercase leading-none">RSVP</h2>
          </div>
          <ScrollReveal>
            <div className="relative z-10">
              <RSVPForm />
            </div>
          </ScrollReveal>
        </section>

        {/* SECTION 7: FOOTER (The Farewell) */}
        <footer className="h-screen w-full flex flex-col items-center justify-center bg-white snap-start px-4">
          <ScrollReveal>
             <div className="text-center space-y-6">
                <h3 className="text-7xl font-serif text-stone-800 tracking-tighter">D & P</h3>
                <div className="h-16 w-[1px] bg-stone-200 mx-auto" />
                <p className="text-stone-400 text-[10px] tracking-[0.5em] uppercase">See you in Manila &bull; 2027</p>
             </div>
          </ScrollReveal>
        </footer>

      </main>
    </Curtain>
  );
}