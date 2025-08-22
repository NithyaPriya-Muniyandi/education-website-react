import React from "react";
import logo from "../assets/footerlogo.webp";
import blog1 from "../assets/footer1.webp";
import blog2 from "../assets/footer2.webp";
import blog3 from "../assets/footer3.webp";

const Footer = () => {
  return (
 <footer className="bg-white text-[#ff9800]">
  <div className="container max-w-7xl mx-auto px-6 md:px-0 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Logo & Description */}
    <div>
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" />
      </div>
      <hr className="my-4 border-[#ff9800]" />
      <p className="text-sm md:text-base leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        dignissimos quibusdam quia sit delectus. Cupiditate corporis,
        delectus quo ullam repudiandae illum culpa, magni modi, asperiores
        quis non magnam fugit vitae!
      </p>
    </div>

    {/* Useful Links */}
    <div>
      <div className="flex items-center gap-2">
        <i className="fas fa-link text-[#ff9800]"></i>
        <h2 className="text-xl font-bold text-black">Useful Links</h2>
      </div>

      <hr className="my-4 border-[#ff9800]" />
      <ul className="space-y-2">
        <li className="flex items-center gap-2 hover:text-black transition">
          <span>&gt;</span> Terms & Conditions
        </li>
        <li className="flex items-center gap-2 hover:text-black transition">
          <span>&gt;</span> Contact Us
        </li>
        <li className="flex items-center gap-2 hover:text-black transition">
          <span>&gt;</span> About Us
        </li>
      </ul>
    </div>

    {/* Latest Blog */}
    <div>
      <div className="flex items-center gap-2">
        <span className="text-[#ff9800] text-lg font-bold">
          <i className="fa-solid fa-blog"></i>
        </span>
        <h2 className="text-xl font-bold text-black">Latest Blog</h2>
      </div>

      <hr className="my-4 border-[#ff9800]" />

      {[
        { img: blog3, title: "Morbi in sem quis dui placerat...", date: "May 14, 2022", link: "#" },
        { img: blog1, title: "Donec nec justo eget felis fac...", date: "May 14, 2022", link: "#" },
        { img: blog2, title: "Phasellus ultrices nulla quis ...", date: "May 14, 2022", link: "#" }
      ].map((blog, i) => (
        <div key={i} className="flex items-center gap-4 mb-4">
          <img
            src={blog.img}
            alt="Blog"
            className="w-16 h-16 object-cover rounded"
          />
          <div>
            <a
              href={blog.link}
              className="text-sm font-semibold hover:text-black cursor-pointer transition-colors duration-200"
            >
              {blog.title}
            </a>
            <p className="text-xs">{blog.date}</p>
          </div>
        </div>
      ))}
    </div>

  </div>

  {/* Bottom Bar */}
  <div className="border-t max-w-7xl mx-auto border-3 border-[#ff9800] py-4 text-center text-sm">
    Copyright ©2025. All Rights Reserved by Quadverge Technology
  </div>
</footer>


  );
};

export default Footer;
