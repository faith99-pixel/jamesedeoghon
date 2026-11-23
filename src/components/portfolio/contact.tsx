"use client";

import { useState } from "react";
import { Instagram, Mail, MailCheck, Send } from "lucide-react";
import { Reveal } from "./reveal";
import { useToast } from "@/hooks/use-toast";

const subjects = ["General enquiry", "Book purchase", "Press & media", "Literary agent"];

const CONTACT_EMAIL = "jamesedeoghon@gmail.com";

export function ContactContent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: subjects[0],
    message: "",
  });
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function buildMailto(): string {
    const subject = `${form.subject} — via James Edeoghon website`;
    const body = [
      `Hello James,`,
      ``,
      form.message.trim(),
      ``,
      `—`,
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Sent from the website contact form`,
    ].join("\n");
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (form.name.trim().length < 2) {
      toast({
        title: "Almost there",
        description: "Please tell us your name.",
        variant: "destructive",
      });
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      toast({
        title: "Almost there",
        description: "Please provide a valid email address.",
        variant: "destructive",
      });
      return;
    }
    if (form.message.trim().length < 10) {
      toast({
        title: "Almost there",
        description: "Please write a short message (at least 10 characters).",
        variant: "destructive",
      });
      return;
    }

    // Keep a copy of the message on record (best effort, never blocks the email)
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).catch(() => {});

    // Open the visitor's email app with everything pre-filled for James
    window.location.href = buildMailto();

    toast({
      title: "Opening your email app…",
      description: `Your message is pre-filled and addressed to ${CONTACT_EMAIL}.`,
    });
    setSent(true);
  }

  const inputClass =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 transition-colors";

  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <h2 className="font-display text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
                Write to{" "}
                <span className="italic text-accent">James</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                For official enquiries regarding the book, interviews,
                features or speaking engagements — or simply to share what
                Leonard and Natasha&apos;s story meant to you — drop a line
                below or reach out directly.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-9 space-y-4">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-luxe"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/[0.07] text-accent transition-colors group-hover:bg-accent/[0.12]">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      Email
                    </span>
                    <span className="text-sm text-foreground">
                      {CONTACT_EMAIL}
                    </span>
                  </span>
                </a>
                <a
                  href="https://instagram.com/novelistjames"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="James Edeoghon (@novelistjames) on Instagram"
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-luxe"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/[0.07] text-accent transition-colors group-hover:bg-accent/[0.12]">
                    <Instagram className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      Instagram
                    </span>
                    <span className="text-sm text-foreground">
                      @novelistjames — follow for behind-the-book moments
                    </span>
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <form
              onSubmit={onSubmit}
              className="rounded-[2rem] border border-border bg-card p-6 shadow-luxe sm:p-8"
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
                className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_18px_40px_-12px_oklch(0.35_0.04_60/0.5)] sm:w-auto sm:px-10"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Send via email
              </button>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground/90">
                Sending opens your email app with the message pre-filled and
                addressed to James at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-accent underline underline-offset-2"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>

              {sent && (
                <div
                  role="status"
                  className="mt-6 flex items-start gap-3 rounded-2xl border border-accent/30 bg-accent/[0.07] p-4"
                >
                  <MailCheck
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-relaxed text-foreground/90">
                    Your email app should be opening now. If nothing happened,
                    write to James directly at{" "}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="font-medium text-accent underline underline-offset-2"
                    >
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </p>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
