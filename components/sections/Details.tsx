"use client";
import ScrollReveal from "../animations/ScrollReveal";

const venues = [
  {
    title: "The Ceremony",
    name: "Sacred Heart of Jesus Parish",
    time: "3:00 PM",
    image: "/images/Church.jpg",
  },
  {
    title: "The Celebration",
    name: "The Palms Country Club By Filinvest",
    time: "5:30 PM",
    image: "/images/Reception.jpg",
  }
];

export default function Details() {
  return (
    <>
      {venues.map((venue, i) => (
        <section key={i} className="h-screen w-full relative flex items-center justify-center overflow-hidden snap-start bg-black">
          <div className="absolute inset-0 z-0">
            <img 
              src={venue.image} 
              className="w-full h-full object-cover opacity-60"
              alt={venue.name}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 text-center text-white px-6">
            <ScrollReveal>
              <span className="text-[10px] uppercase tracking-[0.5em] text-stone-300 block mb-6">
                {venue.title}
              </span>
              <h3 className="text-4xl md:text-7xl font-serif mb-8 leading-tight max-w-3xl mx-auto tracking-tighter">
                {venue.name}
              </h3>
              <p className="text-xl font-light tracking-[0.3em] text-stone-200">
                {venue.time}
              </p>
              <div className="mt-12">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.name)}`}
                  target="_blank"
                  className="px-10 py-4 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all backdrop-blur-sm"
                >
                  Get Directions
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}
    </>
  );
}