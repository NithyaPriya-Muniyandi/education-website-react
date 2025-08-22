import React, { useState, useEffect } from "react";
import { FaQuoteRight } from "react-icons/fa";
import leftIllustration from "../assets/aboutaniimg.png"; 
import person1 from "../assets/stud1.jpg";
import person2 from "../assets/stud2.jpg";

export default function TestimonialSection() {
  const testimonials = [
    {
      text: "I was looking to develop my professional skills, but didn't have the time or resources to attend in-person classes. That's when I discovered Learngo. The platform offered a wide range of courses that fit my needs, and I was able to complete them on.",
      name: "Hames Rodrigo",
      role: "UI/UX Designer",
      image: person1,
    },
    {
      text: "I was looking to develop my professional skills, but didn't have the time or resources to attend in-person classes. That's when I discovered Learngo. The platform offered a wide range of courses that fit my needs, and I was able to complete them on.",
      name: "Hames Rodrigo",
      role: "UI/UX Designer",
      image: person2,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = (index) => {
    setIsAnimating(true);
    setTimeout(() => {
      if (index !== undefined) {
        setCurrentIndex(index);
      } else {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }
      setIsAnimating(false);
    }, 300); // animation duration
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-8 md:py-16 grid md:grid-cols-2 gap-10 items-center">
      
      {/* Left Image */}
      <div className="flex justify-center">
        <img
          src={leftIllustration}
          alt="Student at desk"
          className="w-full max-w-md object-contain"
        />
      </div>

      {/* Right Content */}
      <div className="relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What Students Say <br /> About Our Courses
        </h2>

        {/* Animated Testimonial Text */}
        <div
          className={`transition-all duration-300 transform ${
            isAnimating ? "opacity-0 translate-x-5" : "opacity-100 translate-x-0"
          }`}
        >
          <p className="text-gray-600 mb-6">{testimonials[currentIndex].text}</p>

          {/* Author */}
          <div className="flex items-center gap-4">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
              <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
            </div>
            <FaQuoteRight className="text-3xl text-purple-100 ml-auto" />
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute -left-10 bottom-0 flex flex-col items-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleNext(idx)}
              className="flex flex-col items-center focus:outline-none"
            >
              <span
                className={`text-xs ${
                  idx === currentIndex ? "text-black" : "text-gray-400"
                }`}
              >
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div
                className={`w-1 h-8 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-gradient-to-b from-pink-500 to-purple-400"
                    : "bg-gray-200"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
