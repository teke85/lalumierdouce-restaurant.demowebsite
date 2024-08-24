"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Logo from "./Logo";
import SVGMenuIcon from "./SVGMenuIcon";

const navLinks = [
  { title: "The Restaurant", href: "/the-restaurant" },
  { title: "The Menu", href: "/the-menu" },
  { title: "Make A Reservation", href: "/reservations" },
  { title: "Contact Us", href: "/" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  return (
    <section>
      <header className="flex justify-between items-center h-20 py-6 px-12 bg-[#272f3c]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Link href="/">
            <Logo />
          </Link>
        </motion.div>
        <nav>
          <ul className="md:flex hidden font-montserrat text-[15px] space-x-8 text-white">
            <li>
              <Link href="/the-restaurant">The Restaurant</Link>
            </li>
            <li>
              <Link href="/the-menu">The Menu</Link>
            </li>
            <li>
              <Link
                className="border border-[#BCAF87] font-normal hover:bg-[#BCAF87] transform duration-700 p-4"
                href="/reservations"
              >
                Make A Reservation
              </Link>
            </li>
          </ul>
          <button
            onClick={toggleMenu}
            className="flex gap-3 items-center md:hidden cursor-pointer text-white text-[12px] pr-10 font-montserrat"
          >
            <SVGMenuIcon />
            MENU
          </button>
        </nav>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed z-50 left-0 top-0 w-full h-screen origin-top bg-[#272F3C] text-black p-10"
            >
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <Link href="/">
                      <Logo />
                    </Link>
                  </motion.div>

                  <div className="cursor-pointer text-white uppercase">
                    <button
                      onClick={toggleMenu}
                      className="flex gap-3 items-center font-light cursor-pointer text-white text-[17px] font-montserrat"
                    >
                      CLOSE
                    </button>
                  </div>
                </div>
                <motion.div
                  variants={containerVariants}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex flex-col h-full justify-center items-center space-y-10"
                >
                  {navLinks.map((link, index) => (
                    <div key={index} className="overflow-hidden text-white">
                      <MobileNavLink
                        title={link.title}
                        href={link.href}
                        onClick={closeMenu} // Close the menu when a link is clicked
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </section>
  );
};

export default Header;

const MobileLinkVariants = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

interface MobileNavLinkProps {
  title: string;
  href: string;
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ title, href, onClick }) => {
  return (
    <motion.div
      variants={MobileLinkVariants}
      className="font-lora text-3xl"
      onClick={onClick} // Trigger the close menu function on click
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};
