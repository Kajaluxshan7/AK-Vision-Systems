import nodemailer from "nodemailer";
import process from "process";

// Rate limiting storage (in-memory for simplicity, use Redis in production)
const rateLimitStore = new Map();

// Security middleware
function rateLimit(ip, windowMs = 15 * 60 * 1000, maxRequests = 5) {
  const now = Date.now();
  const windowStart = now - windowMs;

  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, []);
  }

  const requests = rateLimitStore.get(ip).filter((time) => time > windowStart);
  requests.push(now);
  rateLimitStore.set(ip, requests);

  return requests.length <= maxRequests;
}

function sanitizeInput(input) {
  if (typeof input !== "string") return "";
  // Remove potential XSS and injection attempts
  return input
    .replace(/[<>]/g, "") // Remove HTML tags
    .replace(/javascript:/gi, "") // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, "") // Remove event handlers
    .trim()
    .substring(0, 1000); // Limit length
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  if (!phone) return true; // Optional field
  const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-()]/g, ""));
}

export default async function handler(req, res) {
  // Set security headers
  res.setHeader(
    "Access-Control-Allow-Origin",
    process.env.NODE_ENV === "production"
      ? "https://ak-vision-systems.vercel.app"
      : "*"
  );
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "1; mode=block");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Get client IP for rate limiting
  const clientIP =
    req.headers["x-forwarded-for"] ||
    req.headers["x-real-ip"] ||
    req.connection?.remoteAddress ||
    "127.0.0.1";
  // Apply rate limiting
  if (!rateLimit(clientIP)) {
    console.log(`Rate limit exceeded for IP: ${clientIP}`);
    return res
      .status(429)
      .json({ error: "Too many requests. Please try again later." });
  }

  const { name, email, phone, company, service, message, urgency } = req.body;
  // Sanitize all inputs
  const sanitizedData = {
    name: sanitizeInput(name),
    email: sanitizeInput(email),
    phone: sanitizeInput(phone),
    company: sanitizeInput(company),
    service: sanitizeInput(service),
    message: sanitizeInput(message),
    urgency: sanitizeInput(urgency),
  };

  // Log the incoming request for debugging (sanitized)
  console.log("Received form submission:", {
    name: sanitizedData.name,
    email: sanitizedData.email,
    service: sanitizedData.service,
    urgency: sanitizedData.urgency,
    ip: clientIP,
  });

  // Validate required fields
  if (
    !sanitizedData.name ||
    !sanitizedData.email ||
    !sanitizedData.service ||
    !sanitizedData.message
  ) {
    console.log("Missing required fields:", {
      name: !!sanitizedData.name,
      email: !!sanitizedData.email,
      service: !!sanitizedData.service,
      message: !!sanitizedData.message,
    });
    return res.status(400).json({ error: "Required fields are missing" });
  }
  // Validate email format
  if (!validateEmail(sanitizedData.email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }
  // Validate phone if provided
  if (sanitizedData.phone && !validatePhone(sanitizedData.phone)) {
    return res.status(400).json({ error: "Invalid phone number format" });
  }
  // Check if environment variables are set
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    console.error("Missing environment variables: GMAIL_USER or GMAIL_PASS");
    return res.status(500).json({ error: "Server configuration error" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
    secure: true,
    tls: {
      rejectUnauthorized: true,
    },
  });

  // Modern HTML email template
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: "thavamkajan2000@gmail.com",
    subject: `New Contact Request: ${sanitizedData.service}`,
    html:
      `<!DOCTYPE html>` +
      `<html lang="en">` +
      `<head>` +
      `<meta charset="UTF-8">` +
      `<meta name="viewport" content="width=device-width, initial-scale=1.0">` +
      `<title>AK Vision Contact Request</title>` +
      `<style>` +
      `body {margin:0;padding:0;background:#f4f7fb;font-family:'Segoe UI',Arial,sans-serif;}` +
      `.main {max-width:640px;margin:48px auto;background:#fff;border-radius:32px;box-shadow:0 8px 32px rgba(124,58,237,0.10);border:1px solid #e0e7ef;overflow:hidden;}` +
      `.header {text-align:center;padding:40px 32px 24px 32px;background:#f7f5ff;border-bottom:1px solid #ede7f6;}` +
      `.header img {height:60px;border-radius:14px;box-shadow:0 2px 8px rgba(124,58,237,0.10);background:#fff;padding:10px;margin-bottom:18px;}` +
      `.header h1 {margin:0;font-size:2.3rem;font-weight:900;color:#232a4d;letter-spacing:1.2px;}` +
      `.section {padding:40px 32px 32px 32px;}` +
      `.section-title {font-size:1.18rem;font-weight:700;margin-bottom:24px;color:#7c3aed;letter-spacing:0.7px;text-align:left;}` +
      `.details-table {width:100%;border-collapse:separate;border-spacing:0 16px;margin-bottom:32px;}` +
      `.details-table td {background:#f6f8fc;border-radius:12px;padding:18px 20px;font-size:1.08rem;color:#232a4d;font-weight:500;vertical-align:top;border:none;}` +
      `.details-table .label {font-weight:700;color:#7c3aed;width:120px;font-size:1.08rem;letter-spacing:0.2px;}` +
      `.message-block {background:linear-gradient(135deg,#ede7f6 0%,#e0f7fa 100%);border-radius:16px;padding:24px;color:#232a4d;font-size:1.12rem;font-weight:600;box-shadow:0 1px 6px rgba(124,58,237,0.06);word-break:break-word;line-height:1.7;margin-bottom:18px;}` +
      `.footer {text-align:center;background:#f7f5ff;padding:28px 32px;color:#232a4d;font-size:1.02rem;border-top:1px solid #ede7f6;border-bottom-left-radius:32px;border-bottom-right-radius:32px;}` +
      `.footer img {height:44px;border-radius:12px;box-shadow:0 2px 8px rgba(124,58,237,0.10);background:#fff;padding:8px;margin-bottom:12px;}` +
      `.footer-links {margin-top:10px;}` +
      `.footer-links a {color:#7c3aed;text-decoration:none;font-weight:700;font-size:1.05rem;margin:0 8px;transition:color 0.2s;}` +
      `.footer-links a:last-child {color:#232a4d;font-weight:600;font-size:1.01rem;}` +
      `@media (max-width:700px) {` +
      `.main {border-radius:18px;}` +
      `.header, .section, .footer {padding:16px;}` +
      `.details-table td {padding:12px 10px;}` +
      `.message-block {padding:14px;}` +
      `}` +
      `</style>` +
      `</head>` +
      `<body>` +
      `<div class="main">` +
      `<div class="header">` +
      `<img src="https://ak-vision-systems.vercel.app/Images/AK-Vision%20Systems%20Logo.png" alt="AK Vision Logo" />` +
      `<h1>AK Vision Contact Request</h1>` +
      `</div>` +
      `<div class="section">` +
      `<div class="section-title">Contact Details</div>` +
      `<table class="details-table">` +
      `<tr><td class="label">Name</td><td>${sanitizedData.name}</td></tr>` +
      `<tr><td class="label">Email</td><td>${sanitizedData.email}</td></tr>` +
      `<tr><td class="label">Phone</td><td>${sanitizedData.phone || "Not provided"}</td></tr>` +
      `<tr><td class="label">Company</td><td>${sanitizedData.company || "Not provided"}</td></tr>` +
      `<tr><td class="label">Service</td><td>${sanitizedData.service}</td></tr>` +
      `<tr><td class="label">Urgency</td><td>${sanitizedData.urgency || "Not specified"}</td></tr>` +
      `</table>` +
      `<div class="section-title">Message</div>` +
      `<div class="message-block">${sanitizedData.message}</div>` +
      `</div>` +
      `<div class="footer">` +
      `<img src="https://ak-vision-systems.vercel.app/Images/AK-Vision%20Systems%20Logo.png" alt="AK Vision Logo" />` +
      `<div class="footer-links">` +
      `<a href="https://akvisionsystems.com/">akvisionsystems.com</a>` +
      `<a href="mailto:akvisionsystems@gmail.com">akvisionsystems@gmail.com</a>` +
      `</div>` +
      `</div>` +
      `</div>` +
      `</body>` +
      `</html>`
  };
