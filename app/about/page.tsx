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
            I&apos;m Ryan, a Notre Dame undergrad from the San Francisco Bay
            Area studying Business, AI analytics, and Industrial Design.
            I&apos;m drawn to the strategy side of how products and companies
            take shape, especially in AI and tech, and how they&apos;re funded,
            taken to market, and adopted by the people they&apos;re meant for.
            Design is where I first discovered I like building and creating,
            and it&apos;s still the part of my brain I trust most when I want
            to think differently, especially about who a product is actually
            for. That question gets harder and more important as AI shapes
            more of what gets made, and I spend a lot of time building with
            these tools to see where they help and where they don&apos;t. This
            site holds my design work for now, with more on the way.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
