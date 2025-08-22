import React from "react";
import bgImage from "../assets/graduatebg.jpg"; // background image
import graduateImage from "../assets/graduatefrontimg.png"; // graduate image

const OfferSection = () => {
  return (
    <section
      className="relative w-full py-12 sm:py-16 lg:py-20"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Orange overlay */}
      <div className="absolute inset-0 bg-orange-500 bg-opacity-80"></div>

      {/* Content container */}
      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        
        {/* Left Column */}
        <div className="text-white space-y-4">
          <p className="text-lg md:text-2xl">Are You Ready for This Offer?</p>
          <h2 className="text-3xl sm:text-6xl font-bold leading-tight">
            50% Offer for Very First 50 Students and Mentors.
          </h2>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow transition">
              Become A Student
            </a>
            <a href="#" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-full shadow transition">
              All Courses
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={graduateImage}
            alt="Graduate"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
