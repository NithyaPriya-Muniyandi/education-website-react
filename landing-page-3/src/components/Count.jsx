import { useEffect, useState, useRef } from "react";
import { HiOutlineUserGroup, HiOutlineBookOpen } from "react-icons/hi";
import { FaRegCalendarAlt, FaGlobeAmericas } from "react-icons/fa";

export default function FunFacts() {
  const stats = [
    { id: 1, icon: <HiOutlineUserGroup className="text-4xl text-green-400" />, number: 20, label: "Qualified Instructors" },
    { id: 2, icon: <FaGlobeAmericas className="text-4xl text-orange-400" />, number: 1490, label: "Worldwide Students" },
    { id: 3, icon: <HiOutlineBookOpen className="text-4xl text-teal-400" />, number: 100, label: "Courses" },
    { id: 4, icon: <FaRegCalendarAlt className="text-4xl text-yellow-400" />, number: 10, label: "Years' Experience" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  // Intersection Observer to start counter on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

useEffect(() => {
  if (!start) return;

  const duration = 2000;
  const frameRate = 30;
  const totalFrames = Math.round((duration / 1000) * frameRate);

  let frame = 0;
  const counter = setInterval(() => {
    frame++;
    setCounts(stats.map(stat =>
      Math.min(Math.round((stat.number / totalFrames) * frame), stat.number)
    ));

    if (frame === totalFrames) {
      clearInterval(counter);
    }
  }, 1000 / frameRate);
}, [start]);


  return (
    <section ref={sectionRef} className="bg-orange-100 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#ff9800]">
          Some Fun Facts from Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {stats.map((stat, index) => (
    <div
      key={stat.id}
      className="bg-orange-700 p-8 border-8 border-orange-500 shadow-lg text-center"
    >
      {/* Icon center */}
      <div className="flex justify-center items-center">
        {stat.icon}
      </div>

      <h3 className="text-3xl font-bold text-white mt-4">
        {counts[index]}<span className="text-lg">+</span>
      </h3>
      <p className="text-gray-300 text-sm mt-2">{stat.label}</p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
