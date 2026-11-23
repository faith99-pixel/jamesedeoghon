"use client";

import { useState } from "react";
import { Loader2, MailCheck, Send } from "lucide-react";
import { Reveal } from "./reveal";
import { useToast } from "@/hooks/use-toast";

export function Newsletter() {
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

  return (
    <section className="relative py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-3xl border border-border/70 bg-[radial-gradient(ellipse_60%_120%_at_20%_0%,rgba(224,166,79,0.10),transparent),radial-gradient(ellipse_50%_100%_at_90%_100%,rgba(78,195,192,0.08),transparent)] bg-card px-7 py-12 text-center sm:px-12 md:py-16">
            <div className="relative z-10 mx-auto max-w-xl">
              <MailCheck className="mx-auto mb-5 h-7 w-7 text-primary" aria-hidden="true" />
              <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl">
                Letters from the ward{" "}
                <span className="italic text-primary">&amp; the writing desk</span>
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
                  className="h-12 flex-1 rounded-full border border-input bg-background/60 px-5 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_28px_rgba(224,166,79,0.35)] disabled:opacity-70"
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  ) : (
                    <Send className="h-4 w-4" aria-hidden="true" />
                  )}
                  {loading ? "Signing up…" : "Sign up"}
                </button>
              </form>
              <p className="mt-4 text-xs text-muted-foreground/70">
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
