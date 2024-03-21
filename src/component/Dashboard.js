import React from 'react'
import { useState } from 'react'

const Dashboard = () => {
    const [isOpen, setisOpen] = useState(false)
    const [close, setclose] = useState(false)
    const toggleMenu = () => setisOpen(!isOpen)
    const toggleClose = () => setisOpen(!close)

    // function openNav() {
    //     isSidebarOPen = true
    //     // document.getElementById("mySidebar").style.width = "250px";
    //     // let sidebar = document.getElementById("main").style.marginLeft = "250px";
    //     // if (sidebar) {
    //     //     document.getElementById("openbtn").style.display = "none";
    //     // }
    // }
    
    // function closeNav() {
    //     isSidebarOPen = false
    //     // document.getElementById("mySidebar").style.width = "0";
    //     // document.getElementById("main").style.marginLeft = "0";
    //     // if (sidebar) {
    //     //     document.getElementById("openbtn").style.display = "visbile";
    //     // }
    // }

    return (
        <>
            <div id="mySidebar" className="sidebar" style={{ width: isOpen ? "280px" : "80px" }}>
                <a  className="closebtn" onClick={toggleMenu}>☰</a>
                <a className="dropdown">
                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Teacher
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a className="dropdown-item" href="#"> <i className="fa fa-history" aria-hidden="true"></i>Create Teacher</a></li>
                        <li><a className="dropdown-item" href="#">Reset Teacher</a></li>
                        <li><a className="dropdown-item" href="#">Delete Teacher</a></li>
                    </ul>
                </a>
                <a className="dropdown">
                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Student
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Create Student</a></li>
                        <li><a className="dropdown-item" href="#">Reset Student</a></li>
                        <li><a className="dropdown-item" href="#">Delete Student</a></li>
                        <li><a className="dropdown-item" href="#">Upload Student</a></li>
                    </ul>
                </a>
                <a className="dropdown">
                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Session
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Create Session</a></li>
                        <li><a className="dropdown-item" href="#">Set current Session</a></li>
                        <li><a className="dropdown-item" href="#">Migrate Current Session</a></li>
                    </ul>
                </a>
                <a href="#">Contact</a>
            </div>
            <div id="main" style={{ marginLeft: isOpen ? "50px" : "0px" }}>
                {/* <button id="openbtn" onClick={toggleClose}>*</button> */}
                <main className="container pt-3">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h6 className="text-muted">Hello, Bob. Welcome back.</h6>
                            <h2>Your Dashboard is updated.</h2>
                            <p>session of this term is year </p>
                            <h3 id="year"></h3>
                            <p>Random Number</p>
                            <h2 id="random"></h2>
                            <div className="col-md-4">
                                <select className="form-control mb-4" id="select">
                                    <option value="0">--None--</option>
                                    <option value="1">JSS1</option>
                                    <option value="2">JSS2</option>
                                    <option value="3">JSS3</option>
                                    <option value="4">SS1</option>
                                    <option value="5">SS2</option>
                                    <option value="6">SS3</option>
                                </select>
                                <button type="button"className="btn btn-lg btn-primary">Click to generate your
                                    student_id
                                </button>
                                <h4>STUDENT IDENTIFICATION NUMBER</h4>
                                <h1 className="text-dark" id="student_id"></h1>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6 col-xl-3">
                            <div className="card bg-danger p-4 mb-4 rounded-5 shadow">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <h5 className="card-title text-uppercase text-white mb-0">
                                                Likes
                                            </h5>
                                            <span className="h2 text-white font-weight-bold mb-0">
                                                4,021
                                            </span>
                                        </div>
                                        <div className="col-auto">
                                            <span className="material-icons-outlined text-white h1 mt-4">thumb_up</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="card bg-success p-4 mb-4 rounded-5 shadow">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <h5 className="card-title text-uppercase text-white mb-0">
                                                Subscribers
                                            </h5>
                                            <span className="h2 text-white font-weight-bold mb-0">
                                                8,731
                                            </span>
                                        </div>
                                        <div className="col-auto">
                                            <span className="material-icons-outlined text-white h1 mt-4">subscriptions</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="card bg-warning p-4 mb-4 rounded-5 shadow">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <h5 className="card-title text-uppercase text-white mb-0">
                                                Followers
                                            </h5>
                                            <span className="h2 text-white font-weight-bold mb-0">
                                                3,841
                                            </span>
                                        </div>
                                        <div className="col-auto">
                                            <span className="material-icons-outlined text-white h1 mt-4">groups</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="card bg-primary p-4 mb-4 rounded-5 shadow">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <h5 className="card-title text-uppercase text-white mb-0">
                                                Messages
                                            </h5>
                                            <span className="h2 text-white font-weight-bold mb-0">
                                                1,962
                                            </span>
                                        </div>
                                        <div className="col-auto">
                                            <span className="material-icons-outlined text-white h1 mt-4">forum</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-xxl-6">
                            <div className="card bg-light p-4 mb-4 rounded-5 border-0">
                                <div className="card-body">
                                    <div className="d-flex flex-column gap-2 align-items-start py-5">
                                        <h3 className="fw-bold">Latest Updates</h3>
                                        <p className="text-secondary">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet facilisis
                                            nulla,
                                            consectetur pulvinar diam. Aliquam tempus vel quam.
                                        </p>
                                        <button type="button"
                                            className="btn btn-primary btn-lg text-white text-uppercase px-4 me-sm-3 rounded-5">
                                            <span className="material-icons-outlined h1">add</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="row row-cols-sm-2 g-4 p-4">
                                <div className="d-flex flex-column gap-2">
                                    <div
                                        className="product-icon d-inline-flex align-items-center justify-content-center bg-danger text-white fs-4 rounded-4 shadow">
                                        <i className="bi bi-twitter"></i>
                                    </div>
                                    <h4 className="text-danger fw-semibold mb-0">+274</h4>
                                    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>

                                <div className="d-flex flex-column gap-2">
                                    <div
                                        className="product-icon d-inline-flex align-items-center justify-content-center bg-success text-white fs-4 rounded-4 shadow">
                                        <i className="bi bi-instagram"></i>
                                    </div>
                                    <h4 className="text-success fw-semibold mb-0">+352</h4>
                                    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>

                                <div className="d-flex flex-column gap-2">
                                    <div
                                        className="product-icon d-inline-flex align-items-center justify-content-center bg-warning text-white fs-4 rounded-4 shadow">
                                        <i className="bi bi-facebook"></i>
                                    </div>
                                    <h4 className="text-warning fw-semibold mb-0">-126</h4>
                                    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>

                                <div className="d-flex flex-column gap-2">
                                    <div
                                        className="product-icon d-inline-flex align-items-center justify-content-center bg-primary text-white fs-4 rounded-4 shadow">
                                        <i className="bi bi-linkedin"></i>
                                    </div>
                                    <h4 className="text-primary fw-semibold mb-0">+102</h4>
                                    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
export default Dashboard