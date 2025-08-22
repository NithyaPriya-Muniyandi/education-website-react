import React from "react";
import { motion } from "framer-motion";
import {
  FaPaintRoller,
  FaCode,
  FaChartBar,
  FaSmile,
  FaPenNib,
  FaStar,
  FaCircle,
  FaPlus,
} from "react-icons/fa";

const courses = [
  {
    icon: <FaPaintRoller className="text-white text-3xl" />,
    title: "Web Design",
    bg: "bg-cyan-400",
  },
  {
    icon: <FaCode className="text-white text-3xl" />,
    title: "Web Development",
    bg: "bg-yellow-400",
  },
  {
    icon: <FaChartBar className="text-white text-3xl" />,
    title: "Digital Marketing",
    bg: "bg-orange-400",
  },
  {
    icon: <FaSmile className="text-white text-3xl" />,
    title: "Self Development",
    bg: "bg-blue-500",
  },
  {
    icon: <FaPenNib className="text-white text-3xl" />,
    title: "Graphics Design",
    bg: "bg-green-500",
  },
];

export default function PopularCourses() {
  return (
    <section className="relative py-8 md:py-16 px-4 md:px-12 bg-white overflow-hidden">
      {/* Sprinkled decorative icons */}
      <FaStar className="absolute top-10 left-10 text-yellow-400 text-3xl opacity-30 animate-ping" />
      <FaCircle className="absolute bottom-20 left-16 text-blue-400 text-4xl opacity-30 animate-bounce" />
      <FaPlus className="absolute top-1/2 right-10 text-pink-500 text-2xl opacity-40 animate-pulse" />
      <FaStar className="absolute bottom-12 right-1/4 text-green-400 text-3xl opacity-30 animate-spin-slow" />

      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold mb-6 md:mb-12"
        >
          Most Popular Course
        </motion.h2>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 border flex flex-col items-center"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-lg shadow-md ${course.bg}`}
              >
                {course.icon}
              </div>
              <h4 className="mt-4 font-semibold text-lg">{course.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
