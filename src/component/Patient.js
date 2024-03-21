import React from 'react'
const Patient = () => {
    return (
        <>
            <div className='container mt-5'>
                <div className="row">
                <h4 className='text-center'><b>  PATIENCE HOSTEL (Female)</b></h4>
                    <div className="col-md-4 ">
                        <div className="patient" data-aos="zoom-in">
                            {/* <img src="https://www.interswitchgroup.com/assets/images/consumer/ease-of-use.svg" className="img-responsive float-start" style={{ width: "4vw" }} alt="..." /> */}
                            <div className=" custom float-start">
                                <div className="price-figure">
                                    <span className="number">₦150,000</span>
                                </div>
                                <ul className="card-text list ">
                                    <li className='text-md-center'><i class="fa fa-check"></i>Charlet </li>
                                    <li className='text-md-center'><i class="fa fa-check"></i>4 bed spaces </li>
                                    <li className='text-md-center'><i class="fa fa-check"></i>Reading table, cabinet and chairs</li>
                                </ul>
                                <a className="btn btn-inverse btn-cta" href="/hostel/">Book Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="patient1" data-aos="zoom-in" >
                            {/* <img src="https://www.interswitchgroup.com/assets/images/consumer/friendly.svg" className="img-responsive float-start" style={{ width: "4vw" }} alt="..." /> */}
                            <div className="custom float-start">
                                <div className="price-figure">
                                    <span className="number">₦170,000</span>
                                </div>
                                <ul className="card-text list">
                                    <li className='text-md-center'><i class="fa fa-check"></i>Charle</li>
                                    <li className='text-md-center'><i class="fa fa-check"></i> 2 bed spaces </li>
                                    <li className='text-md-center'><i class="fa fa-check"></i>Reading table, cabinet and chairs</li>
                                </ul>
                                <a className="btn btn-inverse btn-cta" href="/hostel/">Book Now</a>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="patient2" data-aos="zoom-in">
                            {/* <img src="https://www.interswitchgroup.com/assets/images/consumer/secured.svg" className="img-responsive img-fluid float-start" style={{ width: "4vw" }} /> */}
                            <div className='custom float-start'>
                                <div className="price-figure">
                                    <span className="number">₦350,000</span>
                                </div>
                                <ul className="card-text list">
                                    <li className='text-md-center'><i class="fa fa-check"></i>Charle</li>
                                    <li className='text-md-center'><i class="fa fa-check"></i> 2 Bed Spaces (Executive)  </li>
                                    <li className='text-md-center'><i class="fa fa-check"></i> Reading table, cabinet and chairs</li>
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
export default Patient