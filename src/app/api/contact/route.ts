import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY); // API key .env me rakho

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    console.log("Received Data:", name, email, message); // Check incoming data


    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: "All fields are required!" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: "samisherzaman779@gmail.com", // Resend me verified email use karo
      to: process.env.EMAIL_USER as string, // Jahan email receive karni hai
      subject: `New Contact Form Submission from ${name}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b> ${message}</p>`,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully!", data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Email sending failed!", error }, { status: 500 });
  }
}
