import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1c from "../../assets/img1c-removebg-preview.png";
import img2c from "../../assets/img2c-removebg-preview.png";
import img3c from "../../assets/img3c-removebg-preview.png";
import img4c from "../../assets/img4c-removebg-preview.png";
import img5c from "../../assets/img5c-removebg-preview.png";
import "./OurServices.css";

function OurServices() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-10">
      <div className="text-4xl lg:text-5xl md:text-4xl font-bond underline text-center mb-5">OUR SERVICES</div>

      {/* Carousel section with responsive container */}
      <div className="w-full max-w-7xl px-4">
        <Carousel>
          {/* First Slide: Performance Marketing */}
          <Carousel.Item>
            <div
              className="relative bg-gradient-to-br from-gray-100 to-gray-400 rounded-3xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center"
              style={{ height: 'auto', minHeight: '400px' }}>

              {/* Image container with responsive sizing */}
              <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                <img src={img1c} alt="Performance Marketing" className="w-30 h-30 lg:w-40 lg:h-40 md:w-70 md:h-70 object-cover rounded-full" />
              </div>

              {/* Text container with responsive paddings and alignment */}
              <div className="w-full md:w-2/3 md:pl-8 text-start md:text-left">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold ">PERFORMANCE MARKETING</h2>
                <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-8">
                Ready to turn clicks into conversions? Our Performance Marketing service uses a clear strategy to optimize every campaign for maximum ROI and ROAS. As one of the top 5 marketing agencies in the USA, we give your business a strategic edge. Whether you're partnering with a top agency or searching for performance marketing companies in the USA, we focus on delivering measurable results every time.

                </p>
                <Link to="/contact">
                  <button className="bg-gray-700 text-white rounded-full py-2 md:py-3 px-6 md:px-8 hover:bg-gray-800 transition">
                    Book Your Slot
                  </button>
                </Link>
              </div>
            </div>
          </Carousel.Item>

          

          <Carousel.Item>
            <div
              className="relative bg-gradient-to-br from-gray-100 to-gray-400 rounded-3xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center"
              style={{ height: 'auto', minHeight: '400px' }}>
              <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                <img src={img2c} alt="Web Design and Development" className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-full" />
              </div>
              <div className="w-full md:w-2/3 md:pl-8 text-start md:text-left">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">WEB DESIGN AND DEVELOPMENT</h2>
                <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-8">
                Your website should be more than just a page—it should be an experience. As a web design and development agency, we craft sites that look great and work flawlessly. Whether you need to build a Shopify website or a WordPress website, our team of the best web developers in the USA will bring your vision to life. Partner with one of the best website development companies and make your mark!
                </p>
                <Link to="/contact">
                  <button className="bg-gray-700 text-white rounded-full py-2 md:py-3 px-6 md:px-8 hover:bg-gray-800 transition">
                    Book Your Slot
                  </button>
                </Link>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div
              className="relative bg-gradient-to-br from-gray-100 to-gray-400 rounded-3xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center"
              style={{ height: 'auto', minHeight: '400px' }}>
              <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                <img src={img3c} alt="Web Design and Development" className="w-60 h-60 md:w-60 md:h-60 object-cover rounded-full" />
              </div>
              <div className="w-full md:w-2/3 md:pl-8 text-start md:text-left">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">BRANDING</h2>
                <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-8">
                Your brand is more than a logo—it’s a story. Our strategic brand development and brand management consultant services give your business a unique voice. As one of the top branding and brand management agencies, we help create lasting identities. Need a brand reboot? Trust our branding and brand management experts to set you apart.

                </p>
                <Link to="/contact">
                  <button className="bg-gray-700 text-white rounded-full py-2 md:py-3 px-6 md:px-8 hover:bg-gray-800 transition">
                    Book Your Slot
                  </button>
                </Link>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
  <div
    className="relative bg-gradient-to-br from-gray-100 to-gray-400 rounded-3xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center"
    style={{ height: 'auto', minHeight: '400px' }}
  >
    <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
      <img
        src={img4c}
        alt="Web Design and Development"
        className="w-80 h-80 md:w-72 md:h-72 object-cover rounded-full"
      />
    </div>
    <div className="w-full md:w-2/3 md:pl-8 text-start md:text-left">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">SOCIAL MEDIA MANAGEMENT</h2>
      <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-8">
      Turn your social feeds into curated works of art with our social media management services. From Pinterest marketing for interior designers to finding the best social media platforms for yourself, we’ve got the expertise to elevate your brand.
      </p>
      <Link to="/contact">
        <button className="bg-gray-700 text-white rounded-full py-2 md:py-3 px-6 md:px-8 hover:bg-gray-800 transition">
          Book Your Slot
        </button>
      </Link>
    </div>
  </div>
</Carousel.Item>


          {/* Repeat similar structure for other slides */}
          <Carousel.Item>
            <div
              className="relative bg-gradient-to-br from-gray-100 to-gray-400 rounded-3xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center"
              style={{ height: 'auto', minHeight: '400px' }}>
              <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                <img src={img5c} alt="Web Design and Development" className="w-80 h-80 md:w-60 md:h-60 object-cover rounded-full" />
              </div>
              <div className="w-full md:w-2/3 md:pl-8  md:text-left">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-start">CONTENT CREATION</h2>
                <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-8 text-start">
                Looking for the best content creation agency in the USA? We transform ideas into SEO-optimized content that strengthens your online presence. Ranked among the top 5 content creation agencies in the USA, we craft impactful, shareable content that amplifies your brand’s voice and makes it unforgettable.

                </p>
                <Link to="/contact">
                  <button className="bg-gray-700 text-white rounded-full py-2 md:py-3 px-6 md:px-8 hover:bg-gray-800 transition text-end">
                    Book Your Slot
                  </button>
                </Link>
              </div>
            </div>
          </Carousel.Item>

          {/* Additional slides... */}
        </Carousel>
      </div>
    </div>
  );
  
}

export default OurServices;
