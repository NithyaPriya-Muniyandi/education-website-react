import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import webDevImg from "../assets/dev1.png";
import uiDesignImg from "../assets/dev2.png";
import digitalMarketingImg from "../assets/dev3.png";
import softwareDevImg from "../assets/dev4.png";

const categories = [
  {
    title: "Web Development",
    courses: 2,
    image: webDevImg,
    link: "https://corsmat.xyz/james/courses?category=web-development",
  },
  {
    title: "Web UI Design",
    courses: 1,
    image: uiDesignImg,
    link: "https://corsmat.xyz/james/courses?category=web-ui-desingn",
  },
  {
    title: "Digital Marketing",
    courses: 1,
    image: digitalMarketingImg,
    link: "https://corsmat.xyz/james/courses?category=digital-marketing",
  },
  {
    title: "Software Development",
    courses: 2,
    image: softwareDevImg,
    link: "https://corsmat.xyz/james/courses?category=software-development",
  },
];

export default function TopTrendingCategories() {
  return (
    <section className="px-4 md:px-8 py-12 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
        Top Trending Categories
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }}
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all bg-white flex flex-col items-center text-center"
            >
              {/* Image Container */}
              <div className="relative w-32 h-32 md:w-36 md:h-36 mb-4">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-contain"
                />
                {/* Hover Button */}
                <a
                  href={cat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity"
                >
                  <button className="px-6 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[#ff9800] to-pink-500 hover:from-pink-500 hover:to-orange-500 transition-all">
                    View Courses
                  </button>
                </a>
              </div>

              {/* Title & Course Count */}
              <h3 className="text-lg font-bold">{cat.title}</h3>
              <p className="text-gray-500 text-sm mt-1">
                {cat.courses} Course{cat.courses > 1 ? "s" : ""}
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
