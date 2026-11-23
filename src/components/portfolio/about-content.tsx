"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2, PenLine, Stethoscope, BookOpen } from "lucide-react";
import { Reveal } from "./reveal";

const facts = [
  {
    icon: Stethoscope,
    title: "Physician",
    text: "A practising medical doctor, navigating residency on one side of the sea and Lagos roots on the other.",
  },
  {
    icon: PenLine,
    title: "Storyteller",
    text: "Writes with the certainty of a clinician's chart and the pulse of someone who has listened to a thousand stories.",
  },
  {
    icon: Globe2,
    title: "Between worlds",
    text: "His fiction documents the British pastoral as much as it divulges the perils of Lagos living.",
  },
  {
    icon: BookOpen,
    title: "Debut novelist",
    text: "British Natasha and the Ashewo Doctor marks his first novel — a four-part, 235-page love letter to messy humanity.",
  },
];

export function AboutContent() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Portrait + quote card */}
          <Reveal className="relative mx-auto w-full max-w-md lg:mx-0 lg:sticky lg:top-28">
            <div className="grain relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-luxe">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/james-portrait.jpg"
                  alt="James Edeoghon smiling, wearing glasses and a beanie"
                  fill
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="object-cover"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
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
              <h2 className="font-display text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
                A doctor who listens{" "}
                <span className="italic text-accent">for the story</span>{" "}
                behind every chart
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
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
              <blockquote className="mt-10 rounded-2xl border-l-2 border-accent bg-card/70 py-5 pl-6 pr-5 font-display text-xl italic leading-relaxed text-foreground/90">
                “James Edeoghon is a smart writer. He provides us with inside
                information on the journey to UK consultancy as well as he
                details the dark side of enslavement to the flesh.”
                <footer className="mt-3 text-[11px] uppercase not-italic tracking-[0.22em] text-muted-foreground">
                  — Pulse Nigeria, October 2026
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>

        {/* Facts grid */}
        <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal key={f.title} delay={0.08 * i}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-luxe">
                <f.icon
                  className="mb-4 h-5 w-5 text-accent"
                  aria-hidden="true"
                />
                <h3 className="font-display text-xl text-foreground">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA strip */}
        <Reveal delay={0.1}>
          <div className="mt-20 flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-border bg-secondary/50 px-8 py-10 text-center sm:flex-row sm:text-left">
            <div>
              <p className="font-display text-2xl text-foreground sm:text-3xl">
                Curious about{" "}
                <span className="italic text-accent">the book itself?</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Synopsis, reviews and where to find your copy.
              </p>
            </div>
            <Link
              href="/book"
              className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_18px_40px_-12px_oklch(0.35_0.04_60/0.5)]"
            >
              Explore the book
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
