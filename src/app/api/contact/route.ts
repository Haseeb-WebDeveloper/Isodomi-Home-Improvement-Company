import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, address, message, services } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !address) {
      return NextResponse.json(
        { error: "Required fields are missing" },
        { status: 400 }
      );
    }

    // Format selected services for email
    const selectedServices = Object.entries(services)
      .filter(([_, isSelected]) => isSelected)
      .map(([service]) => service.charAt(0).toUpperCase() + service.slice(1) + " Insulation")
      .join(", ");

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email template
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #666;">Contact Details:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Services Required:</strong> ${selectedServices || "None selected"}</p>
        </div>

        ${message ? `
          <div style="margin: 20px 0; padding: 15px; background: #f9f9f9; border-radius: 5px;">
            <h3 style="color: #666; margin-top: 0;">Message:</h3>
            <p style="margin-bottom: 0;">${message}</p>
          </div>
        ` : ''}

        <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #eee; color: #666; font-size: 12px;">
          <p>This is an automated email from your website contact form.</p>
        </div>
      </div>
    `;

    // Setup email data
    const mailOptions = {
      from: {
        name: "Renodomi Website",
        address: process.env.SENDER_EMAIL!
      },
      to: process.env.SENDER_EMAIL,
      subject: `New Contact Request from ${name}`,
      html: htmlContent,
      replyTo: email // Allows direct reply to the sender
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send auto-reply to the customer
    const autoReplyOptions = {
      from: {
        name: "Renodomi",
        address: process.env.SENDER_EMAIL!
      },
      to: email,
      subject: "Thank you for contacting Renodomi",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You for Contacting Renodomi</h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for reaching out to us. We have received your message and will get back to you within 24-48 business hours.</p>
          
          <div style="margin: 20px 0; padding: 15px; background: #f9f9f9; border-radius: 5px;">
            <h3 style="color: #666; margin-top: 0;">Your submitted details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
            ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
          </div>
          
          <p>If you need immediate assistance, please call us at +31 (0) 123 456 789.</p>
          
          <p style="margin-top: 20px;">Best regards,<br>The Renodomi Team</p>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #eee; color: #666; font-size: 12px;">
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      `
    };

    // Send auto-reply
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
} 