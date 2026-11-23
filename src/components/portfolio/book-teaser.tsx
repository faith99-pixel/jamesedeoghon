"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, FileText, MapPin } from "lucide-react";
import { Reveal } from "./reveal";

const facts = [
  { icon: FileText, value: "235 pages, four parts" },
  { icon: MapPin, value: "Reading, UK · Lagos" },
  { icon: CalendarDays, value: "October 2026" },
];

export function BookTeaser() {
  return (
    <section className="grain relative overflow-hidden border-y border-border/70 bg-secondary/40 py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Copy */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
                <span className="font-display text-sm italic normal-case tracking-normal text-muted-foreground/70">
                  02
                </span>
                <span aria-hidden="true" className="h-px w-10 bg-accent/50" />
                The debut novel
              </p>
              <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
                British Natasha{" "}
                <span className="italic text-accent">&amp;</span> the Ashewo
                Doctor
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
                A story of love, desire, migration, identity and difficult
                choices — told through the complicated relationship between a
                Nigerian doctor in a UK residency programme and a British
                single mother. Narrated with the certainty of time-stamped
                messages, it builds towards an ending waiting in disguise.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
                {facts.map((f) => (
                  <span
                    key={f.value}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <f.icon className="h-4 w-4 text-accent" aria-hidden="true" />
                    {f.value}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center gap-5">
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
                <a
                  href="https://www.pulse.ng/story/british-natasha-and-the-ashewo-doctor-review-2026100915225947559"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-sweep text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
                >
                  Read the Pulse review
                </a>
              </div>
            </Reveal>
          </div>

          {/* Cover */}
          <Reveal className="order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="book-scene">
                <div className="book-3d relative aspect-[3/4] w-full">
                  <div className="absolute inset-0 overflow-hidden rounded-r-2xl rounded-l-lg border border-border bg-card shadow-luxe-lg">
                    <Image
                      src="/images/book-cover.jpg"
                      alt="Cover of British Natasha and the Ashewo Doctor — an illustration of a couple in an intimate embrace"
                      fill
                      sizes="(max-width: 1024px) 90vw, 420px"
                      className="object-cover"
                      priority
                    />
                    <div className="book-spine-shadow pointer-events-none absolute inset-0" />
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="absolute -inset-10 -z-10 rounded-full bg-accent/10 blur-3xl"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
