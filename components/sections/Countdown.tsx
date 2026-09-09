"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    // TARGET DATE: FEB 21, 2027 at 2:00 PM (Matching your ceremony schedule)
    const targetDate = new Date("2027-02-21T14:00:00").getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          mins: Math.floor((difference / 1000 / 60) % 60),
          secs: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Helper to add a leading zero (e.g., 09 instead of 9)
  const formatNumber = (num: number) => (num < 10 ? `0${num}` : num);

  // Check if the countdown has reached zero
  const isWeddingDay = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.mins === 0 && timeLeft.secs === 0;

  return (
    <div className="flex flex-wrap gap-4 md:gap-8 justify-center items-center py-12">
      {isWeddingDay ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-warm-dark tracking-tighter">
            Today is the day! We are getting married!
          </h2>
        </motion.div>
      ) : (
        <div className="flex flex-wrap justify-center items-start gap-2 md:gap-6">
          {Object.entries(timeLeft).map(([label, value], index) => (
            <div key={label} className="flex items-start">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                {/* Big Serif Numbers - Matched to Hero section size */}
                <div className="text-6xl md:text-8xl font-serif font-light text-warm-dark tracking-tighter tabular-nums">
                  {formatNumber(value)}
                </div>
                
                {/* Elegant Labels */}
                <div className="mt-2 md:mt-4 text-[10px] md:text-xs uppercase tracking-[0.3em] text-warm-accent font-sans font-medium">
                  {label}
                </div>
              </motion.div>
              
              {/* Elegant separator dot between units (hidden on mobile, clean flex spacing on desktop) */}
              {index < 3 && (
                <div className="hidden md:flex items-start justify-center w-8 md:w-12 pt-4 md:pt-6 text-warm-beige text-4xl md:text-6xl font-serif font-light select-none">
                  &middot;
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}