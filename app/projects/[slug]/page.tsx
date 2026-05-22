import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ScrollReveal } from "@/app/components/scroll-reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Ryan Jabal`,
    description: project.overview,
  };
}

export default async function ProjectPage(
  props: PageProps<"/projects/[slug]">
) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const aspectClass =
    project.imageAspect === "16/9"
      ? "aspect-[16/9]"
      : project.imageAspect === "4/3"
      ? "aspect-[4/3]"
      : project.imageAspect === "1/1"
      ? "aspect-square"
      : "aspect-[3/2]";

  const hasNarrative = Boolean(
    project.problem || project.process || project.decisions || project.outcome
  );

  return (
    <article>
      {/* Hero */}
      <div className="relative w-full aspect-[16/9] max-h-[70vh] overflow-hidden bg-border">
        <Image
          src={project.hero}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 pt-16 pb-12">
        <ScrollReveal>
          <div className="flex items-center gap-3 text-sm text-muted mb-4">
            <span>{project.category}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="font-mono">{project.year}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-muted mt-2">
            {project.subtitle}
          </p>
        </ScrollReveal>

        {project.overview && (
          <ScrollReveal delay={100}>
            <p className="mt-8 text-base leading-relaxed text-muted">
              {project.overview}
            </p>
          </ScrollReveal>
        )}
      </div>

      {/* Narrative sections */}
      {hasNarrative && (
        <div className="max-w-3xl mx-auto px-6 space-y-16 pb-16">
          {project.problem && (
            <Section title="Problem" body={project.problem} delay={0} />
          )}
          {project.process && (
            <Section title="Process" body={project.process} delay={50} />
          )}
          {project.decisions && (
            <Section title="Key Decisions" body={project.decisions} delay={100} />
          )}
          {project.outcome && (
            <Section title="Outcome" body={project.outcome} delay={150} />
          )}
        </div>
      )}

      {/* Images */}
      <div className="max-w-5xl mx-auto px-6 pt-4 pb-24 space-y-12">
        {project.images.map((img, i) => (
          <ScrollReveal key={img.src} delay={i * 80}>
            <figure>
              <div className={`relative ${aspectClass} overflow-hidden rounded-lg bg-border`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
              {img.caption && (
                <figcaption className="mt-3 text-sm text-muted text-center">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          </ScrollReveal>
        ))}
      </div>

      {/* Next project */}
      <div className="border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-muted mb-4">
            Next Project
          </p>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="text-2xl sm:text-3xl font-semibold tracking-tight hover:text-muted transition-colors"
          >
            {nextProject.title}
          </Link>
        </div>
      </div>
    </article>
  );
}

function Section({
  title,
  body,
  delay,
}: {
  title: string;
  body: string;
  delay: number;
}) {
  return (
    <ScrollReveal delay={delay}>
      <section>
        <h2 className="text-xs font-mono uppercase tracking-widest text-muted mb-4">
          {title}
        </h2>
        <p className="text-base leading-relaxed">{body}</p>
      </section>
    </ScrollReveal>
  );
}
