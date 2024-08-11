'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';

import React from 'react'
import Logo from './Logo';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-12 bg-[#272f3c]">
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
        <ul className="flex font-montserrat space-x-8 text-white">
          <li><Link href="/the-restaurant">The Restaurant</Link></li>
          <li><Link href="/the-menu">The Menu</Link></li>
          <li><Link className="border border-[#BCAF87] font-semibold hover:bg-[#BCAF87] transform duration-700 p-4" href="/reservations">Reservation</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header