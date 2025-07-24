import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3001;

// Middleware with more specific CORS settings
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175', 'http://localhost:5176'], 
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// Simple test endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working' });
});

// Email endpoint
app.post('/api/sendEmail', async (req, res) => {
  console.log('Received email request:', req.body);
  
  const { name, email, phone, company, service, message, urgency } = req.body;

  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: "Required fields are missing" });
  }

  try {
    // Create transporter object
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Verify the transporter configuration
    await transporter.verify();
    console.log('Transporter verified successfully');

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "thavamkajan2000@gmail.com",
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

    console.log('Attempting to send email to:', mailOptions.to);
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully, ID:', info.messageId);
    
    res.status(200).json({ 
      success: true, 
      message: "Email sent successfully"
    });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ 
      error: error.message,
      stack: error.stack
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    error: 'Server error occurred',
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack
  });
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
