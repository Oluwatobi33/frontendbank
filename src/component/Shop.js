import React from "react";
import { useEffect, useState } from "react";
import quick from "../assest/image/quick.webp";
// import './animation.css'
import AOS from "aos";
import "aos/dist/aos.css";
const Shop = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <>
      <div id="testimonials" className="testimonials-section">
        <div className="container">
          <h2 className="section-title text-center display-5">
            You can submit an accomodation application by following the
            instructions<br/> below.
          </h2>
          <div className="item mx-auto">
            <div className="quote-holder">
              <blockquote className="quote">
                <h4>
                  <u>
                    <a style={{color:"white"}} href="/auth/register">
                      First-Time Accommodation Applicants:{" "}
                    </a>
                  </u>
                </h4>
                <p>
                  If you have never registered for Accomodation at Anchor
                  University before, click on
                  <a
                    style={{color:"white",textDecoration:"underline", fontWeight:"bold;"}}
                    href="/auth/register"
                  >
                    Register.
                  </a>
                </p>
              </blockquote>
            </div>
          </div>

          <div className="item item-reversed mx-auto">
            <div className="quote-holder">
              <blockquote className="quote">
                <h4>
                  <u>
                    <a style={{color:"white"}} href="/auth/login">
                      Returning Accomodation Applicants:
                    </a>{" "}
                  </u>
                </h4>
                <p>
                  If you have already registered for accomodation on this new
                  Accomodation Booking System, using your JUPEB NUMBER or MATRIC
                  number or email address and PASSWORD click on{" "}
                  <a
                    style={{color:"white", textDecoration:"underline", fontWeight:"bold"}}
                    href="/auth/register"
                  >
                    LOGIN.
                  </a>{" "}
                </p>
              </blockquote>
            </div>
          </div>

          <div className="item mx-auto">
            <div className="quote-holder">
              <blockquote className="quote">
                <h4></h4>
                <p>
                  On-campus residence is more than just a place to live while
                  studying at Anchor University. You’ll be engaged through
                  unique programs and opportunities that emphasize academic and
                  social growth, diversity, wellness, leadership and community
                  building.
                </p>
              </blockquote>
            </div>
          </div>

          <div className="text-center mt-4">
            <a className="btn btn-inverse btn-cta" href="/hostel/">
              Book now
            </a>
          </div>
        </div>
      </div>
      {/* <div classNameName='container'>
                <div classNameName="row justify-content-center">
                    <div classNameName="col-lg-6 col-md-6">
                        {/* First Div */}
      {/* <div classNameName='your' data-aos="zoom-in">
                            <h3 classNameName='text-center'>
                                Your one-stop-shop for easy payments
                            </h3>
                            <p classNameName='text-md-start'>Quickteller is an easy-to-use, multi-channel payments platform designed to make payments an easy and enjoyable experience.</p>
                            <p classNameName='text-md-start'>The platform connects users to over 8,000 billers, enabling individuals to pay for just about anything from the comfort of their mobile device.</p>
                        </div>
                        <div classNameName="row justify-content-center">
                            <div classNameName="col-md-5 text-center">
                                <div classNameName='bill' data-aos="fade-right">
                                    <img src='https://www.interswitchgroup.com/assets/images/consumer/Bills-1.svg' classNameName='img-responsive img-fluid w-49' />
                                    <h3 classNameName='text-md-center'>Bill payments</h3>
                                    <p classNameName='text-md-start float-start'>Entertainment and data subscriptions, electricity bills, government dues and levies, airtime and cable Tv- whatever it is, discover the easiest and quickest way to pay bills</p>
                                </div>
                            </div>
                            <div classNameName='col-md-6 text-center'>
                                <div classNameName='flight' data-aos="fade-left">
                                    <img src='https://www.interswitchgroup.com/assets/images/consumer/Flight-1.svg' classNameName='img-responsive img-fluid text-center w-49' />
                                    <h3 classNameName='text-md-start'>
                                        Flight booking
                                    </h3>
                                    <p classNameName='text-md-start'>From cost-effective flight options to smooth payment experience, our flight booking service is the easiest way to travel anywhere</p>
                                </div>
                            </div>
                        </div>
                        <div classNameName="row justify-content-center">
                            <div classNameName="col-md-6 text-center">
                                <div classNameName='ticket' data-aos="fade-right">
                                    <img src="https://www.interswitchgroup.com/assets/images/consumer/Ticket-1.svg " alt="bhbbv" classNameName='img-responsive img-fluid w-49' />
                                    <h3 classNameName='text-md-start'>Event tickets</h3>
                                    <p classNameName='text-md-start'>Get verified tickets to the most exclusive and anticipated event without any stress</p>
                                </div>
                            </div>
                            <div classNameName="col-md-6 mb-5 text-center">
                                <div classNameName='global' data-aos="fade-down">
                                    <img src='https://www.interswitchgroup.com/assets/images/consumer/online-shopping-1.svg' classNameName='img-responsive img-fluid w-49' />
                                    <h3 classNameName='text-md-start'>Global online shopping</h3>
                                    <p classNameName='text-md-start'>Shop directly from over 100 leading US/UK stores, pay in Naira and enjoy doorstep delivery to your Nigerian address.</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
      {/* <div classNameName="col-lg-6 col-md-6">
                        <div classNameName='' data-aos="fade-up">
                            <img src={quick} classNameName='img-responsive img-fluid finegirl' style={{ height: '80vh', width: "80vw" }} />
                        </div>
                    </div>
                </div> */}
      {/* </div> */}
    </>
  );
};

export default Shop;
