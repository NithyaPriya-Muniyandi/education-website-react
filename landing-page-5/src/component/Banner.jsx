import React, { useState } from "react";
import { motion } from "framer-motion";
import bannerImg from "../assets/bannerbg.jpg";

export default function BannerSection() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `https://corsmat.xyz/james/courses?keyword=${encodeURIComponent(
      keyword
    )}&category=${encodeURIComponent(category)}`;
    window.location.href = url;
  };

  // Motion variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, when: "beforeChildren" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center md:pl-16"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full px-4 md:px-8 flex justify-center md:justify-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="w-full max-w-3xl text-center md:text-left">
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-6xl font-bold leading-tight text-white"
          >
            Empower Your Mind With{" "}
            <span className="text-[#ff9800]">Learngo</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-white my-6 md:my-12 text-base md:text-lg"
          >
            Welcome to Learngo, your online destination for high-quality
            education and professional development.
          </motion.p>

          {/* FORM for small screens → stacked */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 md:hidden"
          >
            <input
              type="text"
              placeholder="Search Course"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg focus:outline-none border-2 border-orange-500"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-lg focus:outline-none border-2 border-orange-500"
            >
              <option value="">Select Category</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Software Development">Software Development</option>
              <option value="Web Development">Web Development</option>
              <option value="Web UI Design">Web UI Design</option>
            </select>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#ff9800] to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition duration-300"
            >
              Find Course
            </button>
          </motion.form>

          {/* FORM for md+ screens → inline */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="hidden md:flex md:flex-row md:flex-wrap gap-4"
          >
            <input
              type="text"
              placeholder="Search Course"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="flex-1 min-w-[150px] px-4 py-3 rounded-lg focus:outline-none border-2 border-orange-500"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="flex-1 min-w-[150px] px-4 py-3 rounded-lg focus:outline-none border-2 border-orange-500"
            >
              <option value="">Select Category</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Software Development">Software Development</option>
              <option value="Web Development">Web Development</option>
              <option value="Web UI Design">Web UI Design</option>
            </select>
            <a href="https://corsmat.xyz/alex/courses?keyword=&category="
              type="submit"
              className="bg-gradient-to-r from-[#ff9800] to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition duration-300"
            >
              Find Course
            </a>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
