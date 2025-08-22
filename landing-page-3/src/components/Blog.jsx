import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import { HiOutlineUser, HiOutlineEye } from "react-icons/hi";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      image: blog1,
      title: "Vivamus vestibulum ntulla nec ante.",
      author: "Karem",
      designation: "Web Design",
      link: "https://corsmat.xyz/nolan/blog?category=web-design",
    },
    {
      id: 2,
      image: blog2,
      title: "Morbi in sem quis dui placerat ornare. Pellen...",
      author: "Maximilian",
      designation: "Web Development",
      link: "https://corsmat.xyz/nolan/blog?category=web-development",
    },
    {
      id: 3,
      image: blog3,
      title: "Donec nec justo eget felis facilisis fermentum...",
      author: "Donnarumma",
      designation: "Web Design",
      link: "https://corsmat.xyz/nolan/blog?category=web-design",
    },
  ];

  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#ff9800]">
        Latest Blog
      </h2>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              {/* Author */}
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <HiOutlineUser className="w-4 h-4" />
                <span>{blog.author}</span>
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-gray-800 mb-5">
                {blog.title}
              </h3>

              {/* Footer: Designation & Eye Icon */}
              <div className="flex items-center justify-between">
                <a
                  href={blog.link}
                  className="bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-orange-700 transition"
                >
                  {blog.designation}
                </a>
                <a href="https://corsmat.xyz/nolan/blog/vivamus-vestibulum-ntulla-nec-ante." className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100">
                  <HiOutlineEye className="w-4 h-4 text-gray-600" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
