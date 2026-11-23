import { NextResponse } from "next/server";
import { db } from "@/lib/db";

/**
 * Private endpoint for the /letters-admin page.
 * Passcode defaults to "natasha2026" — override it by setting ADMIN_PASSCODE
 * in the environment.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    const passcode =
      typeof body?.passcode === "string" ? body.passcode : "";

    const expected = process.env.ADMIN_PASSCODE ?? "natasha2026";

    if (!passcode || passcode !== expected) {
      return NextResponse.json(
        { error: "Incorrect passcode." },
        { status: 401 }
      );
    }

    const subscribers = await db.newsletterSignup.findMany({
      orderBy: { createdAt: "desc" },
      select: { email: true, createdAt: true },
    });

    return NextResponse.json({ subscribers });
  } catch (error) {
    console.error("Subscriber list error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
