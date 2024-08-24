// app/reservations/page.tsx
import ReservationForm from "@/components/ReservationForm";

export default function Reservations() {
  return (
    <>
      <section className="p-12 bg-[#272f3c]">
        <div className="flex flex-col font-montserrat text-2xl font-medium gap-5 text-white h-full md:h-[30vh] mx-auto">
          <p>
            Make a reservation
            <span className="text-[#BCAF87]">with us and</span> enjoy a unique
            experience.
          </p>
          <p className="text-[16px]">
            Enjoy a true gastronomic experience in our restaurant by making a
            reservation through the form. You may also reach out to us using the
            contacts below to make your order, get more info about us, or just
            to say hello!
          </p>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto bg-white">
          <ReservationForm />
        </div>
      </section>
      <section className="bg-[#272F3C] py-10 px-10 flex flex-col font-montserrat items-center gap-5 w-full h-full md:h-[50vh]">
        <div className="container">
          <hr className="mx-auto w-[80%] pt-5" />
          <div className="flex flex-col items-center font-medium text-white gap-5 text-content">
            <p>10725 NE Ocean Blvd #LOT 138 Jensen Beach, Florida</p>
            <p>Closed on Mondays</p>
            <p>Open Tuesday to Sunday: 12 PM to 3 PM and 7 PM to 11 PM</p>
            <hr className="mx-auto w-[50%] pb-5" />
          </div>
        </div>
      </section>
    </>
  );
}
