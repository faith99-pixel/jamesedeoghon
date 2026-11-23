"use client";

import { useState } from "react";
import { Check, Copy, Download, Loader2, Lock } from "lucide-react";

type Subscriber = {
  email: string;
  createdAt: string;
};

export function SubscribersAdmin() {
  const [passcode, setPasscode] = useState("");
  const [subscribers, setSubscribers] = useState<Subscriber[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  async function unlock(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/newsletter/list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Could not open the list.");
      } else {
        setSubscribers(data.subscribers);
      }
    } catch {
      setError("Connection problem. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function downloadCsv() {
    if (!subscribers?.length) return;
    const rows = [
      "Email,Subscribed at",
      ...subscribers.map(
        (s) => `${s.email},${new Date(s.createdAt).toISOString()}`
      ),
    ];
    const blob = new Blob([rows.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "letter-list.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  async function copyAll() {
    if (!subscribers?.length) return;
    try {
      await navigator.clipboard.writeText(
        subscribers.map((s) => s.email).join(", ")
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — silently ignore
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-6 py-16 text-[oklch(0.93_0.012_84)]">
      <div className="w-full max-w-lg">
        <p className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-[oklch(0.72_0.1_75)]">
          <span
            aria-hidden="true"
            className="h-px w-10 bg-[oklch(0.72_0.1_75/0.5)]"
          />
          Letter list
        </p>
        <h1 className="mt-6 font-display text-4xl font-light tracking-[-0.01em]">
          Subscribers
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[oklch(0.93_0.012_84/0.55)]">
          Everyone who has signed up for updates on the website. Newest first.
        </p>

        {!subscribers ? (
          <form onSubmit={unlock} className="mt-10">
            <label htmlFor="admin-passcode" className="sr-only">
              Passcode
            </label>
            <input
              id="admin-passcode"
              type="password"
              required
              autoFocus
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="Enter passcode"
              className="h-11 w-full border-0 border-b border-[oklch(0.93_0.012_84/0.3)] bg-transparent px-0 text-sm text-[oklch(0.93_0.012_84)] placeholder:text-[oklch(0.93_0.012_84/0.4)] focus-visible:border-[oklch(0.72_0.1_75)] focus-visible:outline-none"
            />
            {error && (
              <p className="mt-4 text-sm text-[oklch(0.72_0.1_75)]">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="mt-8 inline-flex h-11 items-center justify-center gap-2.5 bg-[oklch(0.93_0.012_84)] px-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink transition-colors duration-300 hover:bg-[oklch(0.72_0.1_75)] disabled:opacity-70"
            >
              {loading ? (
                <Loader2
                  className="h-3.5 w-3.5 animate-spin"
                  aria-hidden="true"
                />
              ) : (
                <Lock className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              {loading ? "Opening…" : "Open the list"}
            </button>
          </form>
        ) : (
          <>
            <div className="mt-10 flex items-baseline justify-between border-b border-[oklch(0.93_0.012_84/0.15)] pb-4">
              <p className="text-sm text-[oklch(0.93_0.012_84/0.6)]">
                {subscribers.length}{" "}
                {subscribers.length === 1 ? "subscriber" : "subscribers"}
              </p>
              {subscribers.length > 0 && (
                <div className="flex items-center gap-5">
                  <button
                    type="button"
                    onClick={copyAll}
                    className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[oklch(0.93_0.012_84/0.6)] transition-colors hover:text-[oklch(0.93_0.012_84)]"
                  >
                    {copied ? (
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    )}
                    {copied ? "Copied" : "Copy all"}
                  </button>
                  <button
                    type="button"
                    onClick={downloadCsv}
                    className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[oklch(0.93_0.012_84/0.6)] transition-colors hover:text-[oklch(0.93_0.012_84)]"
                  >
                    <Download className="h-3.5 w-3.5" aria-hidden="true" />
                    CSV
                  </button>
                </div>
              )}
            </div>

            {subscribers.length === 0 ? (
              <p className="mt-10 text-sm italic text-[oklch(0.93_0.012_84/0.5)]">
                No subscribers yet — they will appear here as people sign up.
              </p>
            ) : (
              <ul className="mt-2 max-h-[60vh] divide-y divide-[oklch(0.93_0.012_84/0.12)] overflow-y-auto">
                {subscribers.map((s) => (
                  <li
                    key={s.email}
                    className="flex items-baseline justify-between gap-4 py-3.5"
                  >
                    <span className="truncate text-sm text-[oklch(0.93_0.012_84)]">
                      {s.email}
                    </span>
                    <span className="shrink-0 text-[10px] uppercase tracking-[0.18em] text-[oklch(0.93_0.012_84/0.45)]">
                      {new Date(s.createdAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </main>
  );
}
