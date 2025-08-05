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
  res.setHeader('Access-Control-Allow-Origin', process.env.NODE_ENV === 'production' ? 'https://ak-vision-systems.vercel.app' : '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Get client IP for rate limiting
  const clientIP = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.connection?.remoteAddress || '127.0.0.1';
  
  // Apply rate limiting
  if (!rateLimit(clientIP)) {
    console.log(`Rate limit exceeded for IP: ${clientIP}`);
    return res.status(429).json({ error: "Too many requests. Please try again later." });
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
    urgency: sanitizeInput(urgency)
  };

  // Log the incoming request for debugging (sanitized)
  console.log('Received form submission:', { 
    name: sanitizedData.name, 
    email: sanitizedData.email, 
    service: sanitizedData.service, 
    urgency: sanitizedData.urgency,
    ip: clientIP 
  });

  // Validate required fields
  if (!sanitizedData.name || !sanitizedData.email || !sanitizedData.service || !sanitizedData.message) {
    console.log('Missing required fields:', { 
      name: !!sanitizedData.name, 
      email: !!sanitizedData.email, 
      service: !!sanitizedData.service, 
      message: !!sanitizedData.message 
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
    console.error('Missing environment variables: GMAIL_USER or GMAIL_PASS');
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
      rejectUnauthorized: true
    }
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: "thavamkajan2000@gmail.com",
    subject: `New Contact Request: ${sanitizedData.service}`,
    html: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AK Vision Email Preview</title>
  </head>
  <body style="margin: 0; padding: 0; background: #f6f8fc">
    <main style="display: flex; justify-content: center; align-items: center; min-height: 100vh; background: linear-gradient(135deg, #f6f8fc 0%, #ede7f6 100%);">
      <section style="max-width: 600px; width: 100%; background: #fff; border-radius: 24px; box-shadow: 0 8px 32px rgba(124,58,237,0.10); overflow: hidden; border: 1px solid #e0e7ef;">
        <header style="display: flex; align-items: center; gap: 18px; background: #fff; padding: 24px 32px 18px 32px; border-bottom: 1px solid #ede7f6;">
          <img src="https://ak-vision-systems.vercel.app/Images/AK-Vision%20Systems%20Logo.png" alt="AK Vision Logo" style="height: 48px; border-radius: 10px; box-shadow: 0 2px 8px rgba(124,58,237,0.10); background: #fff; padding: 6px;" />
          <h1 style="margin: 0; font-size: 2.1rem; font-weight: 900; color: #232a4d; letter-spacing: 1.1px;">AK Vision Contact Request</h1>
        </header>
        <section style="padding: 28px 32px 24px 32px;">
          <h2 style="font-size: 1.08rem; font-weight: 700; margin-bottom: 14px; color: #7c3aed; letter-spacing: 0.5px;">Contact Details</h2>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px 24px; margin-bottom: 20px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <!-- Simple User Icon -->
              <svg width="20" height="20" style="vertical-align: middle" viewBox="0 0 24 24" fill="#7c3aed"><circle cx="12" cy="8" r="4" /><rect x="6" y="16" width="12" height="4" rx="2" /></svg>
              <span style="font-weight: 600; color: #232a4d; font-size: 1rem">Name:</span>
              <span style="color: #232a4d; font-size: 1rem">${
                sanitizedData.name
              }</span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <!-- Simple Email Icon -->
              <svg width="20" height="20" style="vertical-align: middle" viewBox="0 0 24 24" fill="#7c3aed"><rect x="3" y="7" width="18" height="10" rx="2" /><polyline points="3,7 12,13 21,7" style="fill:none;stroke:#7c3aed;stroke-width:2"/></svg>
              <span style="font-weight: 600; color: #232a4d; font-size: 1rem">Email:</span>
              <span style="color: #232a4d; font-size: 1rem">${
                sanitizedData.email
              }</span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <!-- Simple Phone Icon -->
              <svg width="20" height="20" style="vertical-align: middle" viewBox="0 0 24 24" fill="#7c3aed"><rect x="7" y="2" width="10" height="20" rx="2" /><circle cx="12" cy="18" r="1.5" fill="#fff"/></svg>
              <span style="font-weight: 600; color: #232a4d; font-size: 1rem">Phone:</span>
              <span style="color: #232a4d; font-size: 1rem">${
                sanitizedData.phone || "Not provided"
              }</span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <!-- Simple Company Icon -->
              <svg width="20" height="20" style="vertical-align: middle" viewBox="0 0 24 24" fill="#7c3aed"><rect x="3" y="8" width="18" height="10" rx="2" /><rect x="7" y="4" width="10" height="4" rx="1"/></svg>
              <span style="font-weight: 600; color: #232a4d; font-size: 1rem">Company:</span>
              <span style="color: #232a4d; font-size: 1rem">${
                sanitizedData.company || "Not provided"
              }</span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <!-- Simple Service Icon -->
              <svg width="20" height="20" style="vertical-align: middle" viewBox="0 0 24 24" fill="#7c3aed"><rect x="4" y="10" width="16" height="4" rx="2" /><rect x="8" y="6" width="8" height="4" rx="1"/></svg>
              <span style="font-weight: 600; color: #232a4d; font-size: 1rem">Service:</span>
              <span style="color: #232a4d; font-size: 1rem">${
                sanitizedData.service
              }</span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <!-- Simple Urgency Icon -->
              <svg width="20" height="20" style="vertical-align: middle" viewBox="0 0 24 24" fill="#7c3aed"><circle cx="12" cy="12" r="10"/><rect x="11" y="7" width="2" height="6" rx="1" fill="#fff"/><rect x="11" y="15" width="2" height="2" rx="1" fill="#fff"/></svg>
              <span style="font-weight: 600; color: #232a4d; font-size: 1rem">Urgency:</span>
              <span style="color: #232a4d; font-size: 1rem">${
                sanitizedData.urgency || "Not specified"
              }</span>
            </div>
          </div>
          <h2 style="font-size: 1.08rem; font-weight: 700; margin-bottom: 8px; color: #7c3aed; letter-spacing: 0.5px;">Message</h2>
          <div style="background: linear-gradient(135deg, #ede7f6 0%, #e0f7fa 100%); border-radius: 10px; padding: 14px; color: #232a4d; margin-bottom: 10px; font-size: 1.03rem; font-weight: 600; box-shadow: 0 1px 6px rgba(124,58,237,0.04);">${
            sanitizedData.message
          }</div>
        </section>
        <footer style="display: flex; align-items: center; justify-content: space-between; background: #fff; padding: 16px 32px; color: #232a4d; font-size: 1rem; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top: 1px solid #ede7f6; box-shadow: 0 -1px 6px rgba(124,58,237,0.08);">
          <img src="https://ak-vision-systems.vercel.app/Images/AK-Vision%20Systems%20Logo.png" alt="AK Vision Logo" style="height: 36px; border-radius: 8px; box-shadow: 0 2px 8px rgba(124,58,237,0.10); background: #fff; padding: 4px;" />
          <div style="display: flex; flex-direction: column; align-items: flex-end;">
            <a href="https://akvisionsystems.com/" style="color: #7c3aed; text-decoration: none; font-weight: 700; font-size: 1rem; transition: color 0.2s; margin-bottom: 4px;" onmouseover="this.style.color='#232a4d'" onmouseout="this.style.color='#7c3aed'">akvisionsystems.com</a>
            <a href="mailto:akvisionsystems@gmail.com" style="color: #232a4d; text-decoration: none; font-weight: 600; font-size: 0.96rem; transition: color 0.2s;" onmouseover="this.style.color='#7c3aed'" onmouseout="this.style.color='#232a4d'">akvisionsystems@gmail.com</a>
          </div>
        </footer>
      </section>
    </main>
  </body>
</html>
`,
  };

  try {
    console.log('Attempting to send email...');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: "Failed to send email. Please try again later." });
  }
};
