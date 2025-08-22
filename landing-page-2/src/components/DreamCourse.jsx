import React from "react";
import { FaSearch } from "react-icons/fa";
const FeatureSection = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 text-white">
      
      {/* Box 1 */}
      <div className="bg-[#007bff] p-8 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Find Your Dream Course</h2>
        <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg max-w-lg">
      <div className="flex items-center flex-1 px-4">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search Course Here"
          className="flex-1 py-3 text-sm text-gray-700 focus:outline-none"
        />
      </div>
      <a
        href="https://corsmat.xyz/MoniLearning/courses?keyword="
        className="bg-orange-500 px-6 py-3 text-white font-semibold hover:bg-orange-600 transition-colors"
      >
        Find Course
      </a>
    </div>
      </div>

      {/* Box 2 */}
      <div className="bg-[#1ec6ff] p-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Quizzes, Videos, Code Snippets & More
        </h2>
        <p className="text-white/90 md:text-base text-sm leading-loose">
          See the E Learning Tools your competitors are already using – Start
          Now! Get App helps more than 800k businesses find the best software
          for their needs.
        </p>
      </div>

      {/* Box 3 */}
      <div className="bg-[#9b59ff] p-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Highly Qualified Mentors & Instructors
        </h2>
        <p className="text-white/90 md:text-base text-sm leading-loose">
          See the E Learning Tools your competitors are already using – Start
          Now! Get App helps more than 800k businesses find the best software
          for their needs.
        </p>
      </div>
    </div>
  );
};

export default FeatureSection;
