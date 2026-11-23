import Link from "next/link";
import { Instagram, Twitter } from "lucide-react";

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/book", label: "The Book" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-[oklch(0.93_0.012_84)]">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[oklch(0.93_0.012_84/0.25)] bg-[oklch(0.93_0.012_84/0.08)] font-display text-sm font-semibold text-[oklch(0.93_0.012_84)]">
                JE
              </span>
              <span className="font-display text-xl text-[oklch(0.93_0.012_84)]">
                James <span className="italic text-[oklch(0.72_0.1_75)]">Edeoghon</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[oklch(0.93_0.012_84/0.65)]">
              Medical doctor by profession, storyteller by calling. Author of
              the debut novel{" "}
              <em className="text-[oklch(0.93_0.012_84/0.85)]">
                British Natasha and the Ashewo Doctor
              </em>
              .
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[oklch(0.72_0.1_75)]">
              Explore
            </p>
            <nav aria-label="Footer navigation" className="mt-5 flex flex-col gap-3">
              {pageLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="w-fit text-sm text-[oklch(0.93_0.012_84/0.7)] transition-colors hover:text-[oklch(0.93_0.012_84)]"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[oklch(0.72_0.1_75)]">
              Connect
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href="mailto:hello@jamesedeoghon.com"
                className="w-fit text-sm text-[oklch(0.93_0.012_84/0.7)] transition-colors hover:text-[oklch(0.93_0.012_84)]"
              >
                hello@jamesedeoghon.com
              </a>
              <div className="mt-2 flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[oklch(0.93_0.012_84/0.2)] text-[oklch(0.93_0.012_84/0.7)] transition-colors hover:border-[oklch(0.72_0.1_75)] hover:text-[oklch(0.72_0.1_75)]"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[oklch(0.93_0.012_84/0.2)] text-[oklch(0.93_0.012_84/0.7)] transition-colors hover:border-[oklch(0.72_0.1_75)] hover:text-[oklch(0.72_0.1_75)]"
                >
                  <Twitter className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[oklch(0.93_0.012_84/0.12)] pt-7 text-xs text-[oklch(0.93_0.012_84/0.55)] sm:flex-row">
          <p>© {new Date().getFullYear()} James Edeoghon. All rights reserved.</p>
          <p className="font-display italic">
            British Natasha and the Ashewo Doctor — out now.
          </p>
        </div>
      </div>
    </footer>
  );
}
