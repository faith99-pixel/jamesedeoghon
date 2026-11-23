"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";

const facts = [
  {
    title: "Physician",
    text: "A practising medical doctor, navigating residency on one side of the sea and Lagos roots on the other.",
  },
  {
    title: "Storyteller",
    text: "Writes with the certainty of a clinician's chart and the pulse of someone who has listened to a thousand stories.",
  },
  {
    title: "Between worlds",
    text: "His fiction documents the British pastoral as much as it divulges the perils of Lagos living.",
  },
  {
    title: "Debut novelist",
    text: "British Natasha and the Ashewo Doctor marks his first novel — a four-part, 235-page love letter to messy humanity.",
  },
];

export function AboutContent() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Portrait */}
          <Reveal className="relative mx-auto w-full max-w-md lg:mx-0 lg:sticky lg:top-28">
            <figure>
              <div className="relative aspect-square w-full overflow-hidden border border-foreground/15">
                <Image
                  src="/images/james-portrait.jpg"
                  alt="James Edeoghon smiling, wearing glasses and a beanie"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-t border-border pt-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-muted-foreground">
                  James Edeoghon
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-muted-foreground">
                  Reading UK &amp; Lagos
                </span>
              </figcaption>
            </figure>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <h2 className="font-display font-light text-4xl leading-[1.1] tracking-[-0.01em] text-foreground sm:text-5xl">
                A doctor who listens{" "}
                <span className="italic">for the story</span> behind every
                chart
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8 space-y-6 text-[15px] leading-7 text-muted-foreground sm:text-base">
                <p>
                  James Edeoghon grew up in Nigeria and works as a medical
                  doctor — a day job that seeps into his fiction in the most
                  delicious ways. Pulse Nigeria observed that being inside
                  his prose is like being in a medical textbook, a hospital
                  cafeteria, an exam hall: clinical in its detail, alive with
                  the chatter of people mid-story.
                </p>
                <p>
                  His debut novel,{" "}
                  <em className="text-foreground/90">
                    British Natasha and the Ashewo Doctor
                  </em>
                  , follows Leonard, a Nigerian doctor in a UK residency
                  programme, and Natasha, a British nurse assistant and
                  single mum of one, through a riotously sexual affair that
                  morphs into the semblance of a relationship. Set in Reading
                  with a brief stint in Lagos, the novel documents the
                  British pastoral as much as it divulges the perils of Lagos
                  living.
                </p>
                <p>
                  For James, the danger of a single story is that it forces
                  out other possibilities. The job of fiction, as he sees it,
                  is not to reject stereotypes but to turn them into art
                  forms that make you — at the very least — ponder.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <blockquote className="mt-10 border-l-2 border-accent py-1 pl-6 font-display text-xl italic leading-relaxed text-foreground/90">
                &ldquo;James Edeoghon is a smart writer. He provides us with
                inside information on the journey to UK consultancy as well
                as he details the dark side of enslavement to the
                flesh.&rdquo;
                <footer className="mt-3 text-[10px] font-semibold uppercase not-italic tracking-[0.26em] text-muted-foreground">
                  — Pulse Nigeria, October 2026
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>

        {/* Facts — ruled index */}
        <div className="mt-20 border-b border-border md:mt-24">
          <div className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
            {facts.map((f, i) => (
              <Reveal key={f.title} delay={0.06 * i}>
                <div className="border-t border-border py-7">
                  <p className="flex items-center gap-3.5">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 shrink-0 rotate-45 bg-accent"
                    />
                    <span className="font-display text-xl text-foreground">
                      {f.title}
                    </span>
                  </p>
                  <p className="mt-2.5 pl-5 text-sm leading-relaxed text-muted-foreground">
                    {f.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 border-y border-border py-9 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-2xl font-light text-foreground sm:text-3xl">
                Curious about <span className="italic">the book itself?</span>
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Synopsis, reviews and where to find your copy.
              </p>
            </div>
            <Link
              href="/book"
              className="group inline-flex shrink-0 items-center gap-2.5 bg-primary px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-foreground transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              Explore the book
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
