import { NextResponse } from "next/server";
import { Resend } from "resend";
import { businessInfo } from "@/lib/config";
import { services } from "@/lib/services-data";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD = 5000;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string): string {
  return `<tr>
    <td style="padding:8px 14px;font-weight:600;color:#475569;vertical-align:top;white-space:nowrap;">${label}</td>
    <td style="padding:8px 14px;color:#1e293b;">${escapeHtml(value)}</td>
  </tr>`;
}

export async function POST(request: Request) {
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid form submission." }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields; humans never see this one.
  if (String(data.get("website") ?? "").trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = String(data.get("name") ?? "").trim().slice(0, MAX_FIELD);
  const company = String(data.get("company") ?? "").trim().slice(0, MAX_FIELD);
  const email = String(data.get("email") ?? "").trim().slice(0, MAX_FIELD);
  const phone = String(data.get("phone") ?? "").trim().slice(0, MAX_FIELD);
  const serviceSlug = String(data.get("service") ?? "").trim();
  const message = String(data.get("message") ?? "").trim().slice(0, MAX_FIELD);

  if (!name || !email || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please fill in your name, a valid email and a message." },
      { status: 400 }
    );
  }

  const serviceTitle =
    serviceSlug === "other"
      ? "Other / Not sure"
      : (services.find((s) => s.slug === serviceSlug)?.title ?? "Not specified");

  const { RESEND_API_KEY, CONTACT_TO, RESEND_FROM } = process.env;

  if (!RESEND_API_KEY) {
    console.error("[api/contact] Missing RESEND_API_KEY env var.");
    return NextResponse.json(
      { ok: false, error: "The contact form is not configured yet. Please email or call us directly." },
      { status: 500 }
    );
  }

  const to = CONTACT_TO || businessInfo.email;
  // Resend requires a verified domain to send from your own address.
  // onboarding@resend.dev works for testing; set RESEND_FROM once
  // infinitytechiez.com is verified in the Resend dashboard.
  const from = RESEND_FROM || "onboarding@resend.dev";

  try {
    const resend = new Resend(RESEND_API_KEY);

    const html = `
      <h2 style="font-family:Arial,sans-serif;color:#1e293b;">New contact form submission</h2>
      <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse;">
        ${row("Name", name)}
        ${row("Business / Company", company || "—")}
        ${row("Email", email)}
        ${row("Phone", phone || "—")}
        ${row("Service of interest", serviceTitle)}
        ${row("Message", "")}
      </table>
      <p style="font-family:Arial,sans-serif;font-size:14px;color:#1e293b;white-space:pre-wrap;margin:8px 14px 0;">${escapeHtml(message)}</p>
      <p style="font-family:Arial,sans-serif;font-size:12px;color:#94a3b8;margin-top:20px;">
        Sent from the contact form on ${escapeHtml(businessInfo.brandName)} — ${escapeHtml(businessInfo.siteUrl)}
      </p>`;

    const text = [
      "New contact form submission",
      "",
      `Name: ${name}`,
      `Business / Company: ${company || "—"}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Service of interest: ${serviceTitle}`,
      "",
      "Message:",
      message,
      "",
      `Sent from ${businessInfo.brandName} — ${businessInfo.siteUrl}`,
    ].join("\n");

    const { error } = await resend.emails.send({
      from: `${businessInfo.brandName} Website <${from}>`,
      to,
      replyTo: email,
      subject: `Contact form: ${name} — ${serviceTitle}`,
      text,
      html,
    });

    if (error) {
      console.error("[api/contact] Resend rejected the email:", error);
      return NextResponse.json(
        { ok: false, error: "Could not send your message right now. Please try again or call us." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[api/contact] Failed to send email:", err);
    return NextResponse.json(
      { ok: false, error: "Could not send your message right now. Please try again or call us." },
      { status: 500 }
    );
  }
}
