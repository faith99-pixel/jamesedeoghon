"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative border-b border-border">
      {/* Decorative vertical text */}
      <span
        aria-hidden="true"
        className="writing-vertical absolute left-5 top-1/2 hidden -translate-y-1/2 text-[10px] font-medium uppercase tracking-[0.5em] text-muted-foreground/40 lg:block"
      >
        The Writing Doctor — Lagos to Reading
      </span>

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-36 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent"
          >
            <span aria-hidden="true" className="h-px w-10 bg-accent/60" />
            Debut novel — out now
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="mt-8 font-display font-light text-[2.9rem] leading-[1.04] tracking-[-0.01em] text-foreground sm:text-6xl lg:text-[4.6rem]"
          >
            Doctor by <span className="italic">profession.</span>
            <span className="ml-6 inline-block sm:ml-14">
              Storyteller <span className="italic">by calling.</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mt-8 max-w-lg text-[15px] leading-7 text-muted-foreground sm:text-base"
          >
            <span className="text-foreground">James Edeoghon</span> is a
            medical doctor and writer whose debut novel,{" "}
            <em className="text-foreground/90">
              British Natasha and the Ashewo Doctor
            </em>
            , turns love, migration and difficult choices into fiction that
            lingers long after the last page.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/book"
              className="inline-flex items-center bg-primary px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-foreground transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              Discover the Book
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2.5 border border-border px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground transition-colors duration-300 hover:border-foreground"
            >
              Meet James
              <ArrowRight
                className="h-3.5 w-3.5 text-accent transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </motion.div>

        </div>

        {/* Portrait */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease }}
            className="relative"
          >
            <div className="relative h-[400px] w-[290px] overflow-hidden rounded-t-full border border-foreground/15 sm:h-[470px] sm:w-[330px]">
              <Image
                src="/images/james-portrait.jpg"
                alt="Portrait of James Edeoghon, author and medical doctor"
                fill
                priority
                unoptimized
                sizes="(max-width: 640px) 290px, 330px"
                className="object-cover"
              />
            </div>

            {/* Book cover, quietly overlapping the frame */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease }}
              className="absolute -bottom-8 -left-12 hidden w-[120px] border-[5px] border-background shadow-luxe sm:block"
            >
              <Link
                href="/book"
                aria-label="View British Natasha and the Ashewo Doctor"
                className="block"
              >
                <Image
                  src="/images/book-cover.jpg"
                  alt="Book cover of British Natasha and the Ashewo Doctor by James Edeoghon"
                  width={240}
                  height={320}
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
