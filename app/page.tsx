'use client';

import HeroSection from '@/components/sections/HeroSection';
import TheMenu from '@/components/sections/TheMenuSection';
import TheRestaurantSection from '@/components/sections/TheRestaurantSection';
import React from 'react';



function Home() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <TheRestaurantSection />
      <TheMenu />
    </main>
  );
}

export default Home;
