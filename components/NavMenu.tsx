import Link from 'next/link'
import React from 'react'

const NavMenu = () => {
  return (
    <section className="w-full bg-white flex justify-center p-4">
    <nav className="shadow-4xl">
    <ul className="flex gap-5 text-sm md:text-xl font-mono font-light">
    <li className="border-t-2 border-b-2">
    <Link className="text-gray-500" href="#starters">Starters</Link>
    </li>
    <li>
    <Link className="text-gray-500" href="#seaFood" scroll={true}>From Sea</Link>
    </li>
    <li>
    <Link className="text-gray-500" href="#landFood">From Land</Link>
    </li>
    <li>
    <Link className="text-gray-500" href="#dessert">Desserts</Link>
    </li>
    <li>
    <Link className="text-gray-500" href="#drinks">Drinks</Link>
    </li>
    </ul>
    </nav>
    </section>
    
  )
}

export default NavMenu