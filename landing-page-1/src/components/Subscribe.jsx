import bgImage from "../assets/subscribebgbg.webp"; // background image
import graduateImg from "../assets/subscribebg.webp"; // right side image

const SubscribeSection = () => {
  return (
<section className="relative py-12 bg-white">
  {/* Right-side Background Image for md+ */}
  <div
    className="hidden md:block absolute top-0 right-0 h-full w-1/4 bg-cover bg-center"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    {/* Optional overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
  </div>

  <div className="relative container max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Left Content */}
    <div>
      <h2 className="text-2xl md:text-5xl font-bold mb-4 text-[#ff9800]">
        Stay Up to Date About All Our Courses
      </h2>
      <p className="text-sm md:text-base mb-6 leading-relaxed text-gray-800">
        Our service is free to users because vendors pay us when they receive
        web traffic. We list all vendors - not just those that pay us - in our
        comprehensive directory so that you can compare, sort and filter your
        results to make the most informed decision possible.
      </p>

      {/* Subscribe Input */}
<form className="flex flex-col sm:flex-row bg-white rounded-full overflow-hidden shadow-lg max-w-lg 
  shadow-[0_0_15px_rgba(255,152,0,0.4),0_-5px_15px_rgba(255,152,0,0.4)]">
  <input
    type="email"
    placeholder="Enter Email Address"
    className="flex-1 px-8 py-4 text-sm text-gray-700 focus:outline-none"
  />
  <button
    type="submit"
    className="bg-[#ffb74d] hover:bg-[#ff9800] text-white px-6 py-3 text-sm font-semibold 
      transition-all duration-300 ease-in-out"
  >
    Subscribe
  </button>
</form>




    </div>

    {/* Right Image */}
    <div className="flex justify-center relative z-10">
      <img
        src={graduateImg}
        alt="Graduate"
        className="w-full max-w-sm shadow-lg object-cover"
      />
    </div>
  </div>
</section>


  );
};

export default SubscribeSection;
