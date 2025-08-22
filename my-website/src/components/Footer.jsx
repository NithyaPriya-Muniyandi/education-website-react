import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import footerlogo from "../assets/footerlogo.png";

export default function Footer() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <footer className="bg-[#ff9800] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + About */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
            <img src={footerlogo} alt="footerlogo" className="h-10" />
          </h2>
          <p className="text-sm leading-6">
            We are an award winning multinational company. We believe in quality
            and standard worldwide.
          </p>
        </motion.div>

        {/* Useful Links */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#blogs" className="hover:underline">Our Blogs</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
            <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-red-600 text-xl" />
              <span>California, USA London, United Kingdom Melbourne, Australia</span>
            </li>
            <li className="flex items-start gap-2">
              <FaPhoneAlt className="mt-1 text-green-600 text-xl" />
              <span>+84 34197502, +23 50575099, +23 576039607</span>
            </li>
            <li className="flex items-start gap-2">
              <FaEnvelope className="mt-1 text-blue-600 text-xl" />
              <span>contact@example.com, support@example.com</span>
            </li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-3">Get latest updates first</p>
          <form className="flex w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-md text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-gradient-to-r from-teal-400 to-green-500 text-white font-semibold rounded-r-md hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-white/30 text-center py-4 text-sm"
      >
        © {new Date().getFullYear()} Coursemat. All rights reserved.
      </motion.div>
    </footer>
  );
}
