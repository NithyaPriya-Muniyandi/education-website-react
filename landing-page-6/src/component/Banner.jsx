// BannerSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import bannerImg from "../assets/bannerimg.png"; 
import { FaStar, FaCircle, FaPlus, FaBolt, FaBook } from "react-icons/fa";

export default function BannerSection() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `https://corsmat.xyz/tony/courses?keyword=${encodeURIComponent(
      keyword
    )}&category=${encodeURIComponent(category)}`;
    window.location.href = url;
  };

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Decorative Jumping Icons */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute top-10 left-12 text-yellow-400 text-3xl opacity-70"
      >
        <FaStar />
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 text-blue-500 text-4xl opacity-70"
      >
        <FaCircle />
      </motion.div>

      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute top-1/3 right-16 text-pink-500 text-3xl opacity-70"
      >
        <FaPlus />
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="absolute bottom-16 right-1/4 text-green-400 text-3xl opacity-70"
      >
        <FaBolt />
      </motion.div>

      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/3 text-red-400 text-3xl opacity-70"
      >
        <FaBook />
      </motion.div>

      {/* MAIN BANNER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col lg:flex-row items-center gap-8 relative z-10">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold leading-loose"
          >
            Upgrade Your Skills With{" "}
            <span className="text-[#ff9800]">Learngo</span>
          </motion.h1>

          <p className="text-gray-600 my-6 md:my-12 text-base md:text-lg">
            Welcome to Learngo, your online destination for high-quality
            education and professional development.
          </p>

          {/* FORM for small screens */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 md:hidden"
          >
            <input
              type="text"
              placeholder="Search Course"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#ff9800]"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#ff9800]"
            >
              <option value="">Select Category</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Software Development">Software Development</option>
              <option value="Web Development">Web Development</option>
              <option value="Web UI Design">Web UI Design</option>
            </select>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#ff9800] to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors duration-300"
            >
              Find Course
            </button>
          </form>

          {/* FORM for md+ screens */}
          <form
            onSubmit={handleSubmit}
            className="hidden md:flex md:flex-row md:flex-wrap gap-4"
          >
            <input
              type="text"
              placeholder="Search Course"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="flex-1 min-w-[150px] px-4 py-3 border rounded-lg focus:outline-none focus:border-[#ff9800]"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="flex-1 min-w-[150px] px-4 py-3 border rounded-lg focus:outline-none focus:border-[#ff9800]"
            >
              <option value="">Select Category</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Software Development">Software Development</option>
              <option value="Web Development">Web Development</option>
              <option value="Web UI Design">Web UI Design</option>
            </select>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#ff9800] to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors duration-300"
            >
              Find Course
            </button>
          </form>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1 w-full flex justify-center"
        >
          <img
            src={bannerImg}
            alt="Courses Banner"
            className="w-full max-w-md lg:max-w-5xl object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
