import React from "react";
import { motion } from "framer-motion";
import trend1 from "../assets/trend1.jpg";
import trend2 from "../assets/trend2.jpg";
import trend3 from "../assets/trend3.jpg";
import trend4 from "../assets/trend4.jpg";

const trendingCategories = [
  { id: 1, image: trend1, title: "Software Development", courses: "3 Courses" },
  { id: 2, image: trend2, title: "Web Design", courses: "1 Course" },
  { id: 3, image: trend3, title: "Digital Marketing", courses: "1 Course" },
  { id: 4, image: trend4, title: "Graphic Design", courses: "No Course Found!" },
];

export default function TopTrendingCategories() {
  return (
    <section className="py-16">
      {/* Section Title */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Top Trending Categories
        </h2>
      </motion.div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trendingCategories.map((trend, index) => (
          <motion.div
            key={trend.id}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Category Image */}
            <img
              src={trend.image}
              alt={trend.title}
              className="w-full h-48 sm:h-56 object-cover transition-transform duration-500"
            />

            {/* Overlay with orange color */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-2"
              initial={{ backgroundColor: "rgba(255, 153, 0, 0.69)" }}
              whileHover={{ backgroundColor: "rgba(255, 152, 0, 0.6)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-white text-lg sm:text-xl font-semibold">
                {trend.title}
              </h3>
              <p className="text-white text-sm sm:text-base">{trend.courses}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
