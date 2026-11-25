"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { AMAZON_BOOK_URL, BLOG_URL } from "@/lib/links";

const links = [
  { href: "/about", label: "About" },
  { href: "/book", label: "The Book" },
  { href: "/testimonials", label: "Testimonials" },
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

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled && !open
            ? "border-b border-border bg-background/90 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 md:h-20 md:px-10"
        >
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="James Edeoghon — Home"
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rotate-45 bg-accent transition-transform duration-500 group-hover:rotate-[225deg]"
            />
            <span
              className={`text-[13px] font-semibold uppercase tracking-[0.3em] transition-colors ${
                open ? "text-[oklch(0.93_0.012_84)]" : "text-foreground"
              }`}
            >
              James Edeoghon
            </span>
          </Link>

          <div className="hidden items-center gap-9 md:flex lg:gap-11">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`link-sweep text-[11px] font-medium uppercase tracking-[0.22em] transition-colors ${
                  isActive(l.href)
                    ? "text-foreground after:scale-x-100"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`link-sweep text-[11px] font-medium uppercase tracking-[0.22em] transition-colors text-muted-foreground hover:text-foreground`}
            >
              Blog
            </a>
            <a
              href={AMAZON_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order British Natasha and the Ashewo Doctor on Amazon"
              className="inline-flex items-center border border-foreground/70 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background"
            >
              Get the Book
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`flex h-11 w-11 items-center justify-center border transition-colors md:hidden ${
              open
                ? "border-[oklch(0.93_0.012_84/0.3)] text-[oklch(0.93_0.012_84)]"
                : "border-border text-foreground"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-ink md:hidden"
          >
            <div className="flex flex-1 flex-col overflow-y-auto px-8 pb-2 pt-16">
              <nav aria-label="Mobile menu" className="my-auto">
                {mobileLinks.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + 0.06 * i,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="border-b border-[oklch(0.93_0.012_84/0.12)]"
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(l.href) ? "page" : undefined}
                      className="group block py-5"
                    >
                      <span
                        className={`text-2xl font-light uppercase tracking-[0.2em] transition-colors ${
                          isActive(l.href)
                            ? "text-[oklch(0.93_0.012_84)]"
                            : "text-[oklch(0.93_0.012_84/0.55)] group-hover:text-[oklch(0.93_0.012_84)]"
                        }`}
                      >
                        {l.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + 0.06 * mobileLinks.length, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-[oklch(0.93_0.012_84/0.12)]"
                >
                  <a
                    href={BLOG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="group block py-5"
                  >
                    <span className="text-2xl font-light uppercase tracking-[0.2em] text-[oklch(0.93_0.012_84/0.55)] transition-colors group-hover:text-[oklch(0.93_0.012_84)]">
                      Blog
                    </span>
                  </a>
                </motion.div>
              </nav>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="px-8 pb-10"
            >
              <div className="flex flex-col gap-2 text-sm text-[oklch(0.93_0.012_84/0.55)]">
                <a
                  href="mailto:jamesedeoghon@gmail.com"
                  className="w-fit transition-colors hover:text-[oklch(0.93_0.012_84)]"
                >
                  jamesedeoghon@gmail.com
                </a>
                <a
                  href="https://instagram.com/novelistjames"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit transition-colors hover:text-[oklch(0.93_0.012_84)]"
                >
                  @novelistjames — Instagram
                </a>
              </div>
              <a
                href={AMAZON_BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order British Natasha and the Ashewo Doctor on Amazon"
                className="mt-7 block border border-[oklch(0.93_0.012_84/0.4)] py-4 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-[oklch(0.93_0.012_84)] transition-colors hover:bg-[oklch(0.93_0.012_84)] hover:text-ink"
              >
                Get the Book
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
