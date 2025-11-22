import React from 'react';
import Navbar from '../Navbar';
import image0 from '../../assets/blogpage0.jpg';
import image1 from '../../assets/blogpage1.jpg';
import image2 from '../../assets/blogpage2.jpg';
import image3 from '../../assets/blogpage3.jpg';
import image4 from '../../assets/blogpage4.jpg';
import image5 from '../../assets/blogpage5.jpg';
import image6 from '../../assets/blogpage6.jpg';
import Footer from '../Footer/Footer';
import { Helmet } from "react-helmet";

const Gallery = () => {
  const images = [
    { id: 1, src: image1, alt: 'Image 1' },
    { id: 2, src: image2, alt: 'Image 2' },
    { id: 3, src: image3, alt: 'Image 3' },
    { id: 4, src: image4, alt: 'Image 4' },
    { id: 5, src: image5, alt: 'Image 5' },
    { id: 6, src: image6, alt: 'Image 6' },
  ];

  return (
    <>
      <Navbar />
      <div>
      <Helmet>
      <meta charSet="utf-8" />
        <title>Latest Updates in Digital Marketing | Marcaids</title>
        <meta name="description" content="Want to get latest updates in digital marketing? Read the best of articles published by the content wizards of Marcaids" />
        <meta name="keywords" content="react, seo, react-helmet" />
      </Helmet>
    </div>

      {/* Large Image Section */}
      <div className="w-full h-[500px] overflow-hidden rounded-lg shadow-md mb-4">
        <img src={image0} alt="Large Image" className="w-full h-full object-cover" />
      </div>

      {/* Grid Layout for Small Images */}
      <h1 className="text-center text-2xl font-semibold my-4">NEW ARTICLES</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 ">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`bg-gray-200 rounded-none shadow-md ${
              index % 2 === 0 ? 'h-[878px]' : 'h-[798px]'
            }`} // Set height based on index
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[560px] object-cover rounded-none transition-transform duration-300 transform hover:scale-95" // Set image height to 560px
            />
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Gallery;
