"use client";
import ScrollReveal from "@/components/animations/ScrollReveal";

const photos = [
  {
    id: 1,
    src: "/images/Couple2.jpg",
    alt: "Dei & Paolo - Photo 1",
    caption: "Our first photoshoot together"
  },
  {
    id: 2,
    src: "/images/dnp1.jpg",
    alt: "Dei & Paolo - Photo 2",
    caption: "Laughing together"
  },
  {
    id: 3,
    src: "/images/dnp2.jpg",
    alt: "Dei & Paolo - Photo 3",
    caption: "A moment of joy"
  },
  {
    id: 4,
    src: "/images/dnp3.jpg",
    alt: "Dei & Paolo - Photo 4",
    caption: "Forever begins"
  },
  {
    id: 5,
    src: "/images/dnp4.jpg",
    alt: "Dei & Paolo - Photo 5",
    caption: "Our adventure continues"
  },
];

export default function PhotoGallery() {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#6B705C] block mb-4">
              Our Journey
            </span>
            <h2 className="text-5xl md:text-6xl font-serif text-[#8B4513] tracking-tighter">
              Together in Love
            </h2>
            <div className="w-24 h-px bg-[#D4A574] mx-auto mt-6" />
          </div>
        </ScrollReveal>

        <div className="space-y-20">
          {photos.map((photo, index) => (
            <ScrollReveal key={photo.id}>
              <div className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Photo Side */}
                <div className="w-full md:w-1/2">
                  <div className="overflow-hidden rounded-2xl shadow-xl bg-gray-100">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Caption Side */}
                <div className={`w-full md:w-1/2 text-center md:text-left ${
                  index % 2 === 1 ? 'md:text-right' : ''
                }`}>
                  <p className="text-2xl md:text-3xl font-serif text-[#8B4513] italic">
                    "{photo.caption}"
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}