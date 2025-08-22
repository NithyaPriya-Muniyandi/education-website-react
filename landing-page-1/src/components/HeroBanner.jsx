import React from "react";
import bannerBg from "../assets/herobanner.jpg";
import stoneLeft from "../assets/item-1.png";
import bookRight from "../assets/item-2.png";

const HeroBanner = () => {
  return (
    <section
      className="relative w-full bg-cover h-[85vh] bg-center bg-no-repeat text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bannerBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(0,27,97,0.302)]"></div>

      {/* Stone Left */}
      <img
        src={stoneLeft}
        alt="Decorative Stone"
        className="absolute top-20 left-0 w-16 sm:w-20 lg:w-40 animate-bounce z-10"
      />

      {/* Content Wrapper */}
      <div className="relative container mx-auto px-4 py-20 lg:py-28 flex">
        {/* Left column 5/12 */}
        <div className="w-full md:ml-40 z-10">
          <p className="uppercase text-lg tracking-widest text-gray-200 mb-4">
            COURSERA DIGITAL INSTITUTE
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            The New Way <br /> to Learn
          </h1>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <button className="bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition duration-300">
              Our Courses
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-gray-200 hover:text-gray-900 transition duration-300">
              Meet Instructors
            </button>
          </div>
        </div>
      </div>

      {/* Book Right */}
      <img
        src={bookRight}
        alt="Book Illustration"
        className="absolute bottom-5 right-0 w-32 sm:w-40 lg:w-60 z-10"
      />
    </section>
  );
};

export default HeroBanner;
