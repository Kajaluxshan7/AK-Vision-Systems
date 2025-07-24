import nodemailer from "nodemailer";

// Ensure process is available (for environments where it might not be injected automatically)
import process from "process";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, company, service, message, urgency } = req.body;

  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: "Required fields are missing" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: "thavamkajan2000@gmail.com", // Replace with your email
    subject: `New Contact Request: ${service}`,
    text: `You have received a new contact request:

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Company: ${company || "Not provided"}
Service: ${service}
Urgency: ${urgency || "Not specified"}

Message:
${message}

Please respond promptly.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
