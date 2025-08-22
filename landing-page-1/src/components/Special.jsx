import React from "react";
import BgImage from "../assets/sploffer.jpg";

const SpecialOffer = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url(${BgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-orange-500/70"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center py-20 px-4">
        <p className="text-white text-lg md:text-xl mb-4">
          Are You Ready for This Offer?
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          50% Offer for Very First 50 Students and Mentors
        </h1>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-gray-600 hover:bg-gray-400 text-white font-semibold px-6 py-3 rounded-full shadow-md">
            Become A Student
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-md">
            All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
