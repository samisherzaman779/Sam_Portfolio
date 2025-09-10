import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill all required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail", // agar gmail use kar rahe ho
      auth: {
        user: process.env.EMAIL_USER, // ✅ apna gmail ya domain email
        pass: process.env.EMAIL_PASS, // ✅ app password ya SMTP password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // sender
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER, // ✅ jahan email receive karna hai
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Service: ${service || "Not specified"}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
