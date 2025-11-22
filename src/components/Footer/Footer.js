import React from "react";
import logoo_main_footer from "../../assets/logoo_main_footer.png";
import { Link } from "react-router-dom";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import './Footer.css'
const Footer = () => {
  return (
    <div style={{ backgroundColor: "black", position: "absolute",width:'100%' }} className="footer_div">
      <MDBFooter
        className="text-center text-lg-start text-muted"
        color="white"
        outline="light"
      >
        <section >
          <MDBContainer
            className="text-center text-md-start"
            color="white"
            outline="light"
          >
            <MDBRow style={{ paddingTop: "50px" }}>
              <MDBCol
                md="3"
                lg="4"
                xl="3"
                className="mx-auto mb-4"
                color="white"
              >
                <h5 className="text-uppercase fw-bold mb-4">
                
                  <img src={logoo_main_footer} alt="" width="200" height="150" />
                 
                </h5>
                <p className="text-white">
                  Your one-stop partner for marketing solutions that grows your
                  business. We help you build a brand, generate leads and drive
                  sales.
                </p>
                <div style={{ color: "white" }} className="socialIconsFooter">
                  <a href="" style={{ color: "white" }}>
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a
                    style={{ color: "white" ,marginLeft:"7px"}}
                    href="https://www.linkedin.com/company/marcaids/"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a
                    style={{ color: "white" ,marginLeft:"7px" }}
                    href="https://www.instagram.com/marcaidss?igsh=bndzc2IzczA5YjQy"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a style={{ color: "white" ,marginLeft:"7px"}} href="https://x.com/marcaidsss">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </div>
              </MDBCol>

              <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-4 footer_column">
                <h5 className="text-white fw-bold mb-4  footer_heading" style={{ fontSize: "1.6rem" }}>
                  Our Location
                </h5>
                <p className="text-white">Suncity C-35, Haryana</p>
                <p className="text-white">
                  <i className="fa-solid fa-phone"></i>
                  <span>+91 8816062696</span>
                </p>
                <p className="text-white">
                  <i className="fa-solid fa-phone"></i>
                  <span> +91 8580440313</span>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="3" className="mx-auto mb-4 footer_column">
                <h5 className="text-white fw-bold mb-4 footer_heading" style={{ fontSize: "1.6rem" }}>
                  Quick links
                </h5>
                <p>
                  <a href="/" className="text-white">
                    Home
                  </a>
                </p>
                <p>
                  <a href="/about" className="text-white">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="/services" className="text-white">
                    Our Services
                  </a>
                </p>
                <p>
                  <a href="/services" className="text-white">
                    Our Clients
                  </a>
                  </p>
                  <p>
                  <div className="text-white" >
                    <Link to="/tnc" style={{ color: "white" }}>Our Terms and Conditions</Link>
                  </div>
                  </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4 footer_column">
                <h5 className="text-white fw-bold mb-4 footer_heading" style={{ fontSize: "1.6rem" }}>
                  Opening Hours
                </h5>
                <p className="text-white timing_p">
                  <i className="far fa-clock"></i>
                  <span>Monday to Friday</span>
                  <p style={{ marginLeft: "35px", color: "white" }}>
                    9:00 AM to 5:30 PM
                  </p>
                </p>
                <p className="text-white timing_p">
                  <i className="far fa-clock"></i>
                  <span>Saturday</span>
                  <p style={{ marginLeft: "35px", color: "white" }}>
                    10:00 AM to 4:00 PM
                  </p>
                </p>
                <p className="schedule">
                  <a href="/contact" style={{ color: "white", fontSize: "0.9rem"}}>
                    SCHEDULE A MEETING
                  </a>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <hr style={{ color: "white" }} />
        <div className="ml-5 p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          Copyright © 2024
          <span className="ml-5 p-4" style={{ marginLeft: "65%" }}>
            Crafted with <i className="fa-solid fa-heart"></i> <span>Marcaids</span>
          </span>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;