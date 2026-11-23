"use client";

import { useState } from "react";
import { CheckCircle2, Instagram, Loader2, Mail, Twitter } from "lucide-react";
import { Reveal } from "./reveal";
import { useToast } from "@/hooks/use-toast";

const subjects = ["General enquiry", "Book purchase", "Press & media", "Literary agent"];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: subjects[0],
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        toast({
          title: "Message not sent",
          description: data.error ?? "Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Message sent",
          description: "Thank you for reaching out — James will get back to you soon.",
        });
        setForm({ name: "", email: "", subject: subjects[0], message: "" });
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
    "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/60";

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-teal">
                Contact
              </p>
              <h2 className="font-display text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
                Say <span className="italic text-primary">hello</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                For official enquiries regarding the book, interviews,
                features or speaking engagements — or simply to share what
                Leonard and Natasha’s story meant to you — drop a line below.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-9 space-y-4">
                <a
                  href="mailto:hello@jamesedeoghon.com"
                  className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-card/60 p-5 transition-all hover:border-teal/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      Email
                    </span>
                    <span className="text-sm text-foreground">
                      hello@jamesedeoghon.com
                    </span>
                  </span>
                </a>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="James Edeoghon on Instagram"
                    className="group flex flex-1 items-center gap-4 rounded-2xl border border-border/60 bg-card/60 p-5 transition-all hover:border-teal/40"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal transition-colors group-hover:bg-teal/20">
                      <Instagram className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        Instagram
                      </span>
                      <span className="text-sm text-foreground">@jamesedeoghon</span>
                    </span>
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="James Edeoghon on X (Twitter)"
                    className="group flex flex-1 items-center gap-4 rounded-2xl border border-border/60 bg-card/60 p-5 transition-all hover:border-teal/40"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <Twitter className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        X / Twitter
                      </span>
                      <span className="text-sm text-foreground">@jamesedeoghon</span>
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-border/70 bg-card/60 p-6 sm:p-8"
              aria-label="Contact form"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="contact-subject" className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Subject
                </label>
                <select
                  id="contact-subject"
                  value={form.subject}
                  onChange={(e) => update("subject", e.target.value)}
                  className={`${inputClass} appearance-none`}
                >
                  {subjects.map((s) => (
                    <option key={s} value={s} className="bg-card text-foreground">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-4">
                <label htmlFor="contact-message" className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Write your message…"
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_28px_rgba(224,166,79,0.35)] disabled:opacity-70 sm:w-auto sm:px-10"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                ) : (
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                )}
                {loading ? "Sending…" : "Send message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
