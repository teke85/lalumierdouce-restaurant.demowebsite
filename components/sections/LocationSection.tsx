// components/LocationSection.jsx
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function LocationSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const element = sectionRef.current;

    gsap.fromTo(
      element.querySelectorAll(".location-item"),
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-montserrat text-center mb-12">Location</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="location-item relative overflow-hidden shadow-lg">
            <Image
              src="/assets/photos/location1.jpg"
              alt="Location"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="location-item flex flex-col justify-center">
            <h3 className="text-2xl font-bold font-montserrat mb-4">La Lumiere Restaurant</h3>
            <p className="text-gray-700 font-poppins mb-4">
              Located in the heart of Valpolicella, La Lumiere douce Restaurant is a
              historical residence offering a unique experience in the
              enchanting wine region.
            </p>
            <p className="text-gray-700">
              Address: Via della Torre, 25, 37022 Fumane VR, Italy
            </p>
            <Link
              href="https://goo.gl/maps/villadellatorre"
              className="text-blue-500 hover:underline font-montserrat mt-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
