import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Resend test email
      to: 'nivassai2506@gmail.com', // Your target email
      subject: `New Message from ${name} via RSN Portfolio`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@600;700&display=swap');
            body { margin: 0; padding: 0; background-color: #F7F7F7; }
            .container { max-width: 600px; margin: 40px auto; background-color: #FFFFFF; padding: 40px; border-radius: 8px; border: 1px solid #ECECEC; box-shadow: 0 4px 20px rgba(0,0,0,0.03); }
            .header { font-family: 'Space Grotesk', sans-serif; font-size: 24px; font-weight: 700; color: #050505; letter-spacing: -0.5px; margin-bottom: 30px; display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #050505; padding-bottom: 20px; }
            .logo { height: 32px; width: 32px; object-fit: contain; }
            .label { font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 600; color: #888888; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
            .value { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 500; color: #050505; margin-top: 0; margin-bottom: 24px; }
            .message-box { background-color: #F9F9F9; padding: 24px; border-radius: 6px; border-left: 4px solid #1743FF; margin-top: 10px; }
            .message-content { font-family: 'Inter', sans-serif; font-size: 15px; line-height: 1.6; color: #333333; margin: 0; white-space: pre-wrap; }
            .footer { margin-top: 40px; text-align: center; font-family: 'Inter', sans-serif; font-size: 12px; color: #AAAAAA; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <span style="display:flex; align-items:center; gap:12px;">
                <img src="https://ik.imagekit.io/nivas25/RSN/logo.png?tr=w-64,h-64" alt="RSN" class="logo" />
              </span>
              <span style="font-size: 14px; color: #888;">NEW MESSAGE</span>
            </div>
            
            <div class="label">SENDER NAME</div>
            <div class="value">${name}</div>
            
            <div class="label">EMAIL ADDRESS</div>
            <div class="value"><a href="mailto:${email}" style="color: #1743FF; text-decoration: none;">${email}</a></div>
            
            <div class="label">MESSAGE</div>
            <div class="message-box">
              <p class="message-content">${message}</p>
            </div>
            
            <div class="footer">
              This message was securely routed from your portfolio contact form.
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (data.error) {
      return new Response(JSON.stringify({ error: data.error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
