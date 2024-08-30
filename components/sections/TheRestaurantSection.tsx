"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import imgURL from "../../public/assets/photos/image_1.jpg";

const TheRestaurantSection = () => {
  return (
    <section className="h-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex w-full md:w-3/4 flex-col gap-5 p-20 font-montserrat">
          <h2 className="font-bold text-3xl">THE RESTAURANT</h2>
          <p className="font-bold md:font-semibold text-gray-700 font-montserrat">
            Fine dining at your disposal every day
          </p>
          <p className="font-normal md:font-normal text-gray-700 font-montserrat text-start">
            We are delighted to announce that our doors are now officially open!
            Introducing The Elaboree, the meticulously chosen name for our brand
            new restaurant, where we aim to provide you with a truly emotional
            dining experience through every delectable dish. You can locate us
            at 17 Main Avenue, situated in one of the most renowned areas of the
            city, just a short distance away from the bustling city center.
          </p>
          <button className="p-2 border font-semibold border-[#BCAF87] w-full text-[12px]">
            MEET THE RESTAURANT
          </button>
        </div>
        <div>
          <div className="hidden md:block w-3/4 h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeIn" }}
              className="w-full h-full p-5"
            >
              <Image
                src={imgURL}
                alt="Chef preparing food"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheRestaurantSection;
