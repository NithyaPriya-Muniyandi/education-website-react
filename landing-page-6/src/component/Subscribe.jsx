import { motion } from "framer-motion";
import { FaStar, FaPlus, FaRocket, FaSmile } from "react-icons/fa";
import bgImage from "../assets/subscribeimg.jpg";

export default function SubscribeSection() {
  return (
    <section className="flex justify-center px-4 py-10 relative overflow-hidden">
      {/* Floating Icons */}
      <motion.div
        className="absolute top-10 left-10 text-yellow-400 text-3xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <FaStar />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20 text-pink-400 text-3xl"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <FaPlus />
      </motion.div>

      <motion.div
        className="absolute top-20 right-20 text-blue-400 text-3xl"
        animate={{ x: [0, 15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        <FaRocket />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10 text-green-400 text-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <FaSmile />
      </motion.div>

      {/* Main Card */}
      <motion.div
        className="w-full max-w-7xl rounded-2xl p-8 md:py-16 flex flex-col md:flex-row items-center gap-8 bg-cover bg-center shadow-lg relative z-10"
        style={{ backgroundImage: `url(${bgImage})` }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Left Side - Text */}
        <div className="flex-1 text-white md:text-left text-center">
          <h2 className="text-xl md:text-4xl font-bold mb-4 leading-snug text-black">
            Subscribe To Our <br className="hidden md:block" /> Newsletter
          </h2>

          {/* Input Field */}
          <form className="flex bg-white rounded-full overflow-hidden max-w-md mx-auto md:mx-0">
            <input
              type="email"
              placeholder="Enter email here..."
              className="flex-1 px-4 py-3 text-gray-700 focus:outline-none text-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:from-pink-500 hover:to-orange-500 transition font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
