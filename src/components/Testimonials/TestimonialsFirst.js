import React from "react";
import Testimonials from "./Testimonials";
import ClientSuccessTales from "./ClientSuccessTales";
import Navbar from "../Navbar";
import testimonialsbg from "../../assets/testimonialsbg.jpeg";
import { Helmet } from "react-helmet";

function TestimonialsFirst() {
  return (
    <>
    <div>
      <Helmet>
      <meta charSet="utf-8" />
        <title>Client testimonials | Know what our clients say about us</title>
        <meta name="description" content="Why Marcaids? As the leading digital marketing agency in Houston, we excel with proven results and glowing reviews from our happy clients!" />
        <meta name="keywords" content="react, seo, react-helmet" />
      </Helmet>
    </div>

      <div
        className="bg-cover bg-center min-h-screen flex flex-col text-white"
        style={{ backgroundImage: `url(${testimonialsbg})` }}
      >
        <Navbar />
        <div className="flex justify-center items-center lg:pt-0 pt-32 pb-6 lg:ml-40 ">
          <svg
            viewBox="0 0 500 150"
            className="w-3/5 lg:w-2/5 text-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="curve"
              fill="transparent"
              d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
            />
            <text width="500" className="text-white">
              <textPath
                href="#curve"
                startOffset="50%"
                textAnchor="middle"
                style={{ fill: "white" }} // Add inline style for color
                className="font-serif font-medium uppercase text-[59px] md:text-[4vw] lg:text-[58px]"
              >
                TESTIMONIALS
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      <Testimonials className="text-white" />
      <ClientSuccessTales className="text-white" />
    </>
  );
}

export default TestimonialsFirst;
