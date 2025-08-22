
import BannerSection from './components/Banner';
import BlogSection from './components/Blog';
import FunFacts from './components/Count';
import ExperienceSection from './components/Experience';
import FeaturesSection from './components/Feature';
import FeaturedCourses from './components/FeatureTab';
import Footer from './components/Footer';
import ServicesSection from './components/Service';
import SubscribeSection from './components/Subscribe';
import './index.css';
function App() {
  return (
    <>
    <BannerSection/>
    <FeaturesSection/>
    <ServicesSection/>
    <ExperienceSection/>
    <FeaturedCourses/>
    <SubscribeSection/>
    <FunFacts/>
    <BlogSection/>
    <Footer/>
    </>
  );
}

export default App;
