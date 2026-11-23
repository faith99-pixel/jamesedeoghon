"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";

export function AboutTeaser() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Portrait */}
          <Reveal className="relative mx-auto w-full max-w-md lg:mx-0">
            <figure>
              <div className="relative aspect-square w-full overflow-hidden border border-foreground/15">
                <Image
                  src="/images/james-portrait.jpg"
                  alt="James Edeoghon smiling, wearing glasses and a beanie"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-4 border-t border-border pt-4">
                <p className="font-display text-[15px] italic leading-relaxed text-foreground/85">
                  &ldquo;Being inside his prose is like being in a medical
                  textbook, a hospital cafeteria, an exam hall.&rdquo;
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  Pulse Nigeria — Book Review, 2026
                </p>
              </figcaption>
            </figure>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <p className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
                <span aria-hidden="true" className="h-px w-10 bg-accent/60" />
                About the author
              </p>
              <h2 className="mt-6 max-w-xl font-display font-light text-4xl leading-[1.08] tracking-[-0.01em] text-foreground sm:text-5xl">
                The man behind <span className="italic">the pen</span> and the
                stethoscope
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 max-w-xl text-[15px] leading-7 text-muted-foreground sm:text-base">
                James Edeoghon grew up in Nigeria and works as a medical
                doctor — a day job that seeps into his fiction in the most
                delicious ways. His debut novel follows Leonard, a Nigerian
                doctor in a UK residency programme, and Natasha, a British
                nurse assistant, through a riotously complicated affair.
              </p>
              <p className="mt-5 max-w-xl text-[15px] leading-7 text-muted-foreground sm:text-base">
                For James, fiction is not about rejecting stereotypes but
                turning them into art forms that make you ponder.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <Link
                href="/about"
                className="group mt-9 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground"
              >
                <span className="link-sweep">More about James</span>
                <ArrowRight
                  className="h-3.5 w-3.5 text-accent transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
