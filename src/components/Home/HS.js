import React, { useState, useEffect } from "react";
import "./HS.css";
import bghome from "../../assets/bg-home.jpeg";
import Navbar from "../Navbar";

const HS = () => {
  const [isOpen, setIsOpen] = useState(0);
  const [showTextLayer1, setShowTextLayer1] = useState(false);
  const [circleOpen, setCircleOpen] = useState(0);
  const [temp, setTemp] = useState([0]);

  const handleClick = () => {
    if (temp[0] === 0) {
      console.log("at temp 1 ");
      setIsOpen(!isOpen);
      setTemp([1]);
    } else if (temp[0] === 1) {
      console.log("at temp 2 ");
      setCircleOpen(!circleOpen);
      setIsOpen(!isOpen);
      setTemp([2]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowTextLayer1(true);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setShowTextLayer1(false);
    }
  }, [isOpen, circleOpen]);

  return (
    <>
     
      <div className="App">
      
        <div
          className={`HS ${
            isOpen ? "open" : circleOpen ? "carouselVisible" : ""
          }`}
          style={{ backgroundImage: `url(${bghome})`,backgroundSize: 'cover', // Or 'contain', based on your need
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          width: '100%',}}
          onClick={handleClick}
        >
          <div className="hero-content">
            <div className={`hero-sec ${isOpen ? "slide-out" : ""}`}>
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <h1>Building</h1>
                  </div>
                  <div className="col-md-4">
                    <p>Let's build your identity and your brand</p>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-md-5">
                    <h2>your</h2>
                  </div>
                  <div className="col-md-5">
                    <h1>Business</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showTextLayer1 && (
          <div className="text-layer-1">
            <span className="text-1">We Build</span>
            <br />
            <span className="text-2">your brand</span>
            <br />
            <span className="text-3">with passion</span>
            <br />
            <span className="text-4">embodying</span>
            <br />
            <span className="text-5">perfection</span>
          </div>
        )}
      </div>
    </>
  );
};

export default HS;
