import nodemailer from "nodemailer";
import process from "process";

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, company, service, message, urgency } = req.body;

  // Log the incoming request for debugging
  console.log('Received form submission:', { name, email, service, urgency });

  if (!name || !email || !service || !message) {
    console.log('Missing required fields:', { name: !!name, email: !!email, service: !!service, message: !!message });
    return res.status(400).json({ error: "Required fields are missing" });
  }

  // Check if environment variables are set
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    console.error('Missing environment variables: GMAIL_USER or GMAIL_PASS');
    return res.status(500).json({ error: "Server configuration error" });
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
    console.log('Attempting to send email...');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: `Failed to send email: ${error.message}` });
  }
};
