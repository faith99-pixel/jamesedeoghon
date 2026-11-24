"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { Reveal } from "./reveal";
import { useToast } from "@/hooks/use-toast";

/**
 * The site is fully static, so signups are delivered through FormSubmit
 * (https://formsubmit.co) — every submission is emailed straight to James's
 * inbox, no server or database needed. The very first submission triggers a
 * one-time activation email from FormSubmit; James clicks that link once
 * and the list runs itself from then on.
 */
const FORMSUBMIT_ENDPOINT =
  "https://formsubmit.co/ajax/jamesedeoghon@gmail.com";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [honey, setHoney] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          _subject: `New letter-list signup — ${email.trim().toLowerCase()}`,
          _template: "box",
          _captcha: "false",
          _honey: honey,
        }),
      });
      const data = (await res.json().catch(() => null)) as {
        success?: string | boolean;
      } | null;

      // FormSubmit returns success as the string "true" (sometimes a boolean)
      const ok = res.ok && (data?.success === "true" || data?.success === true);
      if (!ok) {
        throw new Error("Signup failed");
      }

      toast({
        title: "You're on the list",
        description:
          "Delightful news and important information only. Thank you for subscribing.",
      });
      setEmail("");
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
    <section className="bg-ink text-[oklch(0.93_0.012_84)]">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-24">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <p className="flex items-center justify-center gap-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-[oklch(0.72_0.1_75)]">
              <span
                aria-hidden="true"
                className="h-px w-10 bg-[oklch(0.72_0.1_75/0.5)]"
              />
              The letter list
              <span
                aria-hidden="true"
                className="h-px w-10 bg-[oklch(0.72_0.1_75/0.5)]"
              />
            </p>
            <h2 className="mt-7 font-display font-light text-3xl leading-[1.1] tracking-[-0.01em] text-[oklch(0.93_0.012_84)] sm:text-4xl">
              Letters from the ward{" "}
              <span className="italic text-[oklch(0.72_0.1_75)]">&amp;</span>{" "}
              the writing desk
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[oklch(0.93_0.012_84/0.6)] sm:text-[15px]">
              Sign up for updates from James — book news, behind-the-scenes
              notes and occasional dispatches from the hospital corridor.
              Delightful news and important information only.
            </p>

            <form
              onSubmit={onSubmit}
              className="mx-auto mt-10 flex max-w-md flex-col gap-5 sm:flex-row sm:items-end"
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
                className="h-11 flex-1 rounded-none border-0 border-b border-[oklch(0.93_0.012_84/0.3)] bg-transparent px-0 text-sm text-[oklch(0.93_0.012_84)] placeholder:text-[oklch(0.93_0.012_84/0.4)] focus-visible:border-[oklch(0.72_0.1_75)] focus-visible:outline-none"
              />
              <input
                type="text"
                name="_honey"
                value={honey}
                onChange={(e) => setHoney(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-11 items-center justify-center gap-2.5 bg-[oklch(0.93_0.012_84)] px-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink transition-colors duration-300 hover:bg-[oklch(0.72_0.1_75)] disabled:opacity-70"
              >
                {loading ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
                ) : (
                  <Send className="h-3.5 w-3.5" aria-hidden="true" />
                )}
                {loading ? "Signing up…" : "Sign up"}
              </button>
            </form>
            <p className="mt-5 text-xs text-[oklch(0.93_0.012_84/0.4)]">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
