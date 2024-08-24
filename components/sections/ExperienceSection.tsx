// components/ExperiencesSection.jsx
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ExperiencesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;

    gsap.fromTo(
      element.querySelectorAll(".experience-item"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
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
    <section ref={sectionRef} className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center font-aboreto mb-12">Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="experience-item relative overflow-hidden shadow-lg">
            <Image
              src="/assets/photos/experience1.jpg"
              alt="Experience 1"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white text-2xl font-aboreto font-bold">Wines</h3>
            </div>
          </div>
          <div className="experience-item relative overflow-hidden shadow-lg">
            <Image
              src="/assets/photos/experience2.jpg"
              alt="Experience 2"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white text-2xl font-aboreto font-bold">Serene Atmosphere</h3>
            </div>
          </div>
          <div className="experience-item relative overflow-hidden shadow-lg">
            <Image
              src="/assets/photos/experience3.jpg"
              alt="Experience 3"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white text-2xl font-aboreto font-bold">Lunches</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
