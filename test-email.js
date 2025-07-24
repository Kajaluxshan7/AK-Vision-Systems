import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function testEmail() {
  console.log('Testing email configuration...');
  console.log('GMAIL_USER:', process.env.GMAIL_USER);
  console.log('GMAIL_PASS length:', process.env.GMAIL_PASS ? process.env.GMAIL_PASS.length : 'not set');

  try {
    // Create a test account first if needed
    const testAccount = await nodemailer.createTestAccount();
    console.log('Created test account:', testAccount.user);

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    console.log('Transporter created successfully');

    // Verify the transporter configuration
    const verification = await transporter.verify();
    console.log('Transporter verification:', verification);

    // Send a test email
    const info = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "thavamkajan2000@gmail.com",
      subject: "Test Email",
      text: "This is a test email from the nodemailer test script.",
    });

    console.log('Email sent successfully:', info.messageId);
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error testing email:', error);
  }
}

testEmail();
