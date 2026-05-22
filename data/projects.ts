export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  thumbnail: string;
  hero: string;
  overview?: string;
  problem?: string;
  process?: string;
  decisions?: string;
  outcome?: string;
  images: { src: string; alt: string; caption?: string }[];
  thumbnailFit?: "cover" | "contain";
  thumbnailScale?: number;
  imageAspect?: "3/2" | "16/9" | "4/3" | "1/1";
  imageFit?: "cover" | "contain";
}

export const projects: Project[] = [
  {
    slug: "interior-luminaire",
    title: "Interior Luminaire",
    subtitle: "Product Design Project",
    category: "Product Design",
    year: "Spring 2026",
    thumbnail: "/images/projects/luminaire-hero.jpg",
    hero: "/images/projects/luminaire-hero.jpg",
    imageAspect: "16/9",
    images: [
      { src: "/images/projects/luminaire-slide-01.jpg", alt: "Title" },
      { src: "/images/projects/luminaire-slide-02.jpg", alt: "Project brief" },
      { src: "/images/projects/luminaire-slide-03.jpg", alt: "Inspiration: Philip Johnson" },
      { src: "/images/projects/luminaire-slide-04.jpg", alt: "Architectural references" },
      { src: "/images/projects/luminaire-slide-05.jpg", alt: "Orthographic views and dimensions" },
      { src: "/images/projects/luminaire-slide-06.jpg", alt: "Ideation sketches" },
      { src: "/images/projects/luminaire-slide-07.jpg", alt: "Form development" },
      { src: "/images/projects/luminaire-slide-08.jpg", alt: "Prototype" },
      { src: "/images/projects/luminaire-slide-09.jpg", alt: "Final model" },
      { src: "/images/projects/luminaire-slide-10.jpg", alt: "In-environment renders" },
      { src: "/images/projects/luminaire-slide-11.jpg", alt: "Design specification" },
      { src: "/images/projects/luminaire-slide-12.jpg", alt: "Appendix: AI prompts" },
    ],
  },
  {
    slug: "atlas-product-design",
    title: "Digital Sketching",
    subtitle: "Brand Identity Project",
    category: "Product Design",
    year: "Spring 2026",
    thumbnail: "/images/projects/atlas-thumb.jpg",
    thumbnailFit: "contain",
    thumbnailScale: 1.15,
    hero: "/images/projects/atlas-thumb.jpg",
    imageAspect: "16/9",
    images: [
      { src: "/images/projects/brand-identity-slide-02.jpg", alt: "Project statement" },
      { src: "/images/projects/brand-identity-slide-03.jpg", alt: "Brand research: DeWalt" },
      { src: "/images/projects/brand-identity-slide-04.jpg", alt: "Brand research: Peloton" },
      { src: "/images/projects/brand-identity-slide-05.jpg", alt: "Brand research: KitchenAid" },
      { src: "/images/projects/brand-identity-slide-06.jpg", alt: "Component research: hair dryer" },
      { src: "/images/projects/brand-identity-slide-07.jpg", alt: "Side view thumbnails" },
      { src: "/images/projects/brand-identity-slide-08.jpg", alt: "Orthographic concepts: DeWalt" },
      { src: "/images/projects/brand-identity-slide-09.jpg", alt: "Orthographic concepts: Peloton" },
      { src: "/images/projects/brand-identity-slide-10.jpg", alt: "Orthographic concepts: KitchenAid" },
      { src: "/images/projects/brand-identity-slide-11.jpg", alt: "Perspective concept: DeWalt" },
    ],
  },
  {
    slug: "mortar-and-pestle",
    title: "Mortar and Pestle",
    subtitle: "Ergonomic Forms Project",
    category: "Industrial Design",
    year: "Spring 2026",
    thumbnail: "/images/projects/meridian-hero.jpg",
    hero: "/images/projects/meridian-hero.jpg",
    imageAspect: "16/9",
    images: [
      { src: "/images/projects/meridian-slide-01.jpg", alt: "Learning models" },
      { src: "/images/projects/meridian-slide-02.jpg", alt: "Ergonomic assessment of the pestle" },
      { src: "/images/projects/meridian-slide-03.jpg", alt: "Ergonomic assessment of the mortar" },
      { src: "/images/projects/meridian-slide-04.jpg", alt: "Sketches" },
      { src: "/images/projects/meridian-slide-05.jpg", alt: "Form models" },
      { src: "/images/projects/meridian-slide-5.5.jpg", alt: "Painted model family" },
      { src: "/images/projects/meridian-slide-06.jpg", alt: "Pestle in use" },
      { src: "/images/projects/meridian-slide-07.jpg", alt: "Mortar in use" },
      { src: "/images/projects/meridian-slide-08.jpg", alt: "Pestle specification" },
      { src: "/images/projects/meridian-slide-09.jpg", alt: "Mortar specification" },
      { src: "/images/projects/meridian-slide-10.jpg", alt: "Environment" },
      { src: "/images/projects/meridian-slide-11.jpg", alt: "Packaging concept" },
    ],
  },
  {
    slug: "speculative-design",
    title: "Speculative Design",
    subtitle: "Traditional Sketching Project",
    category: "Product Design",
    year: "Spring 2026",
    thumbnail: "/images/projects/forma-thumb.jpg",
    thumbnailFit: "contain",
    hero: "/images/projects/forma-hero.jpg",
    imageAspect: "4/3",
    images: [
      { src: "/images/projects/rapidviz-slide-02.jpg", alt: "Project statement" },
      { src: "/images/projects/rapidviz-slide-03.jpg", alt: "Collaborative mind map" },
      { src: "/images/projects/rapidviz-slide-04.jpg", alt: "Ideation thumbnails" },
      { src: "/images/projects/rapidviz-slide-05.jpg", alt: "Mood board" },
      { src: "/images/projects/rapidviz-slide-06.jpg", alt: "Perspective concept A" },
      { src: "/images/projects/rapidviz-slide-07.jpg", alt: "Perspective concept B" },
      { src: "/images/projects/rapidviz-slide-08.jpg", alt: "Perspective concept C" },
      { src: "/images/projects/rapidviz-slide-09.jpg", alt: "Perspective concept D" },
      { src: "/images/projects/rapidviz-slide-10.jpg", alt: "Perspective concept E" },
      { src: "/images/projects/rapidviz-slide-11.jpg", alt: "Perspective concept F" },
    ],
  },
];
