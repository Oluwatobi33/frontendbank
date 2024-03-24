import React from 'react'
import { useState } from "react"
import * as yup from "yup"
import { Link } from 'react-router-dom'
import Background from './Background'
import img1 from "../assest/image/lo.png"
// import Signup  from './Signup'
import { useNavigate } from "react-router-dom";
import Dashboard from './Dashboard'
import { useFormik, validateYupSchema } from 'formik'
import NavBar from './NavBar'
import axios from "axios";
import { baseurl } from "./Endpoint";
// let emmanuel = JSON.parse(localStorage.getItem("Interswitch"))
// console.log(emmanuel);
const Signin = () => {
    const Navigate = useNavigate()
    // const [email, setemail] = useState("")
    // const [password, setpassword] = useState("")
    const [userLogin, setuserLogin] = useState([])
    const [success, setsuccess] = useState("")
    const [Error, setError] = useState("")
    const [loader, setloader] = useState(false)
    const [isloading, setisLoading] = useState(false)
    const [value, setvalue] = useState("")
    // const [Error, setError] = useState("")
    const formik = useFormik({
        initialValues: {
            Email: "",
            Password: ""
        },
        onSubmit: (values) => {
            setisLoading(true)
            axios.post(`${baseurl}signin`, values).then((data) => {
                if (data) {
                    console.log(data);
                    let Err = data.data.message;
                    if (Err == "Email not found") {
                        setvalue(Err)
                        setisLoading(false)
                    } else if (Err == "Invaild password") {
                        setvalue(Err)
                        setisLoading(false)
                        setError("Invalid Password")
                    } else {
                        if (Err == "Token generated") {
                            localStorage.token = data.data.token;
                            // console.log(token);
                            setloader(false)
                            console.log(data.data.token);
                            Navigate('/Dashboard')
                        }
                    }
                } else {
                    Navigate("/Signup")
                }
            })
        },
        validationSchema: yup.object({
            Email: yup.string()
                .required("This is field is required").email("must be a valid Email"),
            Password: yup.string()
                .required("This is field is required")
        })
    })
    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-7 mt-5">
                        <h1 className="spg">Anchor University Accomodation</h1>
                        <div className="inot">
                            Important Notice
                        </div>
                        <hr />
                        <br />
                        <ul className="listpg">
                            <li>Registered users should login with their <b>Email Address</b></li>
                        </ul>
                    </div>
                    <div className="col-md-5 mt-5">
                        {/* <div className="auth-wrapper d-flex no-block justify-content-center align-items-center">
                            <div className="auth-box p-4 bg-white rounded m-0">
                                <div id="loginform"> */}

                        <div className="row">
                            {/* <div className="col-md-12"> */}
                            <h1>Sign In</h1>
                            <form method="post" className="form-horizontal mt-3 form-material" action="/auth/login-user" novalidate="" autocomplete="off">
                                <input type="hidden" name="csrfmiddlewaretoken" value="TbY1TwkoQCDlPjMN33LMxs5OWUnsBEMFUYlyR3IPDPOIRn90Hb2qMdB15Gg4VFE4" />
                                <div className="messages">
                                    {/* <div className="alert alert-sm alert-danger">
                                                        Your credentials do not match our records
                                                    </div> */}
                                </div>
                                <div className="form-group mb-3">
                                    <div className="col-md-12">
                                        <input type="text" className="form-control shadow-none w-100" placeholder="Email" name="username" value="" /> </div>
                                </div>
                                <div className="form-group mb-3">
                                    <div className="col-md-12">
                                        <input type="password" name="pw" className="form-control shadow-none w-100" placeholder="Password" /> </div>
                                </div>
                                <div className="form-group text-center mt-3">
                                    <div className="col-md-12">
                                        <button className="btn btn-info  btn-block text-uppercase waves-effect waves-light w-100 rounded rounded-1" type="submit">Log In</button>
                                    </div>
                                </div>
                                <p className="text-danger text-center"></p>
                                <div className="form-group">
                                    <div className="d-flex">
                                        <div className="checkbox checkbox-info float-left pt-0">
                                        </div>
                                        <div className="ml-auto mt-2">
                                            <a href="/auth/register" id="to-recover" className="float-start fp mx-5"><i className="fa fa-user mr-1"></i> Register Here</a>
                                        </div>
                                        <div className="ml-auto mt-2">
                                            <a href="javascript:void(0)" id="to-recover" className="float-right fp mx-5"><i className="fa fa-lock mr-1"></i> Forgot password?</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-0">
                                    <div className="col-sm-12 justify-content-center d-flex">
                                        <p> <a className="ish" href="https://helpdesk.aul.edu.ng/" target="_blank">Having Issues? visit the helpdesk</a></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin