import type { APIRoute } from "astro";
import { Resend } from "resend";
export const POST: APIRoute = async ({ request }) => {
    if (request.headers.get("Content-Type") === "application/json") {
      const body = await request.json();
      const {
        firstName,
        lastName,
        company,
        companyEmail,
        phoneNumber,
        message
      } = body;
        const email = new Resend(import.meta.env.RESEND_API_KEY);

        const response = await email.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: "klausdev2@gmail.com",
            subject: "Soumission du Formulaire de Contact",
            html: `
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; color: #2E2E2E; margin: 0; padding: 0; }
                        .container { max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #fff; }
                        .header { background-color: #f97316; color: #fff; padding: 10px 20px; border-radius: 8px 8px 0 0; text-align: center; }
                        .content { padding: 20px; }
                        .content p { margin: 10px 0; }
                        .footer { text-align: center; font-size: 12px; color: #777; margin-top: 20px; }
                        .highlight { color: #2E90FA; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            Soumission du Formulaire de Contact
                        </div>
                        <div class="content">
                            <p><strong>Prénom :</strong> ${firstName}</p>
                            <p><strong>Nom :</strong> ${lastName}</p>
                            <p><strong>Entreprise :</strong> ${company}</p>
                            <p><strong>Email de l'entreprise :</strong> ${companyEmail}</p>
                            <p><strong>Numéro de téléphone :</strong> ${phoneNumber}</p>
                            <p><strong>Message :</strong></p>
                            <p>${message}</p>
                        </div>
                        <div class="footer">
                            Merci de nous avoir contactés !
                        </div>
                    </div>
                </body>
                </html>
            `
        });
        
        
        if (response.data) {
            return new Response(null, { status: 200 });
        }

        return new Response(null, { status: 500 });
    }
    return new Response(null, { status: 400 });
}