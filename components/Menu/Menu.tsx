"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "./menu.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/the-restaurant", label: "The Restaurant" },
  { path: "/the-menu", label: "The Menu" },
  { path: "/reservations", label: "Reservation" },
  { path: "/contact", label: "Contact" },
];

const Menu = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },

    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <section className="z-[50]">
      <div className="menu-container" ref={container}>
        <div className="menu-bar fixed top-0 left-0 w-[100vw] p-2 flex justify-between items-center z-[9900px]">
          {/* <div className="menu-logo">
            <Link href="/">LOGO</Link>
          </div> */}
          <div className="menu-open">
            <p>Menu</p>
          </div>
        </div>
        <div className="menu-overlay bg-[#272c1a] fixed top-0 left-0 w-[100vw] h-[100vh] p-2 z-50 flex text-white">
          <div className="menu-overlay-bar">
            <div className="menu-logo">
              <Link href="/">LOGO</Link>
            </div>
            <div className="menu-close">
              <p>Close</p>
            </div>
          </div>
          <div
            onClick={toggleMenu}
            className="menu-close-icon flex-2 flex flex-end cursor-pointer"
          >
            <p>&#x2715;</p>
          </div>
          <div className="menu-copy">
            <div className="menu-links">
              {menuLinks.map((link, index) => (
                <div className="menu-link-item" key={index}>
                  <div className="menu-link-item-holder" onClick={toggleMenu}>
                    <Link href={link.path} className="menu-link">
                      {link.label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="menu-info">
              <div className="menu-info-col">
                <Link href="#">X &#8599;</Link>
                <Link href="#">Instagram &#8599;</Link>
                <Link href="#">Facebook &#8599;</Link>
                <Link href="#">LinkedIn &#8599;</Link>
              </div>
              <div className="menu-info-col">
                <p>Info@lalumierdoue-restaurant</p>
                <p>2342 2342 343</p>
              </div>
            </div>
          </div>
          <div className="menu-preview flex flex-1 items-end justify-end">
            <p>View showreel</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
