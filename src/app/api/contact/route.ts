import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, service, message } = await request.json();

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Map service values to display names
    const serviceDisplayNames: { [key: string]: string } = {
      'full-stack': 'Full-Stack Development',
      'mobile': 'Mobile App Development',
      'ai': 'AI Integration',
      'cloud': 'Cloud Solutions',
      'uiux': 'UI/UX Design',
      'devops': 'DevOps & Automation',
      'consulting': 'Consulting'
    };

    const serviceDisplayName = serviceDisplayNames[service] || service;

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // App password, not regular password
      },
    });

    // Email to Aetherion (notification)
    const notificationEmail = {
      from: process.env.GMAIL_USER,
      to: 'aetherion925@gmail.com', // Your receiving email
      subject: `New Contact Form Submission - ${serviceDisplayName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 20px; padding: 20px; background: linear-gradient(135deg, #3b4476, #c9cff6); border-radius: 10px;">
            <h1 style="color: white; margin: 0; font-size: 1.8em;">Aetherion</h1>
          </div>
          <h2 style="color: #3b4476; border-bottom: 2px solid #c9cff6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #3b4476; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Service:</strong> ${serviceDisplayName}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3 style="color: #3b4476; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #3b4476; color: white; border-radius: 8px;">
            <p style="margin: 0; text-align: center;">
              Reply to: <a href="mailto:${email}" style="color: #c9cff6;">${email}</a>
            </p>
          </div>
        </div>
      `,
    };

    // Auto-reply email to sender
    const autoReplyEmail = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Aetherion - We\'ll be in touch soon!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #3b4476, #c9cff6); padding: 40px 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 2.5em; font-weight: bold;">Aetherion</h1>
            <p style="color: #c9cff6; margin: 10px 0 0 0; font-size: 1.1em;">Premium Software Solutions</p>
          </div>
          
          <!-- Main Content -->
          <div style="background-color: white; padding: 40px 30px;">
            <h2 style="color: #3b4476; margin-top: 0; font-size: 1.8em;">Hello ${name}!</h2>
            
            <p style="color: #666; line-height: 1.6; font-size: 1.1em;">
              Thank you for reaching out to Aetherion regarding <strong>${serviceDisplayName}</strong>. 
              We've received your message and are excited about the possibility of working together!
            </p>
            
            <div style="background-color: #f8f9fa; padding: 25px; border-radius: 10px; margin: 25px 0; border-left: 4px solid #3b4476;">
              <h3 style="color: #3b4476; margin-top: 0;">What happens next?</h3>
              <ul style="color: #666; line-height: 1.8; padding-left: 20px;">
                <li>Our team will review your project details within <strong>24 hours</strong></li>
                <li>We'll prepare a personalized proposal tailored to your needs</li>
                <li>Schedule a discovery call to discuss your vision in detail</li>
                <li>Provide you with a detailed timeline and subscription cost</li>
              </ul>
            </div>
            
            <div style="background: linear-gradient(135deg, #3b4476, #c9cff6); padding: 25px; border-radius: 10px; margin: 25px 0;">
              <h3 style="color: white; margin-top: 0;">Why choose Aetherion?</h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                <div style="color: #c9cff6;">
                  <strong>🚀 Modern Technology</strong><br>
                  <span style="font-size: 0.9em;">Cutting-edge frameworks and AI integration</span>
                </div>
                <div style="color: #c9cff6;">
                  <strong>⚡ Fast Delivery</strong><br>
                  <span style="font-size: 0.9em;">Efficient processes and rapid development</span>
                </div>
                <div style="color: #c9cff6;">
                  <strong>🎯 Quality Focus</strong><br>
                  <span style="font-size: 0.9em;">Rigorous testing and best practices</span>
                </div>
                <div style="color: #c9cff6;">
                  <strong>🤝 Ongoing Support</strong><br>
                  <span style="font-size: 0.9em;">Long-term partnership and maintenance</span>
                </div>
              </div>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <p style="color: #666; margin-bottom: 20px;">Have questions in the meantime?</p>
              <a href="mailto:aetherion925@gmail.com" style="background-color: #3b4476; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">
                📧 Contact Us Directly
              </a>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #2c3e50; color: #ecf0f1; padding: 30px; text-align: center;">
            <div style="margin-bottom: 20px;">
              <h3 style="margin: 0 0 10px 0;">Get in Touch</h3>
              <p style="margin: 5px 0; opacity: 0.8;">📍 Davao City</p>
              <p style="margin: 5px 0; opacity: 0.8;">📞 +63-966-233-7369</p>
              <p style="margin: 5px 0; opacity: 0.8;">✉️ aetherion925@gmail.com</p>
            </div>
            
            <div style="border-top: 1px solid #34495e; padding-top: 20px; margin-top: 20px;">
              <p style="margin: 0; font-size: 0.9em; opacity: 0.7;">
                © ${new Date().getFullYear()} Aetherion. All rights reserved.<br>
                Transforming ideas into powerful digital solutions.
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(notificationEmail),
      transporter.sendMail(autoReplyEmail)
    ]);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}