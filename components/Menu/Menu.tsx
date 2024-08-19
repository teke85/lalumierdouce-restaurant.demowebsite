'use client'

import React, { useState, useRef, useEffect} from 'react';
import Link from "next/link";
import './menu.css';

const menuLinks = [
    { path: "/", label: "Home"},
    { path: "/restaurant", label: "The Restaurant"},
    { path: "/menu", label: "The Menu"},
    { path: "/reservation", label: "Reservation"},
    { path: "/contact", label: "Contact"},
    
]

const Menu = () => {
const container = useRef();
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
}

  return (
    <section className="z-[999px] hidden bg-red-700"><div className="container">Menu</div></section>
  )
}

export default Menu