import React from "react";
import girlImage from "../assets/girl.jpeg"; // replace with your image

const FeaturesSection = () => {
  const features = [
    {
      title: "Course Completion Certificate",
      description:
        "See the E Learning Tools your competitors are already using - Start Now! Get App helps more than 800k businesses find the best software for their needs.",
      bg: "bg-sky-400",
    },
    {
      title: "Quizzes, Videos, Code Snippets & More",
      description:
        "See the E Learning Tools your competitors are already using - Start Now! Get App helps more than 800k businesses find the best software for their needs.",
      bg: "bg-purple-400",
    },
    {
      title: "Highly Qualified Mentors & Instructors",
      description:
        "See the E Learning Tools your competitors are already using - Start Now! Get App helps more than 800k businesses find the best software for their needs.",
      bg: "bg-blue-600",
    },
    {
      title: "Drag & Drop Lesson Contents Decoration",
      description:
        "See the E Learning Tools your competitors are already using - Start Now! Get App helps more than 800k businesses find the best software for their needs.",
      bg: "bg-green-500",
    },
  ];

  return (
    <section className="relative bg-gray-100 overflow-hidden">
      {/* Right-side full-height image */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/3">
        <img
          src={girlImage}
          alt="Student"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.bg} text-white p-6 shadow-md`}
              >
                {/* Small Triangle */}
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-b-[10px] border-b-white mb-4"></div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
