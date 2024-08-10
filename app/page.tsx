'use client';

import HeroSection from '@/components/sections/HeroSection';
import TheRestaurantSection from '@/components/sections/TheRestaurantSection';
import React from 'react';


function Home() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <TheRestaurantSection />
    </main>
  );
}

export default Home;
