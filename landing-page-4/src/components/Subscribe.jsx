import { motion } from "framer-motion";
import bgImage from "../assets/subscribeimg.jpg";

export default function SubscribeSection() {
  return (
    <section className="flex justify-center px-4 py-10">
      <motion.div
        className="w-full max-w-5xl rounded-2xl p-8 py-16 flex flex-col md:flex-row items-center gap-8 bg-cover bg-center shadow-lg"
        style={{ backgroundImage: `url(${bgImage})` }}
        initial={{ opacity: 0, y: 50 }}       // Start invisible and slightly lower
        whileInView={{ opacity: 1, y: 0 }}    // Animate into view
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }} // Trigger when 20% in view, only once
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
              className="px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
