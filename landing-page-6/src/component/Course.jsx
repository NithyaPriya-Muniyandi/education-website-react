// TrendingCategories.jsx
import React, { useState } from "react";
import { FaUserAlt, FaStar } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { motion } from "framer-motion";

// Sample images (replace with your own imports)
import img1 from "../assets/course1.jpg";
import img2 from "../assets/course2.jpg";
import img3 from "../assets/course3.jpg";
import img4 from "../assets/course4.jpg";
import img5 from "../assets/course5.jpg";
import img6 from "../assets/course6.png";
import img7 from "../assets/course7.png";
import img8 from "../assets/course8.jpg";

export default function TrendingCategories() {
  const [activeTab, setActiveTab] = useState("All");

  const courses = [
    {
      id: 1,
      category: "Web Design",
      title: "A Complete Website Design Using Html, Css & Jq...",
      author: "James William",
      students: 145,
      rating: 4.9,
      price: "$150.00",
      image: img1,
      link: "https://corsmat.xyz/tony/course/full-uiux-design---adobe-photoshop,-figma,-xd",
    },
    {
      id: 2,
      category: "Web Development",
      title: "Full Stack Web Development Course - HTML, CSS...",
      author: "Emma Watson",
      students: 180,
      rating: 4.8,
      price: "$199.00",
      image: img2,
      link: "https://corsmat.xyz/tony/course/full-uiux-design---adobe-photoshop,-figma,-xd",
    },
    {
      id: 3,
      category: "Web Design",
      title: "Full UI/UX Design - Adobe Photoshop, Figma, X...",
      author: "John Smith",
      students: 95,
      rating: 4.7,
      price: "$130.00",
      image: img3,
      link: "https://corsmat.xyz/tony/course/full-uiux-design---adobe-photoshop,-figma,-xd",
    },
    {
      id: 4,
      category: "Digital Marketing",
      title: "Online Marketing For Your Local Business Made...",
      author: "Sophia Lee",
      students: 210,
      rating: 5.0,
      price: "$120.00",
      image: img4,
      link: "https://corsmat.xyz/tony/course/full-uiux-design---adobe-photoshop,-figma,-xd",
    },
    {
      id: 5,
      category: "Digital Marketing",
      title: "Social Media Marketing - Facebook, Website...",
      author: "Chris Martin",
      students: 160,
      rating: 4.6,
      price: "$110.00",
      image: img5,
      link: "https://corsmat.xyz/tony/course/full-uiux-design---adobe-photoshop,-figma,-xd",
    },
    {
      id: 6,
      category: "Self Development",
      title: "How to Become Super Productive & Own Super...",
      author: "Olivia Brown",
      students: 75,
      rating: 4.5,
      price: "$99.00",
      image: img6,
      link: "https://corsmat.xyz/tony/course/full-uiux-design---adobe-photoshop,-figma,-xd",
    },
    {
      id: 7,
      category: "Web Development",
      title: "PHP Web Development Course with Real World Pr...",
      author: "Daniel Green",
      students: 140,
      rating: 4.9,
      price: "$170.00",
      image: img7,
      link: "https://corsmat.xyz/tony/course/full-uiux-design---adobe-photoshop,-figma,-xd",
    },
    {
      id: 8,
      category: "Web Development",
      title: "Laravel Full Course with Real World Project...",
      author: "Sophia White",
      students: 200,
      rating: 5.0,
      price: "$220.00",
      image: img8,
      link: "https://corsmat.xyz/tony/course/full-uiux-design---adobe-photoshop,-figma,-xd",
    },
  ];

  const tabs = [
    "All",
    "Web Design",
    "Web Development",
    "Digital Marketing",
    "Self Development",
    "Graphics Design",
  ];

  const filteredCourses =
    activeTab === "All"
      ? courses
      : courses.filter((course) => course.category === activeTab);

  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-gray-800"
        >
          Our Latest Courses
        </motion.h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 md:px-5 py-2 rounded-full text-sm md:text-base font-medium transition ${
                activeTab === tab
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-orange-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group relative"
              >
                {/* Image with hover zoom + Enroll Now overlay */}
                <div className="overflow-hidden relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover transform transition duration-500 group-hover:scale-110"
                  />
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500"
                  >
                    <button className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition">
                      Enroll Now
                    </button>
                  </a>
                </div>

                {/* Content */}
                <div className="p-5 text-left">
                  <span className="text-sm text-orange-500 font-semibold">
                    {course.category}
                  </span>
                  <h3 className="text-lg font-bold mt-2 text-gray-800 line-clamp-2">
                    {course.title}
                  </h3>

                  {/* Author */}
                  <div className="flex items-center text-sm text-gray-500 mt-2">
                    <FaUserAlt className="mr-2 text-orange-400" />
                    {course.author}
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <HiUserGroup className="text-orange-400" />
                      {course.students}
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <FaStar /> {course.rating}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-4 text-lg font-bold text-orange-500">
                    {course.price}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No Courses Found</p>
        )}
      </div>
    </section>
  );
}
