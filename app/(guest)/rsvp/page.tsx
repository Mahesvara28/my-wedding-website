import Hero from "@/components/sections/Hero";
import RSVPForm from "@/components/sections/RSVPForm";

export default function Home() {
  return (
    <main>
      <Hero />
      
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto">
          <RSVPForm />
        </div>
      </section>

      {/* You can add a Details section here later (Venue, Time, etc.) */}
    </main>
  );
}