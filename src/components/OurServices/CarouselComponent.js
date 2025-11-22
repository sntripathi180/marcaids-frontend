import React from 'react';
import styles from './CarouselComponent.module.css';
import Navbar from "../Navbar";
import CircularCarousel from "./CircularCarousel";
import Product1 from '../../assets/photobackgroung.png';
import { Helmet } from "react-helmet";


const CarouselComponent = () => {
    return (
        <>
        <div>
      <Helmet>
      <meta charSet="utf-8" />
        <title>Digital Marketing Services | SEO, PPC, Social Media & More</title>
        <meta name="description" content="Scale your brand with the leading digital marketing agency in the USA! Marcaids delivers performance marketing, SEO, social media, web design, and more." />
        <meta name="keywords" content="react, seo, react-helmet" />
      </Helmet>
    </div>
        <div className={styles.container}>
            <Navbar />
            <div
                className={styles.background}
                style={{ backgroundImage: `url(${Product1})` }}  // Fixed the use of template literals here
            ></div>

            {/* Main Content Section */}
            <div className="relative h-screen w-full flex items-center justify-end lg:justify-end sm:justify-center bg-cover bg-center">
                {/* Transparent Circle in Background */}
                <div className="absolute w-[1500px] h-[1500px] bg-[#8B705D] opacity-20 rounded-full lg:-top-80 sm:-top-40 lg:left-2/3 sm:left-1/2"></div>

                {/* Main Content */}
                <div className="relative lg:text-right z-10 lg:pr-20 lg:mb-45 mr-4 lg:mr-0 lg:mb-60 mb-80">
                    <h1 className="lg:text-[70px] sm:text-4xl text-5xl font-semibold text-black lg:mb-3 " style={{ fontFamily: "'Inria Serif', serif" }}>MARCAIDS</h1>
                    <h2 className="lg:text-5xl sm:text-3xl text-4xl font-semibold text-black lg:mr-14" style={{ fontFamily: "'Inria Serif', serif" }}>STUDIOS</h2>
                </div>
            </div>

            {/* Circular Carousel Component */}
            <CircularCarousel />
        </div>
        </>
    );
};

export default CarouselComponent;
