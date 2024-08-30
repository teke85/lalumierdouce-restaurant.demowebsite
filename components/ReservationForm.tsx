"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    guests: "",
    checkInDate: "",
    checkOutDate: "",
    time: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const { name, email, guests, checkInDate, checkOutDate, time } = formData;
    // Check if all required fields are filled
    setIsButtonDisabled(
      !name || !email || !guests || !checkInDate || !checkOutDate || !time
    );
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const {
      name,
      email,
      organization,
      guests,
      checkInDate,
      checkOutDate,
      time,
    } = formData;

    if (!name || !email || !checkInDate || !checkOutDate || !guests || !time) {
      toast.error("Please fill in all the required fields.");
      return;
    }

    try {
      await fetch("/api/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          organization,
          guests,
          checkInDate,
          checkOutDate,
          time,
        }),
      });

      toast.success(
        "Reservation submitted successfully! Kindly check your email to view your reservation details!",
        {
          duration: 5000,
        }
      );

      // Reset the form after successful submission
      setFormData({
        name: "",
        email: "",
        organization: "",
        guests: "",
        checkInDate: "",
        checkOutDate: "",
        time: "",
      });
    } catch (error) {
      toast.error("Failed to submit reservation.", {
        duration: 5000,
      });
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
      <div className="flex flex-col gap-2">
        <span className="text-11px text-gray-400 px-4">
          Please Select a Check In Date
        </span>
        <input
          type="date"
          name="checkInDate"
          placeholder="Check-In Date"
          value={formData.checkInDate}
          onChange={handleChange}
          className="p-4 border rounded"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-11px text-gray-400 px-4">
          Please Select a Check Out Date
        </span>
        <input
          type="date"
          name="checkOutDate"
          placeholder="Check-Out Date"
          value={formData.checkOutDate}
          onChange={handleChange}
          className="p-4 border rounded"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-11px text-gray-400 px-4">
          Please Select Your Reservation Time
        </span>
        <input
          type="time"
          name="time"
          placeholder="Reservation Time"
          value={formData.time}
          onChange={handleChange}
          className="p-4 border rounded"
        />
      </div>

      <div className="md:col-span-2 flex justify-center">
        <button
          type="submit"
          disabled={isButtonDisabled}
          className={`p-4 w-full md:w-1/2 text-white font-medium font-montserrat rounded-lg ${
            isButtonDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-[#272F3C]"
          }`}
        >
          SEND MESSAGE
        </button>
      </div>
      <Toaster position="top-right" />
    </motion.form>
  );
}
