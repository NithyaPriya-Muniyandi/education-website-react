import React, { useState, useEffect } from "react";
import bgImage from "../assets/testbg.webp";
import quoteIcon from "../assets/quote.png";
import sarahImg from "../assets/testimg1.webp";
import jefImg from "../assets/testimg2.webp";

const testimonials = [
  {
    text: "Our service is free to users because vendors pay us when they receive web traffic. We list all vendors - not just those that pay us - in our comprehensive directory so that you can compare, sort and filter your results to make the most informed decision possible. Get App is a Gartner company. Gartner (NYSE: IT) is the world's leading information technology research.",
    name: "Jef Hardy",
    role: "Instructor",
    img: jefImg,
  },
  {
    text: "Our service is free to users because vendors pay us when they receive web traffic. We list all vendors - not just those that pay us - in our comprehensive directory so that you can compare, sort and filter your results to make the most informed decision possible. Get App is a Gartner company. Gartner (NYSE: IT) is the world's leading information technology research.",
    name: "Sarah Collins",
    role: "Product Manager",
    img: sarahImg,
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  const handleNext = () => {
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
      setAnimating(false);
    }, 500); // matches transition duration
  };

  const handlePrev = () => {
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 500);
  };

  const { text, name, role, img } = testimonials[index];

  return (
    <section
      className="max-w-6xl mx-auto py-16 bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className={`max-w-4xl mx-auto text-center px-4 transform transition-all duration-500 ease-in-out ${
          animating ? "opacity-0 translate-x-5" : "opacity-100 translate-x-0"
        }`}
      >
        {/* Quote Icon */}
        <div className="flex justify-center mb-6">
          {quoteIcon ? (
            <img src={quoteIcon} alt="Quote" className="w-16 h-16" />
          ) : (
            <div className="text-orange-500 text-4xl">❝</div>
          )}
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-500 md:text-base text-sm leading-loose mb-8">
          {text}
        </p>

        {/* Profile */}
        <div className="flex flex-col items-center">
          <img
            src={img}
            alt={name}
            className="w-16 h-16 rounded-full object-cover mb-2"
          />
          <h3 className="font-bold text-lg text-gray-900">{name}</h3>
          <p className="text-orange-500 text-sm">{role}</p>
        </div>
      </div>

<button
  onClick={handlePrev}
  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-orange-300 hover:bg-orange-500 flex items-center justify-center bg-white/30 hover:bg-white transition"
>
  <i className="fas fa-arrow-left hover:text-white text-xl"></i>
</button>

<button
  onClick={handleNext}
  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-orange-300 hover:bg-orange-500 flex items-center justify-center bg-white/30 hover:bg-white transition"
>
  <i className="fas fa-arrow-right hover:text-white text-2xl"></i>
</button>



    </section>
  );
}
