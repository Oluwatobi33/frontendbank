import React from 'react'

const Peace = () => {
    return (
        <>
            {/* <section className='section4'> */}
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-8">
                        <div className='mobile text-center'>
                            <h2 className="section-title" style={{ color: "black" }}>Available Rooms and Prices</h2>
                            <h4><b> PEACE HOSTEL (Male)</b></h4>
                        </div>
                    </div>
                </div>
            </div>
            {/* </section> */}
            <div className='container'>
                <div className="row">
                    <div className="col-md-4 ">
                        <div className="circle" data-aos="zoom-in">

                            <div className=" custom float-start">
                                <div className="price-figure">
                                    <span className="number">₦60,000</span>
                                </div>
                                <ul className="card-text list ">
                                    <li className='text-md-start'><i class="fa fa-check"></i> En Suite</li>
                                    <li className='text-md-start'><i class="fa fa-check"></i> 10 bed spaces </li>
                                    <li className='text-md-start'><i class="fa fa-check"></i> Reading table, cabinet and chairs</li>
                                </ul>
                                <a className="btn btn-inverse btn-cta" href="/hostel/">Book Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="circle1" data-aos="zoom-in" >
                            {/* <img src="https://www.interswitchgroup.com/assets/images/consumer/friendly.svg" className="img-responsive float-start" style={{ width: "4vw" }} alt="..." /> */}
                            <div className="custom float-start">
                                <div className="price-figure">
                                    <span className="number">₦80,000</span>
                                </div>
                                <ul className="card-text list">
                                    <li className='text-md-start'><i class="fa fa-check"></i> En Suite</li>
                                    <li className='text-md-start'><i class="fa fa-check"></i> 6 Bed Spaces</li>
                                    <li className='text-md-start'><i class="fa fa-check"></i>Reading table, cabinet and chairs</li>
                                </ul>
                                <a className="btn btn-inverse btn-cta" href="/hostel/">Book Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="circle2" data-aos="zoom-in">
                            {/* <img src="https://www.interswitchgroup.com/assets/images/consumer/secured.svg" className="img-responsive img-fluid float-start" style={{ width: "4vw" }} /> */}
                            <div className='custom float-start'>
                                <div className="price-figure">
                                    <span className="number">₦100,000</span>
                                </div>
                                <ul className="card-text list">
                                    <li><i class="fa fa-check"></i> En Suite</li>
                                    <li><i class="fa fa-check"></i> 6 Bed Spaces </li>
                                    <li><i class="fa fa-check"></i> Reading table, cabinet and chairs</li>
                                </ul>
                                <a className="btn btn-inverse btn-cta" href="/hostel/">Book Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="circle3" data-aos="zoom-in">
                            {/* <img src="https://www.interswitchgroup.com/assets/images/consumer/secured.svg" className="img-responsive img-fluid float-start" style={{ width: "4vw" }} /> */}
                            <div className='custom float-start mt-4'>
                                <div className="price-figure">
                                    <span className="number">₦120,000</span>
                                </div>
                                <ul className="card-text list">
                                    <li><i class="fa fa-check"></i> En Suite</li>
                                    <li><i class="fa fa-check"></i> 6 Bed Spaces </li>
                                    <li><i class="fa fa-check"></i> Reading table, cabinet and chairs</li>
                                </ul>
                                <a className="btn btn-inverse btn-cta" href="/hostel/">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Peace 