import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaSquare, FaCircle } from "react-icons/fa"; 
import bgImage from "../assets/instructionbg.jpg"; 

// Images object
import instructor1 from "../assets/instruction1.jpg";
import instructor2 from "../assets/instruction2.jpg";
import instructor3 from "../assets/instruction3.jpg";

const images = {
  instructor1,
  instructor2,
  instructor3,
};

export default function InstructorsSection() {
  const [selected, setSelected] = useState(null);

  const instructors = [
    {
      img: images.instructor1,
      name: "Nicolo Zaniolo",
      role: "Fitness Coach, Superviser",
      bio: "Nicolo is a certified fitness trainer with 10+ years of experience helping people achieve their health goals.",
    },
    {
      img: images.instructor2,
      name: "Jack Oram",
      role: "UI/UX Designer, ProFlex",
      bio: "Jack specializes in crafting intuitive user experiences and has worked with top design firms globally.",
    },
    {
      img: images.instructor3,
      name: "John Doe",
      role: "Web Developer, Businesso",
      bio: "John is a senior full-stack developer who mentors aspiring coders and builds scalable web applications.",
    },
  ];

  return (
    <section
      className="relative py-8 md:py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Animated icons */}
      <FaCircle className="absolute top-10 left-5 text-sky-400 animate-bounce" size={20} />
      <FaSquare className="absolute top-20 right-10 text-pink-500 animate-bounce delay-200" size={22} />
      <FaPlus className="absolute bottom-20 left-10 text-yellow-400 animate-bounce delay-500" size={22} />

      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Meet Our Expert Instructors
        </motion.h2>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((inst, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              onClick={() => setSelected(inst)}
            >
              <img src={inst.img} alt={inst.name} className="w-full h-80 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-xl">{inst.name}</h3>
                <p className="text-sky-500">{inst.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <motion.div
            className="bg-white rounded-xl max-w-lg w-full p-8 relative"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-600 text-2xl"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            {/* Modal content */}
            <img
              src={selected.img}
              alt={selected.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{selected.name}</h3>
            <p className="text-sky-500 mb-4">{selected.role}</p>
            <p className="text-gray-600">{selected.bio}</p>
          </motion.div>
        </div>
      )}
    </section>
  );
}
