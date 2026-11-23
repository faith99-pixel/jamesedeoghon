"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Reveal } from "./reveal";

export function EventsTeaser() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[2.5rem] border border-border bg-card px-7 py-14 text-center sm:px-12 md:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-3 rounded-[2rem] border border-dashed border-accent/25"
            />
            <div className="relative z-10 mx-auto max-w-xl">
              <p className="flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
                <span className="font-display text-sm italic normal-case tracking-normal text-muted-foreground/70">
                  03
                </span>
                <span aria-hidden="true" className="h-px w-10 bg-accent/50" />
                Events
              </p>
              <div className="mx-auto mt-7 flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 bg-accent/[0.07]">
                <CalendarDays className="h-7 w-7 text-accent" aria-hidden="true" />
              </div>
              <h2 className="mt-7 font-display text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
                Readings <span className="italic text-accent">&amp;</span>{" "}
                signings, coming soon
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                James will be announcing book readings, signings and festival
                appearances in the coming months. Subscribe below to be the
                first to know when dates go live.
              </p>
              <Link
                href="/events"
                className="group mt-8 inline-flex items-center gap-2.5 text-sm font-semibold tracking-wide text-foreground"
              >
                <span className="link-sweep">View the events page</span>
                <ArrowRight
                  className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-1.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
