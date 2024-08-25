import { Resend } from 'resend';
import Details from '@/emails/Restaurant/ReservationDetails';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, name, organization, guests, checkInDate, checkOutDate, time } = await request.json();

    await resend.emails.send({
      from: 'info@tekmucreations.tech',
      to: email,
      subject: 'Demo Reservation Confirmation',
      react: Details({
        firstName: name,
        email: email,
        organization: organization || 'N/A',
        guests: guests,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        time: time,
      }),
      reply_to: 'mutau85@gmail.com',
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
