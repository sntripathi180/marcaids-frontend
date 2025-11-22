import React from "react";
import { Carousel, Card } from "react-bootstrap";
import space from "../../assets/space.jpeg";
import mac from "../../assets/mac.jpeg";
import rv from "../../assets/rv.jpeg";
import annu from "../../assets/annu.jpeg";
import rohan from "../../assets/rohan.jpeg";
import "./Testimonials.css"; // Ensure your styles are imported if any

const Testimonials = () => {
  return (
    <>
      <div className="relative w-full h-auto lg:bg-[hsl(23,71%,91%)] bg-[#57765b] flex items-center justify-center overflow-hidden">
        {/* Semi-Circle Background */}
        <div className="absolute w-[130%] h-[160%] bg-[#57765b] rounded-full top-0 right-[40%]"></div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Content Section */}
            <div className="md:col-span-2 flex flex-col justify-center items-center text-center text-[#ffffff] z-10 p-4">
              <blockquote className="text-[#bfbfbf] font-semibold lg:text-9xl text-9xl text-left mb-0 lg:mb-0">
                ''
              </blockquote>
              <p className="lg:text-7xl text-4xl font-serif sm:mt-4">Clients Testimonials</p>
            </div>

            {/* Carousel Section */}
            <div className="md:col-span-3 w-full md:w-[85%] lg:w-[75%] mx-auto" style={{ fontFamily: 'Imprima, sans-serif' }}>
              <Carousel>
                {/* Testimonial Card 1 */}
                <Carousel.Item>
                  <Card className="testimonial-cards bg-transparent" style={{border:'none'}}>
                    <div className="relative bg-white/30 p-8 lg:rounded-[160px] rounded-[100px] mt-10 mb-5 lg:ml-10 lg:mr-10 sm:ml-0 sm:mr-0 lg:h-[700px] sm:h-[500px]">
                      <div className="flex flex-col items-center text-center">
                        <div className="testimonial-quote text-2xl lg:text-[32px] md:text-xl text-black lg:mb-4 sm:mb-0 lg:mt-12">
                          <p>
                          ❝Partnering with Marcaids has significantly boosted our interior design business. Their lead generation expertise and targeted campaigns have driven increased website visits, resulting in tangible growth. Their transparency and communication make them invaluable partners.❞
                          </p>
                        </div>
                        <div className="testimonial-client lg:mt-5 sm:mt-0 ">
                          <p className="client-name text-3xl font-bold lg:ml-40">Sandeep Soni</p>
                          <p className="client-title text-2xl text-gray-500 lg:ml-40">CEO, The Space Crafters</p>
                        </div>
                      </div>
                      <img
                        src={space}
                        alt="crafters"
                        className="absolute lg:w-[250px] lg:h-[276px] h-[140px] w-[130px] rounded-full object-cover bottom-[-40px] left-[-20px] z-10 bg-white shadow-md border-2 border-white" // Adjusted the left position
                      />
                    </div>
                  </Card>
                </Carousel.Item>

                {/* Testimonial Card 2 */}
                <Carousel.Item>
                  <Card className="testimonial-cards bg-transparent" style={{border:'none'}}>
                    <div className="relative bg-white/30 p-8 lg:rounded-[160px] rounded-[100px] mt-10 mb-5 lg:ml-10 lg:mr-10 sm:ml-0 sm:mr-0 lg:h-[700px] sm:h-[500px]">
                      <div className="flex flex-col items-center text-center">
                        <div className="testimonial-quote text-2xl lg:text-[32px] md:text-xl text-black lg:mb-4 sm:mb-0 lg:mt-12">
                          <p>
                          ❝Since collaborating with Marcaids, Mac biosciences has undergone a complete digital makeover and witnessed an increase in sales. They are a great partner in helping us not only establish and optimize our primary goals but also react to practical difficulties and novel opportunities.❞
                          </p>
                        </div>
                        <div className="testimonial-client lg:mt-5 sm:mt-0">
                          <p className="client-name text-3xl font-bold lg:ml-40">Monika Sharma</p>
                          <p className="client-title text-2xl text-gray-500 lg:ml-40">Mac Biosciences</p>
                        </div>
                      </div>
                      <img
                        src={mac}
                        alt="mac"
                        className="absolute lg:w-[250px] lg:h-[276px] h-[140px] w-[130px] rounded-full object-cover bottom-[-40px] left-[-20px] z-10 bg-white shadow-md border-2 border-white" // Adjusted the left position
                      />
                    </div>
                  </Card>
                </Carousel.Item>

                {/* Testimonial Card 3 */}
                <Carousel.Item>
                  <Card className="testimonial-cards bg-transparent" style={{border:'none'}}>
                    <div className="relative bg-white/30 p-8 lg:rounded-[160px] rounded-[100px] mt-10 mb-5 lg:ml-10 lg:mr-10 sm:ml-0 sm:mr-0 lg:h-[700px] sm:h-[500px]">
                      <div className="flex flex-col items-center text-center">
                        <div className="testimonial-quote text-2xl lg:text-[32px] md:text-xl text-black lg:mb-4 sm:mb-0 lg:mt-12">
                          <p>
                          ❝Hey fellow design aficionados! Ready to turbocharge your online presence? Meet Marcaids. Their savvy lead generation tactics and killer campaigns have skyrocketed our website traffic. Don't let your competitors steal the spotlight. Reach out to Marcaids and watch your business thrive.❞
                          </p>
                        </div>
                        <div className="testimonial-client lg:mt-5 sm:mt-0">
                          <p className="client-name text-3xl font-bold lg:ml-40">RV Designs</p>
                          <p className="client-title text-2xl text-gray-500 lg:ml-40">RV Designs</p>
                        </div>
                      </div>
                      <img
                        src={rv}
                        alt="RV Designs"
                        className="absolute lg:w-[250px] lg:h-[276px] h-[140px] w-[130px] rounded-full object-cover bottom-[-40px] left-[-20px] z-10 bg-white shadow-md border-2 border-white" // Adjusted the left position
                      />
                    </div>
                  </Card>
                </Carousel.Item>

                {/* Testimonial Card 4 */}
                <Carousel.Item>
                  <Card className="testimonial-cards bg-transparent" style={{border:'none'}}>
                    <div className="relative bg-white/30 p-8 lg:rounded-[160px] rounded-[100px] mt-10 mb-5 lg:ml-10 lg:mr-10 sm:ml-0 sm:mr-0 lg:h-[700px] sm:h-[500px]">
                      <div className="flex flex-col items-center text-center">
                        <div className="testimonial-quote text-2xl lg:text-[32px] md:text-xl text-black lg:mb-4 sm:mb-0 lg:mt-12">
                          <p>
                          ❝Thank you Chirag Yadav for setting up my social media handle and for creating my website. It has helped me to reach my objective, and I will recommend your service to my colleagues and other businesses as well. Best wishes for a bright future ahead, Chirag.❞
                          </p>
                        </div>
                        <div className="testimonial-client lg:mt-5 sm:mt-0">
                          <p className="client-name text-3xl font-bold lg:ml-40">Annu Yadav</p>
                          <p className="client-title text-2xl text-gray-500 lg:ml-40">Data Analyst at Global Infrastructure Hub</p>
                        </div>
                      </div>
                      <img
                        src={annu}
                        alt="annu"
                        className="absolute lg:w-[250px] lg:h-[276px] h-[140px] w-[130px] rounded-full object-cover bottom-[-40px] left-[-20px] z-10 bg-white shadow-md border-2 border-white" // Adjusted the left position
                      />
                    </div>
                  </Card>
                </Carousel.Item>

                {/* Testimonial Card 5 */}
                <Carousel.Item>
                  <Card className="testimonial-cards bg-transparent" style={{border:'none'}}>
                    <div className="relative bg-white/30 p-8 lg:rounded-[160px] rounded-[100px] mt-10 mb-5 lg:ml-10 lg:mr-10 sm:ml-0 sm:mr-0 lg:h-[700px] sm:h-[500px]">
                      <div className="flex flex-col items-center text-center">
                        <div className="testimonial-quote text-2xl lg:text-[32px] md:text-xl text-black lg:mb-4 sm:mb-2 lg:mt-12 sm:mt-2 ">
                          <p>
                          ❝You seldom come across a person like Chirag in your life. An exceptional leader who has transformed my company. His guidance and direction were essential to our success. The Marcaids team is professional and dedicated to their work. Best of luck in your future endeavors, Chirag!❞
                          </p>
                        </div>
                        <div className="testimonial-client lg:mt-5 sm:mt-0">
                          <p className="client-name text-3xl font-bold lg:ml-40">Rohan Chaudhary</p>
                          <p className="client-title text-2xl text-gray-500 lg:ml-40">Founder, YMEI</p>
                        </div>
                      </div>
                      <img
                        src={rohan}
                        alt="rohan"
                        className="absolute lg:w-[250px] lg:h-[276px] h-[140px] w-[130px] rounded-full object-cover bottom-[-40px] left-[-20px] z-10 bg-white shadow-md border-2 border-white" // Adjusted the left position
                      />
                    </div>
                  </Card>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;