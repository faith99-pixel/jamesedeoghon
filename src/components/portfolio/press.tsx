"use client";

import { Quote } from "lucide-react";
import { Reveal } from "./reveal";

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

export function Press() {
  return (
    <section id="praise" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-teal">
            Press &amp; praise
          </p>
          <h2 className="font-display text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
            What the critics <span className="italic text-primary">are saying</span>
          </h2>
        </Reveal>

        <div className="mt-14 space-y-6">
          {quotes.map((q, i) => (
            <Reveal key={i} delay={0.08 * i}>
              <figure className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/60 p-8 transition-all duration-300 hover:border-teal/35 hover:bg-card sm:p-12">
                <Quote
                  className="absolute -right-6 -top-6 h-28 w-28 rotate-12 text-primary/[0.06] transition-colors duration-500 group-hover:text-teal/10"
                  aria-hidden="true"
                />
                <blockquote className="relative max-w-3xl font-display text-2xl italic leading-snug text-foreground/90 sm:text-3xl">
                  “
                  {q.text.split(q.highlight)[0]}
                  <span className="text-primary">
                    {q.highlight}
                  </span>
                  {q.text.split(q.highlight)[1]}
                  ”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="h-px w-10 bg-gradient-to-r from-primary/60 to-transparent"
                  />
                  <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
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
            className="link-sweep inline-block text-sm text-muted-foreground transition-colors hover:text-teal"
          >
            Read the full review on Pulse Nigeria →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
