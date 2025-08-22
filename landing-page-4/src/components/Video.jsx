import React, { useState } from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/videoimg.jpg";
import { FaPlay } from "react-icons/fa";

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="relative w-full h-[80vh] bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Play button with animation */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="relative z-10 bg-white rounded-full p-6 shadow-lg"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.2 }}
      >
        <FaPlay className="text-orange-600 text-2xl" />
      </motion.button>

      {/* Video modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="relative w-full max-w-3xl bg-black rounded-lg overflow-hidden">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-white text-2xl z-30"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>

            {/* Responsive YouTube iframe */}
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/cYOB941gyXI?autoplay=1"
                title="YouTube video"
                frameBorder="0"
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
