import React from "react";
import { FaSearch, FaDesktop, FaPalette, FaChartBar, FaIdBadge } from "react-icons/fa";
import MyImage from "../assets/iconimgbot.png";

// Search Card Component
const SearchCard = () => {
  return (
    <div className="relative max-w-5xl mx-auto -mt-[100px] mb-16 bg-white rounded-2xl shadow-lg p-8 md:p-16 z-30">
      <h2 className="text-center text-lg font-semibold text-orange-600 mb-6">
        Find Your Dream Course
      </h2>

     <div className="flex flex-col sm:flex-row items-stretch bg-white rounded-full border border-gray-200 shadow-md overflow-hidden max-w-4xl mx-auto">
  {/* Search Input */}
  <div className="flex items-center gap-3 px-4 flex-1">
    <FaSearch className="text-orange-500" />
    <input
      type="text"
      placeholder="Search Course Here"
      className="flex-1 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
    />
  </div>

  {/* Divider */}
  <div className="w-px bg-gray-300 hidden sm:block"></div>

  {/* Category Dropdown */}
  <div className="flex items-center px-4 border-t sm:border-t-0 sm:border-l border-gray-200">
    <select className="py-3 px-2 w-full sm:w-auto text-gray-500 focus:outline-none bg-transparent">
      <option>Select a Category</option>
      <option>Development</option>
      <option>Design</option>
      <option>Marketing</option>
    </select>
  </div>

  {/* Divider */}
  <div className="w-px bg-gray-300 hidden sm:block"></div>

  {/* Button */}
  <a
    href="https://corsmat.xyz/peter/courses?keyword="
    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 flex items-center justify-center transition-all duration-300"
  >
    Find Course
  </a>
</div>

    </div>
  );
};

// Course Categories Data
const courses = [
  {
    title: "Software Development",
    icon: <FaDesktop className="text-[#FF154C] text-6xl transition-colors duration-300 group-hover:text-white" />,
  },
  {
    title: "Web Design",
    icon: <FaPalette className="text-yellow-400 text-6xl transition-colors duration-300 group-hover:text-white" />,
  },
  {
    title: "Digital Marketing",
    icon: <FaChartBar className="text-blue-500 text-6xl transition-colors duration-300 group-hover:text-white" />,
  },
  {
    title: "Personal Development",
    icon: <FaIdBadge className="text-pink-400 text-6xl transition-colors duration-300 group-hover:text-white" />,
  },
];

// Main Component
const CourseCategories = () => {
  return (
    <section className="relative py-12 px-4">
      {/* Search Card */}
      <SearchCard />

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10">
        Course Categories
      </h2>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center p-8 border border-gray-200 bg-white 
                       hover:bg-orange-500 hover:scale-105 transform transition-all duration-300 cursor-pointer"
          >
            <div className="mb-4">{course.icon}</div>
            <h3 className="text-lg font-semibold text-blue-900 group-hover:text-white transition-colors duration-300">
              {course.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Bottom Image */}
      <div className="max-w-5xl mx-auto text-center mt-8">
        <img src={MyImage} alt="Description" className="mx-auto inline-block" />
      </div>
    </section>
  );
};

export default CourseCategories;
