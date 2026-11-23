"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";

export function BookTeaser() {
  return (
    <section className="bg-ink text-[oklch(0.93_0.012_84)]">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Copy */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-[oklch(0.72_0.1_75)]">
                <span
                  aria-hidden="true"
                  className="h-px w-10 bg-[oklch(0.72_0.1_75/0.5)]"
                />
                The debut novel
                <span
                  aria-hidden="true"
                  className="font-display text-sm font-light italic normal-case tracking-normal text-[oklch(0.93_0.012_84/0.5)]"
                >
                  02
                </span>
              </p>
              <h2 className="mt-6 max-w-xl font-display font-light text-4xl leading-[1.08] tracking-[-0.01em] text-[oklch(0.93_0.012_84)] sm:text-5xl">
                British Natasha{" "}
                <span className="italic text-[oklch(0.72_0.1_75)]">&amp;</span>{" "}
                the Ashewo Doctor
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 max-w-xl text-[15px] leading-7 text-[oklch(0.93_0.012_84/0.65)] sm:text-base">
                A story of love, desire, migration, identity and difficult
                choices — told through the complicated relationship between a
                Nigerian doctor in a UK residency programme and a British
                single mother. Narrated with the certainty of time-stamped
                messages, it builds towards an ending waiting in disguise.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  href="/book"
                  className="group inline-flex items-center gap-2.5 border border-[oklch(0.93_0.012_84/0.4)] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[oklch(0.93_0.012_84)] transition-colors duration-300 hover:bg-[oklch(0.93_0.012_84)] hover:text-ink"
                >
                  Explore the book
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <a
                  href="https://www.pulse.ng/story/british-natasha-and-the-ashewo-doctor-review-2026100915225947559"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-sweep text-[11px] font-semibold uppercase tracking-[0.22em] text-[oklch(0.93_0.012_84/0.55)] transition-colors hover:text-[oklch(0.93_0.012_84)]"
                >
                  Read the Pulse review
                </a>
              </div>
            </Reveal>
          </div>

          {/* Cover */}
          <Reveal className="order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-[340px]">
              <div className="book-scene">
                <div className="book-3d relative aspect-[3/4] w-full">
                  <div className="absolute inset-0 overflow-hidden rounded-r-lg rounded-l-sm border border-[oklch(0.93_0.012_84/0.15)] shadow-luxe-lg">
                    <Image
                      src="/images/book-cover.jpg"
                      alt="Cover of British Natasha and the Ashewo Doctor — an illustration of a couple in an intimate embrace"
                      fill
                      sizes="(max-width: 1024px) 90vw, 420px"
                      className="object-cover"
                      priority
                    />
                    <div className="book-spine-shadow pointer-events-none absolute inset-0" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
