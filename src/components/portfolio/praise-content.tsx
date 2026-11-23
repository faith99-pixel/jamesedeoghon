"use client";

import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { Reveal } from "./reveal";
import { PraiseMarquee } from "./praise-marquee";

const quotes = [
  {
    text: "This novel plays with plot like a pilot might play on a plane on autopilot, and provides dialogue that seems to be happening right in front of you.",
    highlight: "dialogue that seems to be happening right in front of you",
  },
  {
    text: "James Edeoghon is a smart writer. He provides us with inside information on the journey to UK consultancy as well as he details the dark side of enslavement to the flesh.",
    highlight: "James Edeoghon is a smart writer",
  },
  {
    text: "Being inside his prose is like being in a medical textbook, a hospital cafeteria, an exam hall.",
    highlight: "a medical textbook, a hospital cafeteria, an exam hall",
  },
  {
    text: "We see what is left of our humanity when we're confronted with difficult choices.",
    highlight: "what is left of our humanity",
  },
];

const blurbs = [
  { word: "Captivating", author: "Sarah Haluwa" },
  { word: "Sizzling", author: "Tomilola Coco Adeyemo" },
  { word: "Intense", author: "Deborah Kira" },
];

function HighlightedQuote({
  text,
  highlight,
}: {
  text: string;
  highlight: string;
}) {
  const [before, after] = text.split(highlight);
  return (
    <blockquote className="font-display text-2xl italic leading-snug text-foreground/90 sm:text-3xl md:text-[2.5rem] md:leading-[1.22]">
      &ldquo;{before}
      <span className="text-accent">{highlight}</span>
      {after}&rdquo;
    </blockquote>
  );
}

export function PraiseContent() {
  return (
    <>
      <PraiseMarquee />

      {/* Editorial quotes */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl space-y-16 md:space-y-20">
            {quotes.map((q, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <figure className={i % 2 === 1 ? "md:pl-16" : "md:pr-16"}>
                  <Quote
                    className="mb-5 h-6 w-6 text-accent/70"
                    aria-hidden="true"
                  />
                  <HighlightedQuote text={q.text} highlight={q.highlight} />
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="h-px w-10 bg-gradient-to-r from-accent/60 to-transparent"
                    />
                    <span className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                      Pulse Nigeria — Book Review, October 2026
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-16 text-center">
            <a
              href="https://www.pulse.ng/story/british-natasha-and-the-ashewo-doctor-review-2026100915225947559"
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep inline-block text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              Read the full review on Pulse Nigeria →
            </a>
          </Reveal>
        </div>
      </section>

      {/* Cover blurbs */}
      <section className="grain relative border-t border-border/70 bg-secondary/40 py-20 md:py-24">
        <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
              <span aria-hidden="true" className="h-px w-10 bg-accent/50" />
              On the cover
              <span aria-hidden="true" className="h-px w-10 bg-accent/50" />
            </p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
              Three words from <span className="italic text-accent">early readers</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {blurbs.map((b, i) => (
              <Reveal key={b.author} delay={0.08 * i}>
                <div className="group h-full rounded-[2rem] border border-border bg-card px-8 py-10 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-luxe">
                  <p className="font-display text-4xl italic text-foreground sm:text-5xl">
                    &ldquo;{b.word}&rdquo;
                  </p>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {b.author}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} className="mt-14 flex justify-center">
            <Link
              href="/book"
              className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_18px_40px_-12px_oklch(0.35_0.04_60/0.5)]"
            >
              Explore the book
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
