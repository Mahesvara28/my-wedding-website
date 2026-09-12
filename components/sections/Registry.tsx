"use client";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Registry() {
  return (
    <section className="w-full bg-warm-bg py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal variant="fadeUp">
          <span className="text-[10px] uppercase tracking-[0.5em] text-warm-accent block mb-4 font-sans">
            Gifts & Blessings
          </span>
          <h2 className="text-6xl md:text-7xl font-script text-warm-dark mb-8">
            Registry
          </h2>
          <div className="w-16 h-[1px] bg-warm-beige mx-auto mb-10" />

          <div className="space-y-8">
            <p className="text-warm-dark/80 text-lg md:text-xl font-serif leading-relaxed">
              Your presence on our special day is the greatest gift we could ever ask for. We are so grateful to be surrounded by the people we love most as we begin this new chapter together.
            </p>
            <p className="text-warm-dark/80 text-lg md:text-xl font-serif leading-relaxed">
              While your presence is more than enough, if you wish to honor us with a gift, a monetary blessing would be deeply appreciated — it will help us build our future together.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}