
import React from 'react';
import home1 from "../../assets/home-1.jpeg";
import home5 from "../../assets/home-5.jpeg";
import Navbar from '../Navbar';
import './ConcentricCircle.css';

const ConcentricCircle = ({ onClick }) => {
  return (
    <>
      
      <div className="concentric-circle-container" >
      <Navbar/>
        <div className="circle center-image" >
          <img src={home5} alt="Center" />
        </div>

        <svg className="circle-svg" onClick={onClick} viewBox="0 0 100 100">
          <defs>
            <path
              id="innerCirclePath"
              d="M 50,50 m -12,0 a 12,12 0 1,1 24,0 a 12,12 0 1,1 -24,0"
            />
            <path
              id="middleCirclePath"
              d="M 50,50 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
            />
            <path
              id="outerCirclePath"
              d="M 50,50 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
            />
          </defs>
          <text className="circle-text inner-text">
            <textPath href="#innerCirclePath">
              how our team works how our team works how our team works
            </textPath>
          </text>
          <text className="circle-text middle-text">
            <textPath href="#middleCirclePath">
              how our team works how our team works how our team works
            </textPath>
          </text>
          <text className="circle-text outer-text">
            <textPath href="#outerCirclePath">
              how our team works how our team works how our team works
            </textPath>
          </text>
        </svg>



      </div>
    </>

  );
};

export default ConcentricCircle;