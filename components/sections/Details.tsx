"use client";
import ScrollReveal from "../animations/ScrollReveal";

const venues = [
  {
    title: "The Ceremony",
    name: "Sacred Heart of Jesus Parish",
    time: "2:00 PM",
    image: "/images/Church.jpg",
    // Your exact Google Maps directions link
    directionsLink: "https://maps.app.goo.gl/YTKgZPEfWf7W1vpw9"
  },
  {
    title: "The Celebration",
    name: "The Palms Country Club By Filinvest",
    time: "5:00 PM",
    image: "/images/Reception.jpg",
    // Dynamic search link for the reception venue
    directionsLink: "https://www.google.com/maps/search/?api=1&query=The+Palms+Country+Club+By+Filinvest+Muntinlupa"
  }
];

export default function Details() {
  return (
    <>
      {venues.map((venue, i) => (
        <section key={i} className="h-screen w-full relative flex items-center justify-center overflow-hidden snap-start bg-warm-dark">
          <div className="absolute inset-0 z-0">
            <img 
              src={venue.image} 
              className="w-full h-full object-cover opacity-60"
              alt={venue.name}
            />
            {/* Updated gradient to match your warm theme */}
            <div className="absolute inset-0 bg-gradient-to-b from-warm-dark/60 via-warm-dark/40 to-warm-dark/80" />
          </div>

          <div className="relative z-10 text-center text-white px-6">
            <ScrollReveal>
              <span className="text-[10px] uppercase tracking-[0.5em] text-warm-beige block mb-6">
                {venue.title}
              </span>
              <h3 className="text-4xl md:text-7xl font-serif mb-8 leading-tight max-w-3xl mx-auto tracking-tighter">
                {venue.name}
              </h3>
              <p className="text-xl font-light tracking-[0.3em] text-warm-cream">
                {venue.time}
              </p>
              <div className="mt-12">
                <a 
                  href={venue.directionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-warm-beige/50 rounded-full text-[10px] uppercase tracking-[0.3em] hover:bg-warm-beige hover:text-warm-dark transition-all duration-300 backdrop-blur-sm"
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