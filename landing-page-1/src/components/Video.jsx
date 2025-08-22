import React from "react";
import videoThumbnail from "../assets/videoimg.png";
import { FaRegSquare, FaSquare } from "react-icons/fa";

const VideoSection = () => {
  return (
    <section className="max-w-6xl mx-auto pt-8 md:pt-16 py-8 md:py-0 md:my-[-70px] z-10 relative">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#ff9800] mb-8 md:pt-16">
        Are you Ready ?
      </h2>

      {/* Shapes */}
      <FaRegSquare
  className="absolute left-0 top-1/3 text-blue-500 text-[80px] hidden md:block"
/>
<FaSquare
  className="absolute left-8 top-1/2 text-orange-500 text-[48px] hidden md:block"
/>

      {/* Video Thumbnail */}
      <div className="relative max-w-5xl mx-auto">
        <img
          src={videoThumbnail}
          alt="Video Thumbnail"
          className="rounded-lg shadow-lg w-full object-cover"
        />

        {/* Play Button */}
        <a
          href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
            <svg
              className="w-8 h-8 text-blue-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6 4l10 6-10 6V4z" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default VideoSection;
