// components/RestaurantSection.tsx
import { motion } from 'framer-motion';

export default function RestaurantSection() {
  return (
    <section className="p-12 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-5xl font-bold mb-6">Our Story</h2>
        <p className="text-xl mb-6">
          La Lumiere Dounce Restaurant is a place where culinary art meets elegance.
        </p>
        <p className="text-xl">
          Since our inception, we have been committed to providing an unparalleled dining experience.
        </p>
      </motion.div>
    </section>
  );
}
