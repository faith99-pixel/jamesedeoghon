"use client";

import { Reveal } from "./reveal";
import { Newsletter } from "./newsletter";
import { AbujaGallery } from "./abuja-gallery";

const upcoming = [
  { label: "Book launch & signing", note: "Details to be announced" },
  { label: "Readings & festivals", note: "Dates to be announced" },
  { label: "Virtual Q&A sessions", note: "Platforms to be announced" },
];

export function EventsContent() {
  return (
    <>
      {/* Abuja reading — recap & gallery */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="flex items-center justify-center gap-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
              <span aria-hidden="true" className="h-px w-10 bg-accent/60" />
              From the diary
              <span aria-hidden="true" className="h-px w-10 bg-accent/60" />
            </p>
            <h2 className="mt-7 font-display font-light text-4xl leading-[1.08] tracking-[-0.01em] text-foreground sm:text-5xl">
              The Abuja book <span className="italic">reading</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-muted-foreground">
              An evening of stories, conversation and signed copies at Akara
              Café, Pavillon — Abuja. Readers came with questions, left with
              books, and the room stayed warm till the last page. A few frames
              from the night, below.
            </p>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-muted-foreground">
              Akara Café, Pavillon — Abuja · November 2026
            </p>
          </Reveal>

          <div className="mt-14">
            <AbujaGallery />
          </div>
        </div>
      </section>

      <section className="relative border-t border-border py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          {/* What's next plaque */}
          <Reveal>
            <div className="border border-border px-7 py-16 text-center sm:px-12 md:py-24">
              <div className="mx-auto max-w-xl">
                <p className="flex items-center justify-center gap-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
                  <span aria-hidden="true" className="h-px w-10 bg-accent/60" />
                  More soon
                  <span aria-hidden="true" className="h-px w-10 bg-accent/60" />
                </p>
                <h2 className="mt-7 font-display font-light text-4xl leading-[1.08] tracking-[-0.01em] text-foreground sm:text-5xl">
                  The diary opens <span className="italic">soon</span>
                </h2>
                <p className="mx-auto mt-6 max-w-lg text-[15px] leading-7 text-muted-foreground">
                  More readings, signings and festival appearances are being
                  prepared for{" "}
                  <em className="text-foreground/90">
                    British Natasha and the Ashewo Doctor
                  </em>
                  . Nothing is confirmed yet — but new dates will be announced
                  here, soon.
                </p>
              </div>
            </div>
          </Reveal>

          {/* In preparation — ruled rows */}
          <div className="mt-16 border-b border-border">
            {upcoming.map((u, i) => (
              <Reveal key={u.label} delay={0.06 * i}>
                <div className="flex flex-col gap-1.5 border-t border-border py-6 sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="font-display text-xl text-foreground">
                    {u.label}
                  </p>
                  <p className="flex items-baseline gap-4 text-sm text-muted-foreground">
                    {u.note}
                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">
                      TBA
                    </span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
