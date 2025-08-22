import React from "react";
import student1 from "../assets/stud1.png";
import student2 from "../assets/stud2.png";
import student3 from "../assets/stud3.png";
import student4 from "../assets/stud4.jpg";
import student5 from "../assets/stud5.jpg"; 
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import shape1 from "../assets/shape1.png";
import shape2 from "../assets/shape2.png";
import shape3 from "../assets/shape3.png";
import shape4 from "../assets/shape4.png";
import shape5 from "../assets/shape5.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import list from "../assets/listbg.png"; 

const Listing = () => {
  const students = [
    { id: 1, name: "Peter Nowel", img: student1 },
    { id: 2, name: "Monica Arnold", img: student2 },
    { id: 3, name: "Christopher Nolan", img: student3 },
    { id: 4, name: "Sarah Connor", img: student4 },
    { id: 5, name: "John Wick", img: student5 },
    { id: 6, name: "Sophia Turner", img: student3 },
  ];

  const shapes = [shape1, shape2, shape3, shape4, shape5];

  return (
    <div className="relative w-full">
      {/* Header Section with Background Image */}
      <div
        className="relative w-full py-20 bg-center w-full h-full bg-cover bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${list})` }}
      >

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Listings
          </h1>
          <nav className="flex items-center space-x-2 text-sm md:text-base">
            <Link to="/" className="font-semibold text-gray-800 hover:text-orange-600">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <span className="font-semibold text-[#ff9800]">Listings</span>
          </nav>
        </div>
      </div>

      {/* Students Section */}
      <div className="relative max-w-7xl mx-auto py-8 md:py-16 bg-white overflow-hidden">
        {/* Sprinkle Shapes */}
        {shapes.map((shape, i) => (
          <motion.img
            key={i}
            src={shape}
            alt="shape"
            className="absolute w-10 h-10 opacity-50"
            style={{
              top: `${Math.random() * 80 + 5}%`,
              left: `${Math.random() * 80 + 5}%`,
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}

        {/* Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
          {students.map((student) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-orange-50/50 rounded-2xl shadow-lg p-6 text-center relative"
            >
              <img
                src={student.img}
                alt={student.name}
                className="w-20 h-20 rounded-full border-4 border-white shadow-md mx-auto -mt-12 mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800">{student.name}</h3>

              {/* Social Media */}
              <div className="flex justify-center gap-4 my-6 text-gray-500">
                <a href="#" className="hover:text-[#ff9800]"><FaFacebookF /></a>
                <a href="#" className="hover:text-[#ff9800]"><FaTwitter /></a>
                <a href="#" className="hover:text-[#ff9800]"><FaInstagram /></a>
                <a href="#" className="hover:text-[#ff9800]"><FaLinkedinIn /></a>
              </div>

              <div className="flex justify-center gap-3 my-6">
                <button className="px-4 py-2 border rounded-md text-sm hover:bg-gray-100">
                  View Profile
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-[#ff9800] to-green-400 text-white rounded-md text-sm">
                  +Follow
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listing;
