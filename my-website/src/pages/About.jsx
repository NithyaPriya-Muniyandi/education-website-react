import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import list from "../assets/listbg.png"; // 👈 your background image

const About = () => {
  return (
    <div className="relative w-full bg-orange-50">
      {/* Header Section with Background Image */}
      <div
        className="relative w-full py-20 bg-center h-full bg-cover bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${list})` }}
      >
        {/* Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            About
          </h1>
          <nav className="flex items-center space-x-2 text-sm md:text-base">
            <Link
              to="/"
              className="font-semibold text-gray-800 hover:text-orange-600"
            >
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <span className="font-semibold text-[#ff9800]">About</span>
          </nav>
        </motion.div>
      </div>

      {/* Students Section */}
      <div className="relative max-w-5xl mx-auto py-8 md:py-16 px-4">
        <motion.div
          className="bg-white shadow-xl text-gray-500 p-6 md:p-8 rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* First paragraph */}
          <motion.p
            className="text-justify mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
          But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
          </motion.p>

          {/* First list */}
          <motion.ul
            className="list-disc pl-6 space-y-2 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, delayChildren: 0.3 },
              },
            }}
          >
            <motion.li
              className="text-justify"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure
            </motion.li>
          </motion.ul>

          {/* Second list */}
          <motion.ul
            className="list-disc pl-6 space-y-2 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, delayChildren: 0.3 },
              },
            }}
          >
            <motion.li
              className="text-justify"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.

            </motion.li>
          </motion.ul>

          {/* Last paragraph */}
          <motion.p
            className="text-justify"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
