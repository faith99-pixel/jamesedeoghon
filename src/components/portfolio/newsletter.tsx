"use client";

import { useState } from "react";
import { Loader2, MailCheck, Send } from "lucide-react";
import { Reveal } from "./reveal";
import { useToast } from "@/hooks/use-toast";

export function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast({
          title: "Hmm, something's off",
          description: data.error ?? "Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "You're on the list",
          description:
            "Delightful news and important information only. Thank you for subscribing.",
        });
        setEmail("");
      }
    } catch {
      toast({
        title: "Connection problem",
        description: "Please check your network and try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "h-12 flex-1 rounded-full border border-input bg-background px-5 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50";

  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div
            className={`grain relative overflow-hidden rounded-[2.5rem] border border-border bg-card px-7 text-center sm:px-12 ${
              compact ? "py-10 md:py-12" : "py-14 md:py-20"
            }`}
          >
            <div className="relative z-10 mx-auto max-w-xl">
              <MailCheck className="mx-auto mb-5 h-7 w-7 text-accent" aria-hidden="true" />
              <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl">
                Letters from the ward{" "}
                <span className="italic text-accent">&amp; the writing desk</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Sign up for updates from James — book news, behind-the-scenes
                notes and occasional dispatches from the hospital corridor.
                Delightful news and important information only.
              </p>

              <form
                onSubmit={onSubmit}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className={inputClass}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_16px_36px_-12px_oklch(0.35_0.04_60/0.5)] disabled:opacity-70"
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  ) : (
                    <Send className="h-4 w-4" aria-hidden="true" />
                  )}
                  {loading ? "Signing up…" : "Sign up"}
                </button>
              </form>
              <p className="mt-4 text-xs text-muted-foreground/80">
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
