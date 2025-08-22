import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

// Import your images from assets
import instructor1 from "../assets/instructor1.jpg";
import instructor2 from "../assets/instructor2.jpg";
import instructor3 from "../assets/instructor3.png";
import instructor4 from "../assets/instructor4.jpg";

const instructors = [
  {
    name: "Nicolo Barella",
    role: "Web Designer, PlusAgency",
    image: instructor1,
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      youtube: "#",
    },
  },
  {
    name: "Nicolo Zaniolo",
    role: "Fitness Coach, Superv",
    image: instructor2,
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      youtube: "#",
    },
  },
  {
    name: "Jack Oram",
    role: "UI/UX Designer, Profillex",
    image: instructor3,
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      youtube: "#",
    },
  },
  {
    name: "John Doe",
    role: "Web Developer",
    image: instructor4,
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      youtube: "#",
    },
  },
];

export default function InstructorsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Meet Our Instructors
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-white rounded-lg shadow overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.3 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-auto md:h-64 object-cover object-top"
              />

              {/* Hover social icons */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={instructor.socials.facebook}
                  className="bg-[#ff9800] p-2 rounded-full text-white hover:bg-orange-600"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={instructor.socials.twitter}
                  className="bg-[#ff9800] p-2 rounded-full text-white hover:bg-orange-600"
                >
                  <FaTwitter />
                </a>
                <a
                  href={instructor.socials.instagram}
                  className="bg-[#ff9800] p-2 rounded-full text-white hover:bg-orange-600"
                >
                  <FaInstagram />
                </a>
                <a
                  href={instructor.socials.youtube}
                  className="bg-[#ff9800] p-2 rounded-full text-white hover:bg-orange-600"
                >
                  <FaYoutube />
                </a>
              </div>

              {/* Name & Role */}
              <div className="p-4 text-center">
                <h3 className="font-semibold">{instructor.name}</h3>
                <p className="text-sm text-[#ff9800]">{instructor.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
