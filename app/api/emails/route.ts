import { Resend } from 'resend';
import Details from '@/emails/Restaurant/ReservationDetails';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, name, organization, guests, date, time } = await request.json();

  await resend.emails.send({
    from: 'info@tekmucreations.tech',
    to: email,
    subject: 'Reservation Confirmation',
    react: Details({
      firstName: name,
      email: email,
      organization: organization || 'N/A',
      guests: guests,
      date: date,
      time: time,
    }),
    reply_to: 'mutau85@gmail.com',
  });
}
