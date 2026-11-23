"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Reveal } from "./reveal";

type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

const photos: Photo[] = [
  {
    src: "/images/events/abuja-01.jpg",
    width: 1800,
    height: 1200,
    alt: "James Edeoghon speaking into a microphone beside his moderator during the Abuja book reading at Akara Café",
    caption: "In conversation at Akara Café",
  },
  {
    src: "/images/events/abuja-02.jpg",
    width: 1760,
    height: 2200,
    alt: "Two readers smiling over open copies of British Natasha and the Ashewo Doctor at a café table",
    caption: "A quiet moment with the novel",
  },
  {
    src: "/images/events/abuja-03.jpg",
    width: 1800,
    height: 1200,
    alt: "Fresh copies of British Natasha and the Ashewo Doctor laid out on a wooden table",
    caption: "Copies ready for the room",
  },
  {
    src: "/images/events/abuja-04.jpg",
    width: 1760,
    height: 2200,
    alt: "James Edeoghon signing a copy of his debut novel at the Abuja reading",
    caption: "Signing copies",
  },
  {
    src: "/images/events/abuja-05.jpg",
    width: 1800,
    height: 1200,
    alt: "Group photo of readers holding British Natasha and the Ashewo Doctor at Akara Café, Pavillon, Abuja",
    caption: "The readers of Abuja",
  },
  {
    src: "/images/events/abuja-06.jpg",
    width: 1760,
    height: 2200,
    alt: "A reader in a white shirt reading British Natasha and the Ashewo Doctor beside a smiling guest",
    caption: "Deep in the story",
  },
  {
    src: "/images/events/abuja-07.jpg",
    width: 1800,
    height: 1200,
    alt: "James Edeoghon in conversation about the novel on stage at the Abuja book reading",
    caption: "Onstage with the moderator",
  },
  {
    src: "/images/events/abuja-08.jpg",
    width: 1760,
    height: 2200,
    alt: "A table tent and a copy of British Natasha and the Ashewo Doctor on a café table",
    caption: "The evening's setting",
  },
  {
    src: "/images/events/abuja-09.jpg",
    width: 1800,
    height: 1200,
    alt: "James Edeoghon signing books for a queue of readers at the Abuja reading",
    caption: "The signing table",
  },
  {
    src: "/images/events/abuja-10.jpg",
    width: 1800,
    height: 1200,
    alt: "A reader holding the open novel in front of her face at the Abuja book reading",
    caption: "Hidden behind the story",
  },
];

export function AbujaGallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    [],
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % photos.length)),
    [],
  );

  useEffect(() => {
    if (active === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [active, close, prev, next]);

  const current = active === null ? null : photos[active];

  return (
    <>
      {/* Editorial masonry wall */}
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {photos.map((photo, i) => (
          <Reveal key={photo.src} delay={0.04 * (i % 3)} className="mb-5 break-inside-avoid">
            <figure>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Open photo: ${photo.caption}`}
                className="group block w-full cursor-zoom-in overflow-hidden border border-foreground/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </button>
              <figcaption className="mt-3 flex items-baseline gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                <span
                  aria-hidden="true"
                  className="h-px w-6 shrink-0 self-center bg-accent/60"
                />
                {photo.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      {/* Lightbox */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photo: ${current.caption}`}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close photo viewer"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-white/25 text-white/85 transition-colors hover:border-white hover:text-white"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/25 text-white/85 transition-colors hover:border-white hover:text-white sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/25 text-white/85 transition-colors hover:border-white hover:text-white sm:right-6"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          <figure
            className="flex max-h-full max-w-4xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[78vh]">
              <Image
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                sizes="90vw"
                className="max-h-[78vh] w-auto max-w-full object-contain"
                priority
              />
            </div>
            <figcaption className="mt-4 text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70">
              {current.caption}
              <span className="ml-3 text-white/40">
                {(active ?? 0) + 1} / {photos.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
