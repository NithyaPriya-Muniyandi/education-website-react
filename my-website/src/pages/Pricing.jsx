// PricingSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import list from "../assets/listbg.png"; // 👈 your background image

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

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <section className="pb-8 md:pb-16 bg-gray-50">
       <div
        className="relative w-full py-20 bg-center w-full h-full bg-cover bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${list})` }}
      >

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Pricing
          </h1>
          <nav className="flex items-center space-x-2 text-sm md:text-base">
            <Link to="/" className="font-semibold text-gray-800 hover:text-orange-600">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <span className="font-semibold text-[#ff9800]">Pricing</span>
          </nav>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold my-8">
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
                            feature.included
                              ? "text-gray-700"
                              : "text-gray-400 line-through"
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
  );
}
