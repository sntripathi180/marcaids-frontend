import React from "react";
import "./App.scss";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from "./components/Home/Home.js";
import AboutUs from "./components/AboutUs/AboutUs.js";
import ContactPage from "./components/OurServices/ContactPage.js";
import TestimonialsFirst from "./components/Testimonials/TestimonialsFirst.js";
import ContactUs from "./components/ContactUs/ContactUs.js";
import TermsNCond from "./components/tnc/tnc.js";
import Blogpage from "./components/Blog/Gallery.js"



function App() {
  return (
    <>
     {/* <BrowserRouter> */}
     
     <Routes>
     <Route path="/" element={<Home/>}/>
     
     <Route path="/about" element={<AboutUs/>}/>
     <Route path="/blog" element={<Blogpage/>}/>
      <Route path="/services" element={<ContactPage/>}/>   
      <Route path="/testimonials" element={<TestimonialsFirst/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      <Route path="/tnc" element={<TermsNCond/>}/>
     </Routes>
     {/* </BrowserRouter> */}
     </>
  );
}

export default App;
