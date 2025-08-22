import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaCircle } from "react-icons/fa"; // sprinkle icons
import videoimg from "../assets/videoimg.jpg"; // left video preview
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import feature4 from "../assets/feature4.png";

export default function FeaturesSection() {
  const [open, setOpen] = useState(false);

  const features = [
    { img: feature1, title: "Lesson Builder" },
    { img: feature2, title: "Payment Gateway" },
    { img: feature3, title: "Enrolment Report" },
    { img: feature4, title: "Course Enrollment" },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-8 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-10 items-center overflow-hidden">
      {/* Sprinkle animated icons */}
      <FaStar className="absolute top-10 left-5 text-yellow-400 animate-bounce" size={24} />
      <FaCircle className="absolute top-20 right-10 text-red-400 animate-bounce delay-500" size={22} />

      {/* Left - Video Image with Play Button (7/12) */}
      <motion.div
        className="relative w-full md:col-span-7"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img
          src={videoimg}
          alt="Video preview"
          className="w-full h-auto rounded-2xl shadow-lg"
        />
        <button
          onClick={() => setOpen(true)}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-500 text-white animate-ping absolute"></span>
          <span className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-500 text-white relative z-10">
            ▶
          </span>
        </button>
      </motion.div>

      {/* Right - Features (5/12) */}
      <motion.div
        className="md:col-span-5"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-snug">
          Which Features We <br /> Provide For You
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="p-6 bg-orange-50 rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={f.img} alt={f.title} className="w-12 h-12 mb-3" />
              <p className="font-semibold">{f.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal Video */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-3xl relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-black text-2xl"
            >
              ✕
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-[500px]"
                src="https://www.youtube.com/embed/ksZpu1s1LV0"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
