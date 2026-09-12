"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function RSVPForm() {
  const [fullName, setFullName] = useState("");
  const [attending, setAttending] = useState<boolean | null>(null);
  const [dietary, setDietary] = useState("");
  const [song, setSong] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }
    if (attending === null) {
      setError("Please let us know if you will be attending.");
      return;
    }

    setLoading(true);
    setError("");

    console.log("Submitting RSVP for:", fullName, "Attending:", attending);

    // Insert directly into the rsvps table using the typed full_name
    const { error: rsvpError } = await supabase
      .from("rsvps")
      .insert([
        {
          full_name: fullName.trim(),
          attending: attending,
          dietary_restrictions: attending ? dietary.trim() : "N/A",
          song_request: attending ? song.trim() : "N/A",
        },
      ]);

    if (rsvpError) {
      console.error("Database Error:", rsvpError);
      setError("Something went wrong. Please try again.");
      setLoading(false);
    } else {
      // Confetti animation with wedding colors
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ["#E07A5F", "#5A6B4A", "#F2E8DC"], // Terracotta, Olive, Cream
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ["#E07A5F", "#5A6B4A", "#F2E8DC"],
        });
        if (Date.now() < animationEnd) {
          requestAnimationFrame(frame);
        }
      };
      frame();
      setSubmitted(true);
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-10 bg-warm-cream/90 backdrop-blur-md rounded-3xl shadow-2xl border border-warm-beige/50"
      >
        {/* Changed to font-script for elegant heading */}
        <h2 className="text-5xl md:text-6xl font-script text-warm-dark mb-4">
          Thank You!
        </h2>
        {/* Changed to font-serif for timeless detail text */}
        <p className="text-warm-dark/80 font-serif text-lg">
          Your RSVP has been received. We can't wait to celebrate with you!
        </p>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <AnimatePresence mode="wait">
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          onSubmit={handleSubmit}
          className="bg-warm-cream/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-warm-beige/50"
        >
          {/* Changed to font-script for main focal heading */}
          <h2 className="text-6xl md:text-7xl font-script text-center mb-2 text-warm-dark">
            RSVP
          </h2>
          {/* Changed to font-serif for elegant subtitle */}
          <p className="text-warm-dark/60 text-center mb-8 font-serif text-lg italic">
            Please let us know if you can make it
          </p>

          {/* Full Name Input */}
          <div className="mb-6">
            {/* Updated label to elegant uppercase sans-serif */}
            <label className="block text-xs uppercase tracking-widest font-sans text-warm-accent mb-2 text-left">
              Full Name *
            </label>
            <input
              type="text"
              required
              autoCapitalize="words"
              className="w-full p-4 rounded-xl border border-warm-beige/50 mb-2 text-warm-dark font-serif outline-none focus:ring-2 focus:ring-warm-accent bg-white/50 placeholder-warm-dark/40 transition-all"
              placeholder="e.g., Juan Dela Cruz"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          {/* Attending Buttons */}
          <div className="mb-6">
            <label className="block text-xs uppercase tracking-widest font-sans text-warm-accent mb-3 text-left">
              Will you be attending? *
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setAttending(true)}
                className={`flex-1 p-4 rounded-xl border-2 transition-all font-sans uppercase tracking-wider text-sm font-medium ${
                  attending === true
                    ? "border-warm-accent bg-warm-accent/10 text-warm-accent"
                    : "border-warm-beige/50 text-warm-dark/60 hover:border-warm-accent/50"
                }`}
              >
                Joyfully Accepts
              </button>
              <button
                type="button"
                onClick={() => setAttending(false)}
                className={`flex-1 p-4 rounded-xl border-2 transition-all font-sans uppercase tracking-wider text-sm font-medium ${
                  attending === false
                    ? "border-warm-dark bg-warm-dark/10 text-warm-dark"
                    : "border-warm-beige/50 text-warm-dark/60 hover:border-warm-dark/50"
                }`}
              >
                Regretfully Declines
              </button>
            </div>
          </div>

          {/* Conditional Fields for Attending Guests */}
          <AnimatePresence>
            {attending === true && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="mb-6">
                  <label className="block text-xs uppercase tracking-widest font-sans text-warm-accent mb-2 text-left">
                    Dietary Restrictions
                  </label>
                  <input
                    type="text"
                    className="w-full p-4 rounded-xl border border-warm-beige/50 bg-white/50 text-warm-dark font-serif outline-none focus:ring-2 focus:ring-warm-accent placeholder-warm-dark/40 transition-all"
                    placeholder="Allergies, vegetarian, etc. (Optional)"
                    value={dietary}
                    onChange={(e) => setDietary(e.target.value)}
                  />
                </div>

                <div className="mb-8">
                  <label className="block text-xs uppercase tracking-widest font-sans text-warm-accent mb-2 text-left">
                    Song Request
                  </label>
                  <input
                    type="text"
                    className="w-full p-4 rounded-xl border border-warm-beige/50 bg-white/50 text-warm-dark font-serif outline-none focus:ring-2 focus:ring-warm-accent placeholder-warm-dark/40 transition-all"
                    placeholder="What will get you on the dance floor?"
                    value={song}
                    onChange={(e) => setSong(e.target.value)}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || attending === null || !fullName.trim()}
            className="w-full bg-warm-accent text-white p-4 rounded-xl font-sans uppercase tracking-widest text-sm font-medium hover:bg-[#8b6a4f] disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-[0.98] shadow-md"
          >
            {loading ? "Sending..." : "Send RSVP"}
          </button>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm mt-4 text-center bg-red-50/50 p-3 rounded-lg border border-red-100 font-sans">
              {error}
            </p>
          )}
        </motion.form>
      </AnimatePresence>
    </div>
  );
}