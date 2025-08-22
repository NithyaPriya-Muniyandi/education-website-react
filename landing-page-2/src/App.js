import BannerSection from "./components/Banner";
import StatsSection from "./components/Count";
import FeatureSection from "./components/DreamCourse";
import FeaturedCourses from "./components/FeaturedCourse";
import Footer from "./components/Footer";
import Instructors from "./components/Instructors";
import OfferSection from "./components/Offer";
import CustomerFeedback from "./components/Testimonials";
import VideoSection from "./components/Video";


function App() {
  return (
   <>
   <BannerSection/>
   <FeatureSection/>
   <FeaturedCourses/>
   <OfferSection/>
   <Instructors/>
   <VideoSection/>
   <StatsSection/>
   <CustomerFeedback/>
   <Footer/>
   </>
  );
}

export default App;
