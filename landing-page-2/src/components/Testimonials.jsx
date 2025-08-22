import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

// Import customer images
import customer1 from "../assets/customer1.png";
import customer2 from "../assets/customer2.png";
import customer3 from "../assets/customer3.png";

const testimonials = [
  {
    img: customer1,
    name: "Jane Doe",
    role: "Student",
    feedback:
      "Our service is free to users because vendors pay us when they receive web traffic. We list all vendors - not just those that pay us - in our comprehensive directory so that you can compare, sort and filter your results to make the most informed decision possible. Get App is a Gartner company."
  },
  {
    img: customer2,
    name: "Jef Hardy",
    role: "Instructor",
    feedback:
      "Our service is free to users because vendors pay us when they receive web traffic. We list all vendors - not just those that pay us - in our comprehensive directory so that you can compare, sort and filter your results to make the most informed decision possible. Get App is a Gartner company."
  },
  {
    img: customer3,
    name: "Matt Hardy",
    role: "Student",
    feedback:
      "Our service is free to users because vendors pay us when they receive web traffic. We list all vendors - not just those that pay us - in our comprehensive directory so that you can compare, sort and filter your results to make the most informed decision possible. Get App is a Gartner company."
  }
];

const CustomerFeedback = () => {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h1 className="text-2xl md:text-5xl font-bold text-center text-[#0f172a] mb-16">
          Customer Feedbacks
        </h1>

        {/* Grid Layout */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
  key={index}
  className="relative flex flex-col items-center text-center border border-orange-200 p-6 shadow-sm hover:shadow-lg transition shadow-orange-300"
>
  {/* Quote Icon - Positioned */}
  <div className="absolute -top-6 bg-[#ff9800] text-white p-4 rounded-full left-12 shadow-md">
    <FaQuoteLeft size={26} />
  </div>

  {/* Feedback */}
  <p className="mt-8 text-gray-500 text-sm text-start font-semibold md:text-base leading-relaxed mb-6">
    {testimonial.feedback}
  </p>

  {/* Customer Info */}
  <div className="flex flex-row items-center gap-x-4">
    <img
      src={testimonial.img}
      alt={testimonial.name}
      className="w-16 h-16 rounded-full object-cover border-2 border-[#ff9800]"
    />
    <div>
      <h3 className="font-bold text-[#0f172a]">{testimonial.name}</h3>
      <p className="text-gray-500 text-sm font-semibold md:text-base leading-snug">
        {testimonial.role}
      </p>
    </div>
  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
