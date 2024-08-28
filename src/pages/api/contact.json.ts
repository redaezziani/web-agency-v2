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
            subject: "Contact Form Submission",
            text: `First Name: ${firstName}\nLast Name: ${lastName}\nCompany: ${company}\nCompany Email: ${companyEmail}\nPhone Number: ${phoneNumber}\nMessage: ${message}`
        });
        if (response.data) {
            return new Response(null, { status: 200 });
        }

        return new Response(null, { status: 500 });
    }
    return new Response(null, { status: 400 });
}