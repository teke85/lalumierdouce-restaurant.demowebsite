import { motion } from "framer-motion";
import imgURL from "../public/assets/photos/restaurant.jpg";
import logoURL from "../public/assets/logos/Main_Logo.png";
import chefURL from "../public/assets/photos/chef.jpg";

import Image from "next/image";
import Link from "next/link";

// Array of image URLs
const imageUrls = [
  "/assets/photos/resturant_image_1.jpg",
  "/assets/photos/resturant_image_2.jpg",
  "/assets/photos/resturant_image_3.jpg",
  "/assets/photos/resturant_image_4.jpg",
  "/assets/photos/resturant_image_5.jpg",
  "/assets/photos/resturant_image_7.jpg",
];

export default function RestaurantSection() {
  return (
    <>
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={imgURL}
            alt="Background Image"
            className="w-full h-full object-cover"
            fill
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        {/* Centered Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative flex flex-col items-center justify-center h-full text-white text-center"
        >
          {/* <div className="relative w-1/2 h-auto">
            <Image
              src={logoURL}
              alt="Logo"
              className="object-contain"
              width={300} // Adjust width and height as needed
              height={150} // Adjust width and height as needed
            />
          </div> */}
          {/* Uncomment to include text */}
          <h2 className="text-5xl font-ibarra font-bold mb-6">Our Story</h2>
          <p className="text-4xl font-aboreto font-bold mb-6">
            La Lumiere Dounce <span className="text-[#BCAF87]">Restaurant</span>
          </p>
        </motion.div>
      </section>
      <section className="bg-[#272F3C] py-10">
        <div className="container text-white gap-10 grid grid-cols-1 md:grid-cols-2">
          <div className="flex text-5xl justify-center md:justify-end">
            <h3 className="">
              A HISTORY
              <br /> STARTED <span className="text-[#BCAF87]">EARLY</span>
            </h3>
          </div>
          <div className="flex flex-col font-montserrat px-10 w-full md:w-3/4 font-semibold gap-5">
            <p>
              Our story begins in a quaint village nestled in the heart of
              France, where the tantalizing aroma of freshly baked bread and the
              harmonious clinking of glasses filled the air. It was here that
              our founder, Jean-Luc Duval, ignited the spark that would set our
              culinary journey in motion.
            </p>

            <p>
              Born into a family of esteemed chefs, Jean-Luc inherited a deep
              appreciation for fine cuisine and an unwavering commitment to
              perfection. From an early age, he spent countless hours at his
              grandparents' bustling boulangerie, marveling at the artistry and
              craftsmanship that went into creating each delicate pastry.
            </p>

            <p>
              Driven by an insatiable curiosity and an innate desire to push the
              boundaries of flavor, Jean-Luc embarked on a voyage of culinary
              exploration. He ventured to different corners of the world,
              absorbing the secrets of diverse culinary traditions, and honing
              his skills under the tutelage of renowned chefs. It was during his
              travels that he met Satoshi Horiuchi, a talented Japanese chef
              with an extraordinary palate and a shared vision for gastronomic
              innovation.
            </p>
          </div>
        </div>
      </section>
      <section className="relative h-screen">
        <div className="absolute inset-0 -z-10 h-full">
          <Image
            src={chefURL}
            alt="Background Image"
            className="w-full h-full object-cover"
            fill
            quality={80}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
      </section>
      <section className="bg-[#272F3C] py-10">
        <div className="container text-white gap-10 grid grid-cols-1 md:grid-cols-2">
          <div className="flex text-5xl justify-center md:justify-end">
            <h3 className="">
              <span className="text-[#BCAF87]">WE COOK</span> ART
              <br /> WITH HEART
            </h3>
          </div>
          <div className="flex flex-col font-montserrat px-10 w-full md:w-3/4 font-semibold gap-5">
            <p>
              United by their passion for merging cultural influences, Jean-Luc
              and Satoshi forged a powerful partnership that would forever shape
              the destiny of our restaurant. Together, they set out on a quest
              to reinvent French gastronomy, fusing it with panache, modernity,
              and an unwavering commitment to honoring small-scale producers and
              the rhythm of the seasons.
            </p>

            <p>
              With their collaborative genius, they curated a menu that would
              take guests on an unforgettable culinary journey. Meticulously
              crafted dishes showcased the harmonious fusion of French
              techniques and Japanese precision, resulting in an explosion of
              flavors that delighted even the most discerning palates.
            </p>

            <p>
              Word of their groundbreaking creations spread like wildfire,
              attracting gourmands from far and wide. The restaurant quickly
              earned accolades and became a revered destination for those
              seeking an extraordinary dining experience. Guests marveled at the
              artistry that unfolded before their eyes, as each plate was
              meticulously assembled like a work of edible art.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#272F3C] py-10">
        <div className="text-content w-2/4 items-center mx-auto justify-center flex flex-col text-gray-700 font-montserrat space-y-10">
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.3 } },
              hidden: { transition: { staggerChildren: 0.3 } },
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
        </div>
      </section>
      <section className="bg-[#272F3C] py-10 flex flex-col font-montserrat items-center gap-5 w-full h-[50vh]">
        <div className="container">
          <hr className="mx-auto w-[80%] pt-5" />
          <div className="flex flex-col items-center font-medium text-white gap-5 text-content">
            <p>10725 NE Ocean Blvd #LOT 138 Jensen Beach, Florida</p>
            <p>Closed on Mondays</p>
            <p>Open Tuesday to Sunday: 12 PM to 3 PM and 7 PM to 11 PM</p>
            <hr className="mx-auto w-[50%] pb-5" />
          </div>
        </div>
      </section>
    </>
  );
}
