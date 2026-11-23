"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";

export function AboutTeaser() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Portrait card */}
          <Reveal className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="grain relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-luxe">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/james-portrait.jpg"
                  alt="James Edeoghon smiling, wearing glasses and a beanie"
                  fill
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-lg italic leading-snug text-[oklch(0.98_0.005_84)]">
                  “Being inside his prose is like being in a medical textbook,
                  a hospital cafeteria, an exam hall.”
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-[oklch(0.98_0.005_84/0.75)]">
                  Pulse Nigeria — Book Review, 2026
                </p>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute -right-5 -top-5 -z-10 h-full w-full rounded-[2rem] border border-accent/25"
            />
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
                <span className="font-display text-sm italic normal-case tracking-normal text-muted-foreground/70">
                  01
                </span>
                <span aria-hidden="true" className="h-px w-10 bg-accent/50" />
                About the author
              </p>
              <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
                The man behind{" "}
                <span className="italic text-accent">the pen</span> and the
                stethoscope
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 text-base leading-relaxed text-muted-foreground">
                James Edeoghon grew up in Nigeria and works as a medical
                doctor — a day job that seeps into his fiction in the most
                delicious ways. His debut novel follows Leonard, a Nigerian
                doctor in a UK residency programme, and Natasha, a British
                nurse assistant and single mother, through a riotously
                complicated affair.
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                For James, fiction is not about rejecting stereotypes but
                turning them into art forms that make you ponder — a
                philosophy Pulse Nigeria describes as a story of love,
                desire, migration, identity and difficult choices.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-2.5 text-sm font-semibold tracking-wide text-foreground"
              >
                <span className="link-sweep">More about James</span>
                <ArrowRight
                  className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-1.5"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
