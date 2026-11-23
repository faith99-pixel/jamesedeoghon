"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Menu, X } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/book", label: "The Book" },
  { href: "/praise", label: "Praise" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

const mobileLinks = [{ href: "/", label: "Home" }, ...links];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-border/80 bg-background/85 backdrop-blur-xl shadow-[0_10px_40px_-20px_oklch(0.35_0.04_60/0.25)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.5rem] md:px-8"
      >
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="James Edeoghon — Home"
        >
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rotate-45 bg-accent transition-transform duration-300 group-hover:scale-150"
          />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground sm:text-[13px] sm:tracking-[0.3em]">
            James Edeoghon
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`link-sweep text-[12px] font-medium uppercase tracking-[0.18em] transition-colors ${
                isActive(l.href)
                  ? "text-foreground after:scale-x-100"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-all duration-300 hover:shadow-[0_14px_30px_-10px_oklch(0.35_0.04_60/0.45)]"
          >
            <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
            Get the Book
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 text-foreground md:hidden"
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
            <div className="flex flex-col px-5 pb-8 pt-2">
              {mobileLinks.map((l, i) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={`flex items-baseline gap-4 border-b border-border/60 py-4 transition-colors ${
                    isActive(l.href)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="text-[11px] italic text-accent"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base uppercase tracking-[0.18em]">
                    {l.label}
                  </span>
                </Link>
              ))}
              <Link
                href="/book"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Get the Book
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
