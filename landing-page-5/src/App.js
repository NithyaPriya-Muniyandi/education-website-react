import BannerSection from "./component/Banner";
import DiscountSection from "./component/Discount";
import Footer from "./component/Footer";
import CoursesSection from "./component/LatestCourse";
import LineImagesSection from "./component/LineImg";
import SubscribeSection from "./component/Subscribe";
import TestimonialSection from "./component/Testimonial";
import TopTrendingCategories from "./component/Trend";
import VideoSection from "./component/Video";


function App() {
  return (
<>
<BannerSection/>
<TopTrendingCategories/>
<DiscountSection/>
<CoursesSection/>
<VideoSection/>
<LineImagesSection/>
<TestimonialSection/>
<SubscribeSection/>
<Footer/>
</>
  );
}

export default App;
