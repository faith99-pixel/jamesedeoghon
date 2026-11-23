"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-screen items-center overflow-hidden bg-[radial-gradient(ellipse_55%_45%_at_80%_15%,oklch(0.46_0.08_195/0.05),transparent),radial-gradient(ellipse_50%_40%_at_8%_85%,oklch(0.5_0.095_70/0.06),transparent)]"
    >
      {/* Oversized watermark letter */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 bottom-0 hidden select-none font-display text-[26rem] italic leading-none text-foreground/[0.04] lg:block"
      >
        J
      </span>

      {/* Decorative vertical text */}
      <span
        aria-hidden="true"
        className="writing-vertical absolute left-4 top-1/2 hidden -translate-y-1/2 font-display text-xs uppercase tracking-[0.5em] text-muted-foreground/50 lg:block"
      >
        The Writing Doctor — Lagos to Reading
      </span>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 pb-24 pt-32 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pt-24">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.07] px-4 py-1.5"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
              Debut novel — out now
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-display font-light text-[2.9rem] leading-[1.04] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            Doctor by <span className="italic text-accent">profession.</span>
            <br />
            Storyteller <span className="italic text-teal">by calling.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            <span className="font-display text-xl font-light italic text-foreground sm:text-2xl">
              James Edeoghon
            </span>{" "}
            is a medical doctor and writer whose debut novel,{" "}
            <em className="text-foreground/90">
              British Natasha and the Ashewo Doctor
            </em>
            , turns love, migration and difficult choices into fiction that
            lingers long after the last page.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/book"
              className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_18px_40px_-12px_oklch(0.35_0.04_60/0.5)]"
            >
              <BookOpen
                className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-6"
                aria-hidden="true"
              />
              Discover the Book
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent/50 hover:text-accent"
            >
              Meet James
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground/80"
          >
            <span>235 pages · four parts</span>
            <span aria-hidden="true" className="hidden h-1 w-1 rotate-45 bg-accent/70 sm:block" />
            <span>Reading, UK &amp; Lagos</span>
            <span aria-hidden="true" className="hidden h-1 w-1 rotate-45 bg-accent/70 sm:block" />
            <span>First edition — October 2026</span>
          </motion.div>
        </div>

        {/* Portrait */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease }}
            className="relative"
          >
            {/* Arch frame */}
            <div className="relative h-[380px] w-[290px] overflow-hidden rounded-t-[150px] rounded-b-[1.5rem] border-[6px] border-card shadow-luxe-lg sm:h-[440px] sm:w-[330px]">
              <Image
                src="/images/james-portrait.jpg"
                alt="Portrait of James Edeoghon, author and medical doctor"
                fill
                priority
                sizes="(max-width: 640px) 290px, 330px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent" />
            </div>

            {/* Bronze ring accent */}
            <div
              aria-hidden="true"
              className="absolute -left-10 -top-8 h-24 w-24 rounded-full border border-accent/40"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-teal/10"
            />

            {/* Floating book card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease }}
              className="animate-floaty absolute -bottom-10 -left-14 hidden sm:block"
            >
              <Link
                href="/book"
                aria-label="View British Natasha and the Ashewo Doctor"
                className="block w-[130px] rotate-[-6deg] overflow-hidden rounded-xl border-[5px] border-card shadow-luxe-lg transition-transform duration-300 hover:rotate-0 hover:scale-105"
              >
                <Image
                  src="/images/book-cover.jpg"
                  alt="Book cover of British Natasha and the Ashewo Doctor by James Edeoghon"
                  width={260}
                  height={346}
                  className="h-full w-full object-cover"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
