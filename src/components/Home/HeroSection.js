import React, { useState, useEffect } from "react";
//import bghome from "../../assets/bg-home.png";
import Navbar from "../Navbar";
import ConcentricCircle from "./ConcentricCircle";
import "./HeroSection.css";


const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false); // Controls HeroSection opening
  const [showTextLayer, setShowTextLayer] = useState(false); // Controls text layer visibility
  const [showConcentricCircle, setShowConcentricCircle] = useState(false); // Controls ConcentricCircle visibility
  const [isClickable, setIsClickable] = useState(true); // Controls HeroSection clickability

  // Handle clicks on the HeroSection background
  const handleClick = () => {
    if (!isClickable) return; // Prevent multiple clicks

    if (!isOpen) {
      // Open HeroSection and show text layer
      setIsOpen(true);
      setIsClickable(false); // Disable further clicks
    }
  };

  // Show ConcentricCircle and hide HeroSection on text layer click
  const handleTextLayerClick = () => {
    setShowConcentricCircle(true); // Show ConcentricCircle
    setIsOpen(false); // Hide HeroSection
    setShowTextLayer(false); // Hide TextLayer
  };

  // Reset everything to the initial state
  const handleClickCentre = () => {
    // Reset everything
    setIsOpen(false); // Close HeroSection
    setShowTextLayer(false); // Hide TextLayer
    setShowConcentricCircle(false); // Hide ConcentricCircle
    setIsClickable(true); // Make HeroSection clickable again
  };

  // Automatically show the text layer after HeroSection opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowTextLayer(true);
      }, 500); // Show TextLayer with a delay

      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [isOpen]);

  return (
    <>
      {!showConcentricCircle && ( // Show HeroSection if ConcentricCircle is not visible
        <div className="App">
      
         
          <div
            className={`HS ${isOpen ? "open" : ""}`} // Apply class based on isOpen state
             
             // Click handler for HeroSection
          >
           <Navbar/>
          
            
            <div className="hero-content">
            
              <div className={`hero-sec ${isOpen ? "slide-out" : ""}`}>
              
                <div className="container" onClick={handleClick}>
                  <div className="row">
                  
                    <div className="col-md-7 k" >
                      <h1 style={{ fontFamily: "'IM Fell Great Primer', serif", fontWeight: 100 ,textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }} className="text-black">Building</h1>
                    </div>
                    <div className="col-md-4 text-white ml-10">
                      <p style={{ fontFamily: "'IM Fell Great Primer', serif", fontWeight: 100 ,textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"  }}>Let's build your identity and your brand</p>
                    </div>
                  </div>
                </div>

                <div className="container text-black">
                  <div className="row">
                    <div className="col-md-5 text-black">
                      <h2 style={{ fontFamily: "'IM Fell Great Primer', serif", fontWeight: 100 ,textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"  }}>your</h2>
                    </div>
                    <div className="col-md-5 text-black">
                      <h1 style={{ fontFamily: "'IM Fell Great Primer', serif", fontWeight: 100 ,textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Business</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {showTextLayer && (
            <div
              className="text-layer-1 flex flex-col items-center space-y-0 p-0 w-full  " 
              onClick={handleTextLayerClick} // Click handler to show ConcentricCircle
            >
              <span
        className="lg:text-[120px] text-[90px] text-white leading-tight"
        style={{ fontFamily: "'IM Fell Great Primer', serif", fontWeight: 100 }}
      >
        We Build
      </span>
      <span
        className="lg:text-[120px] text-[70px]  text-black leading-tight lg:mr-80"
        style={{ fontFamily: "'IM Fell Great Primer', serif", fontWeight: 100 }}
      >
        your brand
      </span>
      <span
        className="lg:text-[88px] text-[70px]  text-white leading-tight lg:mr-10"
        style={{ fontFamily: "'IM Fell Great Primer', serif", fontWeight: 100 }}
      >
        with passion
      </span>
      <span
        className="lg:text-[88px] text-[70px] text-white leading-tight lg:ml-80"
        style={{ fontFamily: "'IM Fell Great Primer', serif", fontWeight: 100 }}
      >
        embodying
      </span>
      <span
        className="lg:text-[88px] text-[70px]  text-white leading-tight lg:mr-60"
        style={{ fontFamily: "'IM Fell Great Primer', serif", fontWeight: 100 }}
      >
        perfection
      </span>
            </div>
          )}
        </div>
      )}

      {showConcentricCircle && <ConcentricCircle onClick={handleClickCentre} />} {/* Show ConcentricCircle */}
    </>
  );
};

export default HeroSection;
