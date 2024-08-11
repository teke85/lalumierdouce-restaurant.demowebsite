import Link from 'next/link'
import React from 'react'

const NavMenu = () => {
  return (
    <section className="w-full bg-white flex justify-center p-4">
    <nav>
    <ul className="flex gap-5 text-base font-mono font-semibold">
    <li className="border-t-2 border-b-2">
    <Link className="text-gray-500" href="#second-section">Starters</Link>
    </li>
    <li>
    <Link className="text-gray-500" href="#third-section" scroll={true}>From Sea</Link>
    </li>
    <li>
    <Link className="text-gray-500" href="">From Land</Link>
    </li>
    <li>
    <Link href="">Desserts</Link>
    </li>
    <li>
    <Link href="">Drinks</Link>
    </li>
    </ul>
    </nav>
    </section>
    
  )
}

export default NavMenu