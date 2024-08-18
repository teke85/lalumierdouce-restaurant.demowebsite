'use client'

import React, { useState, useRef, useEffect} from 'react';
import Link from "next/link";
import './menu.css';

const menuLinks = [
    { path: "/", label: "Home"},
    { path: "/", label: "Work"},
    { path: "/", label: "About"},
    { path: "/", label: "Contact"},
    { path: "/", label: "Lab"},
]

const Menu = () => {
  return (
    <section className="z-[999px] hidden bg-red-700">Menu</section>
  )
}

export default Menu