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
    // TARGET DATE: FEB 16, 2027
    const targetDate = new Date("2027-02-21T00:00:00").getTime();
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
    <div className="flex flex-wrap gap-6 md:gap-16 justify-center items-center py-12">
      {isWeddingDay ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-stone-800 tracking-tighter">
            Today is the day! We are getting married! 
          </h2>
        </motion.div>
      ) : (
        // The actual grid code for the numbers
        Object.entries(timeLeft).map(([label, value], index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            {/* Big Serif Numbers */}
            <div className="text-5xl md:text-8xl font-serif font-light text-stone-800 tracking-tighter">
              {formatNumber(value)}
            </div>
            {/* Elegant Labels */}
            <div className="mt-4 text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-stone-400 font-medium">
              {label}
            </div>
            {/* Subtle separator dot between units (except the last one) */}
            {index < 3 && (
              <div className="hidden md:block absolute translate-x-[4.5rem] translate-y-[-1rem] text-stone-200 text-2xl font-light">
                &middot;
              </div>
            )}
          </motion.div>
        ))
      )}
    </div>
  );
}