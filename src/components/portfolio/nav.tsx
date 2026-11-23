"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#book", label: "The Book" },
  { href: "#praise", label: "Praise" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 md:h-20 max-w-6xl items-center justify-between px-5 md:px-8"
      >
        <a href="#top" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-display text-sm font-semibold tracking-wide text-primary transition-colors group-hover:bg-primary/20">
            JE
          </span>
          <span className="hidden font-display text-lg tracking-wide text-foreground sm:block">
            James <span className="italic text-primary">Edeoghon</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-sweep text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_24px_rgba(224,166,79,0.35)]"
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            Get the Book
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-6 pt-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Get the Book
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
