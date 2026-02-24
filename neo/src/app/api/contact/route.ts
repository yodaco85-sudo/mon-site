import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, projectType, message, source } = body;

    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { success: false, message: "Champs requis manquants" },
        { status: 400 }
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${name} via BESMARA <noreply@lilas.pro>`,
        to: "yodaco85@gmail.com",
        reply_to: email,
        subject: `Nouveau contact — ${name}`,
        text: [
          "Nouveau message depuis le site BESMARA",
          "",
          "Nom: " + name,
          "Email: " + email,
          "Type de projet: " + projectType,
          "",
          "Message:",
          message,
          "",
          "Source: " + (source || "Formulaire principal"),
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, message: "Erreur d'envoi" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Message envoye" });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "Erreur serveur" },
      { status: 500 }
    );
  }
}
