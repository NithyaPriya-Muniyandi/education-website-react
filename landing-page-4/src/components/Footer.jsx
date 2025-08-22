import React from "react";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import logoImg from "../assets/footer logo.png"; 
import post1 from "../assets/post1.jpg"; 
import post2 from "../assets/post2.jpg";
import post3 from "../assets/post3.jpg";

export default function Footer() {
  return (
    <footer>
    <div className="bg-orange-50 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={logoImg} alt="Learngo Logo" />
            <h2 className="text-xl font-bold">
            </h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            dignissimos quibusdam quia sit delectus. Cupiditate corporis,
            delectus quo ullam repudiandae illum culpa, magni modi, asperiores
            quis non magnam fugit vitae!
          </p>
        </div>

        {/* Column 2 - Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            {["Terms & Conditions", "Contact Us", "About Us"].map((link, i) => (
              <li
                key={i}
                className="cursor-pointer hover:text-[#ff9800] transition"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Latest Post */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Latest Post</h3>
          <div className="space-y-4">
            {[
              {
                img: post1,
                author: "Karem",
                date: "Jun 14, 2023",
                text: "Vivamus vestibulum ntulla nec ante.",
              },
              {
                img: post2,
                author: "Arnold",
                date: "Jun 14, 2023",
                text: "Nam dui mi, tincidunt quis, accumsan porttitor, facilis...",
              },
              {
                img: post3,
                author: "Modric",
                date: "Jun 14, 2023",
                text: "Vestibulum commodo felis quis tortor.",
              },
            ].map((post, i) => (
              <div
                key={i}
                className="flex items-start gap-3 cursor-pointer hover:text-[#ff9800] transition"
              >
                <img
                  src={post.img}
                  alt={post.text}
                  className="w-14 h-14 object-cover rounded"
                />
                <div>
                  <p className="text-xs text-gray-500">
                    {post.author} <span className="mx-1">|</span> {post.date}
                  </p>
                  <p className="text-sm font-medium leading-snug">
                    {post.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>

        <hr></hr>
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col items-center gap-4">
        
        <div className="flex gap-4 text-[#ff9800]">
          <a
            href="#"
            aria-label="YouTube"
            className="bg-orange-100 p-3 rounded-full hover:scale-110 transition"
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="bg-orange-100 p-3 rounded-full hover:scale-110 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="bg-orange-100 p-3 rounded-full hover:scale-110 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="bg-orange-100 p-3 rounded-full hover:scale-110 transition"
          >
            <FaFacebookF />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-700">
          Copyright ©2025. All Rights Reserved by{" "}
          <span className="font-semibold text-[#ff9800]">
            Quadverge Technology
          </span>.
        </p>
      </div>
    </footer>
  );
}
