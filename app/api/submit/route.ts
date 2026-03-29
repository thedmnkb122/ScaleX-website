import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, email, phone, business } = body;

  if (!firstName || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    // 1. Notify you of the new lead
    const notify = await resend.emails.send({
      from: "ScaleX Bot <onboarding@resend.dev>",
      to: "scalexmarketinggroups@gmail.com",
      subject: `🔥 New Strategy Call Request — ${firstName} ${lastName}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;background:#0f172a;color:#f1f5f9;padding:32px;border-radius:16px;">
          <h2 style="color:#3b82f6;margin-bottom:24px;">New Lead — Strategy Call Request</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#94a3b8;width:140px;">Name</td><td style="color:#fff;font-weight:600;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding:8px 0;color:#94a3b8;">Email</td><td style="color:#fff;">${email}</td></tr>
            <tr><td style="padding:8px 0;color:#94a3b8;">Phone</td><td style="color:#fff;">${phone || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#94a3b8;">Business</td><td style="color:#fff;">${business || "—"}</td></tr>
          </table>
          <p style="margin-top:24px;color:#64748b;font-size:13px;">An automated reply has been sent to the lead.</p>
        </div>
      `,
    });

    console.log("Notify result:", JSON.stringify(notify));

    // 2. Auto-reply to the applicant
    const reply = await resend.emails.send({
      from: "ScaleX Marketing <onboarding@resend.dev>",
      to: email,
      subject: `Quick question, ${firstName} 👋`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;padding:40px 32px;border-radius:16px;">
          <div style="margin-bottom:28px;">
            <span style="font-size:22px;font-weight:800;letter-spacing:-0.03em;color:#0f172a;">Scale<span style="color:#2563eb;">X</span> Marketing</span>
          </div>

          <p style="font-size:16px;color:#0f172a;line-height:1.7;">Hey ${firstName},</p>

          <p style="font-size:16px;color:#334155;line-height:1.7;">
            Thanks for reaching out — we just received your request and we're excited to connect with you${business ? ` about <strong>${business}</strong>` : ""}.
          </p>

          <p style="font-size:16px;color:#334155;line-height:1.7;">
            We'd love to jump on a quick <strong>Google Meet</strong> to walk you through exactly how we'd approach your paid ads strategy — no pitch, just real insight tailored to your business.
          </p>

          <p style="font-size:16px;color:#334155;line-height:1.7;">
            <strong>When works best for you?</strong> A few options that usually work well:
          </p>

          <ul style="color:#334155;font-size:15px;line-height:2;padding-left:20px;">
            <li>Weekdays between 10am – 6pm</li>
            <li>Evenings after 6pm</li>
            <li>Weekends (just let us know)</li>
          </ul>

          <p style="font-size:16px;color:#334155;line-height:1.7;">
            Just reply to this email with a couple of times that work for you and we'll send over a Google Meet link straight away.
          </p>

          <div style="margin:32px 0;">
            <a href="mailto:scalexmarketinggroups@gmail.com" style="display:inline-block;padding:14px 28px;background:#2563eb;color:#fff;font-weight:700;font-size:15px;border-radius:10px;text-decoration:none;">
              Reply With Your Availability →
            </a>
          </div>

          <p style="font-size:15px;color:#334155;line-height:1.7;">Looking forward to speaking with you,</p>
          <p style="font-size:15px;font-weight:700;color:#0f172a;">The ScaleX Marketing Team</p>

          <hr style="border:none;border-top:1px solid #e2e8f0;margin:28px 0;" />
          <p style="font-size:12px;color:#94a3b8;">ScaleX Marketing · scalexmarketinggroups@gmail.com</p>
        </div>
      `,
    });

    console.log("Reply result:", JSON.stringify(reply));
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
