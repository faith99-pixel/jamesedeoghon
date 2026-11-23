import { NextResponse } from "next/server";
import { db } from "@/lib/db";

const AUTHOR_EMAIL = "jamesedeoghon@gmail.com";

/**
 * Emails James whenever someone new joins the letter list.
 * Uses Resend (https://resend.com) — free tier, one API key, no app password.
 * Set RESEND_API_KEY in the environment to enable; without it, signups are
 * still stored and viewable on the private /letters-admin page.
 */
async function notifyJames(email: string, total: number) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Letter List <onboarding@resend.dev>",
      to: [AUTHOR_EMAIL],
      subject: `New newsletter subscriber — ${email}`,
      text:
        `${email} just joined the letter list on the website.\n\n` +
        `Total subscribers so far: ${total}\n\n` +
        `View the full list: /letters-admin`,
    }),
    signal: AbortSignal.timeout(5000),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email =
      typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    await db.newsletterSignup.upsert({
      where: { email },
      update: {},
      create: { email },
    });

    const total = await db.newsletterSignup.count();

    try {
      await notifyJames(email, total);
    } catch (error) {
      // A failed notification must never fail the signup itself
      console.error("Subscriber notification failed:", error);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
