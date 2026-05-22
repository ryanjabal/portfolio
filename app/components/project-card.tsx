import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const fit = project.thumbnailFit ?? "cover";
  const scale = project.thumbnailScale ?? 1;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block"
    >
      <div className="relative aspect-square overflow-hidden bg-white rounded-[4px]">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className={`${fit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-500 ease-out group-hover:scale-105`}
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={100}
          style={scale !== 1 ? { transform: `scale(${scale})` } : undefined}
        />
        <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/5" />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-medium group-hover:text-accent-muted transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted mt-0.5">{project.subtitle}</p>
        </div>
        <span className="text-xs text-muted font-mono mt-1 shrink-0">
          {project.year}
        </span>
      </div>
    </Link>
  );
}
