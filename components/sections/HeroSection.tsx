'use client'

import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import imgURL from '../../public/assets/photos/image_2.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.7 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  return (
    <section className="">
    {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="assets/video/chef.mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <section className="flex py-10 h-full items-center justify-center">
        <div className="grid grid-cols-1 md:w-3/4 md:grid-cols-2 items-center place-items-center w-full">
          <div className="hidden md:block w-3/4 h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="w-full h-full"
            >
              <Image
                src={imgURL}
                alt="Chef preparing food"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl mx-auto text-start z-10 p-10"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl uppercase md:text-5xl font-bold text-white mb-6"
            >
              A True <span className="text-[#BCAF87] font-aboreto italic"><br />Gastronomic</span> Experience
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-white font-aboreto text-xl mb-6"
            >
              Experience fine dining like never before.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              variants={containerVariants}
              className="px-6 py-3 bg-transparent border border-white text-white rounded-full"
            >
              <Link className="font-montserrat" href="/reservations">Make a Reservation</Link>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </section>
  )
}

export default HeroSection