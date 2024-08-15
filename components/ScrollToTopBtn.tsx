'use client'

import React, { useEffect, useState } from 'react';

const ScrollToTopBtn = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 rounded-full bg-[#1D2430] text-white shadow-lg z-50 transition-opacity duration-300"
          aria-label="Scroll to top"
        >
          <span className="text-xl">↑</span>
        </button>
      )}
    </>
  );
};

export default ScrollToTopBtn;
