// Test script to verify email functionality
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import process from 'process';

// Load environment variables
dotenv.config();

async function testEmail() {
  console.log('Testing email configuration...');
  
  // Check if environment variables are set
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    console.error('Missing environment variables: GMAIL_USER or GMAIL_PASS');
    return;
  }

  console.log('Gmail User:', process.env.GMAIL_USER);
  console.log('Gmail Pass:', process.env.GMAIL_PASS ? '***SET***' : 'NOT SET');

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: "thavamkajan2000@gmail.com",
    subject: "Test Email - AK Vision Contact Form",
    text: `This is a test email to verify the email functionality is working.

Test data:
Name: Test User
Email: test@example.com
Service: CCTV & Security Systems
Message: This is a test message.

If you receive this email, the configuration is working correctly!`,
  };

  try {
    console.log('Attempting to send test email...');
    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', result.messageId);
  } catch (error) {
    console.error('❌ Error sending test email:', error.message);
  }
}

testEmail();
