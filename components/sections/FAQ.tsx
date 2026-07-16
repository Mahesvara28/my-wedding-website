"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";

const faqs = [
  { q: "What is the dress code?", a: "Formal / Black Tie Optional. Please refer to the color motif section." },
  { q: "Can I bring a plus one?", a: "Please check your RSVP invitation. If it is addressed to you only, we kindly ask that you attend solo." },
  { q: "Is there parking available?", a: "Yes, both venues have ample parking space for guests." },
  { q: "Can I take photos during the ceremony?", a: "We have hired professional photographers. We kindly ask guests to remain unplugged during the ceremony." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="h-[100dvh] w-full bg-[#F9F6F2] snap-start flex items-center justify-center px-4 overflow-y-auto">
      <div className="max-w-2xl w-full py-20">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.5em] text-stone-400 block mb-2">Questions & Answers</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 tracking-tighter">Good to Know</h2>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-stone-200 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center text-left py-2 group"
              >
                <span className="text-lg font-serif text-stone-800 group-hover:text-stone-600 transition-colors">{faq.q}</span>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-2 pb-4 text-stone-600 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}