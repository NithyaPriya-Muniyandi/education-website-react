import React from "react";
import bgBanner from "../assets/bannerbg.jpg"; 
import sideImage from "../assets/bannerright.png"; 

export default function BannerSection() {
  return (
    <section
      className="relative w-full bg-cover bg-center h-[90vh]" // 80% viewport height
      style={{ backgroundImage: `url(${bgBanner})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-orange-500 bg-opacity-60"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center h-full">
        
        {/* Left Text Section */}
        <div className="text-center md:text-left md:w-1/2 flex flex-col gap-6 z-10">
          <span className="text-white uppercase tracking-widest text-base sm:text-lg text-center">
            COURSELA DIGITAL INSTITUTE
          </span>
          <h1 className="text-white text-center text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            The New Way to Learn
          </h1>
          <div className="flex flex-row gap-4 mt-6 justify-center">
            <a
              href="#our-course"
              className="bg-[#ff9800] text-white px-6 py-3 rounded-md text-center font-semibold hover:bg-orange-600 transition"
            >
              Our Course
            </a>
            <a
              href="#meet-instructor"
              className="bg-[#ff9800] text-white px-6 py-3 rounded-md text-center font-semibold hover:bg-orange-600 transition"
            >
              Meet Instructor
            </a>
          </div>
        </div>
      </div>

      {/* Right Bottom Image */}
      <img
        src={sideImage}
        alt="Illustration"
        className="absolute bottom-0 right-0 w-64 sm:w-80 md:w-96 lg:w-[500px] object-contain"
      />
    </section>
  );
}
