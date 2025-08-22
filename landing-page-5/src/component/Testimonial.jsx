import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import stud images from assets
import stud1 from "../assets/stud1.jpg";
import stud2 from "../assets/stud2.jpg";
import stud3 from "../assets/stud3.jpg";
import stud4 from "../assets/stud4.jpg";
import stud5 from "../assets/stud5.jpg";
import stud6 from "../assets/stud6.jpg";
import stud7 from "../assets/stud7.jpg";

const testimonials = [
  {
    id: 1,
    name: "Albert Einstein",
    role: "Software Engineer",
    text: "I was looking to develop my professional skills, but didn't have the time or resources to attend in-person classes. That's when I discovered Learngo. The platform offered a wide range of courses that fit my needs, and I was able to complete them on.",
    image: stud1,
  },
  {
    id: 2,
    name: "John Doe",
    role: "Web Developer",
    text: "Learngo helped me grow professionally. The courses are well-structured and easy to follow. Highly recommend it!",
    image: stud2,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    text: "Amazing platform! The instructors are knowledgeable and the community support is fantastic.",
    image: stud3,
  },
  {
    id: 4,
    name: "Michael Lee",
    role: "Digital Marketer",
    text: "Thanks to Learngo, I transitioned into a new career smoothly. The certifications are valuable too.",
    image: stud4,
  },
  {
    id: 5,
    name: "Emily Davis",
    role: "Project Manager",
    text: "Very user-friendly and offers a great variety of professional courses. Love it!",
    image: stud5,
  },
  {
    id: 6,
    name: "David Brown",
    role: "Business Analyst",
    text: "Learngo gave me confidence with real-world knowledge. Absolutely worth it.",
    image: stud6,
  },
  {
    id: 7,
    name: "Sophia Wilson",
    role: "Software Tester",
    text: "I loved how interactive and flexible the platform is. Learngo really exceeded my expectations.",
    image: stud7,
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  // Auto swipe every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 md:py-16 px-6 md:px-20 bg-orange-50">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
        What Our Students Say <br /> About Coursemat
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left side: testimonial */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[current].id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-700 text-base md:text-xl mb-6">
                “{testimonials[current].text}”
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 capitalize">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>

              {/* Indicator (CLICKABLE) */}
              <div className="flex items-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                      i === current ? "w-8 bg-[#ff9800]" : "w-4 bg-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-4 text-gray-500 text-sm">
                  {String(current + 1).padStart(2, "0")} /{" "}
                  {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right side: stud images cluster */}
        <div className="relative flex justify-center items-center">
          <div className="w-80 h-80 bg-orange-200 rounded-[50%] relative">
            {testimonials.map((stud, i) => {
              // distribute images in a circle
              const angle = (i / testimonials.length) * 2 * Math.PI;
              const radius = 130;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <motion.img
                  key={i}
                  src={stud.image}
                  alt={stud.name}
                  className={`w-16 h-16 rounded-full object-cover border-4 cursor-pointer ${
                    i === current ? "border-[#ff9800] scale-110" : "border-white"
                  } absolute transition-all duration-500`}
                  style={{
                    left: `calc(50% + ${x}px - 32px)`,
                    top: `calc(50% + ${y}px - 32px)`,
                  }}
                  onClick={() => setCurrent(i)} 
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
