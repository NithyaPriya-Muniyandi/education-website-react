import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

      {/* Play button with pulse animation */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="relative z-10 bg-white rounded-full p-6 shadow-lg flex items-center justify-center"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.25 }}
        aria-label="Play Video"
      >
        <FaPlay className="text-orange-600 text-3xl sm:text-4xl" />
      </motion.button>

      {/* Video modal with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-3xl bg-black rounded-lg overflow-hidden"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close button */}
              <button
                className="absolute top-2 right-2 text-white text-3xl sm:text-4xl z-30"
                onClick={() => setIsOpen(false)}
                aria-label="Close Video"
              >
                &times;
              </button>

              {/* Responsive YouTube iframe */}
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/bz7yYu_w2HY?autoplay=1"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
