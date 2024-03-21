import React from "react";
import { Link } from "react-router-dom";
const Background = () => {
  return (
    <>
      <section className="Section3">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-5 univer">
              <h2 className="text-white fw-bold float-start">
                Anchor University
                <br className="d-none d-md-block" />
                Accommodation Booking
                <br /> System
              </h2>
              <p className="text-white float-start para">
                On-campus housing is more than just a place to live while
                studying at Anchor University. You'll be engaged through unique
                programs and oppurtunities that emphasize academic, spiritual
                and social growth.
              </p>
             
                <Link
                  to="/signup" className="float-start signup "
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Book Now
                </Link>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Background;
