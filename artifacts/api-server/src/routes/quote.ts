import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";

const router: IRouter = Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

router.post("/quote", async (req, res) => {
  const { name, phone, email, serviceType, location, message } = req.body;

  if (!name || !phone || !email || !serviceType || !location) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  const serviceLabels: Record<string, string> = {
    drilling: "Borehole Drilling",
    installation: "Pump Installation",
    repairs: "Repairs & Maintenance",
    testing: "Borehole Testing",
    solar: "Solar Pump System",
    tanks: "Water Tank Supply",
  };

  const serviceLabel = serviceLabels[serviceType] ?? serviceType;

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #0d2b4e; padding: 24px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px;">New Quote Request</h1>
        <p style="color: #7ecff5; margin: 8px 0 0;">JJ Holmes Borehole Pumps</p>
      </div>
      <div style="padding: 32px; background: #ffffff;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; width: 40%; font-weight: bold;">Full Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-weight: bold;">Phone Number</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-weight: bold;">Email Address</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-weight: bold;">Service Required</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111;">${serviceLabel}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-weight: bold;">Location / Area</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111;">${location}</td>
          </tr>
          ${message ? `
          <tr>
            <td style="padding: 10px 0; color: #666; font-weight: bold; vertical-align: top;">Additional Details</td>
            <td style="padding: 10px 0; color: #111;">${message}</td>
          </tr>` : ""}
        </table>
      </div>
      <div style="background: #f7f9fc; padding: 16px 32px; text-align: center; color: #999; font-size: 12px;">
        Sent automatically from the JJ Holmes Borehole Pumps website quote form.
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"JJ Holmes Borehole Pumps" <${process.env.SMTP_USER}>`,
      to: ["holmesjj@mweb.co.za", "poes5503@gmail.com"],
      replyTo: email,
      subject: `New Quote Request from ${name} — ${serviceLabel}`,
      html: htmlBody,
    });

    req.log.info({ name, serviceType, location }, "Quote email sent");
    res.json({ success: true });
  } catch (err) {
    req.log.error({ err }, "Failed to send quote email");
    res.status(500).json({ error: "Failed to send email. Please try again." });
  }
});

export default router;
