import React from 'react'
import anchor_logo_white from "../assest/image/anchor_logo_white.png"
function AnchorFooter() {
    return (
        <>
            <div className="contact-section mt-5">
                <div className="container text-center">
                    <img className=" mg-fluid section-title" src={anchor_logo_white} alt="AUL" style={{ height: "135px", maxWidth: "250px" }} />
                    <div className="contact-content">
                        <p> TELEPHONE: +2348151951950 , +2349061223042. </p>
                        <p> EMAIL: info@aul.edu.ng </p>
                    </div>
                </div>
            </div>
            <footer className="footer text-center">
                <div className="container">
                    <small className="copyright">
                        ICT Team - Anchor University © <script>document.write(new Date().getFullYear());</script>2023. All Rights reserved
                    </small>
                </div>
            </footer>
        </>
    )
}
export default AnchorFooter