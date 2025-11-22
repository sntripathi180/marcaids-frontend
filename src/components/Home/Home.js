import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import branding2 from "../../assets/branding2.png";
import client1 from "../../assets/client1.jpg";
import webanddevelopment from "../../assets/webanddevelopment.png";
import socialmediamanagement from "../../assets/socialmediamanagement.png";
import whatwedo from "../../assets/whatwedo.jpg";
import space from "../../assets/space.jpeg";
import home1 from "../../assets/home-1.jpeg";
import home2 from "../../assets/home-2.jpeg";
import home4 from "../../assets/home-4.jpeg";
import HeroSection from './HeroSection';
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";
import './Home.module.css'



const Home = () => {
  return (
    <>
     <div>
      <Helmet>
      <meta charSet="utf-8" />
        <title>Marcaids | Best digital marketing agency in the USA</title>
        <meta name="description" content="Looking for the best digital marketing agency in Houston? Marcaids is your go-to marketing agency that'll help your brand become the best in your industry." />
        <meta name="keywords" content="react, seo, react-helmet" />
      </Helmet>
    </div>

      <HeroSection />
      <div className="w-full   font-sans text-black">
        
        {/* Top Header Section */}
        <section className="bg-[#4f3c31] h-24 flex items-center justify-between px-8">
          <span className="text-white text-xl sm:text-4xl">Marcaids</span>
          {/* <Link to="/about">
          <Button variant="light" className="text-xs font-semibold rounded-full px-4 py-2 text-end">KNOW MORE</Button>

          </Link> */}

<Link to="/about">
    <button className="px-2 py-2  lg:py-3 mr-0 lg:mr-10 bg-white text-black font-semibold rounded-full text-xs sm:text-sm lg:text-base">
  ABOUT US
</button>
</Link>
        </section>

               {/* Our Services Section */}

               <section className="text-left mt-10">
  <h2 className="text-4xl font-semibold mb-6 lg:mb-8 sm:text-4xl lg:text-5xl font-sodosans ml-6 lg:ml-12 mt-8 lg:mt-5" >Our Services</h2>
  
  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 sm:gap-6 lg:gap-8 justify-items-center">
    {[client1, webanddevelopment, branding2, socialmediamanagement].map((image, index) => (
      <div 
        key={index}
        className="w-40 h-40 sm:w-46 sm:h-46 lg:w-64 lg:h-64 bg-white rounded-full shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform"
      >
        <img src={image} alt={`Service ${index + 1}`} className="w-full h-full object-cover rounded-full" />
      </div>
    ))}
  </div>

  <div className="mt-8 flex justify-center lg:justify-end">
<Link to="/services">
    <button className="px-6 py-2  lg:py-3 mr-0 lg:mr-10 bg-[#000000] text-white font-semibold rounded-full text-xs sm:text-sm lg:text-base ml-52 lg:ml-0">
  OUR SERVICES
</button>
</Link>

  </div>
</section>


        {/* What We Do Section */}
        <section className="relative bg-[#867c6e] p-8  mt-12">
  <h2 className="text-3xl sm:text-4xl lg:text-6xl lg:mb-4 mb-2 text-left" style={{ fontFamily: 'Imprima, sans-serif' }}>What we do?</h2>
  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8 ml-2 mr-2">
    <p className="flex-1 mb-2 lg:mb-0 text-base sm:text-lg lg:text-3xl leading-relaxed text-left mt-4" style={{ fontFamily: 'Imprima, sans-serif' }}>
      Your brand isn’t just a business—it’s a story waiting to be told. At Marcaids, we specialize in bringing that story to life. As one of the top marketing agencies in the USA, we craft marketing strategies that are as unique as your brand. From performance marketing that boosts ROI and ROAS to strategic brand development that sets you apart, we offer everything to elevate your brand. Whether you’re looking for the best content creation agency in the USA or a web design and development partner, we combine creativity and strategy to deliver campaigns with real impact. Ready to make your mark with digital marketing? Let’s do it together!
    </p>
    <img src={whatwedo} alt="What we do" className="w-full max-h-[250px] sm:max-h-[350px] lg:max-h-[390px] lg:w-[390px] rounded-lg object-cover mt-6" />
  </div>
  
  {/* Button positioned below the image */}
  <div className="flex justify-end mt-4">
  <Link to="/about">
    <button className="absolute bottom-3 lg:bottom-6 right-6 px-6 py-2 sm:px-6 mt-4 sm:py-3 bg-[#000000] text-white font-semibold rounded-full text-xs sm:text-sm lg:text-base">
  ABOUT US
</button>
</Link>
  {/* <Link to="/about">
    <Button variant="dark" className="text-xs font-semibold px-6 py-2 rounded-full">
      ABOUT US
    </Button>
  </Link> */}
</div>
</section>






        {/* Testimonials Section */}
        <section className="mt-12">
  <h2 className="text-3xl  mb-5 text-left sm:text-5xl ml-4 lg:ml-20 mt-8 lg:mt-20 ">Testimonials</h2>
  <div className="flex flex-col sm:flex-row items-center bg-[#b9afa8] p-6 rounded-3xl shadow-lg w-full max-w-[900px] lg:max-w-[1327px] mx-auto lg:p-12 relative">
    <img 
      src={space} 
      alt="Sandeep Soni" 
      className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mb-4 sm:mb-0 sm:mr-8 lg:mr-12 lg:w-52 lg:h-52 object-cover" 
    />
    <div className="text-left sm:text-left flex-1" >
      <h3 className="text-lg sm:text-xl lg:text-[40px] font-semibold">Sandeep Soni</h3>
      <p className="text-sm sm:text-base lg:text-3xl lg:mt-4 mt-2">CEO, The Space Crafters</p>
      <blockquote className="text-sm sm:text-md lg:text-2xl mt-2 leading-relaxed mt-4">
        Partnering with Marcaids has significantly boosted our interior design business.
      </blockquote>
    </div>
    <Link to="/testimonials">
    <button className="absolute bottom-3 lg:bottom-6 right-6 px-4 py-2 sm:px-6 sm:py-3 bg-white text-black font-semibold rounded-full text-xs sm:text-sm lg:text-base">
  View Testimonials
</button>

    </Link>
  </div>
</section>



        {/* Our Clients Work Section */}
        <section className="clientsWorkSection mt-28">
            
            
            <div class="container" >
              
               <div class="row">
                  <div class="col-md-8" style={{backgroundColor:'white'}}>
                  <h2 className="lg:text-[46px]">
  Our Clients Work
</h2>

        <img src={home4} className="lg:w-[750px] lg:h-[1065px] " alt="Large Image" style={{marginleft:'60px'}}/>
      </div>
      <div class="col-md-4 d-flex flex-column justify-content-between "  style={{backgroundColor:'white'}}>
        <img src={home1} class="img-fluid  lg:w-[473px] lg:h-[685px] lg:mb-8 w-[460px] h-[670px]" alt="Small Image 1"/>
        <img src={home2} class="img-fluid lg:w-[473px] lg:h-[685px] mb-4 w-[460px] h-[670px]" alt="Small Image 2"/>
      </div>
    </div>
  </div>

            
        </section>
        


</div>
      <Footer />
    </>
  );
};

export default Home;
