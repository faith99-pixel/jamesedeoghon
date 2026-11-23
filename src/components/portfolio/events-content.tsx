"use client";

import { Reveal } from "./reveal";
import { Newsletter } from "./newsletter";

const upcoming = [
  { label: "Book launch & signing", note: "Details to be announced" },
  { label: "Readings & festivals", note: "Dates to be announced" },
  { label: "Virtual Q&A sessions", note: "Platforms to be announced" },
];

export function EventsContent() {
  return (
    <>
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          {/* Coming soon plaque */}
          <Reveal>
            <div className="border border-border px-7 py-16 text-center sm:px-12 md:py-24">
              <div className="mx-auto max-w-xl">
                <p className="flex items-center justify-center gap-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
                  <span aria-hidden="true" className="h-px w-10 bg-accent/60" />
                  Coming soon
                  <span aria-hidden="true" className="h-px w-10 bg-accent/60" />
                </p>
                <h2 className="mt-7 font-display font-light text-4xl leading-[1.08] tracking-[-0.01em] text-foreground sm:text-5xl">
                  The diary opens <span className="italic">soon</span>
                </h2>
                <p className="mx-auto mt-6 max-w-lg text-[15px] leading-7 text-muted-foreground">
                  James is currently preparing his calendar of book readings,
                  signings and festival appearances for{" "}
                  <em className="text-foreground/90">
                    British Natasha and the Ashewo Doctor
                  </em>
                  . Nothing is confirmed yet — but the first dates will be
                  announced here, soon.
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
