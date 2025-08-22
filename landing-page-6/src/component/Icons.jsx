// StatsSection.jsx
import React from "react";
import { motion } from "framer-motion";

// Import background and icons
import bgImage from "../assets/iconbg.jpg";
import iconStudents from "../assets/icon1.png";
import iconCourses from "../assets/icon2.png";
import iconTeachers from "../assets/icon3.png";
import iconSecure from "../assets/icon4.png";
import linearrow from "../assets/line-arrow.png"

const stats = [
  { id: 1, icon: iconStudents, number: "500+", label: "Satisfied Students" },
  { id: 2, icon: iconCourses, number: "300+", label: "Online Courses" },
  { id: 3, icon: iconTeachers, number: "240+", label: "Expert Teachers" },
  { id: 4, icon: iconSecure, number: "100%", label: "Secure & Trusted Place" },
];

export default function StatsSection() {
  return (
    <section
      className="relative w-full py-8 md:py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for opacity */}
      <div className="absolute inset-0 bg-[#ff9800]/60"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center text-white">
          {stats.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center relative"
            >
              {/* Icon */}
              <img
                src={item.icon}
                alt={item.label}
                className="w-20 h-20 mb-4"
              />

              {/* Number */}
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {item.number}
              </h3>

              {/* Label */}
              <p className="text-sm md:text-base">{item.label}</p>

              {/* Line + arrow (hidden on small screens) */}
              {index !== stats.length - 1 && (
                <div className="hidden md:block absolute top-16 right-[-70px] w-28">
                  <img src={linearrow} alt="arrow" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
