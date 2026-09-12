"use client";
import ScrollReveal from "@/components/animations/ScrollReveal";

const faqs = [
  {
    question: "When is the RSVP deadline?",
    answer: "Please let us know if you can make it by October 15, 2026, so we can save a seat for you! After this date, our system will close to finalize the headcount with our venue. Any unconfirmed RSVPs will be gently counted as unable to attend."
  },
  {
    question: "Can I bring a date?",
    answer: "Because our venue space is limited, we are only able to accommodate guests who are formally named on the invitation. We kindly ask that only those who received an RSVP invitation attend."
  },
  {
    question: "Are kids welcome?",
    answer: "We love your little ones dearly! However, to give all of our guests—including parents—a chance to relax and celebrate freely, we have chosen to keep our wedding an adult-only event (with the exception of immediate family in the wedding party)."
  },
  {
    question: "What time should I arrive?",
    answer: "To help us stay on schedule and make sure everyone is comfortably settled, please plan to arrive about 15 to 20 minutes before the ceremony begins."
  },
  {
    question: "Where should I park?",
    answer: "Convenient parking is available right at the venue."
  },
  {
    question: "Is the wedding indoors or outdoors?",
    answer: "Both our ceremony and reception—including the cocktail hour—will take place completely indoors, so you can enjoy the entire celebration in comfort!"
  },
  {
    question: "Is it okay to take pictures with our phones and cameras during the wedding?",
    answer: "We encourage an unplugged ceremony! We would love for everyone to be fully present with us as we say our vows while our photography team captures the moment. Once the reception starts, please feel free to take and share as many photos as you like!"
  }
];

export default function FAQs() {
  return (
    <section className="w-full bg-warm-bg py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal variant="fadeUp">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.5em] text-warm-accent block mb-4 font-sans">
              Information
            </span>

            <h2 className="text-5xl md:text-6xl font-script text-warm-dark tracking-tighter mb-6">
              FAQs
            </h2>

            <div className="w-16 h-[1px] bg-warm-beige mx-auto mb-8" />

            <p className="text-lg text-warm-dark/80 font-serif italic">
              We are so excited to celebrate with you! To help you plan for our big day, we&apos;ve put together answers to a few common questions.
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} variant="fadeUp" delay={index * 0.1}>
                <div className="bg-warm-cream/50 rounded-lg p-6 md:p-8 border border-warm-beige/30">
                  <h3 className="text-xl md:text-2xl font-serif text-warm-dark mb-4">
                    {faq.question}
                  </h3>

                  <p className="text-warm-dark/70 text-base md:text-lg font-sans leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}