"use client";

import ExperiencesSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import LocationSection from "@/components/sections/LocationSection";
import TheMenu from "@/components/sections/TheMenuSection";
import TheRestaurantSection from "@/components/sections/TheRestaurantSection";
import React from "react";

function Home() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <TheRestaurantSection />
      <TheMenu />
      <ExperiencesSection />
      <LocationSection />
    </main>
  );
}

export default Home;
