'use client'

import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8 px-12 bg-[#1d2430] text-white text-center">
      <p className="font-aboreto">© 2024 La Lumiere Douce Restaurant. All rights reserved.</p>
      <div className="mt-4 font-montserrat flex justify-center space-x-4">
        <Link href="#">Facebook</Link>
        <Link href="#">Instagram</Link>
        <Link href="#">Twitter</Link>
      </div>
    </footer>
  )
}

export default Footer