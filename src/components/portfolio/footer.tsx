import { Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/60 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-5 py-10 md:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-display text-xs font-semibold text-primary">
              JE
            </span>
            <span className="font-display text-base text-foreground">
              James <span className="italic text-primary">Edeoghon</span>
            </span>
          </a>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              About
            </a>
            <a href="#book" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              The Book
            </a>
            <a href="#praise" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Praise
            </a>
            <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-teal/50 hover:text-teal"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-teal/50 hover:text-teal"
            >
              <Twitter className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border/40 pt-6 text-xs text-muted-foreground/70 sm:flex-row">
          <p>© {new Date().getFullYear()} James Edeoghon. All rights reserved.</p>
          <p className="font-display italic">
            British Natasha and the Ashewo Doctor — out now.
          </p>
        </div>
      </div>
    </footer>
  );
}
