import BannerSection from "./component/Banner";
import CoursesSection from "./component/Course";
import CoursesCarousel from "./component/FeatureCourse";
import Footer from "./component/Footer";
import StatsSection from "./component/Icons";
import InstructorsSection from "./component/Instructor";
import LearningExperience from "./component/Learning";
import PopularCourses from "./component/Popular";
import SubscribeSection from "./component/Subscribe";
import TestimonialSection from "./component/Testimonila";
import FeaturesSection from "./component/Video";


function App() {
  return (
    <>
    <BannerSection/>
    <PopularCourses/>
    <LearningExperience/>
    <CoursesCarousel/>
    <StatsSection/>
    <CoursesSection/>
    <InstructorsSection/>
    <FeaturesSection/>
    <TestimonialSection/>
    <SubscribeSection/>
    <Footer/>
    </>
  );
}

export default App;
