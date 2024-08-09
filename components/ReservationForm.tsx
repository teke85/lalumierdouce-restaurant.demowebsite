'use client'

// components/ReservationForm.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ReservationForm() {
  const [formData, setFormData] = useState({ name: '', date: '', time: '', guests: 1 });

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
      className="flex flex-col gap-6 bg-white p-8 rounded-lg shadow-lg"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="p-4 border rounded"
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="p-4 border rounded"
      />
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        className="p-4 border rounded"
      />
      <input
        type="number"
        name="guests"
        value={formData.guests}
        onChange={handleChange}
        min="1"
        className="p-4 border rounded"
      />
      <button
        type="submit"
        className="p-4 bg-black text-white rounded-lg"
      >
        Make a Reservation
      </button>
    </motion.form>
  );
}
