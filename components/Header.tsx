"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import Logo from "./Logo";
import SVGMenuIcon from "./SVGMenuIcon";


const Header = () => {
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
          <ul className="md:flex hidden font-montserrat space-x-8 text-white">
            <li>
              <Link href="/the-restaurant">The Restaurant</Link>
            </li>
            <li>
              <Link href="/the-menu">The Menu</Link>
            </li>
            <li>
              <Link
                className="border border-[#BCAF87] font-semibold hover:bg-[#BCAF87] transform duration-700 p-4"
                href="/reservations"
              >
                Reservation
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="flex gap-3 items-center md:hidden cursor-pointer text-white text-[12px] pr-10 font-montserrat"
        >
          <SVGMenuIcon />
          MENU
        </button>
      </header>
    </section>
  );
};

export default Header;