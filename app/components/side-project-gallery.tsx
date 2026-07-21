"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import type { SideProject } from "@/data/side-projects";

export function SideProjectGallery({ projects }: { projects: SideProject[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const closeRef = useRef<HTMLButtonElement>(null);

  const isOpen = openIndex !== null;

  const open = useCallback((i: number) => setOpenIndex(i), []);

  // Return focus to the card that's currently showing — not the one that opened the
  // lightbox — so arrowing through images and closing leaves focus where you'd expect.
  const close = useCallback(() => {
    if (openIndex !== null) cardRefs.current[openIndex]?.focus();
    setOpenIndex(null);
  }, [openIndex]);

  const step = useCallback(
    (delta: number) =>
      setOpenIndex((i) =>
        i === null ? i : (i + delta + projects.length) % projects.length
      ),
    [projects.length]
  );

  // Lock page scroll and move focus to the close button while the lightbox is open.
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, close, step]);

  const active = openIndex === null ? null : projects[openIndex];

  return (
    <>
      <div className="flex flex-wrap items-start justify-center gap-x-8 gap-y-11">
        {projects.map((p, i) => (
          <div
            key={p.slug}
            className="sp-card shrink-0 w-full sm:w-[var(--basis)]"
            style={
              {
                "--basis": p.basis,
                "--rot": p.rotate,
                "--y": p.offsetY,
                animationName: `sp-float-${p.float}`,
                animationDuration: p.duration,
                animationDelay: p.delay,
              } as React.CSSProperties
            }
          >
            <button
              type="button"
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              onClick={() => open(i)}
              aria-label={`Enlarge ${p.title}`}
              className="sp-inner group block w-full cursor-zoom-in overflow-hidden rounded-[4px] bg-white text-left shadow-[0_2px_8px_rgba(28,25,23,0.06),0_1px_2px_rgba(28,25,23,0.04)] transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(28,25,23,0.13),0_4px_12px_rgba(28,25,23,0.06)] focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-accent"
            >
              <Image
                src={p.src}
                alt={p.title}
                width={p.width}
                height={p.height}
                quality={100}
                sizes="(max-width: 640px) 100vw, 60vw"
                className="block h-auto w-full"
              />
              <div className="px-[18px] pb-4 pt-3.5">
                <h3 className="text-base font-medium transition-colors group-hover:text-accent-muted">
                  {p.title}
                </h3>
                {p.tag && <p className="mt-1 text-xs text-muted">{p.tag}</p>}
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox. Portalled to <body>: the gallery renders inside a ScrollReveal
          wrapper whose transform would otherwise make `position: fixed` resolve
          against that element rather than the viewport. */}
      {active &&
        createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} — enlarged`}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#16130f]/90 px-10 pb-[76px] pt-14 backdrop-blur-lg"
        >
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous image"
            className="absolute left-6 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xl text-white/70 transition hover:border-white/35 hover:bg-white/20 hover:text-white"
          >
            &#8249;
          </button>

          <Image
            src={active.src}
            alt={active.title}
            width={active.width}
            height={active.height}
            quality={100}
            priority
            sizes="100vw"
            className="max-h-full w-auto max-w-full rounded-[4px] object-contain shadow-[0_40px_100px_rgba(0,0,0,0.55)]"
          />

          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next image"
            className="absolute right-6 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xl text-white/70 transition hover:border-white/35 hover:bg-white/20 hover:text-white"
          >
            &#8250;
          </button>

          <button
            type="button"
            ref={closeRef}
            onClick={close}
            aria-label="Close"
            className="absolute right-6 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl leading-none text-white/75 transition hover:border-white/35 hover:bg-white/20 hover:text-white"
          >
            &times;
          </button>

          <p className="pointer-events-none absolute bottom-6 left-0 right-0 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-white/60">
            <span className="text-accent">
              {String(openIndex! + 1).padStart(2, "0")}
            </span>{" "}
            / {String(projects.length).padStart(2, "0")} &nbsp;·&nbsp;{" "}
            {active.title}
          </p>
        </div>,
          document.body
        )}
    </>
  );
}
