import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/book", label: "The Book" },
  { href: "/praise", label: "Praise" },
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
            <Link
              href="/"
              className="group flex w-fit items-center gap-3"
              aria-label="James Edeoghon — Home"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rotate-45 bg-[oklch(0.72_0.1_75)] transition-transform duration-300 group-hover:scale-150"
              />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[oklch(0.93_0.012_84)]">
                James Edeoghon
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[oklch(0.72_0.1_75)]">
              Explore
            </p>
            <nav
              aria-label="Footer navigation"
              className="mt-5 flex flex-col gap-3"
            >
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[oklch(0.72_0.1_75)]">
              Connect
            </p>
            <div className="mt-5 flex flex-col gap-4">
              <a
                href="mailto:jamesedeoghon@gmail.com"
                className="group flex w-fit items-center gap-3 text-sm text-[oklch(0.93_0.012_84/0.7)] transition-colors hover:text-[oklch(0.93_0.012_84)]"
              >
                <Mail
                  className="h-4 w-4 text-[oklch(0.72_0.1_75)]"
                  aria-hidden="true"
                />
                jamesedeoghon@gmail.com
              </a>
              <a
                href="https://instagram.com/novelistjames"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-3 text-sm text-[oklch(0.93_0.012_84/0.7)] transition-colors hover:text-[oklch(0.93_0.012_84)]"
              >
                <Instagram
                  className="h-4 w-4 text-[oklch(0.72_0.1_75)]"
                  aria-hidden="true"
                />
                @novelistjames
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[oklch(0.93_0.012_84/0.12)] pt-7 text-xs text-[oklch(0.93_0.012_84/0.55)] sm:flex-row">
          <p>© {new Date().getFullYear()} James Edeoghon. All rights reserved.</p>
          <p className="italic">
            British Natasha and the Ashewo Doctor — out now.
          </p>
        </div>
      </div>
    </footer>
  );
}
