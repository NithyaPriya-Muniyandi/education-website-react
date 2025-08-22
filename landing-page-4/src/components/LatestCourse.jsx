import React, { useState } from "react";
import dm1 from "../assets/course1.jpg";
import web1 from "../assets/course2.jpg";
import sd1 from "../assets/course3.png";
import ui1 from "../assets/course4.jpg";
import sd2 from "../assets/course5.jpg";
import web2 from "../assets/course6.jpg";

const courses = [
  {
    id: 1,
    category: "Digital Marketing",
    title: "Social Media Marketing - Facebook, Website, ...",
    instructor: "Nicolo Zan...",
    duration: "07h 04m",
    price: "$160.00",
    oldPrice: "$200.00",
    lessons: 1,
    image: dm1,
  },
  {
    id: 2,
    category: "Web Development",
    title: "Laravel Full Course with Real World Project - ...",
    instructor: "John Doe",
    duration: "07h 19m",
    price: "$100.00",
    lessons: 3,
    image: web1,
  },
  {
    id: 3,
    category: "Software Development",
    title: "PHP Web Development Course with Real World Pr...",
    instructor: "Nicolo Zan...",
    duration: "06h 15m",
    price: "$999.00",
    oldPrice: "$1040.00",
    lessons: 2,
    image: sd1,
  },
  {
    id: 4,
    category: "Web UI Design",
    title: "Build Landing Page Website with HTML, CSS, Ja...",
    instructor: "Jack Oram",
    duration: "07h 19m",
    price: "$60.00",
    lessons: 1,
    image: ui1,
  },
  {
    id: 5,
    category: "Software Development",
    title: "Mobile App Development with React Native, Hyb...",
    instructor: "Jack Oram",
    duration: "06h 10m",
    price: "Free",
    lessons: 3,
    image: sd2,
  },
  {
    id: 6,
    category: "Web Development",
    title: "Full Stack Web Development Course - HTML, CSS...",
    instructor: "Nicolo Bar...",
    duration: "06h 08m",
    price: "Free",
    lessons: 2,
    image: web2,
  },
];

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    "All",
    "Digital Marketing",
    "Software Development",
    "Web Development",
    "Web UI Design",
  ];

  const filteredCourses =
    activeTab === "All"
      ? courses
      : courses.filter((course) => course.category === activeTab);

  return (
    <section className="px-4 md:px-8 py-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-0">
          Our Latest Course
        </h2>

        <div className="flex flex-wrap gap-2 md:gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-[#ff9800] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-orange-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="relative border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
          >
            {/* Image */}
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />

            {/* Enroll Button on Hover */}
            <a
              href="https://corsmat.xyz/james/course/full-stack-web-development-course---html,-css,-js,-php"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <button className="px-6 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[#ff9800] to-pink-500 hover:from-pink-500 hover:to-orange-500 transition-all">
                Enroll Now
              </button>
            </a>

            <div className="p-4">
              <p className="text-sm text-[#ff9800] font-semibold mb-1">
                {course.category}
              </p>
              <h3 className="text-lg font-semibold line-clamp-2">
                {course.title}
              </h3>
              <p className="text-gray-500 text-sm">{course.instructor}</p>
              <div className="flex items-center justify-between mt-4 text-sm">
                <span className="font-semibold">{course.price}</span>
                {course.oldPrice && (
                  <span className="line-through text-gray-400">
                    {course.oldPrice}
                  </span>
                )}
                <span className="text-gray-500">{course.duration}</span>
              </div>
              <p className="mt-2 text-gray-500 text-sm">
                {course.lessons} Lesson{course.lessons > 1 ? "s" : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
