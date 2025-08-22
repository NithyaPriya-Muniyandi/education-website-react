import React from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import logoImg from "../assets/footerlogo.png"; 
import post1 from "../assets/post1.jpg"; 
import post2 from "../assets/post2.jpg";
import post3 from "../assets/post3.jpg";

export default function Footer() {
  // Variants for reusable animations
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerParent = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <footer>
      <motion.div 
        className="bg-orange-50 py-10 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerParent}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          
          {/* Column 1 */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2 mb-3">
              <img src={logoImg} alt="Learngo Logo" />
              <h2 className="text-xl font-bold"></h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              dignissimos quibusdam quia sit delectus. Cupiditate corporis,
              delectus quo ullam repudiandae illum culpa, magni modi, asperiores
              quis non magnam fugit vitae!
            </p>
          </motion.div>

          {/* Column 2 */}
          <motion.div variants={fadeUp}>
            <h3 className="text-lg font-semibold mb-3">Useful Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {["Terms & Conditions", "Contact Us", "About Us"].map((link, i) => (
                <motion.li
                  key={i}
                  className="cursor-pointer hover:text-[#ff9800] transition"
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  {link}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 */}
          <motion.div variants={fadeUp}>
            <h3 className="text-lg font-semibold mb-3">Latest Post</h3>
            <div className="space-y-4">
              {[
                {
                  img: post1,
                  author: "Karem",
                  date: "Jun 14, 2023",
                  text: "Vivamus vestibulum ntulla nec ante.",
                },
                {
                  img: post2,
                  author: "Arnold",
                  date: "Jun 14, 2023",
                  text: "Nam dui mi, tincidunt quis, accumsan porttitor, facilis...",
                },
                {
                  img: post3,
                  author: "Modric",
                  date: "Jun 14, 2023",
                  text: "Vestibulum commodo felis quis tortor.",
                },
              ].map((post, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 cursor-pointer hover:text-[#ff9800] transition"
                  whileHover={{ scale: 1.03, x: 5 }}
                >
                  <img
                    src={post.img}
                    alt={post.text}
                    className="w-14 h-14 object-cover rounded"
                  />
                  <div>
                    <p className="text-xs text-gray-500">
                      {post.author} <span className="mx-1">|</span> {post.date}
                    </p>
                    <p className="text-sm font-medium leading-snug">
                      {post.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Divider */}
      <hr />

      {/* Bottom Section */}
      <motion.div 
        className="max-w-6xl mx-auto px-4 py-6 flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex gap-4 text-[#ff9800]">
          {[FaYoutube, FaInstagram, FaTwitter, FaFacebookF].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              aria-label="Social"
              className="bg-orange-100 p-3 rounded-full"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-700">
          Copyright ©2025. All Rights Reserved by{" "}
          <span className="font-semibold text-[#ff9800]">
            Quadverge Technology
          </span>.
        </p>
      </motion.div>
    </footer>
  );
}
