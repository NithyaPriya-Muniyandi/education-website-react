import React from "react";
import { motion } from "framer-motion";
import { FaFileAlt, FaFolderOpen, FaUserGraduate } from "react-icons/fa";

import img1 from "../assets/learningimg.png"; // single image

export default function LearningExperience() {
  return (
    <section className="relative px-4 md:px-12 py-8 md:py-16 bg-[#ff9800]/5 overflow-hidden">
      {/* Decorative Icons (sprinkled) */}
      <FaFileAlt className="absolute top-10 left-10 text-pink-400 text-2xl opacity-40 animate-bounce" />
      <FaFolderOpen className="absolute bottom-20 left-20 text-yellow-400 text-2xl opacity-40 animate-pulse" />
      <FaUserGraduate className="absolute top-20 right-20 text-blue-400 text-2xl opacity-30 animate-spin-slow" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="rounded-2xl overflow-hidden w-full">
            <img
              src={img1}
              alt="student"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Transform Your Learning <br /> Experience With Us
          </h2>
          <p className="text-gray-600 py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has been the industry's standard dummy text ever since
            an unknown printer took a galley of type.
          </p>

          {/* Features */}
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-lg text-xl">
                <FaFileAlt />
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Course Complete Certificate
                </h4>
                <p className="text-gray-500 text-sm">
                  Completed course get certificate
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-yellow-100 text-yellow-600 rounded-lg text-xl">
                <FaFolderOpen />
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Quizzes, Videos, Code & More
                </h4>
                <p className="text-gray-500 text-sm">
                  All materials quizzes, video & more
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-100 text-orange-600 rounded-lg text-xl">
                <FaUserGraduate />
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Highly Qualified Instructors
                </h4>
                <p className="text-gray-500 text-sm">
                  Learn with top instructors worldwide
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Extra sprinkle icons */}
      <FaFileAlt className="absolute bottom-10 right-10 text-green-400 text-2xl opacity-30 animate-ping" />
    </section>
  );
}
