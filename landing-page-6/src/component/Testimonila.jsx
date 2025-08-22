import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import testimonial1 from "../assets/testimonial1.png"; // replace with your image
import avatar1 from "../assets/sutd1.jpg"; // testimonial avatar
import avatar2 from "../assets/stud2.jpg";

const testimonials = [
  {
    text: "I was looking to develop my professional skills, but didn't have the time or resources to attend in-person classes. That's when I discovered Learngo. The platform offered a wide range of courses that fit my needs, and I was able to complete them on.",
    name: "Hames Rodrigo",
    role: "UI/UX Designer",
    avatar: avatar1,
    image: testimonial1,
  },
  {
    text: "Learngo helped me upskill quickly. The lessons were engaging and easy to follow, and I loved that I could learn at my own pace.",
    name: "Sophia Williams",
    role: "Product Manager",
    avatar: avatar2,
    image: testimonial1,
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  // Auto swipe every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-5 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Content */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
          What Students Say <br /> About Our Course
        </h2>

        <AnimatePresence mode="wait">
          <motion.p
            key={index + "-text"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-gray-600 mb-6"
          >
            {testimonials[index].text}
          </motion.p>
        </AnimatePresence>

        {/* Avatar + Name */}
        <div className="flex items-center gap-3 mb-6">
          <img
            src={testimonials[index].avatar}
            alt={testimonials[index].name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{testimonials[index].name}</p>
            <p className="text-sm text-gray-500">{testimonials[index].role}</p>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-6 rounded-full transition-all ${
                index === i ? "bg-sky-500" : "bg-sky-200"
              }`}
            />
          ))}
          <span className="text-gray-500 text-sm ml-2">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Right Image Slider - FULL WIDTH OF COL */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={index + "-img"}
            src={testimonials[index].image}
            alt={testimonials[index].name}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </AnimatePresence>
      </div>
    </section>
  );
}
