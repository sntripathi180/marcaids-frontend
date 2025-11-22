import "./ContactUs.css";
import Navbar from "../Navbar";
import bgcontact from "../../assets/backgroundcontact.jpg";
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";
import axios from "axios";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
      service,
    };

    try {
     const response = await axios.post(`${process.env.REACT_APP_API_URL}submit`, data);
      if (response.data.success) {
        alert("✅ Form submitted successfully!");
        // Reset form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
        setService("");
      } else {
        alert("⚠️ Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Something went wrong while submitting the form.");
    }
  };
  return (
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Planning to work with us? Contact us to get started</title>
          <meta
            name="description"
            content="Ready to build your brand? Contact us +91 8816062696 or  +91 8580440313 Email: chirag@marcaids.com Address: Suncity C-35,Haryana"
          />
          <meta name="keywords" content="react, seo, react-helmet" />
        </Helmet>
      </div>
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${bgcontact})` }}
      >
        <Navbar />
        <div className="text-center lg:mb-8 mb-6">
          <h1
            className="text-4xl lg:text-6xl font-medium mt-4"
            style={{ fontFamily: "Mona Sans, sans-serif" }}
          >
            Contact Our Team
          </h1>
          <p
            className="text-gray-500 mt-4 text-xl lg:text-2xl"
            style={{ fontFamily: "Söhne, sans-serif" }}
          >
            Got any questions? We are here to help.
            <br />
            Chat to our friendly team and get onboard in 5 minutes.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center mx-auto px-4 lg:px-0 w-full max-w-6xl space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#A6836A] bg-opacity-40 p-6 rounded-3xl shadow-md w-full lg:w-[55%] mx-auto mb-20 lg:mt-6 text-[#000000]"
          >
            <div
              className="flex flex-col md:flex-row justify-between mb-4"
              style={{ fontFamily: "Söhne, sans-serif" }}
            >
              <div className="flex flex-col w-full md:max-w-xs lg:w-[244px] lg:h-[52px] mb-2 md:mb-0">
                <label
                  htmlFor="firstName"
                  className="text-[#000000] focus:outline-black"
                >
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="border-black border-[2px] rounded-xl p-2"
                />
              </div>
              <div className="flex flex-col w-full md:max-w-xs md:ml-4 lg:w-[244px] lg:h-[52px]">
                <label htmlFor="lastName" className="focus:outline-black">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="border-black border-[2px] rounded-xl p-2"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-1 sm:mb-2">Select Your Service:</label>
              <select
                name="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
                className="w-full p-2 sm:p-3 border-black border-[2px] rounded-xl focus:outline-black focus:border-black lg:h-[52px]"
              >
                <option value="">Choose a service</option>
                <option value="Web Design">Web Design</option>
                <option value="SEO">SEO</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="mb-1 block">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-black border-[2px] rounded-xl p-2 w-full h-12 lg:w-[325px] lg:h-[52px]"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phoneno" className="mb-1 block">
                Phone no:
              </label>
              <textarea
                id="phoneno"
                name="phoneno"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="border-black border-[2px] rounded-xl p-2 w-full h-12 lg:w-[325px] lg:h-[52px]"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="mb-1 block">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="border-black border-[2px] rounded-xl p-2 w-full h-24 lg:w-[365px] lg:h-[191px]"
              />
            </div>

            <button
              type="submit"
              className="bg-white text-gray-800 rounded-lg py-2 px-4 hover:bg-gray-100 transition duration-200"
            >
              Submit
            </button>
          </form>

          {/* Contact Info */}
          <div className="bg-white bg-opacity-10 p-6 lg:w-[40%] w-full text-left">
            <h2
              className="text-xl lg:text-2xl font-semibold text-left"
              style={{ fontFamily: "Mona Sans, sans-serif" }}
            >
              Connect With Us
            </h2>
            <p
              className="text-left text-xl"
              style={{ fontFamily: "Söhne, sans-serif" }}
            >
              Speak to our friendly team
            </p>
            <ul
              className="list-none p-0 text-xl"
              style={{ fontFamily: "Söhne, sans-serif" }}
            >
              <li>
                📧 E-mail us at <i>shikhu@marcaids.com</i>
              </li>
              <li className="lg:mb-8">
                <i>chirag@marcaids.com</i>
              </li>
              <li className="flex items-center">
                Follow us on:
                <a
                  href="https://www.instagram.com/your_instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-2xl hover:text-pink-500"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/your_linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-2xl hover:text-blue-600"
                  />
                </a>
              </li>
            </ul>

            <h2
              className="text-xl lg:text-2xl font-semibold mt-4 text-left"
              style={{ fontFamily: "Mona Sans, sans-serif" }}
            >
              Call Us
            </h2>
            <p
              className="text-left text-xl"
              style={{ fontFamily: "Söhne, sans-serif" }}
            >
              Call our team Mon-Fri from 9am-6pm
            </p>
            <p
              className="text-left text-xl"
              style={{ fontFamily: "Söhne, sans-serif" }}
            >
              📞+91 8580440313
            </p>
            <p
              className="text-left text-xl"
              style={{ fontFamily: "Söhne, sans-serif" }}
            >
              📞+91 8816062696
            </p>

            <h2
              className="text-xl lg:text-2xl font-semibold mt-4 text-left"
              style={{ fontFamily: "Mona Sans, sans-serif" }}
            >
              Services
            </h2>
            <ul
              className="list-none p-0 text-xl"
              style={{ fontFamily: "Söhne, sans-serif" }}
            >
              <li>Performance Marketing</li>
              <li>Web Design & Development</li>
              <li>Branding</li>
              <li>Social Media Management</li>
              <li>Content Creation</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
