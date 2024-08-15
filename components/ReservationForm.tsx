'use client'

// components/ReservationForm.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ReservationForm() {
  const [formData, setFormData] = useState({ name: '', date: '', time: '', guests: '' });

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
      className="flex flex-col gap-6 bg-white max-w-5xl p-8 shadow-lg"
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
        type="text"
        name="name"
        placeholder="Your Email"
        value={formData.name}
        onChange={handleChange}
        className="p-4 border rounded"
      />
      
      <input
        type="number"
        placeholder="Please Indicate when and how many people you want to make the reservation for?"
        name="guests"
        value={formData.guests}
        onChange={handleChange}
        min="1"
        className="p-4 border rounded"
      />
      <button
        type="submit"
        className="p-4 bg-[#272F3C] w-3/6 text-white mx-auto font-medium font-montserrat rounded-lg"
      >
        SEND MESSAGE
      </button>
    </motion.form>
  );
}
