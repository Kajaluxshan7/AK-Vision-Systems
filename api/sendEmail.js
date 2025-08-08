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

  // Modern HTML email template with enhanced UI
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: "akvisionsystems@gmail.com",
    subject: `New Contact Request: ${sanitizedData.service}`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AK Vision Contact Request</title>
  <style>
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      padding: 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
    }
    .email-container {
      max-width: 680px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
      overflow: hidden;
      border: 1px solid #e8ecf4;
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px 32px;
      text-align: center;
      color: white;
    }
    .header img {
      height: 70px;
      background: white;
      padding: 12px;
      border-radius: 16px;
      margin-bottom: 20px;
      box-shadow: 0 8px 24px rgba(255, 255, 255, 0.2);
    }
    .header h1 {
      margin: 0;
      font-size: 2.4rem;
      font-weight: 700;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      letter-spacing: -0.5px;
    }
    .header p {
      margin: 8px 0 0 0;
      font-size: 1.1rem;
      opacity: 0.9;
      font-weight: 300;
    }
    .content {
      padding: 48px 32px;
    }
    .section {
      margin-bottom: 40px;
    }
    .section-header {
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 2px solid #f0f4f8;
    }
    .section-icon {
      width: 32px;
      height: 32px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 16px;
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    }
    .section-title {
      font-size: 1.4rem;
      font-weight: 600;
      color: #2d3748;
      margin: 0;
      letter-spacing: -0.3px;
    }
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      margin-bottom: 32px;
    }
    .contact-item {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 24px;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    .contact-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    .contact-item-header {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
    }
    .contact-icon {
      width: 24px;
      height: 24px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
      flex-shrink: 0;
    }
    .contact-label {
      font-size: 0.95rem;
      font-weight: 600;
      color: #4a5568;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .contact-value {
      font-size: 1.1rem;
      color: #2d3748;
      font-weight: 500;
      word-break: break-word;
      line-height: 1.4;
    }
    .contact-value.empty {
      color: #a0aec0;
      font-style: italic;
    }
    .message-container {
      background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 32px;
      position: relative;
      overflow: hidden;
    }
    .message-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    .message-content {
      font-size: 1.1rem;
      color: #2d3748;
      line-height: 1.7;
      margin: 0;
      white-space: pre-wrap;
      word-break: break-word;
    }
    .footer {
      background: #f8fafc;
      padding: 32px;
      text-align: center;
      border-top: 1px solid #e2e8f0;
    }
    .footer img {
      height: 50px;
      background: white;
      padding: 8px;
      border-radius: 12px;
      margin-bottom: 16px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    .footer-links {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 24px;
      flex-wrap: wrap;
    }
    .footer-link {
      display: flex;
      align-items: center;
      color: #667eea;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      transition: all 0.3s ease;
      padding: 8px 16px;
      border-radius: 8px;
    }
    .footer-link:hover {
      background: #667eea;
      color: white;
      transform: translateY(-2px);
    }
    .footer-link svg {
      width: 18px;
      height: 18px;
      margin-right: 8px;
    }
    .urgency-badge {
      display: inline-flex;
      align-items: center;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .urgency-high {
      background: #fed7d7;
      color: #c53030;
    }
    .urgency-medium {
      background: #feebc8;
      color: #dd6b20;
    }
    .urgency-low {
      background: #c6f6d5;
      color: #38a169;
    }
    .urgency-default {
      background: #e2e8f0;
      color: #4a5568;
    }
    @media (max-width: 640px) {
      .email-container {
        margin: 20px;
        border-radius: 16px;
      }
      .header, .content, .footer {
        padding: 24px 20px;
      }
      .contact-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }
      .footer-links {
        flex-direction: column;
        gap: 16px;
      }
      .header h1 {
        font-size: 2rem;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <img src="https://www.akvisionsystems.com/Images/AK-Vision%20Systems%20Logo.png" alt="AK Vision Systems Logo" />
      <h1>New Contact Request</h1>
      <p>A potential client has reached out to AK Vision Systems</p>
    </div>
    
    <div class="content">
      <div class="section">
        <div class="section-header">
          <div class="section-icon">
            <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <h2 class="section-title">Contact Information</h2>
        </div>
        
        <div class="contact-grid">
          <div class="contact-item">
            <div class="contact-item-header">
              <div class="contact-icon">
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <span class="contact-label">Full Name</span>
            </div>
            <div class="contact-value">${sanitizedData.name}</div>
          </div>
          
          <div class="contact-item">
            <div class="contact-item-header">
              <div class="contact-icon">
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <span class="contact-label">Email Address</span>
            </div>
            <div class="contact-value">${sanitizedData.email}</div>
          </div>
          
          <div class="contact-item">
            <div class="contact-item-header">
              <div class="contact-icon">
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <span class="contact-label">Phone Number</span>
            </div>
            <div class="contact-value ${sanitizedData.phone ? "" : "empty"}">${
      sanitizedData.phone || "Not provided"
    }</div>
          </div>
          
          <div class="contact-item">
            <div class="contact-item-header">
              <div class="contact-icon">
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                </svg>
              </div>
              <span class="contact-label">Company</span>
            </div>
            <div class="contact-value ${
              sanitizedData.company ? "" : "empty"
            }">${sanitizedData.company || "Not provided"}</div>
          </div>
          
          <div class="contact-item">
            <div class="contact-item-header">
              <div class="contact-icon">
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <span class="contact-label">Service</span>
            </div>
            <div class="contact-value">${sanitizedData.service}</div>
          </div>
          
          <div class="contact-item">
            <div class="contact-item-header">
              <div class="contact-icon">
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <span class="contact-label">Priority Level</span>
            </div>
            <div class="contact-value">
              <span class="urgency-badge ${
                sanitizedData.urgency === "High"
                  ? "urgency-high"
                  : sanitizedData.urgency === "Medium"
                  ? "urgency-medium"
                  : sanitizedData.urgency === "Low"
                  ? "urgency-low"
                  : "urgency-default"
              }">${sanitizedData.urgency || "Not specified"}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="section">
        <div class="section-header">
          <div class="section-icon">
            <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </svg>
          </div>
          <h2 class="section-title">Message Details</h2>
        </div>
        
        <div class="message-container">
          <p class="message-content">${sanitizedData.message}</p>
        </div>
      </div>
    </div>
    
    <div class="footer">
      <img src="https://www.akvisionsystems.com/Images/AK-Vision%20Systems%20Logo.png" alt="AK Vision Systems Logo" />
      <div class="footer-links">
        <a href="https://akvisionsystems.com/" class="footer-link">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          Visit Website
        </a>
        <a href="mailto:akvisionsystems@gmail.com" class="footer-link">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          Send Email
        </a>
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
