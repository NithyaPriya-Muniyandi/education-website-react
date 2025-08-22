
import logoDot from "../assets/footer-dot.png";
import blog1 from "../assets/footer1.webp";
import blog2 from "../assets/footer2.webp";
import blog3 from "../assets/footer3.webp";
import { FaLink, FaBlog, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const blogs = [
    { img: blog3, title: "Morbi in sem quis dui placerat...", date: "May 14, 2022", link: "#" },
    { img: blog1, title: "Donec nec justo eget felis fac...", date: "May 14, 2022", link: "#" },
    { img: blog2, title: "Phasellus ultrices nulla quis ...", date: "May 14, 2022", link: "#" }
  ];

  return (
    <footer className="relative bg-[#ff9800] text-white overflow-hidden">
      {/* footer-dot image in bottom-left */}
      <img
        src={logoDot}
        alt="Dot Pattern"
        className="absolute bottom-20 left-4 w-24 opacity-40"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-0 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Subscribe Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center md:text-start">
            Stay Up to Date <br /> About Courses
          </h2>
          <div className="flex items-center border-4 border-orange-300 overflow-hidden">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 px-4 py-3 bg-transparent text-white placeholder-white/80 outline-none"
            />
            <FaEnvelope className="text-blue-500 mr-4" />
          </div>
          <button className="bg-white hover:bg-gray-300 text-[#ff9800] font-semibold px-6 py-3 mt-4 w-max">
            Subscribe
          </button>
        </div>

        {/* Useful Links */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaLink className="text-blue-600 w-6 h-6" />
            <h2 className="text-xl font-bold text-white">Useful Links</h2>
          </div>
          <hr className="mb-4 border-white/50" />
          <ul className="space-y-3">
            {["Terms & Conditions", "Contact Us", "About Us"].map((link, i) => (
              <li
                key={i}
                className="flex items-center gap-2 hover:text-gray-500 transition"
              >
                <span className="text-white">&gt;</span> {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Latest Blog */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaBlog className="text-green-600 w-6 h-6" />
            <h2 className="text-xl font-bold text-white">Latest Blog</h2>
          </div>
          <hr className="mb-4 border-white/50" />
          {blogs.map((blog, i) => (
            <a
              href={blog.link}
              key={i}
              className="flex items-center gap-4 mb-4 hover:text-gray-500 transition-colors duration-200"
            >
              <img
                src={blog.img}
                alt="Blog"
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="text-sm font-semibold">{blog.title}</p>
                <p className="text-xs text-white/80">{blog.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/50 py-4 text-center text-xs text-white/80">
        © 2025 Quadverge Technology. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
