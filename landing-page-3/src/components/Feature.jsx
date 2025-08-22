import React from "react";
import { FaChalkboardTeacher, FaGripVertical } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";

export default function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#ff9800] mb-12">Our Features</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="flex flex-col items-center border-2 border-gray-300 p-6">
          <div className="flex items-center justify-center w-20 h-20 border-t-4 border-b-4 border-blue-500 rounded-full border-rotate-45 mb-4 text-blue-500 text-3xl">
  <FaChalkboardTeacher />
</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Course Completion Certificate</h3>
            <p className="text-gray-600 text-center text-sm md:text-base">
              See the E Learning Tools your competitors are already using - Start Now! Get App helps more than 800k businesses find the best software for their needs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center border-2 border-gray-300 p-6">
           <div className="flex items-center justify-center w-20 h-20 border-t-4 border-b-4 border-violet-500 rounded-full border-rotate-45 mb-4 text-violet-500 text-3xl">
  <FaBook />
</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quizzes, Videos, Code Snippets & More</h3>
            <p className="text-gray-600 text-center text-sm md:text-base">
              See the E Learning Tools your competitors are already using - Start Now! Get App helps more than 800k businesses find the best software for their needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center border-2 border-gray-300 p-6">
           <div className="flex items-center justify-center w-20 h-20 border-t-4 border-b-4 border-red-500 rounded-full border-rotate-45 mb-4 text-red-500 text-3xl">
  <FaGripVertical />
</div>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">Drag & Drop Lesson Contents Decoration</h3>
            <p className="text-gray-600 text-center text-sm md:text-base">
              See the E Learning Tools your competitors are already using - Start Now! Get App helps more than 800k businesses find the best software for their needs.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
