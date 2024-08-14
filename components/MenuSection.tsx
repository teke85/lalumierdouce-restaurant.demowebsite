"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Define TypeScript types for menu items
type MenuItem = {
  name: string;
  description: string;
  price: string;
  imageUrl?: string; // Make imageUrl optional
};

// Define TypeScript types for the menu items object
type MenuItems = {
  starters: MenuItem[];
  seaFood: MenuItem[];
  landFood: MenuItem[];
  dessert: MenuItem[];
  drinks: MenuItem[];
};

const menuItems: MenuItems = {
  starters: [
    {
      name: "Seasonal entry of the month",
      description: "A seasonal entry to surprise you every month. :)",
      price: "ZMW 12.99",
      imageUrl: '/assets/photos/image_9.jpg',
    },
    {
      name: "Smoked eel, beetroot and wasabi",
      description: "Smoked eel fillet, beetroot sour cream, boiled beetroot and wasabi mayonnaise.",
      price: "ZMW 10.99",
    },
    {
      name: "Mackerel, gazpacho and avocado",
      description: "Cured mackerel, gazpacho cream, avocado ice cream, toasted bread.",
      price: "ZMW 10.99",
    },
    {
      name: "Grilled Meat Salad",
      description: "Mixed greens, grilled chicken, cherry tomatoes, and vinaigrette.",
      price: "ZMW 10.99",
    },
  ],
  seaFood: [
    {
      name: "Seafood Special",
      description: "A fresh selection of seasonal seafood.",
      price: "ZMW 19.99",
      imageUrl: '/assets/photos/sea_food.jpg',
    },
    {
      name: "Grilled Shrimp Skewers",
      description: "Skewered shrimp grilled to perfection.",
      price: "ZMW 15.99",
    },
    {
      name: "Spicy Tuna Tartare",
      description: "Tuna tartare with a spicy kick.",
      price: "ZMW 16.99",
    },
    {
      name: "Lobster Bisque",
      description: "Rich and creamy lobster bisque.",
      price: "ZMW 14.99",
    },
  ],
  landFood: [
    {
      name: "Grilled Meat Burger",
      description: "Mixed greens, grilled chicken, cherry tomatoes, and lettuce.",
      price: "ZMW 10.99",
      imageUrl: '/assets/photos/image_9.jpg',
    },
    {
      name: "Roasted Chicken Breast",
      description: "Juicy roasted chicken breast with herb seasoning.",
      price: "ZMW 12.99",
    },
    {
      name: "Beef Stroganoff",
      description: "Tender beef strips in a creamy mushroom sauce.",
      price: "ZMW 14.99",
    },
    {
      name: "Vegetable Stir Fry",
      description: "A mix of fresh vegetables stir-fried with savory sauce.",
      price: "ZMW 11.99",
    },
  ],
  dessert: [
    {
      name: "Chocolate Lava Cake",
      description: "Rich chocolate cake with molten center.",
      price: "ZMW 8.99",
      imageUrl: '/assets/photos/chocolate.jpg',
    },
    {
      name: "Classic Cheesecake",
      description: "Creamy cheesecake with a graham cracker crust.",
      price: "ZMW 7.99",
    },
    {
      name: "Fruit Sorbet",
      description: "Refreshing sorbet made with seasonal fruits.",
      price: "ZMW 6.99",
    },
    {
      name: "Tiramisu",
      description: "Layers of coffee-soaked ladyfingers with mascarpone cream.",
      price: "ZMW 9.99",
    },
  ],
  drinks: [
    {
      name: "Fresh Lemonade",
      description: "Crisp and refreshing lemonade.",
      price: "ZMW 4.99",
      imageUrl: '/assets/photos/drinks.jpg',
    },
    {
      name: "Iced Coffee",
      description: "Chilled coffee with a hint of sweetness.",
      price: "ZMW 5.49",
    },
    {
      name: "Berry Smoothie",
      description: "Smoothie made with fresh berries.",
      price: "ZMW 5.99",
    },
    {
      name: "Green Tea",
      description: "Refreshing green tea served chilled.",
      price: "ZMW 3.99",
    },
  ],
};

const MenuSection = () => {
  const renderCategory = (categoryName: keyof MenuItems) => (
    <>
      <div className="flex items-center justify-center mb-6">
        <hr className="flex-grow border-t border-gray-300" style={{ maxWidth: "70%" }} />
        <h3 id={categoryName} className="font-semibold mx-4 text-xl md:text-2xl">
          {categoryName.toUpperCase()}
        </h3>
      </div>

      <div className="flex justify-between flex-col md:flex-row gap-6">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.3 }}
          className="w-full md:w-2/5"
        >
          {menuItems[categoryName].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="p-4 rounded-lg"
            >
              <h3 className="text-xl font-montserrat font-semibold">{item.name}</h3>
              <p className="text-gray-700 font-poppins border-b-2 mt-2">{item.description}</p>
              <p className="text-lg font-bold font-ibarra mt-4">{item.price}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="w-full md:w-2/5 h-[50vh] relative">
          {menuItems[categoryName].filter(item => item.imageUrl).map((item, index) => (
            <Image
              key={index}
              src={item.imageUrl!}
              alt={item.name}
              className="w-full h-full object-cover"
              fill
            />
          ))}
        </div>
      </div>
    </>
  );

  return (
    <section className="flex flex-col gap-6 p-6 md:p-12 bg-gray-100">
      {Object.keys(menuItems).map((category) => renderCategory(category as keyof MenuItems))}
    </section>
  );
};

export default MenuSection;
