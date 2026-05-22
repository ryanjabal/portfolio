import type { Metadata } from "next";
import { ScrollReveal } from "@/app/components/scroll-reveal";

export const metadata: Metadata = {
  title: "About — Ryan Jabal",
  description: "Designer focused on clarity, systems thinking, and purposeful craft.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <ScrollReveal>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
          About
        </h1>
      </ScrollReveal>

      <div className="mt-12 space-y-8 text-base leading-relaxed">
        <ScrollReveal delay={100}>
          <p className="text-muted">
            I&apos;m Ryan, a Notre Dame student from the Bay Area studying
            business, AI analytics and industrial design. I&apos;m curious about
            how things are made and how they reach the people who need them,
            which has me wandering between product design, technology, and
            business depending on the day. This site holds my design work for
            now, with more on the way as I keep exploring!
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
