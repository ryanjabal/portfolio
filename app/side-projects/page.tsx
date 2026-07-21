import type { Metadata } from "next";
import { sideProjects } from "@/data/side-projects";
import { SideProjectGallery } from "@/app/components/side-project-gallery";
import { ScrollReveal } from "@/app/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Side Projects — Ryan Jabal",
  description:
    "Small builds, mainly 3D printing and laser-cutting — experiments in design and engineering.",
};

export default function SideProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 pb-24">
      <ScrollReveal>
        <p className="text-xs font-mono uppercase tracking-widest text-accent-muted mb-7">
          Ryan Jabal · Side Projects
        </p>
        <h1
          className="text-4xl sm:text-5xl tracking-tight leading-[1.05]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Some cool side projects (physical things)
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
          Small builds, mainly 3D printing and laser-cutting — experiments in
          design and engineering.
        </p>
      </ScrollReveal>

      <hr className="mt-12 mb-14 border-border" />

      <ScrollReveal delay={100}>
        <SideProjectGallery projects={sideProjects} />
      </ScrollReveal>
    </section>
  );
}
