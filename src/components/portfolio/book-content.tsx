"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Reveal } from "./reveal";

const meta = [
  { label: "Length", value: "235 pages" },
  { label: "Structure", value: "Four parts" },
  { label: "Setting", value: "Reading, UK · Lagos" },
  { label: "Released", value: "October 2026" },
];

const blurbs = [
  { word: "Captivating", author: "Sarah Haluwa" },
  { word: "Sizzling", author: "Tomilola Coco Adeyemo" },
  { word: "Intense", author: "Deborah Kira" },
];

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
    text: "We see what is left of our humanity when we're confronted with difficult choices.",
    highlight: "what is left of our humanity",
  },
];

export function BookContent() {
  return (
    <>
      {/* Showcase */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* Cover */}
            <Reveal className="relative mx-auto w-full max-w-sm">
              <div className="book-scene">
                <div className="book-3d relative aspect-[3/4] w-full">
                  <div className="absolute inset-0 overflow-hidden rounded-r-lg rounded-l-sm border border-foreground/15 shadow-luxe-lg">
                    <Image
                      src="/images/book-cover.jpg"
                      alt="Cover of British Natasha and the Ashewo Doctor — an illustration of a couple in an intimate embrace, with quotes from Sarah Haluwa, Tomilola Coco Adeyemo and Deborah Kira"
                      fill
                      sizes="(max-width: 1024px) 90vw, 420px"
                      className="object-cover"
                      priority
                    />
                    <div className="book-spine-shadow pointer-events-none absolute inset-0" />
                  </div>
                </div>
              </div>
              <p className="mt-5 text-center text-[10px] font-semibold uppercase tracking-[0.26em] text-muted-foreground">
                First edition — October 2026
              </p>
            </Reveal>

            {/* Details */}
            <div>
              <Reveal delay={0.08}>
                <p className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
                  <span aria-hidden="true" className="h-px w-10 bg-accent/60" />
                  Now available
                </p>
                <blockquote className="mt-6 border-l-2 border-accent pl-6 font-display text-xl italic leading-relaxed text-foreground/90 sm:text-2xl">
                  &ldquo;A riotously sexual affair which morphs into the
                  semblance of a relationship — narrated with certainty,
                  leaving nothing to speculation, as though time-stamped
                  messages are enough to prove he hasn&apos;t mixed fact with
                  conjecture.&rdquo;
                </blockquote>
                <p className="mt-3 pl-6 text-[10px] font-semibold uppercase tracking-[0.26em] text-muted-foreground">
                  — Pulse Nigeria, official review
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="mt-8 text-[15px] leading-7 text-muted-foreground sm:text-base">
                  Leonard, a Nigerian doctor in a UK residency programme,
                  meets Natasha, a nurse assistant and single mum of one.
                  What begins as a charged affair deepens into something
                  neither of them planned — until pregnancy changes the
                  dynamic of the relationship and both are forced to confront
                  what is left of their humanity when faced with difficult
                  choices. A straightforward, linear read with an ending
                  waiting in disguise.
                </p>
              </Reveal>

              {/* Meta — ruled list */}
              <Reveal delay={0.2}>
                <dl className="mt-10 border-b border-border">
                  {meta.map((m) => (
                    <div
                      key={m.label}
                      className="flex items-baseline justify-between border-t border-border py-3.5"
                    >
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.26em] text-muted-foreground">
                        {m.label}
                      </dt>
                      <dd className="text-sm text-foreground">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              {/* Blurbs — ruled columns */}
              <Reveal delay={0.26}>
                <div className="mt-10 grid grid-cols-1 divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                  {blurbs.map((b) => (
                    <div key={b.author} className="px-4 py-6 text-center first:pl-0 sm:first:pl-0">
                      <p className="font-display text-2xl italic text-foreground">
                        &ldquo;{b.word}&rdquo;
                      </p>
                      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                        {b.author}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-10 flex flex-wrap items-center gap-5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-foreground transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
                  >
                    <ShoppingBag className="h-3.5 w-3.5" aria-hidden="true" />
                    Order your copy
                  </Link>
                  <a
                    href="https://www.pulse.ng/story/british-natasha-and-the-ashewo-doctor-review-2026100915225947559"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 border border-border px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground transition-colors duration-300 hover:border-foreground"
                  >
                    Read the review
                    <ArrowRight
                      className="h-3.5 w-3.5 text-accent transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="relative border-t border-border py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="flex items-center justify-center gap-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
              <span aria-hidden="true" className="h-px w-10 bg-accent/60" />
              Press &amp; praise
              <span aria-hidden="true" className="h-px w-10 bg-accent/60" />
            </p>
            <h2 className="mt-6 font-display font-light text-4xl leading-[1.08] tracking-[-0.01em] text-foreground sm:text-5xl">
              What the critics <span className="italic">are saying</span>
            </h2>
          </Reveal>

          <div className="mx-auto mt-16 max-w-3xl">
            {quotes.map((q, i) => {
              const [before, after] = q.text.split(q.highlight);
              return (
                <Reveal key={i} delay={0.06 * i}>
                  <figure className="border-t border-border py-10">
                    <blockquote className="font-display text-2xl font-light italic leading-snug text-foreground/90 sm:text-3xl">
                      &ldquo;{before}
                      <span className="text-accent">{q.highlight}</span>
                      {after}&rdquo;
                    </blockquote>
                    <figcaption className="mt-5 flex items-center gap-4">
                      <span
                        aria-hidden="true"
                        className="h-px w-10 bg-gradient-to-r from-accent/60 to-transparent"
                      />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-muted-foreground">
                        Pulse Nigeria — October 2026
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.2} className="mt-6 text-center">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-border pt-10">
              <Link
                href="/praise"
                className="group inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground"
              >
                <span className="link-sweep">See all praise</span>
                <ArrowRight
                  className="h-3.5 w-3.5 text-accent transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <a
                href="https://www.pulse.ng/story/british-natasha-and-the-ashewo-doctor-review-2026100915225947559"
                target="_blank"
                rel="noopener noreferrer"
                className="link-sweep text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
              >
                Read the full review on Pulse Nigeria
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
