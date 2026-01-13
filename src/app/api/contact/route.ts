import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  // Production wiring options:
  // - SendGrid/Mailgun email
  // - Notion/Slack webhook
  // - CRM (HubSpot) API
  // For now: acknowledge to keep template fully functional.
  return NextResponse.json({ ok: true });
}
