import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { sql, initDatabase } from '@/lib/db';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Initialize database (creates table if not exists)
    await initDatabase();

    // Save contact message
    await sql`
      INSERT INTO contacts (name, email, message)
      VALUES (${name}, ${email}, ${message})
    `;

    // Send email notification
    if (process.env.RESEND_API_KEY) {
      try {
        const emailResult = await resend.emails.send({
          from: 'Portfolio Contact <proveedores@enoughh.shop>',
          to: 'davideliaspalacioo@gmail.com',
          subject: `🚀 New Contact from Portfolio: ${name}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h1 style="color: #3178C6;">📬 New Contact Message!</h1>
              <div style="background: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p><strong>👤 Name:</strong> ${name}</p>
                <p><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>💬 Message:</strong></p>
                <p style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #3178C6;">${message}</p>
              </div>
              <p style="color: #666; font-size: 14px;">Sent from your portfolio at ${new Date().toLocaleString()}</p>
            </div>
          `,
        });
        console.log('Email sent successfully:', emailResult);
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // Don't fail the whole request if email fails - the message is already saved
      }
    } else {
      console.log('RESEND_API_KEY not found, skipping email notification');
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving contact:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}

