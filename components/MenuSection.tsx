'use client'

// components/MenuSection.tsx
import { motion } from 'framer-motion';

const menuItems = [
  { name: 'Classic Burger', description: 'A juicy beef burger with cheese, lettuce, and tomato.', price: '$12.99' },
  { name: 'Grilled Chicken Salad', description: 'Mixed greens, grilled chicken, cherry tomatoes, and vinaigrette.', price: '$10.99' },
  { name: 'Grilled Chicken Salad', description: 'Mixed greens, grilled chicken, cherry tomatoes, and vinaigrette.', price: '$10.99' },
  { name: 'Grilled Chicken Salad', description: 'Mixed greens, grilled chicken, cherry tomatoes, and vinaigrette.', price: '$10.99' },
  // More items...
];

export default function MenuSection() {
  return (
    <section className="p-12 bg-gray-100">
      <motion.div
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
      </motion.div>
    </section>
  );
}
