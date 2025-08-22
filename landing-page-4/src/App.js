import HeroCarousel from "./components/Banner";
import StatsSection from "./components/Count";
import CoursesCarousel from "./components/Course";
import Footer from "./components/Footer";
import InstructorsSection from "./components/Instructor";
import CoursesSection from "./components/LatestCourse";
import SubscribeSection from "./components/Subscribe";
import TestimonialSection from "./components/Testimonial";
import TopTrendingCategories from "./components/Treanding";
import VideoSection from "./components/Video";

function App() {
  return (
<>
<HeroCarousel/>
<TopTrendingCategories/>
<CoursesCarousel/>
<VideoSection/>
<StatsSection/>
<CoursesSection/>
<InstructorsSection/>
<TestimonialSection/>
<SubscribeSection/>
<Footer/>
</>
  );
}

export default App;
