import Link from "next/link";
import { AMAZON_BOOK_URL, BLOG_URL, PODCAST_YOUTUBE_URL, PODCAST_SPOTIFY_URL } from "@/lib/links";

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/book", label: "The Book" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/events", label: "Events" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-[oklch(0.93_0.012_84)]">
      <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-16">
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
                className="h-1.5 w-1.5 rotate-45 bg-[oklch(0.72_0.1_75)] transition-transform duration-500 group-hover:rotate-[225deg]"
              />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[oklch(0.93_0.012_84)]">
                James Edeoghon
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[oklch(0.93_0.012_84/0.6)]">
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
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[oklch(0.72_0.1_75)]">
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
                  className="link-sweep w-fit text-sm text-[oklch(0.93_0.012_84/0.65)] transition-colors hover:text-[oklch(0.93_0.012_84)]"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={BLOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-sweep w-fit text-sm text-[oklch(0.93_0.012_84/0.65)] transition-colors hover:text-[oklch(0.93_0.012_84)]"
              >
                Blog
              </a>
              <Link
                href="/contact"
                className="link-sweep w-fit text-sm text-[oklch(0.93_0.012_84/0.65)] transition-colors hover:text-[oklch(0.93_0.012_84)]"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[oklch(0.72_0.1_75)]">
              Connect
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href="mailto:jamesedeoghon@gmail.com"
                className="link-sweep w-fit text-sm text-[oklch(0.93_0.012_84/0.65)] transition-colors hover:text-[oklch(0.93_0.012_84)]"
              >
                jamesedeoghon@gmail.com
              </a>
              <a
                href="https://instagram.com/novelistjames"
                target="_blank"
                rel="noopener noreferrer"
                className="link-sweep w-fit text-sm text-[oklch(0.93_0.012_84/0.65)] transition-colors hover:text-[oklch(0.93_0.012_84)]"
              >
                @novelistjames — Instagram
              </a>
              <a
                href={PODCAST_YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-sweep w-fit text-sm text-[oklch(0.93_0.012_84/0.65)] transition-colors hover:text-[oklch(0.93_0.012_84)]"
              >
                LitJames Podcast — YouTube
              </a>
              <a
                href={PODCAST_SPOTIFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-sweep w-fit text-sm text-[oklch(0.93_0.012_84/0.65)] transition-colors hover:text-[oklch(0.93_0.012_84)]"
              >
                LitJames Podcast — Spotify
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-[oklch(0.93_0.012_84/0.12)] pt-7 text-xs text-[oklch(0.93_0.012_84/0.5)] sm:flex-row">
          <p>© {new Date().getFullYear()} James Edeoghon. All rights reserved.</p>
          <a
            href={AMAZON_BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order British Natasha and the Ashewo Doctor on Amazon"
            className="link-sweep italic transition-colors hover:text-[oklch(0.93_0.012_84)]"
          >
            British Natasha and the Ashewo Doctor — out now.
          </a>
        </div>
      </div>
    </footer>
  );
}
