// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  // Gmail SMTP configuration using App Password (make sure it's in your .env.local)
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.CONTACT_EMAIL,      // e.g. vantyx.ai@gmail.com
      pass: process.env.CONTACT_PASSWORD,   // app-specific password
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.CONTACT_EMAIL,
    subject: `New Contact Form Message from ${name}`,
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ message: 'Email failed to send' });
  }
}