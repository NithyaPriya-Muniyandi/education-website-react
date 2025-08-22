import React, { useState, useEffect, useRef } from "react";
import bgImage from "../assets/scrollbg.jpg"; 
import dottedArrow from "../assets/scrolldot.png"; 

const StatsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-fixed bg-cover bg-center h-[70vh] flex items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Orange Overlay */}
      <div
        className={`absolute inset-0 bg-orange-500 transition-opacity duration-700 ${
          isVisible ? "opacity-70" : "opacity-0"
        }`}
      ></div>

      {/* Dotted Arrow */}
      <img
        src={dottedArrow}
        alt="Dotted Arrow"
        className="absolute w-auto h-auto"
      />

      {/* Content */}
      <div className="relative z-10 container px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-white mb-8 md:mb-16">Some Fun Facts from Us</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <h3 className="text-2xl md:text-7xl font-bold">20+</h3>
            <p className="mt-2 text-base md:text-lg font-medium">Qualified Instructors
</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-7xl font-bold">1490+</h3>
            <p className="mt-2 text-base md:text-lg font-medium">Worldwide Students
</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-7xl font-bold">100+</h3>
            <p className="mt-2 text-base md:text-lg font-medium">Courses
</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-7xl font-bold">10+</h3>
            <p className="mt-2 text-base md:text-lg font-medium ">Courses
</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
