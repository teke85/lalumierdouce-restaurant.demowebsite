'use client'

// components/ReservationForm.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    date: '',
    time: '',
    guests: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white max-w-5xl p-8 shadow-lg"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="p-4 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="p-4 border rounded"
      />
      <input
        type="text"
        name="organization"
        placeholder="Organization Name (Optional)"
        value={formData.organization}
        onChange={handleChange}
        className="p-4 border rounded"
      />
      <input
        type="number"
        name="guests"
        placeholder="Number of Guests"
        value={formData.guests}
        onChange={handleChange}
        min="1"
        className="p-4 border rounded"
      />
      <input
        type="date"
        name="date"
        placeholder="Reservation Date"
        value={formData.date}
        onChange={handleChange}
        className="p-4 border rounded"
      />
      <input
        type="time"
        name="time"
        placeholder="Reservation Time"
        value={formData.time}
        onChange={handleChange}
        className="p-4 border rounded"
      />
      <div className="md:col-span-2 flex justify-center">
        <button
          type="submit"
          className="p-4 bg-[#272F3C] w-full md:w-1/2 text-white font-medium font-montserrat rounded-lg"
        >
          SEND MESSAGE
        </button>
      </div>
    </motion.form>
  );
}
