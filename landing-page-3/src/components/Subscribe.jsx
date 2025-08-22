import React from "react";
import bgImage from "../assets/staybgimg.jpg";  
import { MdOutlineMail } from "react-icons/md";

export default function SubscribeSection() {
  return (
    <section
  className="relative w-full py-16 bg-cover bg-center object-contain"
  style={{
    backgroundImage: `url(${bgImage})`,
  }}
    >
      {/* Orange overlay */}
      <div className="absolute inset-0 bg-orange-500/80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8 md:mb-12">
          Stay Up to Date
        </h2>

        {/* Input + Icon */}
       <div className="flex items-center max-w-6xl mx-auto bg-transparent border-2 border-gray-400 overflow-hidden shadow-lg w-full max-w-md mb-4">
  <input
    type="email"
    placeholder="Enter your email"
    className="flex-1 px-6 py-4 text-gray-700 bg-transparent focus:outline-none text-sm sm:text-base placeholder-white"
  />
  <MdOutlineMail className="text-white text-2xl mr-4" />
</div>

        {/* Button */}
        <button className="bg-orange-800 hover:bg-orange-700 text-white font-semibold px-6 py-3 mt-3 md:mt-8 rounded-full transition duration-300">
          Subscribe
        </button>
      </div>
    </section>
  );
}
