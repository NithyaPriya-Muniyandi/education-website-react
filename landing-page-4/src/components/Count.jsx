import React from "react";
import studentsImg from "../assets/count1.png";
import coursesImg from "../assets/count2.png";
import instructorImg from "../assets/count3.png";
import secureImg from "../assets/count4.png";

const stats = [
  {
    id: 1,
    image: studentsImg,
    count: "500+",
    label: "Satisfied Students",
  },
  {
    id: 2,
    image: coursesImg,
    count: "300+",
    label: "Online Courses",
  },
  {
    id: 3,
    image: instructorImg,
    count: "240+",
    label: "Verified Instructor",
  },
  {
    id: 4,
    image: secureImg,
    count: "100%",
    label: "Secure & Trusted Place",
  },
];

export default function StatsSection() {
  return (
  <section className="md:mb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-lg rounded-lg py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center">
              <img
                src={stat.image}
                alt={stat.label}
                className="w-16 h-16 mb-4 object-contain"
              />
              <h3 className="text-2xl font-bold">{stat.count}</h3>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
