import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaViadeoSquare } from "react-icons/fa";
import { HiOutlineLink, HiOutlinePaperAirplane } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-[#ff9800] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Section */}
        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold justify-center md:justify-start">
            <FaViadeoSquare className="w-10 h-10" /> NFoundation
          </h2>
          <hr className="w-1/2 my-6 border-white/50 mx-auto md:mx-0" />
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            dignissimos quibusdam quia sit delectus. Cupiditate corporis,
            delectus quo ullam repudiandae illum culpa, magni modi.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold justify-center md:justify-start">
            <HiOutlineLink className="text-pink-600 w-6 h-6" /> Useful Links
          </h2>
          <hr className="w-1/2 my-6 border-white/50 mx-auto md:mx-0" />
          <ul className="space-y-2">
            <li>
              <a
                href="#terms"
                className="hover:text-blue-200 flex items-center gap-2"
              >
                › Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-200 flex items-center gap-2"
              >
                › Contact Us
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-200 flex items-center gap-2"
              >
                › About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold justify-center md:justify-start">
            <HiOutlinePaperAirplane className="text-blue-600 w-6 h-6 rotate-90" /> Contact Us
          </h2>
          <hr className="w-1/2 my-6 border-white/50 mx-auto md:mx-0" />
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-white" />
              <a
                href="mailto:support@nolan.example"
                className="hover:text-blue-200"
              >
                support@nolan.example
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-white rotate-90" />
              <a
                href="tel:+823652398"
                className="hover:text-blue-200"
              >
                +823652398
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-white" />
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200"
              >
                Letitiaburgh, USA
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30 mt-8 pt-4 text-center text-sm">
        Copyright ©{new Date().getFullYear()} All Rights Reserved by Quadverge Technology
      </div>
    </footer>
  );
}
