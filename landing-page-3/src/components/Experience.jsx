import React from "react";
import sampleImage from "../assets/coursela.jpg"; 

export default function ExperienceSection() {
  return (
    <section className="bg-orange-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Column - Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={sampleImage}
            alt="Experience"
            className="w-full md:w-[80%] h-auto shadow-lg"
          />
        </div>

        {/* Right Column - Text */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <span className="text-blue-500 font-semibold text-lg">
            25 Years Of Experience
          </span>
          <h2 className="text-[#ff9800] font-bold text-3xl sm:text-5xl mb-6">
            Here We Are For Coursela LMS
          </h2>
          <p className="text-gray-500 text-base sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation. Ullamco laboris nisi ut aliquip.
          </p>
        </div>

      </div>
    </section>
  );
}
