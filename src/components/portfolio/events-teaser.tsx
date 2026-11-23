"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";

export function EventsTeaser() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Reveal>
          <div className="border border-border px-7 py-14 text-center sm:px-12 md:py-20">
            <div className="relative z-10 mx-auto max-w-xl">
              <p className="flex items-center justify-center gap-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
                <span aria-hidden="true" className="h-px w-10 bg-accent/60" />
                Events
                <span aria-hidden="true" className="h-px w-10 bg-accent/60" />
              </p>
              <h2 className="mt-7 font-display font-light text-4xl leading-[1.08] tracking-[-0.01em] text-foreground sm:text-5xl">
                Readings <span className="italic">&amp;</span> signings, coming
                soon
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-[15px] leading-7 text-muted-foreground">
                James will be announcing book readings, signings and festival
                appearances in the coming months. Join the letter list to be
                the first to know when dates go live.
              </p>
              <Link
                href="/events"
                className="group mt-9 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground"
              >
                <span className="link-sweep">View the events page</span>
                <ArrowRight
                  className="h-3.5 w-3.5 text-accent transition-transform duration-300 group-hover:translate-x-1"
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
