import  React, { useState } from 'react';
import Link from "next/link";
import AnimatedLink from "./AnimatedLink";


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
    };

  return (
    <header>Navbar</header>
  )
}

export default Navbar