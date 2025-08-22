import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import list from "../assets/listbg.png"; // 👈 background image

const Terms = () => {
  const listItems = [
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "Aliquam tincidunt mauris eu risus.",
    "Vestibulum auctor dapibus neque.",
    "Nunc dignissim risus id metus.",
    "Cras ornare tristique elit.",
    "Vivamus vestibulum ntulla nec ante.",
    "Praesent placerat risus quis eros.",
    "Fusce pellentesque suscipit nibh.",
    "Integer vitae libero ac risus egestas placerat.",
    "Vestibulum commodo felis quis tortor.",
    "Ut aliquam sollicitudin leo.",
    "Cras iaculis ultricies nulla.",
    "Donec quis dui at dolor tempor interdum",
  ];

  return (
    <div className="relative w-full bg-orange-50">
      {/* Header Section with Background Image */}
      <div
        className="relative w-full py-20 bg-center h-full bg-cover bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${list})` }}
      >
        {/* Animated Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <nav className="flex items-center space-x-2 text-sm md:text-base">
            <Link
              to="/"
              className="font-semibold text-gray-800 hover:text-orange-600"
            >
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <span className="font-semibold text-[#ff9800]">
              Terms & Conditions
            </span>
          </nav>
        </motion.div>
      </div>

      {/* Terms List Section */}
      <div className="relative max-w-5xl mx-auto py-8 md:py-16 px-4 bg-white shadow-xl">
        <h2 className="text-[24px] font-bold text-gray-900 mb-6">
          Terms &amp; Conditions:
        </h2>

       <ul className="list-disc list-inside space-y-3">
  {listItems.map((item, i) => (
    <motion.li
      key={i}
      className="text-sm md:text-base leading-relaxed md:leading-[2] text-gray-800"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
    >
      {item}
    </motion.li>
  ))}
</ul>

      </div>
    </div>
  );
};

export default Terms;
