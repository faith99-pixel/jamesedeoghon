"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  FileText,
  Layers,
  MapPin,
  Quote,
  ShoppingBag,
} from "lucide-react";
import { Reveal } from "./reveal";

const meta = [
  { icon: FileText, label: "Length", value: "235 pages" },
  { icon: Layers, label: "Structure", value: "Four parts" },
  { icon: MapPin, label: "Setting", value: "Reading, UK · Lagos" },
  { icon: CalendarDays, label: "Released", value: "October 2026" },
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
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* Cover + promo */}
            <Reveal className="relative mx-auto w-full max-w-sm">
              <div className="book-scene">
                <div className="book-3d relative aspect-[3/4] w-full">
                  <div className="absolute inset-0 overflow-hidden rounded-r-2xl rounded-l-lg border border-border bg-card shadow-luxe-lg">
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

              {/* Promo polaroid */}
              <div className="absolute -right-8 -top-10 hidden w-[120px] rotate-[7deg] overflow-hidden rounded-lg border border-border bg-card p-1.5 shadow-luxe transition-transform duration-300 hover:rotate-0 sm:block">
                <Image
                  src="/images/book-promo.jpg"
                  alt="Promotional graphic announcing that British Natasha and the Ashewo Doctor is now out"
                  width={240}
                  height={428}
                  className="h-full w-full rounded-sm object-cover"
                />
              </div>

              <div
                aria-hidden="true"
                className="absolute -inset-10 -z-10 rounded-full bg-accent/10 blur-3xl"
              />
            </Reveal>

            {/* Details */}
            <div>
              <Reveal delay={0.08}>
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.07] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-accent">
                  <ShoppingBag className="h-3.5 w-3.5" aria-hidden="true" />
                  Now available
                </span>
                <blockquote className="mt-6 border-l-2 border-accent/60 pl-5 font-display text-xl italic leading-relaxed text-foreground/90 sm:text-2xl">
                  “A riotously sexual affair which morphs into the semblance
                  of a relationship — narrated with certainty, leaving
                  nothing to speculation, as though time-stamped messages are
                  enough to prove he hasn't mixed fact with conjecture.”
                </blockquote>
                <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  — Pulse Nigeria, official review
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="mt-7 text-base leading-relaxed text-muted-foreground">
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

              {/* Meta grid */}
              <Reveal delay={0.2}>
                <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {meta.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/40"
                    >
                      <m.icon className="mb-2 h-4 w-4 text-accent" aria-hidden="true" />
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {m.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-foreground">
                        {m.value}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Blurbs */}
              <Reveal delay={0.26}>
                <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {blurbs.map((b) => (
                    <div
                      key={b.author}
                      className="group rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-luxe"
                    >
                      <Quote
                        className="mb-2 h-4 w-4 text-accent/70"
                        aria-hidden="true"
                      />
                      <p className="font-display text-lg italic text-foreground">
                        “{b.word}”
                      </p>
                      <p className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {b.author}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_18px_40px_-12px_oklch(0.35_0.04_60/0.5)]"
                  >
                    <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                    Order your copy
                  </Link>
                  <a
                    href="https://www.pulse.ng/story/british-natasha-and-the-ashewo-doctor-review-2026100915225947559"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    Read the review
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="grain relative border-t border-border/70 bg-secondary/40 py-20 md:py-28">
        <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
              <span aria-hidden="true" className="h-px w-10 bg-accent/50" />
              Press &amp; praise
              <span aria-hidden="true" className="h-px w-10 bg-accent/50" />
            </p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
              What the critics{" "}
              <span className="italic text-accent">are saying</span>
            </h2>
          </Reveal>

          <div className="mt-14 space-y-6">
            {quotes.map((q, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <figure className="group relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 transition-all duration-300 hover:border-accent/35 hover:shadow-luxe sm:p-12">
                  <Quote
                    className="absolute -right-6 -top-6 h-28 w-28 rotate-12 text-accent/[0.07]"
                    aria-hidden="true"
                  />
                  <blockquote className="relative max-w-3xl font-display text-2xl italic leading-snug text-foreground/90 sm:text-3xl">
                    “
                    {q.text.split(q.highlight)[0]}
                    <span className="text-accent">{q.highlight}</span>
                    {q.text.split(q.highlight)[1]}
                    ”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="h-px w-10 bg-gradient-to-r from-accent/60 to-transparent"
                    />
                    <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      Pulse Nigeria — Entertainment, October 2026
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-8 text-center">
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
    </>
  );
}
