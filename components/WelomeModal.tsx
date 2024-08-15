'use client'; 

import { useEffect, useState } from 'react';

const WelcomeModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      // Set a timer to show the modal after 3 seconds
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 3000); // Adjust the time as needed (3000ms = 3 seconds)

      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('hasVisited', 'true');
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Welcome to Our Website!</h2>
        <p className="mb-4">We are glad to have you here. Enjoy exploring our site!</p>
        <button
          onClick={handleClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;
