"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, BookOpen, Sparkles } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-screen items-center overflow-hidden bg-[radial-gradient(ellipse_60%_50%_at_75%_20%,rgba(78,195,192,0.08),transparent),radial-gradient(ellipse_50%_40%_at_15%_80%,rgba(224,166,79,0.07),transparent)]"
    >
      {/* Decorative vertical text */}
      <span
        aria-hidden="true"
        className="writing-vertical absolute left-4 top-1/2 hidden -translate-y-1/2 font-display text-xs uppercase tracking-[0.5em] text-muted-foreground/40 lg:block"
      >
        The Writing Doctor — Lagos to Reading
      </span>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 pb-24 pt-32 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pt-20">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5"
          >
            <Sparkles className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-teal">
              Debut novel — out now
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-display text-5xl leading-[1.04] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            Doctor by <span className="italic text-teal">profession.</span>
            <br />
            Storyteller <span className="italic text-primary">by calling.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            <span className="font-display text-xl italic text-foreground sm:text-2xl">
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
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#book"
              className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_36px_rgba(224,166,79,0.4)]"
            >
              <BookOpen
                className="h-4 w-4 transition-transform group-hover:-rotate-6"
                aria-hidden="true"
              />
              Discover the Book
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-teal/50 hover:text-teal"
            >
              Meet James
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.18em] text-muted-foreground/70"
          >
            <span>235 pages · four parts</span>
            <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-primary/60 sm:block" />
            <span>Reading, UK &amp; Lagos</span>
            <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-primary/60 sm:block" />
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
            <div className="relative h-[380px] w-[290px] overflow-hidden rounded-t-[150px] rounded-b-3xl border border-border/80 bg-secondary shadow-[0_30px_80px_rgba(0,0,0,0.5)] sm:h-[440px] sm:w-[330px]">
              <Image
                src="/images/james-portrait.jpg"
                alt="Portrait of James Edeoghon, author and medical doctor"
                fill
                priority
                sizes="(max-width: 640px) 290px, 330px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>

            {/* Amber ring accent */}
            <div
              aria-hidden="true"
              className="absolute -left-10 -top-8 h-24 w-24 rounded-full border-2 border-primary/40"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-teal/15 blur-sm"
            />

            {/* Floating book card */}
            <motion.a
              href="#book"
              aria-label="View British Natasha and the Ashewo Doctor"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease }}
              className="animate-floaty absolute -bottom-10 -left-14 hidden w-[130px] rotate-[-6deg] overflow-hidden rounded-lg border border-border/70 bg-card shadow-[0_20px_50px_rgba(0,0,0,0.55)] transition-transform duration-300 hover:rotate-0 hover:scale-105 sm:block"
            >
              <Image
                src="/images/book-cover.jpg"
                alt="Book cover of British Natasha and the Ashewo Doctor by James Edeoghon"
                width={260}
                height={346}
                className="h-full w-full object-cover"
              />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground/60 transition-colors hover:text-primary md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
