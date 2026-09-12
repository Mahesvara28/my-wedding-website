"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image"; // <-- Import Next.js Image

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLightboxLoading, setIsLightboxLoading] = useState(false);

  // UPDATED: Changed extensions to .webp
  const galleryImages = [
    "/images/temp1.webp",
    "/images/temp2.webp",
    "/images/temp3.webp",
    "/images/temp4.webp",
    "/images/temp5.webp",
    "/images/temp7.webp",
    "/images/temp6.webp",
    "/images/temp8.webp",
    "/images/temp9.webp",
    "/images/temp10.webp",
    "/images/temp11.webp",
    "/images/temp12.webp",
  ];

  return (
    <section className="w-full bg-warm-bg py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-warm-accent block mb-4 font-sans">
            Captured Moments
          </span>
          <h2 className="text-6xl md:text-7xl font-script text-warm-dark mb-6">
            Our Gallery
          </h2>
          <div className="w-16 h-[1px] bg-warm-beige mx-auto" />
        </motion.div>

        {/* THE GRID: Uses tiny, lazy-loaded thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square bg-warm-beige/20"
              onClick={() => {
                setSelectedImage(src);
                setIsLightboxLoading(true);
              }}
            >
              {/* Next.js automatically serves a tiny, perfectly sized WebP for the grid */}
              <Image
                src={src}
                alt={`Gallery ${index + 1}`}
                width={500}
                height={500}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* THE LIGHTBOX: Loads the high-res version only when clicked */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white z-[101]" 
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Loading Spinner */}
            {isLightboxLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-[101]">
                <div className="w-12 h-12 border-4 border-warm-beige/30 border-t-warm-accent rounded-full animate-spin"></div>
              </div>
            )}

            {/* Next.js loads a high-res version instantly when clicked */}
            <Image
              src={selectedImage}
              alt="Enlarged Gallery Photo"
              width={1200}
              height={1200}
              className={`max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl transition-opacity duration-500 ${
                isLightboxLoading ? "opacity-0" : "opacity-100"
              }`}
              priority // Forces immediate download for the clicked image
              onLoad={() => setIsLightboxLoading(false)} // Hides spinner when done
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}