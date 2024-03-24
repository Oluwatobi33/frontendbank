import React from "react";
import { Link, } from "react-router-dom";
import { useState } from "react";
import NavBar from "./NavBar";
import register from "../assest/image/register.webp"
import { useFormik } from "formik";
import * as yup from "yup"
import axios from "axios";
import { baseurl } from "./Endpoint";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const Navigate = useNavigate()
    // const [fullname, setfullname] = useState("")
    // const [email, setemail] = useState("")
    // const [password, setpassword] = useState(""
    // const [phoneNumber, setphoneNumber] = useState("")
    const [allUsers, setallUsers] = useState("")
    // const [success, setsuccess] = useState("")
    // const [sign, setsign] = useState("")
    const [isloading, setisLoading] = useState(false)
    const [Error, setError] = useState("")
    // const [err, seterr] = useState("")
    // const [history, sethistory] = useState([])
    // useEffect(() => {
    //     if (localStorage.Interswitch) {
    //         let inform = JSON.parse(localStorage.Interswitch)
    //         setallUsers(inform)
    //     } else {
    //         setallUsers([])
    //     }
    // }, [])
    // let BankDetails = {
    //     accno: `0210${Math.floor(Math.random() * 1000000)}`,
    //     cardno: `431${Math.floor(Math.random() * 100000000)}`,
    //     bvn: `356890${Math.floor(Math.random() * 1000000)}`,
    //     defaultMoney: `400 ${Math.floor(Math.random() * 100)}`
    // }
    let date = new Date().getDate()
    let month = new Date().getMonth()
    let year = new Date().getFullYear()
    let time = new Date().toLocaleTimeString();
    let DateCreated = `${(date)}-${(month)}-${(year)}-${(time)}`
    const formik = useFormik({
        initialValues: {
            Fullname: "",
            Email: "",
            Password: "",
            Pin: "",
            PhoneNumber: "",
            // cardno: `431${Math.floor(Math.random() * 100000000)}`,
            balance: 0,
            history: ""
        },
        onSubmit: (values) => {
            setisLoading(true)
            let userdata = { Fullname: values.Fullname, Email: values.Email, Password: values.Password, Pin: values.Pin, PhoneNumber: values.PhoneNumber, accountNumber: values.PhoneNumber, bvn: `${values.PhoneNumber}${Math.floor(Math.random() * 9)}`, balance: values.balance, DateCreated, history: values.history }
            // console.log(userdata);
            axios.post(`${baseurl}signup`, userdata).then((credentials) => {
                setisLoading(false)
                if (credentials) {
                    let Err = credentials.data.message
                    console.log(Err);
                    if (Err == "Email already used") {
                        setError("Email is used")
                    }
                    else if (Err == "Phone-Number already used") {
                        setError("Phone-Number is used")
                    } else {
                        Navigate('/Signin')
                    }

                }
            })
        },
        validationSchema: yup.object({
            Fullname: yup.string()
                .required("This is field is required").min(5, "Must have at least 5 character"),
            Email: yup.string()
                .required("This is field is required"),
            Password: yup.string()
                .required("This is field is required").min(5, "Must have at least 10 character"),
            Pin: yup.string()
                .required("This is field is required").max(4, "Must have 4 character"),
            PhoneNumber: yup.string()
                .required("This is field is required").min(10, "Must have at least 11 character")
        })

    })

    // const submit = () => {
    //     if (fullname !== "" && email !== "" && password !== "" && phoneNumber !== "") {
    //         let accno = `0210${Math.floor(Math.random() * 1000000)}`
    //         let cardno = `431${Math.floor(Math.random() * 100000000)}`
    //         let bvn = `356890${Math.floor(Math.random() * 1000000)}`
    //         let defaultMoney = `400 ${Math.floor(Math.random() * 100)}`
    //         let User = { fullname, email, password, phoneNumber, accno, cardno, bvn, defaultMoney, history }
    //         // let takeRandom = math
    //         setallUsers(() => {
    //             let applicant = [...allUsers, User]
    //             localStorage.tobi = JSON.stringify(applicant)
    //             Navigate('/Signin')
    //             return applicant
    //         })
    //     } else {
    //         let err = "Pls Enter the values of the input to register your account"
    //         seterr(err)
    //     }
    return (
        <>
            <NavBar />
            <form>
                <div className="container" style={{marginTop:"120px"}}>
                    <div className="row justify-content-center"  >
                        <div className="col-md-8 border border-3 mb-3">
                            <h2 className="text-center text-dark">Create New Account</h2>
                            <div className="row ">
                                <div className="col-md-4 py-3">
                                    <label for="firstName" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                                <div className="col-md-4 py-3">
                                    <label for="lastName" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                                <div className="col-md-4 py-3">
                                    <label for="lastName" className="form-label">Other name</label>
                                    <input type="text" className="form-control" id="other name" placeholder="" value="" required="" />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 py-3">
                                    <label for="country" className="form-label">Gender</label>
                                    <select className="form-select" id="country" required="">
                                        <option value="">Choose...</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                                <div className="col-md-6 py-3">
                                    <label for="country" className="form-label">User Type</label>
                                    <select className="form-select" id="country" required="">
                                        <option value="">Choose...</option>
                                        <option>Undergraduate</option>
                                        <option>Postraduate</option>
                                        <option>Topup</option>
                                        <option>Jupeb</option>
                                        <option>Others</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 py-3">
                                    <label for="email" className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 py-3">
                                    <label for="address" className="form-label">Application No</label>
                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                                </div>
                                <div className="col-md-12 py-3">
                                    <label for="address2" className="form-label">Matric No/Jupeb No</label>
                                    <input type="text" className="form-control" id="address2" />
                                </div>
                                <div className="col-md-12 py-3">
                                    <label for="address2" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="address2" />
                                </div>
                                <div className="col-md-12 py-3">
                                    <label for="address2" className="form-label"> Re-enter Email</label>
                                    <input type="email" className="form-control" id="address2" />
                                </div>
                                <div className="col-md-12 py-3">
                                    <label for="address2" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="address2" />
                                </div>
                                <div className="col-md-12 py-3">
                                    <label for="address2" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="address2" />
                                </div>
                                <div className="col-md-12 py-3">
                                    <label for="address2" className="form-label">Current Level</label>
                                    <input type="password" className="form-control" id="address2" />
                                </div>
                                <center>
                                    <div className="btn-group col-md-6 container py-2">
                                        <button className="btn btn-primary active submitBtn shadow-none">Register</button>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </form >
        </>
    );
};
export default Signup;
