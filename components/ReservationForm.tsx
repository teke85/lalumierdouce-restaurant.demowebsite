'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, organization, date, time, guests } = formData;

    if (!name || !email || !date || !time || !guests) {
      toast.error('Please fill in the required fields: Name, email, date, time and guests.');
      return;
    }

    const emailTemplate = `
      Hi ${name || organization || 'there'},
      
      Thank you for your reservation request. Here are the details:
      - Name: ${name}
      - Organization: ${organization || 'N/A'}
      - Number of Guests: ${guests}
      - Date: ${date}
      - Time: ${time}
      
      We will get back to you shortly to confirm your reservation.
    `;

    try {
    await fetch('/api/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        organization,
        guests,
        date,
        time,
      }),
    });
      toast.success('Reservation submitted successfully! Kindly check your email to view your reservation details!');
    } catch (error) {
      toast.error('Failed to submit reservation.');
    }
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
      <Toaster position="top-right" />
    </motion.form>
  );
}
