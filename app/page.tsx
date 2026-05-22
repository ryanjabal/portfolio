import { projects } from "@/data/projects";
import { ProjectCard } from "@/app/components/project-card";
import { ScrollReveal } from "@/app/components/scroll-reveal";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Animated blobs */}
        <div aria-hidden="true">
          <div className="hero-blob hero-blob-1" />
          <div className="hero-blob hero-blob-2" />
          <div className="hero-blob hero-blob-3" />
        </div>

        {/* Text */}
        <div className="relative z-10 text-center px-6">
          <ScrollReveal>
            <h1 className="text-6xl sm:text-7xl md:text-8xl tracking-tight leading-[1.05]" style={{ fontFamily: "var(--font-playfair)" }}>
              Ryan Jabal
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="mt-6 flex items-center justify-center gap-3 text-lg sm:text-xl text-foreground/90">
              <span>Design Thinking and Creative Work</span>
              <span className="text-muted/50">·</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/nd-logo.png" className="h-20 w-auto shrink-0 translate-y-1" alt="University of Notre Dame" />
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator">
          <span className="text-xs uppercase tracking-widest text-foreground/40">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-foreground/40">
            <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="max-w-6xl mx-auto px-6 pb-24">
        <ScrollReveal>
          <h2 className="text-xs uppercase tracking-widest text-foreground/70 mb-12">
            Selected Projects
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 100}>
              <ProjectCard project={project} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
