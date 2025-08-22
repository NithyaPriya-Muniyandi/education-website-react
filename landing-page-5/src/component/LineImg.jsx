import React from "react";
import { motion } from "framer-motion";
import lineImg1 from "../assets/lineimg1.png";
import lineImg2 from "../assets/lineimg2.png";
import lineImg3 from "../assets/lineimg3.png";
import lineImg4 from "../assets/lineimg4.png";
import lineImg5 from "../assets/lineimg5.png";
import lineImg6 from "../assets/lineimg6.png";
import lineArrow from "../assets/linearrow.png";

const images = [lineImg1, lineImg2, lineImg3, lineImg4, lineImg5, lineImg6];

export default function LineImagesSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="my-8 md:my-16">
      <motion.div
        className="max-w-7xl mx-auto py-6 md:py-12 px-4 sm:px-6 lg:px-8 bg-orange-50 rounded-lg shadow-lg"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {images.map((img, index) => (
            <React.Fragment key={index}>
              <motion.img
                src={img}
                alt={`line-img-${index + 1}`}
                className="w-10 h-10 md:w-16 md:h-16 object-contain"
                variants={itemVariants}
              />
              {index < images.length - 1 && (
                <motion.img
                  src={lineArrow}
                  alt="arrow"
                  className="hidden sm:block object-contain"
                  variants={itemVariants}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
