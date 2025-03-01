import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstname, lastname, email, phone, service, message } = await req.json();
    const name = `${firstname} ${lastname}`;

    console.log("Received Data:", name, email, message, service);

    if (!firstname || !lastname || !email || !message) {
      return NextResponse.json({ success: false, message: "All fields are required!" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, message: "Invalid email format!" }, { status: 400 });
    }

    // optional:
    const phoneRegex = /^\d{10,}$/; // Basic example: 10 or more digits
    if (!phoneRegex.test(phone)) {
        return NextResponse.json({ success: false, message: "Invalid phone format!" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: "samisherzaman779@gmail.com", // Make sure this is verified in Resend!
      to: process.env.EMAIL_USER as string, // Where you want to receive the emails
      subject: `New Contact Form Submission from ${name} for ${service}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone}</p><p><b>Message:</b> ${message}</p><p><b>Service:</b> ${service}</p>`,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully!", data }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { success: false, message: "Email sending failed!", error: (error as Error).message },
      { status: 500 },
    );
  }
}
