import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaUserAlt, FaCalendarAlt, FaCircle } from "react-icons/fa";

// assets
import list from "../assets/listbg.png";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import shape1 from "../assets/shape1.png";
import shape2 from "../assets/shape2.png";
import shape3 from "../assets/shape3.png";
import shape4 from "../assets/shape4.png";
import shape5 from "../assets/shape5.png";
import shape6 from "../assets/shape6.png";
import shape7 from "../assets/shape7.png";
import shape8 from "../assets/shape8.png";
import shape9 from "../assets/shape9.png";
import shape10 from "../assets/shape10.png";
import shape11 from "../assets/shape11.png";
import shape12 from "../assets/shape12.png";
import shape13 from "../assets/shape13.png";
import shape14 from "../assets/shape14.png";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      image: blog1,
      title: "The Future of Web Development: Trends to Watch in 2025",
      desc: "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.",
      author: "Sarah Johnson",
      date: "January 15, 2025",
      category: "Technology",
    },
    {
      id: 2,
      image: blog2,
      title: "Building a Successful Digital Marketing Strategy",
      desc: "Learn how to create and implement a comprehensive digital marketing strategy that drives real results.",
      author: "Michael Chen",
      date: "January 12, 2025",
      category: "Marketing",
    },
    {
      id: 3,
      image: blog3,
      title: "Design Systems: Creating Consistency at Scale",
      desc: "Discover how to build and maintain design systems that ensure consistency across your entire product ecosystem.",
      author: "Emily Davis",
      date: "January 10, 2025",
      category: "Design",
    },
  ];

  const shapes = [
    shape1,
    shape2,
    shape3,
    shape4,
    shape5,
    shape6,
    shape7,
    shape8,
    shape9,
    shape10,
    shape11,
    shape12,
    shape13,
    shape14,
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div
        className="relative w-full py-20 bg-center h-full bg-cover bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${list})` }}
      >
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Blog
          </h1>
          <nav className="flex items-center space-x-2 text-sm md:text-base">
            <Link
              to="/"
              className="font-semibold text-gray-800 hover:text-[#ff9800]"
            >
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <span className="font-semibold text-[#ff9800]">Blog</span>
          </nav>
        </motion.div>
      </div>

      {/* Blog Section with Floating Shapes */}
      <section className="relative py-12 md:py-20 bg-transparent max-w-7xl mx-auto overflow-hidden">
        {/* Floating Shapes */}
        {shapes.map((shape, index) => (
          <motion.img
            key={index}
            src={shape}
            alt="shape"
            className="absolute w-10 md:w-14 opacity-70"
            style={{
              top: `${20 + index * 15}%`,
              left: `${index % 2 === 0 ? 5 : 90}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}


        {/* Blog Cards */}
        <div className="container mx-auto grid gap-8 px-4 sm:px-6 lg:px-8 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-transparent rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover rounded-t-xl"
              />

              {/* Content */}
              <div className="p-5">
                {/* Meta */}
                <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <FaUserAlt className="text-[#ff9800]" /> {blog.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="text-[#ff9800]" /> {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCircle className="text-[#ff9800]" /> {blog.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {blog.desc}
                </p>

                {/* Read More */}
                <a
                  href="#"
                  className="text-[#ff9800] font-medium hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
