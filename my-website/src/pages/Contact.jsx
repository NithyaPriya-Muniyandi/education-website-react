import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi"; // React Icons
import list from "../assets/listbg.png";

const Contact = () => {
  return (
    <div className="relative w-full bg-orange-50">
      {/* Header Section */}
      <div
        className="relative w-full py-20 bg-center h-full bg-cover bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${list})` }}
      >
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Contact
          </h1>
          <nav className="flex items-center space-x-2 text-sm md:text-base">
            <Link
              to="/"
              className="font-semibold text-gray-800 hover:text-[#ff9800]"
            >
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <span className="font-semibold text-[#ff9800]">Contact</span>
          </nav>
        </motion.div>
      </div>

      {/* Contact Info + Form */}
      <div className="relative max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Phone */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#ff9800]/10 text-[#ff9800] text-2xl mb-3">
              <FiPhone />
            </div>
            <p className="text-gray-800 font-medium">+8434197502</p>
            <p className="text-gray-800 font-medium">+2350575099</p>
            <p className="text-gray-800 font-medium">+23576039607</p>
          </motion.div>

          {/* Email */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#ff9800]/10 text-[#ff9800] text-2xl mb-3">
              <FiMail />
            </div>
            <p className="text-gray-800 font-medium">contact@example.com</p>
            <p className="text-gray-800 font-medium">support@example.com</p>
            <p className="text-gray-800 font-medium">query@example.com</p>
          </motion.div>

          {/* Address */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#ff9800]/10 text-[#ff9800] text-2xl mb-3">
              <FiMapPin />
            </div>
            <p className="text-gray-800 font-medium">California, USA</p>
            <p className="text-gray-800 font-medium">London, United Kingdom</p>
            <p className="text-gray-800 font-medium">Melbourne, Australia</p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.form
          className="bg-white p-6 md:p-10 rounded-xl shadow-md space-y-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name *"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9800]"
            />
            <input
              type="email"
              placeholder="Email Address *"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9800]"
            />
          </div>
          <input
            type="text"
            placeholder="Subject *"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9800]"
          />
          <textarea
            placeholder="Message... *"
            rows="6"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9800]"
          ></textarea>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 rounded-full font-semibold text-white bg-[#ff9800] hover:bg-[#e68900] shadow-md transition"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
