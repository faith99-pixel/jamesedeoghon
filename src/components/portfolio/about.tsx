"use client";

import Image from "next/image";
import { Stethoscope, PenLine, Globe2, BookOpen } from "lucide-react";
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
    text: "Writes with the certainty of a clinician’s chart and the pulse of someone who has listened to a thousand stories.",
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

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Portrait + quote card */}
          <Reveal className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="grain relative overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/james-portrait.jpg"
                  alt="James Edeoghon smiling, wearing glasses and a beanie"
                  fill
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-display text-base italic leading-snug text-foreground/95">
                  “Being inside his prose is like being in a medical textbook,
                  a hospital cafeteria, an exam hall.”
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-primary">
                  Pulse Nigeria — Book Review, 2026
                </p>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute -right-5 -top-5 -z-10 h-full w-full rounded-3xl border border-teal/25"
            />
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-teal">
                About the author
              </p>
              <h2 className="font-display text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
                The man behind{" "}
                <span className="italic text-primary">the pen</span> and the
                stethoscope
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  James Edeoghon grew up in Nigeria and works as a medical
                  doctor — a day job that seeps into his fiction in the most
                  delicious ways. His debut novel,{" "}
                  <em className="text-foreground/90">
                    British Natasha and the Ashewo Doctor
                  </em>
                  , follows Leonard, a Nigerian doctor in a UK residency
                  programme, and Natasha, a British nurse assistant and single
                  mother, through a riotously complicated affair.
                </p>
                <p>
                  For James, fiction is not about rejecting stereotypes but{" "}
                  <span className="text-foreground/90">
                    “turning them into art forms that make you ponder”
                  </span>{" "}
                  — a philosophy that runs through a novel Pulse Nigeria calls
                  a story of love, desire, migration, identity and difficult
                  choices.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {facts.map((f, i) => (
                <Reveal key={f.title} delay={0.12 + i * 0.07}>
                  <div className="group h-full rounded-2xl border border-border/60 bg-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:bg-card">
                    <f.icon
                      className="mb-3 h-5 w-5 text-primary transition-colors group-hover:text-teal"
                      aria-hidden="true"
                    />
                    <h3 className="font-display text-lg text-foreground">
                      {f.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {f.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
