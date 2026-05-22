import type { Metadata } from "next";
import { ScrollReveal } from "@/app/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Contact — Ryan Jabal",
  description: "Get in touch to discuss your next project.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <ScrollReveal>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
          Let&apos;s talk
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <p className="mt-6 text-lg text-muted max-w-lg leading-relaxed">
          Have a project in mind or just want to say hello? I&apos;d love to
          hear from you.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <a
          href="mailto:ryanjabal@gmail.com"
          className="mt-12 inline-flex items-center gap-3 text-lg font-medium hover:text-muted transition-colors group"
        >
          ryanjabal@gmail.com
          <svg
            className="w-5 h-5 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </ScrollReveal>

      <ScrollReveal delay={250}>
        <a
          href="mailto:rjabal@nd.edu"
          className="mt-4 inline-flex items-center gap-3 text-lg font-medium hover:text-muted transition-colors group"
        >
          rjabal@nd.edu
          <svg
            className="w-5 h-5 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <div className="mt-20 pt-12 border-t border-border">
          <h2 className="text-xs font-mono uppercase tracking-widest text-muted mb-6">
            Elsewhere
          </h2>
          <ul className="space-y-3">
            <li>
              <a
                href="https://www.linkedin.com/in/ryan-jabal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base hover:text-muted transition-colors"
              >
                LinkedIn &rarr;
              </a>
            </li>
          </ul>
        </div>
      </ScrollReveal>
    </div>
  );
}
