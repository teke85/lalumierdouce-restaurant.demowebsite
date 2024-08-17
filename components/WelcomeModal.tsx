'use client';

import { useEffect, useState } from 'react';

const WelcomeModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      // Set a timer to show the modal after 3 seconds
      const timer = setTimeout(() => {
        setShowModal(true);
        setTimeout(() => setAnimate(true), 50); // Small delay to trigger animation
      }, 3000); // Adjust the time as needed (3000ms = 3 seconds)

      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, []);

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => {
      localStorage.setItem('hasVisited', 'true');
      setShowModal(false);
    }, 300); // Duration of the fade-out animation
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!showModal) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${animate ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleOverlayClick}
    >
      <div
        className={`bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-xl transform transition-transform duration-300 ${animate ? 'scale-100' : 'scale-95'}`}
      >
        <h2 className="text-2xl font-bold font-aboreto mb-4 text-center">
          Welcome to La Lumiere Dounce Restaurant!
        </h2>
        <p className="mb-4 text-gray-700 font-montserrat">
          We are delighted to have you with us. At La Lumiere Dounce, we offer an exquisite dining experience that
          combines the finest culinary delights with a warm and welcoming atmosphere. Explore our menu, discover our
          seasonal specials, and feel free to make a reservation.
        </p>
        <p className="mb-4 text-gray-700 font-montserrat">
          Please note that we use cookies to enhance your browsing experience, analyze site traffic, and personalize
          content. By continuing to browse our site, you consent to our use of cookies.
        </p>
        <div className="text-center">
          <button
            onClick={handleClose}
            className="bg-[#272f3c] font-poppins text-white px-6 py-2 rounded hover:bg-[#4a5464] transition duration-300"
          >
            Accept & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
