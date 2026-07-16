"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function RSVPForm() {
  const [search, setSearch] = useState("");
  const [foundGuest, setFoundGuest] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [attending, setAttending] = useState<boolean | null>(null);
  const [dietary, setDietary] = useState("");
  const [song, setSong] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    const cleanedSearch = search.trim();
    
    const { data, error: searchError } = await supabase
      .from("guests")
      .select("*")
      .ilike("full_name", `%${cleanedSearch}%`)
      .limit(1);

    if (searchError || !data || data.length === 0) {
      setError("We couldn't find that name. Please try your full name.");
      setLoading(false);
    } else {
      setFoundGuest(data[0]);
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous errors

    console.log("Submitting RSVP for:", foundGuest.full_name, "Attending:", attending);

    const { error: rsvpError } = await supabase
      .from("rsvps")
      .insert([
        {
          guest_id: foundGuest.id,
          attending: attending,
          dietary_restrictions: dietary,
          song_request: song,
        },
      ]);

    if (rsvpError) {
      console.error("Database Error:", rsvpError);
      setError("Something went wrong. Please try again.");
      setLoading(false);
    } else {
      // Update guest status
      await supabase
        .from("guests")
        .update({ is_responded: true })
        .eq("id", foundGuest.id);

      // Confetti animation
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const frame = () => {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ["#ffb7c5", "#ff99aa", "#ffffff"],
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ["#ffb7c5", "#ff99aa", "#ffffff"],
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
        className="text-center p-10 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white"
      >
        <h2 className="text-3xl font-serif text-stone-800 mb-4">
          Thank You!
        </h2>
        <p className="text-stone-600">
          Your RSVP has been received. We can't wait to see you!
        </p>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <AnimatePresence mode="wait">
        {!foundGuest ? (
          <motion.div
            key="search"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/50"
          >
            <h2 className="text-3xl font-serif text-center mb-6 text-stone-800">
              Find Your Invite
            </h2>
            <input
              type="text"
              placeholder="Full Name"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              className="w-full p-4 rounded-xl border border-stone-200 mb-4 text-stone-800 outline-none focus:ring-2 focus:ring-stone-400 bg-white/50"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="button"
              onClick={handleSearch}
              disabled={loading}
              className="w-full bg-stone-800 text-white p-4 rounded-xl font-medium hover:bg-stone-700 transition-all active:scale-95 disabled:opacity-50"
            >
              {loading ? "Searching..." : "Search"}
            </button>
            {error && (
              <p className="text-red-500 text-sm mt-4 text-center">
                {error}
              </p>
            )}
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white"
          >
            <h2 className="text-2xl font-serif mb-2 text-stone-800">
              Hello, {foundGuest.full_name}!
            </h2>
            <p className="text-stone-500 mb-8 italic">
              Will you be attending?
            </p>
            
            <div className="flex gap-4 mb-8">
              <button
                type="button"
                onClick={() => setAttending(true)}
                className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                  attending === true
                    ? "border-stone-800 bg-stone-50"
                    : "border-stone-100"
                }`}
              >
                Yes, I'll be there!
              </button>
              <button
                type="button"
                onClick={() => setAttending(false)}
                className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                  attending === false
                    ? "border-stone-800 bg-stone-50"
                    : "border-stone-100"
                }`}
              >
                Sadly, no.
              </button>
            </div>

            {attending && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
              >
                <label className="block text-sm font-medium text-stone-600 mb-2 text-left">
                  Dietary Restrictions
                </label>
                <input
                  type="text"
                  className="w-full p-4 rounded-xl border border-stone-200 mb-4 bg-white"
                  placeholder="Allergies, Vegan, etc."
                  value={dietary}
                  onChange={(e) => setDietary(e.target.value)}
                />
                <label className="block text-sm font-medium text-stone-600 mb-2 text-left">
                  Song Request
                </label>
                <input
                  type="text"
                  className="w-full p-4 rounded-xl border border-stone-200 mb-6 bg-white"
                  placeholder="What will get you on the dance floor?"
                  value={song}
                  onChange={(e) => setSong(e.target.value)}
                />
              </motion.div>
            )}

            <button
              type="submit"
              disabled={attending === null || loading}
              className="w-full bg-stone-800 text-white p-4 rounded-xl font-medium hover:bg-stone-700 disabled:opacity-30 transition-all"
            >
              {loading ? "Submitting..." : "Send RSVP"}
            </button>

            {/* ADDED: Error display for the form */}
            {error && (
              <p className="text-red-500 text-sm mt-4 text-center bg-red-50 p-3 rounded-lg">
                {error}
              </p>
            )}

            <button
              type="button"
              onClick={() => setFoundGuest(null)}
              className="w-full text-stone-400 text-xs mt-4 underline"
            >
              Not your name? Click here
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}