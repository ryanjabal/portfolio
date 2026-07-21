export interface SideProject {
  slug: string;
  title: string;
  /** Optional — omit to show the title alone. */
  tag?: string;
  src: string;
  width: number;
  height: number;
  /** Card width as a % of the row, tuned to the image's aspect ratio so heights stay balanced. */
  basis: string;
  /** Resting tilt and vertical offset, so the grid reads as scattered rather than aligned. */
  rotate: string;
  offsetY: string;
  /** Float animation variant and timing. */
  float: "a" | "b" | "c";
  duration: string;
  delay: string;
}

export const sideProjects: SideProject[] = [
  {
    slug: "alpine-chairlift",
    title: "Alpine Chairlift",
    tag: "3D Print · Motorized Model · CAD",
    src: "/images/side-projects/chairlift-poster.png",
    width: 1872,
    height: 662,
    basis: "58%",
    rotate: "-1.2deg",
    offsetY: "6px",
    float: "a",
    duration: "5.5s",
    delay: "0s",
  },
  {
    slug: "notre-dame-series",
    title: "Notre Dame Series",
    tag: "3D Print · CAD",
    src: "/images/side-projects/nd-composite.png",
    width: 840,
    height: 778,
    basis: "30%",
    rotate: "2deg",
    offsetY: "-10px",
    float: "b",
    duration: "4.8s",
    delay: "0.6s",
  },
  {
    slug: "dartmouth-green",
    title: "Dartmouth Green",
    tag: "3D Print · CAD",
    src: "/images/side-projects/dartmouth-composite.png",
    width: 1890,
    height: 616,
    basis: "48%",
    rotate: "1deg",
    offsetY: "14px",
    float: "c",
    duration: "6.2s",
    delay: "1s",
  },
  {
    slug: "custom-pinwheel-box",
    title: "Custom Pinwheel Box",
    tag: "Laser Cut · 3D Print · Mechanism",
    src: "/images/side-projects/pinwheel-composite.png",
    width: 1776,
    height: 792,
    basis: "42%",
    rotate: "-1.8deg",
    offsetY: "-6px",
    float: "a",
    duration: "5s",
    delay: "0.3s",
  },
  {
    slug: "laser-cut-walnut-lamp",
    title: "Laser-cut Walnut Lamp",
    tag: "Laser Cut · CAD",
    src: "/images/side-projects/lamp-composite.png",
    width: 852,
    height: 794,
    basis: "28%",
    rotate: "1.5deg",
    offsetY: "8px",
    float: "b",
    duration: "5.8s",
    delay: "0.9s",
  },
  {
    slug: "water-filtration-system",
    title: "Water Filtration System",
    tag: "Engineering · Prototype",
    src: "/images/side-projects/water-composite.png",
    width: 882,
    height: 970,
    basis: "25%",
    rotate: "-0.8deg",
    offsetY: "-12px",
    float: "c",
    duration: "5.2s",
    delay: "1.4s",
  },
  {
    slug: "handmade-corsages",
    title: "Handmade Corsages",
    tag: "Just for fun",
    src: "/images/side-projects/flower-composite.png",
    width: 1874,
    height: 598,
    basis: "40%",
    rotate: "1.4deg",
    offsetY: "-8px",
    float: "a",
    duration: "6.4s",
    delay: "1.8s",
  },
];
