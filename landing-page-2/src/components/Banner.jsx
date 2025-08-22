import React, { useState } from "react";
import bgImage from "../assets/herobanner.jpg";
import { FaPlay, FaTimes, FaCaretUp } from "react-icons/fa";

export default function BannerSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#2400ff_0%,#ff3939_100%)] opacity-50"></div>

      {/* Sprinkle Triangles */}
     <FaCaretUp className="absolute top-10 left-10 text-yellow-400 text-4xl rotate-12 animate-bounceSlow" />
<FaCaretUp className="absolute top-20 right-16 text-pink-500 text-3xl -rotate-45 animate-bounceSlow" />
<FaCaretUp className="absolute bottom-16 left-1/4 text-green-400 text-5xl rotate-45 animate-bounceSlow" />
<FaCaretUp className="absolute top-1/3 right-1/3 text-violet-500 text-4xl rotate-90 animate-bounceSlow" />
<FaCaretUp className="absolute bottom-8 right-10 text-blue-400 text-3xl -rotate-12 animate-bounceSlow" />
<FaCaretUp className="absolute top-5 left-1/2 text-red-400 text-4xl rotate-6 animate-bounceSlow" />
<FaCaretUp className="absolute bottom-1/4 right-1/4 text-orange-400 text-5xl -rotate-30 animate-bounceSlow" />
<FaCaretUp className="absolute top-1/2 left-16 text-teal-400 text-3xl rotate-15 animate-bounceSlow" />



      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-10">
        <button
          className="mx-auto mb-6 w-16 h-16 flex items-center justify-center border-2 border-white rounded-full hover:scale-110 transition-transform"
          onClick={() => setIsOpen(true)}
        >
          <FaPlay className="text-white text-xl ml-1" />
        </button>
        <p className="uppercase text-white tracking-widest text-sm mb-4">
          COURSERA DIGITAL INSTITUTE
        </p>
        <h1 className="max-w-3xl mx-auto text-white font-bold text-5xl md:text-8xl leading-tight">
          The New Way to Learn
        </h1>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white bg-red-500 p-2 rounded-full hover:bg-red-600"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>
            {/* YouTube Embed */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/w7bMC7OCk2k"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
