'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Array of image URLs
const imageUrls = [
  '/assets/photos/image_3.jpg',
  '/assets/photos/image_4.jpg', 
  '/assets/photos/image_5.jpg',
  '/assets/photos/image_6.jpg',
  '/assets/photos/image_7.jpg',
  '/assets/photos/image_8.jpg'
];

const TheMenu = () => {
  return (
    <section className="bg-white text-black h-full w-full py-10">
      <div className="flex items-center p-10">
        <hr className="w-1/2" />
        <div className="flex w-1/2 justify-center">
          <h2 className="w-1/2 text-4xl font-montserrat font-semibold">THE MENU</h2>
        </div>
        <hr className="w-1/2" />
      </div>
      <div className="text-content w-2/4 items-center mx-auto justify-center flex flex-col text-gray-700 font-montserrat space-y-10">
        <p className="text-center">Under the guidance of the skilled chef Japhet Sindoe, this fresh culinary venture reimagines traditional gastronomy with flair and contemporary touches, all the while honoring local producers and seasonal ingredients.</p>
        <p className="text-center">At the heart of the experience lies a cuisine that is both refined and meticulous, offering an exquisite explosion of flavors with every mouthful. All of this is presented within an elegant and modern ambiance, promising a dining experience that is truly exceptional.</p>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
            hidden: { transition: { staggerChildren: 0.3 } }
          }}
        >
          {imageUrls.map((url, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeIn" }}
              className="w-full h-full"
            >
              <Image
                src={url}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
                width={500} // Adjust the width and height as needed
                height={300}
              />
            </motion.div>
          ))}
        </motion.div>
        <Link href="/the-menu" passHref>
          <button className="p-2 border border-[#BCAF87] w-full text-[12px]">VIEW THE MENU</button>
        </Link>
      </div>
    </section>
  );
}

export default TheMenu;
