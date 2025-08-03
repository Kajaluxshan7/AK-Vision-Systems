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
    text: `You have received a new contact request:

Name: ${sanitizedData.name}
Email: ${sanitizedData.email}
Phone: ${sanitizedData.phone || "Not provided"}
Company: ${sanitizedData.company || "Not provided"}
Service: ${sanitizedData.service}
Urgency: ${sanitizedData.urgency || "Not specified"}

Message:
${sanitizedData.message}

Client IP: ${clientIP}
Timestamp: ${new Date().toISOString()}

Please respond promptly.`,
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
