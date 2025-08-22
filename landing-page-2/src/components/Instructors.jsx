import { useState } from "react";
import instructor1 from "../assets/instructor1.jpg";
import instructor2 from "../assets/instructor2.jpg";
import instructor3 from "../assets/instructor3.jpg";
import MyImage from "../assets/graduateimg.png"; 
const instructors = [
  {
    name: "John Doe",
    title: "Senior Instructor",
    image: instructor1,
    bio: "John has over 15 years of teaching experience in web development, specializing in React, Node.js, and cloud technologies.",
    expertise: ["React", "Node.js", "AWS", "GraphQL"]
  },
  {
    name: "Jane Smith",
    title: "Design Expert",
    image: instructor2,
    bio: "Jane is a creative UI/UX designer with a passion for creating user-friendly interfaces and interactive experiences.",
    expertise: ["UI/UX", "Figma", "TailwindCSS", "Illustrator"]
  },
  {
    name: "Michael Brown",
    title: "Full Stack Developer",
    image: instructor3,
    bio: "Michael builds modern full-stack applications and mentors students in JavaScript, MongoDB, and API development.",
    expertise: ["MERN Stack", "API Development", "Docker", "Testing"]
  }
];

export default function Instructors() {
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  return (
    <div className="bg-orange-50 py-8 md:py-16">
         <h2 className="text-3xl md:text-5xl font-bold text-center text-[#ff9800] mb-8">
        Our Instructors
      </h2>
      <div className="flex justify-center">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition w-full md:w-[320px]"
            >
              {/* Image wrapper */}
              <div className="overflow-hidden">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-80 object-cover transform transition duration-500 hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#0f172a]">
                  {instructor.name}
                </h3>
                <p className="text-blue-600 font-medium text-lg">
                  {instructor.title}
                </p>
                <button
                  onClick={() => setSelectedInstructor(instructor)}
                  className="mt-4 bg-[#ff9800] hover:bg-orange-600 text-white px-5 py-2.5 rounded shadow"
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedInstructor && (
     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
  <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl overflow-y-auto max-h-[90vh] relative">

    {/* Image & title section */}
    <div className="flex flex-col items-center p-6 pt-10">
      <img
        src={selectedInstructor.image}
        alt={selectedInstructor.name}
        className="w-32 h-32 object-cover rounded-full border-4 border-orange-500 shadow-lg"
      />
      <h2 className="text-2xl font-bold text-[#0f172a] mt-4">
        {selectedInstructor.name}
      </h2>
      <p className="text-blue-600 font-medium mb-4">
        {selectedInstructor.title}
      </p>
    </div>

    {/* Content */}
    <div className="px-6 pb-6">
      <p className="text-gray-700 mb-4">{selectedInstructor.bio}</p>

      <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
      <ul className="list-disc list-inside text-gray-700">
        {selectedInstructor.expertise.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </div>

    {/* Close button bottom right */}
    <div className="flex justify-end p-4">
      <button
        onClick={() => setSelectedInstructor(null)}
        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded shadow"
      >
        Close
      </button>
    </div>
  </div>
</div>
      )}
       <div className="max-w-5xl mx-auto text-center mt-8">
  <img
    src={MyImage}
    alt="Description"
    className="mx-auto inline-block"
  />
</div>
    </div>
  );
}
