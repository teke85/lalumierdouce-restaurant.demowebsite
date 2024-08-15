'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const NavMenu = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { 
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`w-full bg-white shadow-2xl flex justify-center p-4 ${isSticky ? 'fixed top-0 z-50' : 'relative'}`}>
      <nav>
        <ul className="flex gap-5 text-sm md:text-xl font-mono font-light">
          <li className="border-t-2 border-b-2">
            <Link className="text-gray-500" href="#starters">Starters</Link>
          </li>
          <li className="border-t-2 border-b-2">
            <Link className="text-gray-500" href="#seaFood" scroll={true}>From Sea</Link>
          </li>
          <li className="border-t-2 border-b-2">
            <Link className="text-gray-500" href="#landFood">From Land</Link>
          </li>
          <li className="border-t-2 border-b-2">
            <Link className="text-gray-500" href="#dessert">Desserts</Link>
          </li>
          <li className="border-t-2 border-b-2">
            <Link className="text-gray-500" href="#drinks">Drinks</Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default NavMenu
