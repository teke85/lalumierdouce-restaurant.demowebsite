// app/reservations/page.tsx
import ReservationForm from '@/components/ReservationForm';

export default function Reservations() {
  return (
    <section className="p-12 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <ReservationForm />
      </div>
    </section>
  );
}
