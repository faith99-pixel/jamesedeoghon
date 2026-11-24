"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";
import { TestimonialMarquee } from "./testimonial-marquee";
import {
  CULTURE_CUSTODIAN_URL,
  GOODREADS_BOOK_URL,
  PULSE_REVIEW_URL,
} from "@/lib/links";

const quotes = [
  {
    text: "This novel plays with plot like a pilot might play on a plane on autopilot, and provides dialogue that seems to be happening right in front of you.",
    highlight: "dialogue that seems to be happening right in front of you",
    source: "Pulse Nigeria — Book Review, October 2026",
  },
  {
    text: "James Edeoghon is a smart writer. He provides us with inside information on the journey to UK consultancy as well as he details the dark side of enslavement to the flesh.",
    highlight: "James Edeoghon is a smart writer",
    source: "Pulse Nigeria — Book Review, October 2026",
  },
  {
    text: "Being inside his prose is like being in a medical textbook, a hospital cafeteria, an exam hall.",
    highlight: "a medical textbook, a hospital cafeteria, an exam hall",
    source: "Pulse Nigeria — Book Review, October 2026",
  },
  {
    text: "We see what is left of our humanity when we're confronted with difficult choices.",
    highlight: "what is left of our humanity",
    source: "Pulse Nigeria — Book Review, October 2026",
  },
  {
    text: "For a first novel, this is a confident and mischievous debut. Edeoghon says he is fascinated by how desire directs destinies, and this book puts that fascination to the test.",
    highlight: "a confident and mischievous debut",
    source: "The Culture Custodian — October 2026",
  },
  {
    text: "i read this book in 5 hours, which is quite unusual for me because i am always between books. this one, however, i gave my full attention till the end. i enjoyed the writing and pacing so very much. i have said somewhere else that this was a spectacular debut and i stand by that.",
    highlight: "a spectacular debut",
    source: "Ikenna Okpara — Goodreads review",
  },
];

const blurbs = [
  { word: "Captivating", author: "Sarah Haluwa" },
  { word: "Sizzling", author: "Tomilola Coco Adeyemo" },
  { word: "Intense", author: "Deborah Kira" },
];

export function TestimonialsContent() {
  return (
    <>
      <TestimonialMarquee />

      {/* Editorial quotes */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="mx-auto max-w-3xl">
            {quotes.map((q, i) => {
              const [before, after] = q.text.split(q.highlight);
              return (
                <Reveal key={i} delay={0.05 * i}>
                  <figure className="border-t border-border py-10 md:py-12">
                    <blockquote className="font-display text-2xl font-light italic leading-snug text-foreground/90 sm:text-3xl md:text-[2.4rem] md:leading-[1.22]">
                      &ldquo;{before}
                      <span className="text-accent">{q.highlight}</span>
                      {after}&rdquo;
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-4">
                      <span
                        aria-hidden="true"
                        className="h-px w-10 bg-gradient-to-r from-accent/60 to-transparent"
                      />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-muted-foreground">
                        {q.source}
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1} className="mt-4 text-center">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              <a
                href={PULSE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-sweep text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
              >
                Read the full review on Pulse Nigeria
              </a>
              <a
                href={CULTURE_CUSTODIAN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-sweep text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
              >
                Read the Culture Custodian feature
              </a>
              <a
                href={GOODREADS_BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-sweep text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
              >
                Read reader reviews on Goodreads
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cover blurbs */}
      <section className="border-t border-border py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="flex items-center justify-center gap-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
              <span aria-hidden="true" className="h-px w-10 bg-accent/60" />
              On the cover
              <span aria-hidden="true" className="h-px w-10 bg-accent/60" />
            </p>
            <h2 className="mt-6 font-display font-light text-4xl leading-[1.08] tracking-[-0.01em] text-foreground sm:text-5xl">
              Three words from <span className="italic">early readers</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {blurbs.map((b, i) => (
              <Reveal key={b.author} delay={0.08 * i}>
                <div className="px-6 py-10 text-center">
                  <p className="font-display text-4xl font-light italic text-foreground sm:text-5xl">
                    &ldquo;{b.word}&rdquo;
                  </p>
                  <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-muted-foreground">
                    {b.author}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} className="mt-14 flex justify-center">
            <Link
              href="/book"
              className="group inline-flex items-center gap-2.5 bg-primary px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-foreground transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              Explore the book
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
