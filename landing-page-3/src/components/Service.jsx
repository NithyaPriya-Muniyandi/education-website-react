import React from "react";
import bgImage from "../assets/categorybg.jpeg";
import { FaLaptopCode, FaPaintRoller, FaChartBar, FaSmile } from "react-icons/fa";

export default function ServicesSection() {
  return (
    <section className="relative py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-orange-500/80"></div> 
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Card 1 - Software Development */}
          <div className="flex flex-col items-center px-2 py-12 border-2 border-gray-300">
            <div className="p-4 bg-white rounded-full mb-4 text-red-500 text-3xl">
              <FaLaptopCode />
            </div>
            <h3 className="text-base font-semibold text-white">Software Development</h3>
          </div>

          {/* Card 2 - Web Design */}
          <div className="flex flex-col items-center px-2 py-12 border-2 border-gray-300">
            <div className="p-4 bg-white rounded-full mb-4 text-pink-500 text-3xl">
              <FaPaintRoller />
            </div>
            <h3 className="text-base font-semibold text-white">Web Design</h3>
          </div>

          {/* Card 3 - Digital Marketing */}
          <div className="flex flex-col items-center px-2 py-12 border-2 border-gray-300">
            <div className="p-4 bg-white rounded-full mb-4 text-green-500 text-3xl">
              <FaChartBar />
            </div>
            <h3 className="text-base font-semibold text-white">Digital Marketing</h3>
          </div>

          {/* Card 4 - Personal Development */}
          <div className="flex flex-col items-center px-2 py-12 border-2 border-gray-300">
            <div className="p-4 bg-white rounded-full mb-4 text-yellow-500 text-3xl">
              <FaSmile />
            </div>
            <h3 className="text-base font-semibold text-white">Personal Development</h3>
          </div>

        </div>
      </div>
    </section>
  );
}
