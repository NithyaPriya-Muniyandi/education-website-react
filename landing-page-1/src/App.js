
import StatsSection from './components/Count';
import FeaturedCourses from './components/Course';
import FeaturesSection from './components/Feature';
import Footer from './components/Footer'; 
import HeroBanner from './components/HeroBanner';
import CourseCategories from './components/IconCourse';
import SpecialOffer from './components/Special';
import SubscribeSection from './components/Subscribe';
import Testimonial from './components/Testimonial';
import VideoSection from './components/Video';

function App() {
  return (
    <>
    <HeroBanner/>
    <CourseCategories/>
    <SpecialOffer/>
    <FeaturedCourses/>
    <FeaturesSection/>
    <VideoSection/>
    <StatsSection/>
    <Testimonial/>  
    <SubscribeSection/>
    <Footer/>
    </>
  );
}

export default App;
