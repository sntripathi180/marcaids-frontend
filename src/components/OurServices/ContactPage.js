import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import OurServices from "./OurServices";
import CarouselComponent from "./CarouselComponent";
import Footer from "../Footer/Footer";
import FAQ from "./FAQ";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <CarouselComponent />
      <OurServices />
      <FAQ />
      <div className="bg-[#DACBC1] p-4 sm:p-6 md:p-10">
  {/* Top Links */}
  <div className="flex justify-center md:justify-end space-x-3 sm:space-x-6 md:space-x-48 mt-6 md:mt-10 ">
    <h3>
      <a href="/blog" className="text-black font-semibold no-underline hover:underline">
        PROJECTS
      </a>
    </h3>
    <h3 className="ml-30 md:ml-10">  {/* Added margin-left */}
      <a href="/contact" className="text-black font-semibold no-underline hover:underline">
        CONTACT
      </a>
    </h3>
  </div>



        {/* Contact Section */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-6 sm:gap-8 md:gap-10 mt-8 md:mt-10">
          {/* Contact Info */}
          <div className="flex-1 text-center md:text-left p-4 sm:p-5 md:p-5 lg:mt-40">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-5" style={{ fontFamily: "'Inria Serif', serif" }}>CONTACT</h2>
            <div className="text-base sm:text-lg md:text-xl space-y-2 sm:space-y-3">
              <p>Address: Delhi Gurugram</p>
              <p>Phone: +91 8580440313 / +91 8816062696</p>
              <p>Email: shikhu@marcaids.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/xyzgroar"
            method="POST"
            className="flex-1 bg-[#A78770] bg-opacity-40 p-4 sm:p-6 md:p-8 rounded-md shadow-lg max-w-md w-full mx-auto md:mx-0"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-4 sm:mb-5" style={{ fontFamily: "'Inria Serif', serif" }}>CONTACT FORM</h2>

            <div className="mb-3 sm:mb-4">
              <label className="block font-semibold mb-1 sm:mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 sm:p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
              />
            </div>

            <div className="mb-3 sm:mb-4">
              <label className="block font-semibold mb-1 sm:mb-2">Your Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 sm:p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
              />
            </div>

            <div className="mb-3 sm:mb-4">
              <label className="block font-semibold mb-1 sm:mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 sm:p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
              />
            </div>

            <div className="mb-3 sm:mb-4">
              <label className="block font-semibold mb-1 sm:mb-2">Select Your Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full p-2 sm:p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
              >
                <option value="">Choose a service</option>
                <option value="Web Design">Web Design</option>
                <option value="SEO">SEO</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>

            <div className="mb-3 sm:mb-4">
              <label className="block font-semibold mb-1 sm:mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-2 sm:p-3 border border-gray-300 rounded focus:outline-none focus:border-black resize-none"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-white font-semibold py-2 px-4 sm:px-6 rounded hover:bg-opacity-80 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;