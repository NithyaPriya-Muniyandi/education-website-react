import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MyImage from "../assets/graduateimg.png"; 
import "swiper/css";

// Import images from assets
import course1 from "../assets/course1.png";
import course2 from "../assets/course2.jpg";
import course3 from "../assets/course3.jpg";
import course4 from "../assets/course4.jpg";

const courses = [
  {
    title: "Build Landing Page Website with HTML, CSS, JavaScript",
    category: "Web Design",
    teacher: "Nicolo Bar...",
    price: "Free",
    image: course1,
  },
  {
    title: "Mobile App Development with React Native",
    category: "Software Development",
    teacher: "Nicolo Zan...",
    price: "$70.00",
    oldPrice: "$120.00",
    image: course2,
  },
  {
    title: "Full Stack Web Development Course - HTML, CSS",
    category: "Software Development",
    teacher: "John Doe",
    price: "$84.00",
    oldPrice: "$99.00",
    image: course3,
  },
  {
    title: "UI/UX Design Fundamentals",
    category: "Design",
    teacher: "Jane Smith",
    price: "$55.00",
    image: course4,
  },
];

const FeaturedCourses = () => {
  const swiperRef = useRef(null);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      {/* Header with navigation buttons */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-5xl font-bold mb-8 text-[#ff9800]">
          Featured Courses
        </h2>
        <div className="flex space-x-2">
        <button
  onClick={() => swiperRef.current?.slidePrev()}
  className="bg-orange-200 hover:bg-[#ff9800] text-gray-700 p-5 rounded-full shadow"
>
  <FaChevronLeft size={18} />
</button>

<button
  onClick={() => swiperRef.current?.slideNext()}
  className="bg-orange-200 hover:bg-[#ff9800] text-gray-700 p-5 rounded-full shadow"
>
  <FaChevronRight size={18} />
</button>
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {courses.map((course, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white text-orange-500 font-semibold px-4 py-1 rounded-t-md shadow">
                  {course.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">{course.teacher}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-500 font-bold">{course.price}</span>
                    {course.oldPrice && (
                      <span className="text-orange-500 line-through">
                        {course.oldPrice}
                      </span>
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
      <div className="max-w-5xl mx-auto text-center mt-8">
  <img
    src={MyImage}
    alt="Description"
    className="mx-auto inline-block"
  />
</div>

    </section>
  );
};

export default FeaturedCourses;
