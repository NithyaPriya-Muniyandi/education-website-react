import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";

// Course images
import course1 from "../assets/course1.jpg";
import course2 from "../assets/course2.jpg";
import course3 from "../assets/course3.jpg";
import course4 from "../assets/course4.jpg";
import course5 from "../assets/course5.jpg";
import course6 from "../assets/course6.jpg";
import course7 from "../assets/course7.jpg";
import course8 from "../assets/course8.jpg";
import course9 from "../assets/course9.jpg";

// Courses data with categories
const courses = [
  {
    title: "Build Landing Page Website with HTML, CSS, JavaScript",
    category: "Software Development",
    teacher: "Nicolo Bar...",
    price: "Free",
    image: course1,
     url: "https://corsmat.xyz/nolan/course/mobile-app-development-with-react-native",
  },
  {
    title: "Mobile App Development with React Native",
    category: "Software Development",
    teacher: "Nicolo Zan...",
    price: "$70.00",
    oldPrice: "$120.00",
    image: course2,
     url: "https://corsmat.xyz/nolan/course/mobile-app-development-with-react-native",
  },
  {
    title: "Full Stack Web Development Course - HTML, CSS",
    category: "Software Development",
    teacher: "John Doe",
    price: "$84.00",
    oldPrice: "$99.00",
    image: course3,
     url: "https://corsmat.xyz/nolan/course/mobile-app-development-with-react-native",
  },
  {
    title: "UI/UX Design Fundamentals",
    category: "Web Design",
    teacher: "Jane Smith",
    price: "$55.00",
    image: course4,
     url: "https://corsmat.xyz/nolan/course/mobile-app-development-with-react-native",
  },
  {
    title: "Photoshop Essentials",
    category: "Web Design",
    teacher: "Mark Lee",
    price: "$45.00",
    image: course5,
     url: "https://corsmat.xyz/nolan/course/mobile-app-development-with-react-native",
  },
  {
    title: "Illustrator for Beginners",
    category: "Web Design",
    teacher: "Alice Kim",
    price: "$60.00",
    image: course6,
     url: "https://corsmat.xyz/nolan/course/mobile-app-development-with-react-native",
  },
  {
    title: "Digital Marketing 101",
    category: "Digital Marketing",
    teacher: "David Green",
    price: "$50.00",
    image: course7,
     url: "https://corsmat.xyz/nolan/course/mobile-app-development-with-react-native",
  },
  {
    title: "SEO Basics",
    category: "Digital Marketing",
    teacher: "Emma White",
    price: "$40.00",
    image: course8,
     url: "https://corsmat.xyz/nolan/course/mobile-app-development-with-react-native",
  },
  {
    title: "Social Media Marketing",
    category: "Digital Marketing",
    teacher: "Liam Brown",
    price: "$55.00",
    image: course9,
     url: "https://corsmat.xyz/nolan/course/mobile-app-development-with-react-native",
  },
];

const categories = [
  "Software Development",
  "Web Design",
  "Digital Marketing",
  "Personal Development",
];

const FeaturedCourses = () => {
  const [activeTab, setActiveTab] = useState("Software Development");
  const swiperRef = useRef(null);

  // Filter courses based on active tab
  const filteredCourses = courses.filter(
    (course) => course.category === activeTab
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      {/* Header */}
      <h2 className="text-xl md:text-5xl font-bold mb-8 text-[#ff9800] text-center">
        Featured Courses
      </h2>

      {/* Tabs */}
     <div className="flex justify-center gap-4 mb-8">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => setActiveTab(cat)}
      className={`flex-1 text-center px-2 py-2 rounded-md font-semibold transition ${
        activeTab === cat
          ? "bg-[#ff9800] text-white"
          : "bg-gray-200 text-gray-700 hover:bg-orange-200"
      }`}
    >
      {cat}
    </button>
  ))}
</div>


      {/* Swiper Carousel or No Course */}
      {filteredCourses.length > 0 ? (
        <div>
          {/* Navigation Buttons */}
          <div className="flex justify-end items-center mb-4 space-x-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-orange-200 hover:bg-[#ff9800] text-gray-700 p-3 rounded-full shadow"
            >
              <FaChevronLeft size={18} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-orange-200 hover:bg-[#ff9800] text-gray-700 p-3 rounded-full shadow"
            >
              <FaChevronRight size={18} />
            </button>
          </div>

          <Swiper
  modules={[Autoplay]}
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  loop={true}
  speed={800} // Smooth slide
  spaceBetween={20}
  breakpoints={{
    320: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className="pb-12"
>
  {filteredCourses.map((course, idx) => (
    <SwiperSlide key={idx}>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="relative overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105"
          />
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white text-center text-orange-500 font-semibold px-4 py-1 rounded-t-md shadow">
            {course.category}
          </span>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">
            <a
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff9800] transition"
            >
              {course.title}
            </a>
          </h3>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">{course.teacher}</span>
            <div className="flex items-center space-x-2">
              <span className="text-blue-500 font-bold">{course.price}</span>
              {course.oldPrice && (
                <span className="text-orange-500 line-through">{course.oldPrice}</span>
              )}
            </div>
          </div>
          <div className="flex justify-between text-gray-400 text-sm">
            <span className="flex items-center gap-1">
              <i className="fas fa-users"></i> 1 Student
            </span>
            <span className="flex items-center gap-1">
              <i className="far fa-clock"></i> 03h 29m
            </span>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

        </div>
      ) : (
        <p className="text-center text-gray-500 py-20 text-lg">
          No courses found.
        </p>
      )}
    </section>
  );
};

export default FeaturedCourses;