import React,  { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserAlt, FaPlay, FaDollarSign, FaGraduationCap, FaKey, FaDesktop, FaCalendarAlt, FaCircle, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCheckCircle, FaTimesCircle  } from "react-icons/fa";
import heroImg from "../assets/bannerimg.png";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import shape1 from "../assets/shape1.png";
import shape2 from "../assets/shape2.png";
import shape3 from "../assets/shape3.png";
import shape4 from "../assets/shape4.png";
import shape5 from "../assets/shape5.png";
import shape6 from "../assets/shape6.png";
import shape7 from "../assets/shape7.png";
import shape8 from "../assets/shape8.png";
import shape9 from "../assets/shape9.png";
import shape10 from "../assets/shape10.png";
import shape11 from "../assets/shape11.png";
import shape12 from "../assets/shape12.png";
import shape13 from "../assets/shape13.png";
import shape14 from "../assets/shape14.png";
import clientImg1 from "../assets/client1.jpg";
import clientImg2 from "../assets/client2.jpg";
import clientImg3 from "../assets/client3.jpg";
import clientImg4 from "../assets/client4.jpg";
import illustration from "../assets/leftclient.png"; 
import student1 from "../assets/stud1.png";
import student2 from "../assets/stud2.png";
import student3 from "../assets/stud3.png";
import student4 from "../assets/stud4.jpg";
import student5 from "../assets/stud5.jpg";
import courseImg from "../assets/course1.png";
import paymentImg from "../assets/course2.png";
import lessonImg from "../assets/course3.png";
import reportImg from "../assets/course4.png";
import template1 from "../assets/template1.png";
import template2 from "../assets/template2.png";
import template3 from "../assets/template3.png";
import template4 from "../assets/template4.png";
import template5 from "../assets/template5.png";
import template6 from "../assets/template6.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";

  const features = [
    {
      img: courseImg,
      title: "Course Enrollment",
      desc: "Students Can Enroll to Your Paid & Premium Courses",
    },
    {
      img: paymentImg,
      title: "Payment Gateway",
      desc: "There Are 9 Online Payment Gateways & Offline Gateways",
    },
    {
      img: lessonImg,
      title: "Lesson Content Builder",
      desc: "You Can Decorate Lessons with Text, Quiz, Video, Files, Code Snippets",
    },
    {
      img: reportImg,
      title: "Enrolment Report",
      desc: "You Can Check Enrolment Reports & Export Them as CSV",
    },
  ];
const templates = [
  {
    id: 1,
    img: template1,
    link: "https://landingpageway2.netlify.app/",
  },
  {
    id: 2,
    img: template2,
    link: "https://landingpageway3.netlify.app/",
  },
  {
    id: 3,
    img: template3,
    link: "https://landingpageway.netlify.app/",
  },
  {
    id: 4,
    img: template4,
    link: "https://landingpageway6  .netlify.app/",
  },
  {
    id: 5,
    img: template5,
    link: "https://landingpageway5.netlify.app/",
  },
  {
    id: 6,
    img: template6,
    link: "https://landingpageway4.netlify.app/",
  },
];
const steps = [
  {
    id: 1,
    icon: <FaDollarSign className="text-[#ff9800] text-3xl" />,
    title: "Purchase Plan",
    desc: "Choose a pricing plan which suits best to you",
  },
  {
    id: 2,
    icon: <FaGraduationCap className="text-[#ff9800] text-3xl" />,
    title: "Upload Course",
    desc: "Upload Your Course, Modules, Lessons & Lesson Contents",
  },
  {
    id: 3,
    icon: <FaKey className="text-[#ff9800] text-3xl" />,
    title: "Start Selling",
    desc: "Setup Your Currency, Payment Gateways & Start Selling",
  },
  {
    id: 4,
    icon: <FaDesktop className="text-[#ff9800] text-3xl" />,
    title: "Custom Domain",
    desc: "Add Custom Domain to Make Your Website Professional",
  },
];
  const plans = {
    monthly: [
      {
        name: "Basic",
        price: "Free",
        duration: "/monthly",
        features: [
          { text: "5 Course Categories", included: true },
          { text: "20 Courses", included: true },
          { text: "140 Modules", included: true },
          { text: "1000 Lessons", included: true },
          { text: "5 Featured Courses", included: true },
          { text: "Custom Domain", included: true },
          { text: "Subdomain", included: true },
        ],
        button: "Signup",
      },
      {
        name: "Pro",
        price: "$49",
        duration: "/monthly",
        recommended: true,
        features: [
          { text: "10 Course Categories", included: true },
          { text: "40 Courses", included: true },
          { text: "280 Modules", included: true },
          { text: "2000 Lessons", included: true },
          { text: "10 Featured Courses", included: true },
          { text: "Custom Domain", included: false },
          { text: "Subdomain", included: true },
          { text: "vCard", included: false },
          { text: "QR Builder", included: false },
        ],
        button: "Purchase",
      },
      {
        name: "Business",
        price: "$99",
        duration: "/monthly",
        features: [
          { text: "15 Course Categories", included: true },
          { text: "75 Courses", included: true },
          { text: "450 Modules", included: true },
          { text: "2700 Lessons", included: true },
          { text: "15 Featured Courses", included: true },
          { text: "Custom Domain", included: true },
          { text: "Subdomain", included: true },
          { text: "Ecommerce", included: false },
        ],
        button: "Purchase",
      },
    ],
    yearly: [
      { name: "Basic", price: "$99", duration: "/yearly", button: "Signup" },
      { name: "Pro", price: "$399", duration: "/yearly", button: "Purchase" },
      { name: "Business", price: "$899", duration: "/yearly", button: "Purchase" },
    ],
    lifetime: [
      { name: "Basic", price: "$199", duration: "/lifetime", button: "Signup" },
      { name: "Pro", price: "$599", duration: "/lifetime", button: "Purchase" },
      { name: "Business", price: "$1499", duration: "/lifetime", button: "Purchase" },
    ],
  };

const students = [
  { id: 1, name: "Peter Nowel", img: student1 },
  { id: 2, name: "Monica Arnold", img: student2 },
  { id: 3, name: "Christopher Nolan", img: student3 },
  { id: 4, name: "Sarah Connor", img: student4 },
  { id: 5, name: "John Wick", img: student5 },
];


const testimonials = [
  {
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    name: "Barella",
    role: "Bank Manager",
    image: clientImg1,
  },
  {
    text: "Avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally.",
    name: "Jorginho",
    role: "CEO, Malao",
    image: clientImg2,
  },
  {
    text: "Great support team! They helped me scale my business seamlessly.",
    name: "Sophia",
    role: "Entrepreneur",
    image: clientImg3,
  },
  {
    text: "The best service I’ve ever experienced. Totally recommend to everyone!",
    name: "Michael",
    role: "Product Designer",
    image: clientImg4,
  },
];

const shapes = [shape1, shape2, shape3, shape4, shape5, shape6, shape7, shape8, shape9, shape10, shape11, shape12, shape13, shape14 ];


const blogs = [
  {
    id: 1,
    image: blog1,
    author: "Admin",
    date: "Aug 15, 2025",
    category: "Education",
    title: "Top 10 React Tips for Beginners",
    desc: "Learn essential React tips and tricks to improve your coding and build efficient projects.",
  },
  {
    id: 2,
    image: blog2,
    author: "John Doe",
    date: "Aug 12, 2025",
    category: "Technology",
    title: "Why Tailwind CSS is Taking Over",
    desc: "Explore why Tailwind CSS is becoming the go-to utility-first framework for developers worldwide.",
  },
  {
    id: 3,
    image: blog3,
    author: "Jane Smith",
    date: "Aug 10, 2025",
    category: "Design",
    title: "UI/UX Principles Every Developer Should Know",
    desc: "Understand the basics of UI/UX design to create better, user-friendly applications.",
  },
];

const logos = [
  { id: 1, img: logo1, alt: "ZETIXE" },
  { id: 2, img: logo2, alt: "VECTRO" },
  { id: 3, img: logo3, alt: "AVEXI" },
  { id: 4, img: logo4, alt: "WEPIDRA" },
];

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
   const shapeAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
      },
    },
  };
  const [activeTab, setActiveTab] = useState("monthly");
   const [activeIndex, setActiveIndex] = useState(0);

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div> 
         <section className="relative bg-gradient-to-r from-[#ff9800]/10 via-white to-[#ff9800]/10 py-16 overflow-hidden">
              {/* Sprinkle Shapes */}
              {shapes.map((shape, i) => (
                <motion.img
                  key={i}
                  src={shape}
                  alt={`shape-${i}`}
                  className="absolute w-10 h-10 opacity-50"
                  style={{
                    top: `${15 + i * 15}%`,
                    left: `${10 + i * 18}%`,
                  }}
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: [0, 20, 0], opacity: 1 }}
                  transition={{
                    duration: 6 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
        
              <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
                {/* Left Column */}
                <div className="text-center md:text-left space-y-6">
                  <p className="text-gray-600 font-medium">
                    Our Platform, Your Success <span role="img" aria-label="emoji">🎓</span>
                  </p>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b0121] leading-tight">
                    Create Your <br /> Course Website
                  </h1>
        
                  <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mt-6">
                    {/* Explore Plans Button */}
                    <button className="bg-[#ff9800] text-white px-6 py-3 rounded-full font-medium shadow hover:bg-teal-700 transition">
                      Explore Plans
                    </button>
        
                    {/* Blinking Play Button */}
                    <button
                      onClick={() => setIsOpen(true)}
                      className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#ff9800] text-white shadow-lg hover:bg-teal-600 transition"
                    >
                      <span className="absolute w-full h-full rounded-full border-2 border-teal-500 animate-ping"></span>
                      ▶
                    </button>
                  </div>
                </div>
        
                {/* Right Column - Floating Illustration */}
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="flex justify-center md:justify-end"
                >
                  <img src={heroImg} alt="hero illustration" className="max-w-full md:max-w-lg" />
                </motion.div>
              </div>
        
              {/* Modal */}
              {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
                  <div className="relative bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl w-full">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl"
                    >
                      ✕
                    </button>
                    <div className="aspect-video">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/6stlCkUDG_s"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
            </section>
         <section className="relative py-8 md:py-16 bg-white overflow-hidden">
            {/* Sprinkle Shapes */}
            {shapes.map((shape, i) => (
              <motion.img
                key={i}
                src={shape}
                alt="shape"
                className="absolute w-8 h-8 opacity-40"
                initial={{ y: -80, x: Math.random() * window.innerWidth }}
                animate={{
                  y: [0, -40, 0],
                  x: [Math.random() * 50, Math.random() * window.innerWidth],
                }}
                transition={{
                  duration: 8 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ top: `${20 + i * 20}%`, left: `${15 + i * 30}%` }}
              />
            ))}
      
            <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <p className="text-gray-500 mb-4 font-medium">Our Great Achievement Proved Us!</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  We Completed <span className="text-[#ff9800]">500+ Projects</span>
                  <br /> With Client's Satisfaction
                </h2>
              </motion.div>
      
              {/* Logos Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center">
                {logos.map((logo, index) => (
                  <motion.div
                    key={logo.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="flex justify-center"
                  >
                    <img
                      src={logo.img}
                      alt={logo.alt}
                      className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
         </section>
       <section className="relative py-8 md:py-16 bg-white overflow-hidden">
           {/* Sprinkle Shapes */}
           {shapes.map((shape, i) => (
             <motion.img
               key={i}
               src={shape}
               alt="shape"
               className="absolute w-10 h-10 opacity-40"
               initial={{ y: -100, x: Math.random() * window.innerWidth }}
               animate={{
                 y: [0, -50, 0],
                 x: [Math.random() * 100, Math.random() * window.innerWidth],
               }}
               transition={{
                 duration: 6 + i,
                 repeat: Infinity,
                 ease: "easeInOut",
               }}
               style={{ top: `${15 + i * 20}%`, left: `${10 + i * 25}%` }}
             />
           ))}
     
           <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
             {/* Heading */}
             <motion.div
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false, amount: 0.2 }}
               transition={{ duration: 0.6 }}
               className="mb-12"
             >
               <p className="text-[#ff9800] font-medium">Work Process</p>
               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                 Make Education Website
               </h2>
             </motion.div>
     
             {/* Steps Grid */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {steps.map((step, index) => (
                 <motion.div
                   key={step.id}
                   initial={{ opacity: 0, y: 40 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: false, amount: 0.2 }}
                   transition={{ duration: 0.6, delay: index * 0.15 }}
                   className="border border-blue-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow bg-white relative z-10"
                 >
                   <div className="flex justify-center mb-4">{step.icon}</div>
                   <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                   <p className="text-gray-600 text-sm">{step.desc}</p>
                 </motion.div>
               ))}
             </div>
           </div>
         </section>
       <section className="relative py-8 md:py-16 overflow-hidden bg-gradient-to-b from-white to-blue-50">
             {/* Floating shapes */}
             {shapes.map((shape, i) => (
               <motion.img
                 key={i}
                 src={shape}
                 alt="shape"
                 className="absolute w-10 h-10 opacity-50"
                 initial={{ y: -100, x: Math.random() * window.innerWidth }}
                 animate={{
                   y: [0, -50, 0],
                   x: [Math.random() * 100, Math.random() * window.innerWidth],
                 }}
                 transition={{
                   duration: 6 + i,
                   repeat: Infinity,
                   ease: "easeInOut",
                 }}
                 style={{ top: `${20 + i * 15}%`, left: `${10 + i * 15}%` }}
               />
             ))}
       
             {/* Heading */}
             <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false, amount: 0.2 }}
               transition={{ duration: 0.6 }}
               className="text-center mb-12"
             >
               <p className="text-[#ff9800] font-semibold">Available Templates</p>
               <h2 className="text-3xl md:text-4xl font-bold">
                 See Our Awesome Templates
               </h2>
             </motion.div>
       
             {/* Templates Grid */}
             <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
               {templates.map((tpl, index) => (
                 <motion.a
                   key={tpl.id}
                   href={tpl.link}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="relative overflow-hidden rounded-2xl shadow-lg border bg-white group"
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: false, amount: 0.2 }}
                   transition={{ duration: 0.5, delay: index * 0.1 }}
                 >
                   <div className="overflow-hidden h-[300px]">
                     <img
                       src={tpl.img}
                       alt={`Template ${tpl.id}`}
                       className="w-full transition-transform duration-[6s] ease-in-out group-hover:-translate-y-1/3"
                     />
                   </div>
                 </motion.a>
               ))}
             </div>
           </section>
      <section className="relative py-8 md:py-16 bg-white overflow-hidden">
            {/* Floating Shapes */}
            <motion.img
              src={shape1}
              alt="shape"
              className="absolute top-10 left-5 w-8"
              {...shapeAnimation}
            />
            <motion.img
              src={shape2}
              alt="shape"
              className="absolute top-20 right-10 w-10"
              {...shapeAnimation}
            />
            <motion.img
              src={shape3}
              alt="shape"
              className="absolute bottom-10 left-20 w-6"
              {...shapeAnimation}
            />
            <motion.img
              src={shape4}
              alt="shape"
              className="absolute bottom-16 right-16 w-12"
              {...shapeAnimation}
            />
            <motion.img
              src={shape5}
              alt="shape"
              className="absolute top-1/2 left-1/2 w-8"
              {...shapeAnimation}
            />
      
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
              >
                <p className="text-[#ff9800] font-semibold mb-2">About Us</p>
                <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
                  Bring More Profit <br /> With More Features
                </h2>
                <p className="text-gray-600 mb-6">
                  It is a long established fact that a reader will be choose by the
                  readable content of a page when looking at its layout.
                </p>
                <ul className="text-gray-700 mb-6 space-y-2">
                  <li>✔ Completed 500+ client’s projects</li>
                  <li>✔ 10+ multiple developers</li>
                  <li>✔ 100+ active clients working with us</li>
                  <li>✔ Your trusted business partner</li>
                </ul>
      
                {/* Button + Blinking Video Icon */}
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="bg-[#ff9800] text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition"
                  >
                    Know More
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=K4TOrB7at0Y"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#ff9800]/10"
                  >
                    <motion.span
                      className="absolute w-14 h-14 rounded-full border-2 border-[#ff9800]"
                      animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
                      transition={{ repeat: Infinity, duration: 1.8 }}
                    />
                    <FaPlay className="text-[#ff9800] relative z-10" />
                  </a>
                </div>
              </motion.div>
      
              {/* Right Side Feature Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="bg-white border rounded-xl p-6 shadow hover:shadow-xl transition"
                  >
                    <img src={feature.img} alt={feature.title} className="w-12 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

       <section className="py-8 md:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Choose Your Perfect Option
              </h2>
      
              {/* Tabs */}
              <div className="flex justify-center gap-4 mb-12">
                {["monthly", "yearly", "lifetime"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-full font-semibold transition-all ${
                      activeTab === tab
                        ? "bg-[#ff9800] text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-green-100"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
      
              {/* Pricing Cards */}
              <div className="grid md:grid-cols-3 gap-8">
                {plans[activeTab].map((plan, idx) => (
                  <motion.div
                    key={idx}
                    whileInView={{ opacity: [0, 1], y: [50, 0] }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    viewport={{ once: false }}
                    className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border hover:shadow-2xl transition-all duration-300 ${
                      plan.recommended ? "border-[#ff9800] scale-105" : ""
                    }`}
                  >
                    {/* Recommended badge */}
                    {plan.recommended && (
                      <span className="absolute top-4 right-4 bg-[#ff9800] text-white text-xs px-3 py-1 rounded-full">
                        Recommended
                      </span>
                    )}
      
                    <div className="p-8">
                      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-3xl font-bold">
                        {plan.price}{" "}
                        <span className="text-base font-medium text-gray-500">
                          {plan.duration}
                        </span>
                      </p>
      
                      {/* Features */}
                      <ul className="mt-6 space-y-3 text-left">
                        {plan.features &&
                          plan.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2">
                              {feature.included ? (
                                <FaCheckCircle className="text-green-500" />
                              ) : (
                                <FaTimesCircle className="text-red-500" />
                              )}
                              <span
                                className={`${
                                  feature.included ? "text-gray-700" : "text-gray-400 line-through"
                                }`}
                              >
                                {feature.text}
                              </span>
                            </li>
                          ))}
                      </ul>
      
                      {/* Button */}
                      <button className="w-full mt-8 py-3 bg-gradient-to-r from-[#ff9800] to-green-600 text-white rounded-lg font-semibold hover:from-green-500 hover:to-[#ff9800] transition-all">
                        {plan.button}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
       <section className="relative max-w-7xl mx-auto py-8 md:py-16 bg-white overflow-hidden">
      {/* Sprinkle Shapes */}
      {shapes.map((shape, i) => (
        <motion.img
          key={i}
          src={shape}
          alt="shape"
          className="absolute w-10 h-10 opacity-50"
          style={{
            top: `${Math.random() * 80 + 5}%`,
            left: `${Math.random() * 80 + 5}%`,
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      {/* Heading */}
      <div className="text-center mb-12 relative z-10">
        <p className="text-sm text-[#ff9800] font-medium">Featured Websites</p>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2 max-w-2xl mx-auto">
          Take a Look at The Featured Course Websites
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative flex justify-center items-center">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} // triggers on scroll
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6"
        >
          {students
            .slice(activeIndex, activeIndex + 3)
            .concat(
              students.slice(0, Math.max(0, activeIndex + 3 - students.length))
            )
            .map((student) => (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-orange-50/50 rounded-2xl shadow-lg p-6 text-center"
              >
                <img
                  src={student.img}
                  alt={student.name}
                  className="w-20 h-20 rounded-full border-4 border-white shadow-md mx-auto -mt-12 mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {student.name}
                </h3>

                {/* Social Media */}
                <div className="flex justify-center gap-4 mt-3 text-gray-500">
                  <a href="#" className="hover:text-[#ff9800]"><FaFacebookF /></a>
                  <a href="#" className="hover:text-[#ff9800]"><FaTwitter /></a>
                  <a href="#" className="hover:text-[#ff9800]"><FaInstagram /></a>
                  <a href="#" className="hover:text-[#ff9800]"><FaLinkedinIn /></a>
                </div>

                <div className="flex justify-center gap-3 mt-4">
                  <button className="px-4 py-2 border rounded-md text-sm hover:bg-gray-100">
                    View Profile
                  </button>
                  <button className="px-4 py-2 bg-gradient-to-r from-[#ff9800] to-green-400 text-white rounded-md text-sm">
                    +Follow
                  </button>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {students.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? "bg-[#ff9800]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>

    <section className="max-w-7xl mx-auto relative py-8 md:py-16 bg-transparent overflow-hidden">
      {/* Decorative Shapes with floating motion */}
      <motion.img
        src={shape8}
        alt="shape"
        className="absolute top-10 left-10 w-10 opacity-70"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={shape7}
        alt="shape"
        className="absolute bottom-20 left-1/4 w-8 opacity-60"
        animate={{ x: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={shape11}
        alt="shape"
        className="absolute top-1/3 right-16 w-12 opacity-60"
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
      <motion.img
        src={shape13}
        alt="shape"
        className="absolute bottom-10 right-1/3 w-14 opacity-50"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={shape2}
        alt="shape"
        className="absolute top-1/2 left-5 w-9 opacity-75"
        animate={{ x: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Illustration */}
        <motion.div
          className="flex-1 flex justify-center relative z-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={illustration}
            alt="client illustration"
            className="w-[90%] md:w-[80%] lg:w-[70%] max-w-md"
          />
        </motion.div>

        {/* Right Testimonial Slider */}
        <div className="flex-1 relative z-10">
          <p className="text-sm text-[#ff9800] font-semibold mb-2">
            What Our Clients Say
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Happy Client’s
          </h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="bg-transparent shadow-md rounded-xl p-6 min-h-[220px]"
            >
              <p className="text-gray-600 mb-4 leading-relaxed">
                “{testimonials[current].text}”
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="flex mt-6 gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrent(index)}
                whileTap={{ scale: 1.2 }}
                animate={{
                  scale: current === index ? 1.3 : 1,
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === index ? "bg-[#ff9800]" : "bg-gray-300"
                }`}
              ></motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>

      <section className="relative py-8 md:py-16 bg-transparent max-w-7xl mx-auto overflow-hidden">
      {/* Floating Shapes */}
      {shapes.map((shape, index) => (
        <motion.img
          key={index}
          src={shape}
          alt="shape"
          className="absolute w-10 md:w-14 opacity-70"
          style={{
            top: `${20 + index * 15}%`,
            left: `${index % 2 === 0 ? 5 : 90}%`,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Section Title */}
      <div className="text-center mb-12 relative z-10">
        <p className="text-[#ff9800] font-medium">Our Latest Blogs</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Blogs</h2>
      </div>

      {/* Blog Cards */}
      <div className="container mx-auto grid gap-8 px-4 sm:px-6 lg:px-8 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-transparent rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            {/* Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover rounded-t-xl"
            />

            {/* Content */}
            <div className="p-5">
              {/* Meta */}
              <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  <FaUserAlt className="text-[#ff9800]" /> {blog.author}
                </span>
                <span className="flex items-center gap-1">
                  <FaCalendarAlt className="text-[#ff9800]" /> {blog.date}
                </span>
                <span className="flex items-center gap-1">
                  <FaCircle className="text-[#ff9800]" /> {blog.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                {blog.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                {blog.desc}
              </p>

              {/* Read More */}
              <a
                href="#"
                className="text-[#ff9800] font-medium hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Home;
