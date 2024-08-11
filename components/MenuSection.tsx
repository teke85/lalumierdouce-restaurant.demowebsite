"use client";

// components/MenuSection.tsx
import { motion } from "framer-motion";
import Link from "next/link";

const menuItems = [
  {
    name: "Classic Burger",
    description: "A juicy beef burger with cheese, lettuce, and tomato.",
    price: "$12.99",
    image: "/assets/photos/image_3.jpg",
  },
  {
    name: "Grilled Chicken Salad",
    description:
      "Mixed greens, grilled chicken, cherry tomatoes, and vinaigrette.",
    price: "$10.99",
  },
  {
    name: "Boiled Chicken Salad",
    description:
      "Mixed greens, grilled chicken, cherry tomatoes, and vinaigrette.",
    price: "$10.99",
  },
  {
    name: "Grilled Meat Salad",
    description:
      "Mixed greens, grilled chicken, cherry tomatoes, and vinaigrette.",
    price: "$10.99",
  },
  // More items...
];

export default function MenuSection() {
  return (
    <section className="flex flex-col gap-3 p-12 bg-gray-100">
      <div className="flex items-center justify-center">
        <hr
          className="flex-grow border-t border-gray-300"
          style={{ maxWidth: "70%" }}
        />
        <h3 id="starters" className="font-semibold font-verdana mx-4 text-2xl">
          STARTERS
        </h3>
      </div>
      <div className="grid-cols-1 md:grid-cols-1">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold font-aboreto">
                {item.name}
              </h3>
              <p className="text-gray-700 mt-2 font-lora">{item.description}</p>
              <p className="text-xl font-bold mt-4 font-aboreto">
                {item.price}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="flex items-center justify-center">
        <hr
          className="flex-grow border-t border-gray-300"
          style={{ maxWidth: "70%" }}
        />
        <h3 id="sea" className="font-semibold font-verdana mx-4 text-2xl">
          FROM THE SEA
        </h3>
      </div>
      <div className="grid-cols-1 md:grid-cols-1">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold font-aboreto">
                {item.name}
              </h3>
              <p className="text-gray-700 mt-2 font-lora">{item.description}</p>
              <p className="text-xl font-bold mt-4 font-aboreto">
                {item.price}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="flex items-center justify-center">
        <hr
          className="flex-grow border-t border-gray-300"
          style={{ maxWidth: "70%" }}
        />
        <h3 id="land" className="font-semibold font-verdana mx-4 text-2xl">
          FROM LAND
        </h3>
      </div>
      <div className="grid-cols-1 md:grid-cols-1">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold font-aboreto">
                {item.name}
              </h3>
              <p className="text-gray-700 mt-2 font-lora">{item.description}</p>
              <p className="text-xl font-bold mt-4 font-aboreto">
                {item.price}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
