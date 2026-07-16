"use client";
import ScrollReveal from "../animations/ScrollReveal";

export default function OurStory() {
  return (
    <section className="min-h-[100dvh] w-full bg-[#FDFCFB] snap-start flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Decorative pampas grass */}
      <div className="pampas-corner pampas-top-left">
        <img src="/images/pampas-grass.png" alt="" className="w-full h-full object-contain opacity-30" />
      </div>
      <div className="pampas-corner pampas-bottom-right">
        <img src="/images/pampas-grass.png" alt="" className="w-full h-full object-contain opacity-30" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.5em] text-stone-400 block mb-4">Our Journey</span>
            <h2 className="text-5xl md:text-7xl font-serif text-stone-800 tracking-tighter mb-6">
              Our Story
            </h2>
            <div className="w-24 h-px bg-stone-300 mx-auto" />
          </div>
        </ScrollReveal>

        <div className="space-y-8 text-center">
          <ScrollReveal>
            <p className="text-stone-600 leading-relaxed text-lg md:text-xl font-light">
              Our story began in <span className="font-medium text-stone-800">2023</span> when our friends decided to play matchmaker and introduced us through a 'reto'. What started as a simple introduction quickly turned into something special as we discovered how naturally we clicked.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-stone-600 leading-relaxed text-lg md:text-xl font-light">
              One conversation led to another, laughter came easily, and before we knew it, we were falling in love and building a life together.
            </p>
          </ScrollReveal>

          <div className="my-12">
            <ScrollReveal>
              <div className="inline-block px-8 py-4 bg-[#F5E6D9] rounded-full">
                <p className="text-stone-800 font-serif text-xl tracking-wide">
                  July 9, 2024 — We Got Engaged
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <p className="text-stone-600 leading-relaxed text-lg md:text-xl font-light">
              On <span className="font-medium text-stone-800">October 17, 2024</span>, we exchanged our vows in a small and intimate ceremony surrounded by a small circle of loved ones. It was a day we will always treasure, but we had always hoped to celebrate this beautiful chapter with our relatives and friends who mean so much to us.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-stone-600 leading-relaxed text-lg md:text-xl font-light italic">
              "With hearts full of gratitude, we feel that this is the perfect time to gather everyone together."
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 p-8 bg-[#F5EFE9] rounded-2xl">
              <p className="text-stone-800 leading-relaxed text-lg md:text-xl">
                On <span className="font-serif text-2xl">February 16, 2027</span>, we warmly invite you to join us as we celebrate our Marriage Blessing — a special day to give thanks for love, family, faith, and the blessings that have brought us here.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-stone-600 text-lg mt-8">
              We can't wait to celebrate this meaningful moment with you.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}