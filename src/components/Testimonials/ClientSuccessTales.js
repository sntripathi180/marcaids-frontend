import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "../Footer/Footer";
import blog from '../../assets/blog.jpg';

const ClientSuccessTales = () => {
  return (
    <>
      <div className="flex flex-col justify-between bg-[rgb(249,250,249)] text-green max-w-[1521px] h-[400px] md:h-[800px]">
        
        {/* Header Content */}
        <div className="flex flex-col items-center mb-5">
          <h2 className="font-serif text-[5vw] md:text-[5.8vw] font-medium text-center lg:mt-0 mt-4">
            CLIENTS SUCCESS TALES
          </h2>
        </div>

        {/* Image Container */}
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-[1521px] overflow-hidden pt-[50%] rounded-t-full bg-gray-700 h-[400px] md:h-[800px]">
            <img
              src={blog}
              alt="Brand Colours Document"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            
            {/* Button to View Blog (Positioned at the right bottom) */}
            <Link to="/blog">
              <button className="absolute right-4 bottom-4 px-6 py-2 lg:py-3 bg-[#000000] text-white font-semibold rounded-full text-xs sm:text-sm lg:text-base lg:mb-40 mb-24">
                VIEW BLOG
              </button>
            </Link>
          </div>
        </div>

        {/* Ensure Footer is always at the bottom */}
      </div>
      
      <Footer />
    </>
  );
};

export default ClientSuccessTales;
