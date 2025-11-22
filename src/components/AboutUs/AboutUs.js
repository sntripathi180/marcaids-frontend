import React from 'react';
import aboutus1 from "../../assets/aboutus1.jpg";
import aboutus2 from "../../assets/aboutus2.jpg";
import aboutus3 from "../../assets/aboutus3.jpg";
import aaboutus from "../../assets/aaboutus.jpeg";
import Navbar from '../Navbar';
import Footer from "../Footer/Footer";
import ReactGA from 'react-ga4';
import { Helmet } from "react-helmet";
import "./AboutUs.css"

// const GoogleAnalytics = ({ G-GE2CXX9DG7 }) => {
//   useEffect(() => {
//     ReactGA.initialize(G-GE2CXX9DG7);
//     ReactGA.send("pageview");
//   }, [G-GE2CXX9DG7]);

//   return null;
// };

// export default GoogleAnalytics;

function AboutUs() {
  return (
    <>
    
      <Navbar />
      <div>
      <Helmet>
      <meta charSet="utf-8" />
        <title>About Marcaids | Leading Digital Marketing Agency in the USA</title>
        <meta name="description" content="As a leading digital marketing agency in the USA, Marcaids aims to build brands to perfection and accelerate their growth and revenue in the digital space." />
        <meta name="keywords" content="react, seo, react-helmet" />
      </Helmet>
    </div>

      <section className="aboutUsIntro">
        <div className="container mx-auto lg:px-4 px-0">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-white flex items-center justify-center py-8 lg:py-0">
              <h1 className="text-center text-black font-medium text-3xl lg:text-5xl lg:mb-80">ABOUT US</h1>
            </div>
            <div className="lg:w-2/3 bg-white flex flex-col items-center lg:items-start p-6 lg:p-12">
              <img src={aaboutus} className="w-full object-cover h-64 lg:h-auto mb-4 rounded-2xl" alt="About Us" />
              <h2 className="font-semibold text-2xl text-center lg:text-left mt-5">Why Us?</h2>
              <p className="text-justify mt-2 text-xl " style={{ fontFamily: 'Inika, serif' }}>
              In today’s fast-paced world, standing out in digital marketing is more than a challenge—it’s an art. At Marcaids, we don’t just see hurdles; we see opportunities for strategic brand development and growth. We’re not just another digital marketing agency; we’re the best digital marketing agency, and your creative co-pilot, ready to drive your brand toward success. With Marcaids, your business doesn’t just compete—it leads, influencing trends and setting new standards in brand management. Choosing Marcaids means partnering with a team that exceeds expectations, making every interaction unforgettable. We blend passion with purpose, ensuring each campaign is as dynamic as it is impactful. Ready to elevate your brand to new heights? The top Digital marketing agency in the USA, Marcaids will take your brand beyond the sky’s limit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="whyUsIntro">
        <div className="container mx-auto px-4 mt-8">
          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="lg:w-1/2 flex justify-center lg:justify-start mb-4 lg:mb-0">
              <img src={aboutus2} alt="Brand History" className="lg:h-[480px] w-full rounded-2xl" />
            </div>
            <div className="lg:w-1/2 lg:pl-10">
              <h2 className="font-semibold text-2xl mt-4 lg:mt-0">History of the Brand</h2>
              <p className="text-justify text-xl" style={{ fontFamily: 'Inika, serif' }}>
              In an industry where creativity and innovation are essential, Marcaids was born to turn challenges into triumphs. We are more than a top digital marketing company in the USA—we are your growth partner, infusing every project with originality and cutting-edge strategies. From humble beginnings to becoming a path that lights the way for others, Marcaids has always led the charge, pushing boundaries and setting new standards in the market. Whether it’s social media marketing for interior designers, strategic brand management, or web development services, your brand doesn’t just keep up—it stands out. Choosing Marcaids is a commitment to excellence, creativity, and impactful change, ranking us among the top 5 digital marketing agencies in the USA.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ourPromise mt-8 lg:mt-0">
        <div className="container-fluid text-center px-0 ">
          <div className=" mb-6"> 
            <h2 className="font-semibold text-3xl text-[#442004]">OUR PROMISE</h2>
            <p className="mt-4 text-[16px] lg:text-xl  mx-2 text-[#4e3815]" style={{ fontFamily: 'Inika, serif' }}>
            We make an impact by taking bold steps and trying new things. By pushing boundaries, we bring together cultures, ideas, people, and communities. We approach everything differently and leave a lasting impression. Marcaids stands for innovation, action, and results which it fulfills through its various services. The best digital marketing agency in the USA, Marcaids is about delivering what others can only dream of.
            </p>
          </div>
          {/* Full-Width Image */}
          <div className="w-full">
            <img src={aboutus3} alt="Our Promise" className="w-full object-cover sm:h-100 lg:h-[800px] " />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutUs;