import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import list from "../assets/listbg.png"; // 👈 your background image

const faqs = [
  {
    question: "Why this app is so awesome",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod."    
  },
  {
    question: "HWhat does LOREM mean?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document. The text is intentionally unintelligible so that the viewer is not distracted by the content. The language is not real Latin and even the first word ‘Lorem’ does not exist. It is said that the lorem ipsum text has been common among typesetters since the 16th century.",
  },
  {
    question: "Where can I subscribe to your newsletter?",
    answer:
      "We often send out our newsletter with news and great offers. We will never disclose your data to third parties and you can unsubscribe from the newsletter at any time.",
  },
  {
    question: "Where can in edit my address?",
    answer:
      "If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your",
  },
  {
    question: "Can I order a free copy of a magazine to sample?",
    answer:
      "Unfortunately, we’re unable to offer free samples. As a retailer, we buy all magazines from their publishers at the regular trade price. However, you could contact the magazine’s publisher directly to ask if they can send you a free copy.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative w-full bg-orange-50">
      {/* Header Section with Background Image */}
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
            FAQs
          </h1>
          <nav className="flex items-center space-x-2 text-sm md:text-base">
            <Link
              to="/"
              className="font-semibold text-gray-800 hover:text-orange-600"
            >
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <span className="font-semibold text-[#ff9800]">FAQs</span>
          </nav>
        </motion.div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="relative max-w-5xl mx-auto py-10 md:py-16 px-4">
        <motion.div
          className="bg-white shadow-xl text-gray-700 p-6 md:p-10 rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b">
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full flex justify-between items-center py-4 text-left text-sm md:text-base font-semibold focus:outline-none transition-colors duration-300 ${
                    activeIndex === index
                      ? "text-[#ff9800]"
                      : "text-gray-900"
                  }`}
                >
                  {faq.question}
                  <span className="text-[#ff9800] text-2xl">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden pb-4"
                    >
                      <p className="text-gray-600 text-justify text-sm leading-loose md:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;
