import React from "react";
import bgImage from "../assets/subscribeimg.jpg";  
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";

export default function SubscribeSection() {
  return (
    <section
      className="relative max-w-7xl mx-auto rounded-2xl my-8 md:my-16 py-16 bg-cover bg-center object-contain"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Orange overlay */}
      <div className="absolute inset-0 rounded-2xl bg-orange-500/80"></div>

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
          Subscribe To Our Newsletter For 20% Discount
        </motion.h2>

        {/* Input + Button */}
        <motion.div
          className="w-full max-w-md flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center w-full bg-white rounded-lg border border-gray-300 overflow-hidden">
            <MdOutlineMail className="text-gray-400 text-2xl ml-4" />
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-5 text-gray-500 focus:outline-none text-sm sm:text-base"
            />
            {/* Subscribe button inside input on md+ */}
            <button className="hidden sm:block bg-[#ff9800] text-gray-200 font-semibold px-5 py-3 rounded-lg hover:bg-orange-600 transition duration-300 mr-2">
              Subscribe
            </button>
          </div>

          {/* Subscribe button below input on small screens */}
          <button className="sm:hidden w-full bg-[#ff9800] text-gray-200 font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300">
            Subscribe
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
