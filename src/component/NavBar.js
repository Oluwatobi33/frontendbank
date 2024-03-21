import React from "react";
import Signup from "./Signup";
import anchor from "../assest/image/anchor.ico";
import { Link } from "react-router-dom";
import { useId } from "react";
const NavBar = () => {
  const id = useId();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light fixed-top shadow p-0 m-0">
        <div class="container-fluid">
          <a className="logo navbar-brand scrollto" href="/">
            <span className="logo-icon-wrapper mx-2">
              <img className="logo-icon" src={anchor} style={{width:"80px", height:"70px"}} alt="AUL" />
            </span>
            <span className="text">
              <span className="highlight">AUL </span>ACCOMMODATION
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
              
            <ul className=" navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link scrollto" href="#testimonials">
                  Guide
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link scrollto" href="#pricing">
                  Pricing
                </a>
              </li>
             
             <Link to={"/Signin"}> <a
                className="btn btn-primary w-100"
                style={{ fontSize: "16px", color: "white",  margin:"opx 20px" }}
                
              >
                LOGIN
              </a></Link>

              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
