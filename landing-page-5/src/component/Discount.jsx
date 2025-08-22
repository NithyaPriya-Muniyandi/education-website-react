import React from "react";
import bgImage from "../assets/discountbg.jpg";
import { motion } from "framer-motion";

export default function DiscountSection() {
  return (
    <section
      className="relative max-w-full mx-auto my-8 md:my-16 py-16 bg-cover bg-center object-contain"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Content */}
      <motion.div
        className="relative max-w-5xl mx-auto z-10 flex flex-col items-center justify-center text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-2xl sm:text-5xl font-bold text-white mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Get 20% Discount For Our All Latest Courses
        </motion.h2>

        {/* Buttons */}
        <motion.div
          className="w-full max-w-md flex flex-col sm:flex-col md:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button className="w-full md:w-auto bg-[#ff9800] text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300">
            Get Discount
          </button>
          <button className="w-full md:w-auto bg-[#ff9800] text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300">
            See All Courses
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
