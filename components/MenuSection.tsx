'use client'

// components/MenuSection.tsx
import { motion } from 'framer-motion';
import Link from 'next/link';

const menuItems = [
  { name: 'Classic Burger', category: 'From the Sea', description: 'A juicy beef burger with cheese, lettuce, and tomato.', price: '$12.99' },
  { name: 'Grilled Chicken Salad', category: 'From the Land', description: 'Mixed greens, grilled chicken, cherry tomatoes, and vinaigrette.', price: '$10.99' },
  { name: 'Boiled Chicken Salad', category: 'Desserts', description: 'Mixed greens, grilled chicken, cherry tomatoes, and vinaigrette.', price: '$10.99' },
  { name: 'Grilled Meat Salad', category: 'Drinks', description: 'Mixed greens, grilled chicken, cherry tomatoes, and vinaigrette.', price: '$10.99' },
  // More items...
];

export default function MenuSection() {
  return (
    <section className="p-12 bg-gray-100">
      {/* <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
        className="grid gap-8 max-w-6xl mx-auto"
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
            <h3 className="text-2xl font-semibold">{item.name}</h3>
            <p className="text-gray-700 mt-2">{item.description}</p>
            <p className="text-xl font-bold mt-4">{item.price}</p>
          </motion.div>
        ))}
      </motion.div> */}
      <motion.div
        id="third-section"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
        className="grid gap-8 max-w-6xl mx-auto"
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
           <h3 className="font-semibold font-aboreto mt-5 text-2xl">{item.category}</h3>
            <h3 className="text-2xl font-semibold font-aboreto">{item.name}</h3>
            <p className="text-gray-700 mt-2 font-lora">{item.description}</p>
            <p className="text-xl font-bold mt-4 font-aboreto">{item.price}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
