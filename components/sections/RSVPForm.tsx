"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { CalendarCheck } from "lucide-react";

export default function RSVPForm() {
  const [search, setSearch] = useState("");
  const [foundGuest, setFoundGuest] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [attending, setAttending] = useState<boolean | null>(null);
  const [dietary, setDietary] = useState("");
  const [meal, setMeal] = useState(""); // New Meal Field
  const [plusOne, setPlusOne] = useState(""); // New Plus One Field
  const [song, setSong] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    // Note: Ensure your Supabase table 'guests' has a 'full_name' column
    const { data, error: searchError } = await supabase
      .from("guests")
      .select("*")
      .ilike("full_name", `%${search.trim()}%`)
      .limit(1);

    if (searchError || !data || data.length === 0) {
      setError("We couldn't find that name. Please check your invitation.");
      setLoading(false);
    } else {
      setFoundGuest(data[0]);
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Note: Ensure your 'rsvps' table has these columns: guest_id, attending, dietary_restrictions, meal_choice, plus_one_name, song_request
    const { error: rsvpError } = await supabase
      .from("rsvps")
      .insert([{
        guest_id: foundGuest.id,
        attending: attending,
        dietary_restrictions: dietary,
        meal_choice: meal,
        plus_one_name: plusOne,
        song_request: song,
      }]);

    if (rsvpError) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    } else {
      // Confetti
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      setSubmitted(true);
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-10 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white max-w-md mx-auto"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CalendarCheck className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-3xl font-serif text-stone-800 mb-4">You're on the list!</h2>
        <p className="text-stone-600 mb-8">Thank you for your response. We can't wait to celebrate with you.</p>
        <button 
          onClick={() => { setSubmitted(false); setFoundGuest(null); setAttending(null); }}
          className="text-xs text-stone-400 underline hover:text-stone-600"
        >
          Submit another response
        </button>
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
            <h2 className="text-3xl font-serif text-center mb-6 text-stone-800">Find Your Invite</h2>
            <input
              type="text"
              placeholder="Full Name"
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
            {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white"
          >
            <h2 className="text-2xl font-serif mb-2 text-stone-800">Hello, {foundGuest.full_name}!</h2>
            <p className="text-stone-500 mb-8 italic">Will you be attending?</p>
            
            <div className="flex gap-4 mb-8">
              <button type="button" onClick={() => setAttending(true)} className={`flex-1 p-4 rounded-xl border-2 transition-all ${attending === true ? "border-stone-800 bg-stone-50" : "border-stone-100"}`}>Yes, I'll be there!</button>
              <button type="button" onClick={() => setAttending(false)} className={`flex-1 p-4 rounded-xl border-2 transition-all ${attending === false ? "border-stone-800 bg-stone-50" : "border-stone-100"}`}>Sadly, no.</button>
            </div>

            {attending && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="space-y-4 mb-6">
                {/* Meal Selection */}
                <div>
                  <label className="block text-sm font-medium text-stone-600 mb-2">Meal Preference</label>
                  <select 
                    value={meal} 
                    onChange={(e) => setMeal(e.target.value)}
                    className="w-full p-4 rounded-xl border border-stone-200 bg-white text-stone-800 outline-none"
                  >
                    <option value="">Select a meal...</option>
                    <option value="Chicken">Chicken</option>
                    <option value="Beef">Beef</option>
                    <option value="Fish">Fish</option>
                    <option value="Vegetarian">Vegetarian</option>
                  </select>
                </div>

                {/* Plus One */}
                <div>
                  <label className="block text-sm font-medium text-stone-600 mb-2">Plus One Name (Optional)</label>
                  <input type="text" className="w-full p-4 rounded-xl border border-stone-200 bg-white" placeholder="Guest's full name" value={plusOne} onChange={(e) => setPlusOne(e.target.value)} />
                </div>

                {/* Dietary */}
                <div>
                  <label className="block text-sm font-medium text-stone-600 mb-2">Dietary Restrictions</label>
                  <input type="text" className="w-full p-4 rounded-xl border border-stone-200 bg-white" placeholder="Allergies, etc." value={dietary} onChange={(e) => setDietary(e.target.value)} />
                </div>

                {/* Song */}
                <div>
                  <label className="block text-sm font-medium text-stone-600 mb-2">Song Request</label>
                  <input type="text" className="w-full p-4 rounded-xl border border-stone-200 bg-white" placeholder="What will get you on the dance floor?" value={song} onChange={(e) => setSong(e.target.value)} />
                </div>
              </motion.div>
            )}

            <button type="submit" disabled={attending === null || loading} className="w-full bg-stone-800 text-white p-4 rounded-xl font-medium hover:bg-stone-700 disabled:opacity-30 transition-all">
              {loading ? "Submitting..." : "Send RSVP"}
            </button>
            <button type="button" onClick={() => setFoundGuest(null)} className="w-full text-stone-400 text-xs mt-4 underline">Not your name? Click here</button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}