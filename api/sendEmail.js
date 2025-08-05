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
      <div style="background: linear-gradient(135deg, #0a0f1c 0%, #1a2347 50%, #0a0f1c 100%); padding: 40px 0; font-family: 'Segoe UI', 'Roboto', Arial, sans-serif; color: #fff;">
        <div style="max-width: 600px; margin: 0 auto; background: rgba(255,255,255,0.05); border-radius: 24px; box-shadow: 0 8px 32px rgba(0,0,0,0.15); overflow: hidden;">
          <div style="background: linear-gradient(135deg, #00f5ff, #7c3aed); padding: 32px 0 16px 0; text-align: center;">
            <img src='https://ak-vision-systems.vercel.app/Images/AK-Vision%20Systems%20Logo.png' alt='AK Vision Logo' style='height: 60px; margin-bottom: 16px;'/>
            <h1 style="margin: 0; font-size: 2rem; font-weight: 700; background: linear-gradient(135deg, #00f5ff, #7c3aed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; color: #00f5ff;">AK Vision Contact Request</h1>
          </div>
          <div style="padding: 32px;">
            <h2 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 16px; color: #00f5ff;">Contact Details</h2>
            <table style="width: 100%; margin-bottom: 24px; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: 500;">Name:</td><td style="padding: 8px 0;">${
                sanitizedData.name
              }</td></tr>
              <tr><td style="padding: 8px 0; font-weight: 500;">Email:</td><td style="padding: 8px 0;">${
                sanitizedData.email
              }</td></tr>
              <tr><td style="padding: 8px 0; font-weight: 500;">Phone:</td><td style="padding: 8px 0;">${
                sanitizedData.phone || "Not provided"
              }</td></tr>
              <tr><td style="padding: 8px 0; font-weight: 500;">Company:</td><td style="padding: 8px 0;">${
                sanitizedData.company || "Not provided"
              }</td></tr>
              <tr><td style="padding: 8px 0; font-weight: 500;">Service:</td><td style="padding: 8px 0;">${
                sanitizedData.service
              }</td></tr>
              <tr><td style="padding: 8px 0; font-weight: 500;">Urgency:</td><td style="padding: 8px 0;">${
                sanitizedData.urgency || "Not specified"
              }</td></tr>
            </table>
            <h2 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 8px; color: #7c3aed;">Message</h2>
            <div style="background: rgba(124,58,237,0.08); border-radius: 12px; padding: 16px; color: #fff; margin-bottom: 24px;">${
              sanitizedData.message
            }</div>
            <div style="font-size: 0.95rem; color: #aaa; margin-bottom: 8px;">Client IP: ${clientIP}</div>
            <div style="font-size: 0.95rem; color: #aaa; margin-bottom: 8px;">Timestamp: ${new Date().toLocaleString()}</div>
            <div style="margin-top: 24px; text-align: center; color: #7c3aed; font-size: 1rem;">Please respond promptly.</div>
          </div>
        </div>
      </div>
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
