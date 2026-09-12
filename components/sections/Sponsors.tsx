"use client";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Sponsors() {
  return (
    <section className="w-full bg-warm-bg py-24 px-4 font-sans">
      <div className="max-w-5xl mx-auto text-center">
        <ScrollReveal variant="fadeUp">
          <span className="text-[10px] uppercase tracking-[0.5em] text-warm-accent block mb-4 font-sans">With Love & Support</span>
          {/* Changed to font-script */}
          <h2 className="text-6xl md:text-7xl font-script text-warm-dark tracking-tighter mb-16">Our Wedding Entourage</h2>
        </ScrollReveal>

        <div className="mb-16">
          <ScrollReveal variant="fadeUp" delay={0.2}>
            {/* Changed to font-serif italic */}
            <h3 className="text-2xl font-serif italic text-warm-accent mb-8">Parents of the Bride & Groom</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-warm-cream p-6 rounded-lg">
                <p className="text-warm-dark font-medium mb-2 font-sans text-sm uppercase tracking-wider">Parents of the Bride</p>
                {/* Changed to font-serif */}
                <p className="text-warm-dark font-serif text-lg">Ma. Crispina Jangayo</p>
                <p className="text-warm-dark font-serif text-lg">Domingo Jangayo Sr.</p>
              </div>
              <div className="bg-warm-cream p-6 rounded-lg">
                <p className="text-warm-dark font-medium mb-2 font-sans text-sm uppercase tracking-wider">Parents of the Groom</p>
                <p className="text-warm-dark font-serif text-lg">Sheila Mendoza</p>
                <p className="text-warm-dark font-serif text-lg">Elmer Mendoza</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="fadeUp" delay={0.3}>
          <h3 className="text-2xl font-serif italic text-warm-accent mb-8">Principal Sponsors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              ["Tristana Umali", "Atty. Al Matthew Umali"],
              ["Rosario Carla Dionisio", "Atty. Lorenze Angelo Dionisio"],
              ["Lanie Funtanilla", "Claro Funtanilla"],
              ["Kathryn Joyce Cabochan", "Charlie Rodriguez"],
              ["Cleo Alvero", "Edgar Tordesillas"],
              ["Maria Lourdes Violeta Gaerlan", "German Maravilla"],
              ["Mary Ann Mendoza", "Alberto Gochangco"]
            ].map((couple, i) => (
              <div key={i} className="text-center">
                <p className="text-warm-dark font-serif text-lg">{couple[0]}</p>
                <p className="text-warm-accent italic font-serif text-lg">&</p>
                <p className="text-warm-dark font-serif text-lg">{couple[1]}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <ScrollReveal variant="slideRight">
            <div className="text-center">
              <h3 className="text-2xl font-serif italic text-warm-accent mb-8">Bridal Party</h3>
              <div className="space-y-6">
                <div><p className="text-warm-dark font-sans text-sm uppercase tracking-wider mb-1">Matron of Honor</p><p className="text-warm-dark font-serif text-lg">Dianne Marie Matibag</p></div>
                <div><p className="text-warm-dark font-sans text-sm uppercase tracking-wider mb-1">Maid of Honor</p><p className="text-warm-dark font-serif text-lg">Maricris Jangayo</p></div>
                <div>
                  <p className="text-warm-dark font-sans text-sm uppercase tracking-wider mb-1">Bride's Maids</p>
                  <ul className="text-warm-dark font-serif text-lg space-y-1 list-none">
                    <li>Marianne Jangayo</li><li>Isabela Mendoza</li><li>Eugene Castro</li>
                    <li>Maricris Tiongson</li><li>Ma. Izza Templo</li><li>Bianca Conchas</li>
                  </ul>
                </div>
                <div><p className="text-warm-dark font-sans text-sm uppercase tracking-wider mb-1">The Bride's Attendant</p><p className="text-warm-dark font-serif text-lg">Gabriel Idos</p></div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slideLeft">
            <div className="text-center">
              <h3 className="text-2xl font-serif italic text-warm-accent mb-8">Groom's Party</h3>
              <div className="space-y-6">
                <div><p className="text-warm-dark font-sans text-sm uppercase tracking-wider mb-1">Best Man</p><p className="text-warm-dark font-serif text-lg">Miguel Mendoza</p></div>
                <div>
                  <p className="text-warm-dark font-sans text-sm uppercase tracking-wider mb-1">Groom's Men</p>
                  <ul className="text-warm-dark font-serif text-lg space-y-1 list-none">
                    <li>Inigo Calalang</li><li>Bryan Elauria</li><li>Paolo Sibulo</li>
                    <li>Juan Paolo Macatangay</li><li>Erik Katindig</li><li>David Apolonio</li><li>Third Katindig</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <h3 className="text-xl font-serif italic text-warm-accent mb-4">Candle Sponsors</h3>
            <div className="text-center">
              <p className="text-warm-dark font-serif text-lg">Domingo Jangayo Jr</p>
              <p className="text-warm-accent italic font-serif text-lg">&</p>
              <p className="text-warm-dark font-serif text-lg">Reichelle Dela Cruz</p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={0.2}>
            <h3 className="text-xl font-serif italic text-warm-accent mb-4">Veil Sponsors</h3>
            <div className="text-center">
              <p className="text-warm-dark font-serif text-lg">Daryl Dick Jangayo</p>
              <p className="text-warm-accent italic font-serif text-lg">&</p>
              <p className="text-warm-dark font-serif text-lg">Maria Rich Elauria</p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={0.3}>
            <h3 className="text-xl font-serif italic text-warm-accent mb-4">Cord Sponsors</h3>
            <div className="text-center">
              <p className="text-warm-dark font-serif text-lg">Charles Jude Bato</p>
              <p className="text-warm-accent italic font-serif text-lg">&</p>
              <p className="text-warm-dark font-serif text-lg">Alyanna Apolonio</p>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal variant="fadeUp">
            <h3 className="text-xl font-serif italic text-warm-accent mb-4">Ring Bearer</h3>
            <p className="text-warm-dark font-serif text-lg text-center">Akijiro Sigfried Jangayo</p>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={0.2}>
            <h3 className="text-xl font-serif italic text-warm-accent mb-4">Flower Ladies</h3>
            <div className="text-center space-y-1">
              <p className="text-warm-dark font-serif text-lg">Samantha Galban</p>
              <p className="text-warm-dark font-serif text-lg">Drina Ayesha Jangayo</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}