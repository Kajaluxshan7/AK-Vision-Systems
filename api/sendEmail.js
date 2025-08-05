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
  
  const requests = rateLimitStore.get(ip).filter(time => time > windowStart);
  requests.push(now);
  rateLimitStore.set(ip, requests);
  
  return requests.length <= maxRequests;
}

function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  // Remove potential XSS and injection attempts
  return input
    .replace(/[<>]/g, '') // Remove HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
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
  return phoneRegex.test(phone.replace(/[\s\-()]/g, ''));
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

  // Improved HTML email template
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: "thavamkajan2000@gmail.com",
    subject: `New Contact Request: ${sanitizedData.service}`,
    html: `<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>AK Vision Contact Request</title>
  <style>
    body { margin:0; padding:0; background:#f6f8fc; font-family:Segoe UI,Arial,sans-serif; }
    .container { max-width:600px; margin:32px auto; background:#fff; border-radius:24px; box-shadow:0 8px 32px rgba(124,58,237,0.10); border:1px solid #e0e7ef; overflow:hidden; }
    .header { display:flex; align-items:center; gap:18px; background:#fff; padding:24px 32px 18px 32px; border-bottom:1px solid #ede7f6; }
    .header img { height:48px; border-radius:10px; box-shadow:0 2px 8px rgba(124,58,237,0.10); background:#fff; padding:6px; }
    .header h1 { margin:0; font-size:2.1rem; font-weight:900; color:#232a4d; letter-spacing:1.1px; }
    .section { padding:28px 32px 24px 32px; }
    .section h2 { font-size:1.08rem; font-weight:700; margin-bottom:14px; color:#7c3aed; letter-spacing:0.5px; }
    .details { display:grid; grid-template-columns:1fr 1fr; gap:16px 24px; margin-bottom:20px; }
    .detail { display:flex; align-items:center; gap:8px; min-width:0; }
    .detail span { font-weight:600; color:#232a4d; font-size:1rem; white-space:nowrap; }
    .detail .value { color:#232a4d; font-size:1rem; overflow:hidden; text-overflow:ellipsis; font-weight:400; }
    .message { background:linear-gradient(135deg,#ede7f6 0%,#e0f7fa 100%); border-radius:10px; padding:14px; color:#232a4d; margin-bottom:10px; font-size:1.03rem; font-weight:600; box-shadow:0 1px 6px rgba(124,58,237,0.04); word-break:break-word; }
    .footer { display:flex; align-items:center; justify-content:space-between; background:#fff; padding:16px 32px; color:#232a4d; font-size:1rem; border-bottom-left-radius:24px; border-bottom-right-radius:24px; border-top:1px solid #ede7f6; box-shadow:0 -1px 6px rgba(124,58,237,0.08); }
    .footer img { height:36px; border-radius:8px; box-shadow:0 2px 8px rgba(124,58,237,0.10); background:#fff; padding:4px; }
    .footer-links { display:flex; flex-direction:column; align-items:flex-end; }
    .footer-links a { color:#7c3aed; text-decoration:none; font-weight:700; font-size:1rem; transition:color 0.2s; margin-bottom:4px; }
    .footer-links a:last-child { color:#232a4d; font-weight:600; font-size:0.96rem; margin-bottom:0; }
    @media (max-width:600px) {
      .container { border-radius:12px; }
      .header, .section, .footer { padding:16px; }
      .details { grid-template-columns:1fr; gap:12px 0; }
    }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'>
      <img src='https://ak-vision-systems.vercel.app/Images/AK-Vision%20Systems%20Logo.png' alt='AK Vision Logo' />
      <h1>AK Vision Contact Request</h1>
    </div>
    <div class='section'>
      <h2>Contact Details</h2>
      <div class='details'>
        <div class='detail'><span>Name:</span> <span class='value'>${
          sanitizedData.name
        }</span></div>
        <div class='detail'><span>Email:</span> <span class='value'>${
          sanitizedData.email
        }</span></div>
        <div class='detail'><span>Phone:</span> <span class='value'>${
          sanitizedData.phone || "Not provided"
        }</span></div>
        <div class='detail'><span>Company:</span> <span class='value'>${
          sanitizedData.company || "Not provided"
        }</span></div>
        <div class='detail'><span>Service:</span> <span class='value'>${
          sanitizedData.service
        }</span></div>
        <div class='detail'><span>Urgency:</span> <span class='value'>${
          sanitizedData.urgency || "Not specified"
        }</span></div>
      </div>
      <h2>Message</h2>
      <div class='message'>${sanitizedData.message}</div>
    </div>
    <div class='footer'>
      <img src='https://ak-vision-systems.vercel.app/Images/AK-Vision%20Systems%20Logo.png' alt='AK Vision Logo' />
      <div class='footer-links'>
        <a href='https://akvisionsystems.com/'>akvisionsystems.com</a>
        <a href='mailto:akvisionsystems@gmail.com'>akvisionsystems@gmail.com</a>
      </div>
    </div>
  </div>
</body>
</html>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
