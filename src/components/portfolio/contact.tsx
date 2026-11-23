"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, MailCheck, Send } from "lucide-react";
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

  const labelClass =
    "mb-1 block text-[10px] font-semibold uppercase tracking-[0.26em] text-muted-foreground";
  const inputClass =
    "w-full rounded-none border-0 border-b border-input bg-transparent px-0 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus-visible:border-foreground focus-visible:outline-none";

  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Direct lines */}
          <div>
            <Reveal>
              <h2 className="font-display font-light text-4xl leading-[1.08] tracking-[-0.01em] text-foreground sm:text-5xl">
                Write to <span className="italic">James</span>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-7 text-muted-foreground">
                For official enquiries regarding the book, interviews,
                features or speaking engagements — or simply to share what
                Leonard and Natasha&apos;s story meant to you — drop a line
                below or reach out directly.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-12 border-b border-border">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group flex items-center justify-between border-t border-border py-5"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-muted-foreground">
                    Email
                  </span>
                  <span className="flex items-center gap-3 text-sm text-foreground">
                    {CONTACT_EMAIL}
                    <ArrowRight
                      className="h-3.5 w-3.5 text-accent transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </a>
                <a
                  href="https://instagram.com/novelistjames"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="James Edeoghon (@novelistjames) on Instagram"
                  className="group flex items-center justify-between border-t border-border py-5"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-muted-foreground">
                    Instagram
                  </span>
                  <span className="flex items-center gap-3 text-sm text-foreground">
                    @novelistjames
                    <ArrowRight
                      className="h-3.5 w-3.5 text-accent transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                James replies personally — usually within a couple of days.
              </p>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.12}>
            <form
              onSubmit={onSubmit}
              aria-label="Contact form"
              className="border-t border-border pt-10"
            >
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-10">
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
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
                  <label htmlFor="contact-email" className={labelClass}>
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
              <div className="mt-8">
                <label htmlFor="contact-subject" className={labelClass}>
                  Subject
                </label>
                <div className="relative">
                  <select
                    id="contact-subject"
                    value={form.subject}
                    onChange={(e) => update("subject", e.target.value)}
                    className={`${inputClass} appearance-none pr-8`}
                  >
                    {subjects.map((s) => (
                      <option key={s} value={s} className="bg-card text-foreground">
                        {s}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="mt-8">
                <label htmlFor="contact-message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Write your message…"
                  className="min-h-[150px] w-full resize-none rounded-none border border-input bg-transparent p-4 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus-visible:border-foreground focus-visible:outline-none"
                />
              </div>
              <button
                type="submit"
                className="mt-10 inline-flex h-12 w-full items-center justify-center gap-3 bg-primary text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-foreground transition-colors duration-300 hover:bg-accent hover:text-accent-foreground sm:w-auto sm:px-12"
              >
                <Send className="h-3.5 w-3.5" aria-hidden="true" />
                Send via email
              </button>
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
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
                  className="mt-8 flex items-start gap-3 border border-accent/40 bg-accent/[0.06] p-4"
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
