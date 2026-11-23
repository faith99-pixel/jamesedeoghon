"use client";

import { CalendarDays, Clock, MapPin, Ticket } from "lucide-react";
import { Reveal } from "./reveal";
import { Newsletter } from "./newsletter";

const upcoming = [
  { icon: Ticket, label: "Book launch & signing", note: "Details to be announced" },
  { icon: Clock, label: "Readings & festivals", note: "Dates to be announced" },
  { icon: MapPin, label: "Virtual Q&A sessions", note: "Platforms to be announced" },
];

export function EventsContent() {
  return (
    <>
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          {/* Coming soon card */}
          <Reveal>
            <div className="grain relative overflow-hidden rounded-[2.5rem] border border-border bg-card px-7 py-16 text-center sm:px-12 md:py-24">
              <div
                aria-hidden="true"
                className="absolute inset-3 rounded-[2rem] border border-dashed border-accent/25"
              />
              <div className="relative z-10 mx-auto max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.07] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-accent">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                  Coming soon
                </span>
                <div className="mx-auto mt-8 flex h-20 w-20 items-center justify-center rounded-full border border-accent/30 bg-accent/[0.07]">
                  <CalendarDays className="h-9 w-9 text-accent" aria-hidden="true" />
                </div>
                <h2 className="mt-8 font-display text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
                  Events are <span className="italic text-accent">on the way</span>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
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

          {/* Upcoming placeholders */}
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
            {upcoming.map((u, i) => (
              <Reveal key={u.label} delay={0.08 * i}>
                <div className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-luxe">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/[0.07] text-accent transition-colors group-hover:bg-accent/[0.12]">
                    <u.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-display text-lg text-foreground">
                      {u.label}
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {u.note}
                    </span>
                    <span className="mt-3 inline-block rounded-full bg-secondary px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      TBA
                    </span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Newsletter compact />
    </>
  );
}
