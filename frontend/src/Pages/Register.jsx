import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../CSS modules/register.css'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Register = () => {


    // from subit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, { name, email, password, phone, address });

            if(res.data.success){
                toast.success(res.data.message);
                navigate("/login")
            }else{
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong");
        }
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div>
                <section className="vh-60" style={{ backgroundColor: '#eee' }}>
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-12 col-xl-11" style={{ paddingTop: '40px' }}>
                                <div className="card text-black" style={{ borderRadius: '25px' }}>
                                    <div className="card-body p-md-5" >
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1" >

                                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 " >Sign up</p>

                                                <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="text" id="form3Example1c" onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' value={name} required className="form-control" />
                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="email" id="form3Example3c" onChange={(e) => setEmail(e.target.value)} placeholder='Your Email' value={email} required className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fa-solid fa-phone fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="text" id="form3Example4cd" required onChange={(e) => setPhone(e.target.value)} value={phone} placeholder='Your Phone number' className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fa-regular fa-address-card fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="text" id="form4Example4cd" required onChange={(e) => setAddress(e.target.value)} value={address} placeholder='Your Address' className="form-control" />
                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="password" id="form3Example4c" required onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Your Password' className="form-control" />
                                                        </div>
                                                    </div>




                                                    <div className="form-check d-flex justify-content-center mb-5">
                                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                        <label className="form-check-label" htmlFor="form2Example3">
                                                            I agree all statements in <a href="/" style={{ textDecoration: 'none' }}>Terms of service</a>
                                                        </label>
                                                    </div>

                                                    <div className="d-flex justify-content-between mx-4 mb-3 mb-lg-4">
                                                        <button type="submit" className="btn mybtn btn-lg">Register</button>
                                                        <Link to="/login"><button type="button" className="btn mybtn btn-lg">Login</button></Link>
                                                    </div>

                                                </form>

                                            </div>
                                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                    className="img-fluid" alt="Sample" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Register
