import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    // Configure ton transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // ex. "smtp.gmail.com"
      port: 465,
      secure: true, // true si tu utilises le port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // <--- allow self-signed certs
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL, // Ton adresse de réception
      subject,
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi mail:", error);
    return NextResponse.json(
      { error: "Échec de l’envoi de l’email." },
      { status: 500 }
    );
  }
}
