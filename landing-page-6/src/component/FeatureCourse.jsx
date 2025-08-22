import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

import dm1 from "../assets/course1.jpg";
import web1 from "../assets/course2.jpg";
import sd1 from "../assets/course3.jpg";
import ui1 from "../assets/course4.jpg";
import sd2 from "../assets/course5.jpg";
import web2 from "../assets/course6.png";
import dm2 from "../assets/course7.png";
import ui2 from "../assets/course8.jpg";

const courses = [
  { id: 1, category: "Digital Marketing", title: "Social Media Marketing - Facebook, Website, ...", instructor: "Nicolo Zan...", duration: "07h 04m", price: "$160.00", oldPrice: "$200.00", lessons: 1, image: dm1 },
  { id: 2, category: "Web Development", title: "Laravel Full Course with Real World Project - ...", instructor: "John Doe", duration: "07h 19m", price: "$100.00", lessons: 3, image: web1 },
  { id: 3, category: "Software Development", title: "PHP Web Development Course with Real World Pr...", instructor: "Nicolo Zan...", duration: "06h 15m", price: "$999.00", oldPrice: "$1040.00", lessons: 2, image: sd1 },
  { id: 4, category: "Web UI Design", title: "Build Landing Page Website with HTML, CSS, Ja...", instructor: "Jack Oram", duration: "07h 19m", price: "$60.00", lessons: 1, image: ui1 },
  { id: 5, category: "Software Development", title: "Mobile App Development with React Native, Hyb...", instructor: "Jack Oram", duration: "06h 10m", price: "Free", lessons: 3, image: sd2 },
  { id: 6, category: "Web Development", title: "Full Stack Web Development Course - HTML, CSS...", instructor: "Nicolo Bar...", duration: "06h 08m", price: "Free", lessons: 2, image: web2 },
  { id: 7, category: "Digital Marketing", title: "Google Ads & SEO Mastery - Grow Your Business...", instructor: "Sarah Lee", duration: "05h 45m", price: "$120.00", lessons: 4, image: dm2 },
  { id: 8, category: "UI/UX Design", title: "Figma UI UX Design Course with Projects...", instructor: "Alex Kim", duration: "08h 10m", price: "$80.00", lessons: 2, image: ui2 },
];

export default function CoursesCarousel() {
  return (
    <section className="px-4 md:px-8 py-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-4xl font-bold">All Featured Courses</h2>
        <button
          onClick={() => (window.location.href = "https://corsmat.xyz/tony/courses")}
          className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-2 md:px-6 py-2 rounded-full text-sm font-medium hover:opacity-90"
        >
          See All Courses
        </button>
      </div>

      {/* Carousel */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerGroup={1} // move 1 by 1
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 }, // show 4 at a time on desktop
        }}
        className="pb-10 custom-swiper"
      >
        {courses.map((course, index) => (
          <SwiperSlide key={course.id}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all bg-white flex flex-col h-full group"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-contain bg-gray-100"
                />
                {/* Hover Button */}
                <a
                  href="https://corsmat.xyz/james/course/full-stack-web-development-course---html,-css,-js,-php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <button className="px-6 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[#ff9800] to-pink-500 hover:from-pink-500 hover:to-orange-500 transition-all">
                    Enroll Now
                  </button>
                </a>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col">
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
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
