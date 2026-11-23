"use client";

import Image from "next/image";
import { CalendarDays, FileText, MapPin, Layers, Quote, ShoppingBag } from "lucide-react";
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

export function BookShowcase() {
  return (
    <section
      id="book"
      className="grain relative overflow-hidden bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(78,195,192,0.09),transparent)] py-24 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        {/* Section header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-teal">
            The debut novel
          </p>
          <h2 className="font-display text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
            British Natasha{" "}
            <span className="italic text-primary">&amp;</span> the Ashewo
            Doctor
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            A story of love, desire, migration, identity and difficult
            choices — told through the complicated relationship between a
            Nigerian doctor and a British single mother.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Cover + promo */}
          <Reveal className="relative mx-auto w-full max-w-sm">
            <div className="book-scene">
              <div className="book-3d relative aspect-[3/4] w-full">
                <div className="absolute inset-0 overflow-hidden rounded-r-xl rounded-l-md border border-white/10 shadow-[0_40px_90px_rgba(0,0,0,0.6)]">
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
            <div className="absolute -right-8 -top-10 hidden w-[120px] rotate-[7deg] overflow-hidden rounded-md border border-border/80 bg-card p-1.5 shadow-[0_18px_45px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:rotate-0 sm:block">
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
              className="absolute -inset-8 -z-10 rounded-full bg-teal/10 blur-3xl"
            />
          </Reveal>

          {/* Details */}
          <div>
            <Reveal delay={0.08}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-primary">
                <ShoppingBag className="h-3.5 w-3.5" aria-hidden="true" />
                Now available
              </span>
              <blockquote className="mt-6 border-l-2 border-teal/60 pl-5 font-display text-xl italic leading-relaxed text-foreground/90 sm:text-2xl">
                “A riotously sexual affair which morphs into the semblance of
                a relationship — narrated with certainty, leaving nothing to
                speculation, as though time-stamped messages are enough to
                prove he hasn’t mixed fact with conjecture.”
              </blockquote>
              <p className="mt-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                — Pulse Nigeria, official review
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-7 text-base leading-relaxed text-muted-foreground">
                Leonard, a Nigerian doctor in a UK residency programme, meets
                Natasha, a nurse assistant and single mum of one. What begins
                as a charged affair deepens into something neither of them
                planned — until pregnancy changes the dynamic of the
                relationship and both are forced to confront what is left of
                their humanity when faced with difficult choices. A
                straightforward, linear read with an ending waiting in
                disguise.
              </p>
            </Reveal>

            {/* Meta grid */}
            <Reveal delay={0.2}>
              <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {meta.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-border/60 bg-card/60 p-4 transition-colors hover:border-teal/40"
                  >
                    <m.icon className="mb-2 h-4 w-4 text-primary" aria-hidden="true" />
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {m.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">{m.value}</p>
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
                    className="group rounded-xl border border-border/60 bg-secondary/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                  >
                    <Quote
                      className="mb-2 h-4 w-4 text-teal/70 transition-colors group-hover:text-teal"
                      aria-hidden="true"
                    />
                    <p className="font-display text-lg italic text-foreground">
                      “{b.word}”
                    </p>
                    <p className="mt-1.5 text-xs uppercase tracking-[0.18em] text-primary/80">
                      {b.author}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_36px_rgba(224,166,79,0.4)]"
                >
                  <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                  Order your copy
                </a>
                <a
                  href="https://www.pulse.ng/story/british-natasha-and-the-ashewo-doctor-review-2026100915225947559"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-teal/50 hover:text-teal"
                >
                  Read the review
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
