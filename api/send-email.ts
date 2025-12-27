import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const { full_name, email, company_name, message } = req.body;

    // Validate required fields
    if (!full_name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Get SMTP configuration from environment variables
    const smtp_host = process.env.SMTP_HOST;
    const smtp_port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
    const smtp_user = process.env.SMTP_USER;
    const smtp_password = process.env.SMTP_PASSWORD;
    const recipient_email = process.env.RECIPIENT_EMAIL || "contact@sankalptextile.com";

    if (!smtp_host || !smtp_user || !smtp_password) {
      console.error("Missing SMTP configuration");
      return res.status(500).json({ error: "Server configuration error" });
    }

    // Create transporter for Titan Mail SMTP
    const transporter = nodemailer.createTransport({
      host: smtp_host,
      port: smtp_port,
      secure: smtp_port === 465, // true for 465, false for other ports
      auth: {
        user: smtp_user,
        pass: smtp_password,
      },
    });

    // Email content
    const mail_options = {
      from: `"${full_name}" <${smtp_user}>`,
      replyTo: email,
      to: recipient_email,
      subject: "Inquiry — Sankalp Textile (Leno Gauze)",
      text: [
        `Name: ${full_name}`,
        `Email: ${email}`,
        `Company: ${company_name || "-"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Inquiry</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${full_name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Company:</strong> ${company_name || "-"}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mail_options);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      error: "Failed to send email",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}

